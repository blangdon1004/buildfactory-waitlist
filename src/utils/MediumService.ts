
import { BlogPost } from "@/types/blog";

export class MediumService {
  static async fetchUserFeed(username: string): Promise<{ success: boolean; data?: BlogPost[]; error?: string }> {
    if (!username) {
      return { success: false, error: "Username is required" };
    }

    try {
      // Medium RSS feed URL
      const mediumRssUrl = `https://medium.com/feed/@${username.replace('@', '')}`;
      
      // Use a CORS proxy to access the RSS feed
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(mediumRssUrl)}`;
      
      const response = await fetch(proxyUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch Medium feed: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (!data.contents) {
        return { success: false, error: "No content found in response" };
      }
      
      // Parse the XML content
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data.contents, "text/xml");
      
      // Check if there's an error in the XML
      const parseError = xmlDoc.querySelector("parsererror");
      if (parseError) {
        return { success: false, error: "Failed to parse XML content" };
      }
      
      // Get all items from the feed
      const items = xmlDoc.querySelectorAll("item");
      
      if (items.length === 0) {
        return { success: false, error: "No posts found for this username" };
      }
      
      // Convert items to BlogPost format
      const posts: BlogPost[] = Array.from(items).map((item, index) => {
        // Get content
        const contentEncoded = item.querySelector("content\\:encoded")?.textContent || "";
        
        // Extract the first image URL from the content if available
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = contentEncoded;
        const firstImg = tempDiv.querySelector("img");
        const imageUrl = firstImg?.src || "/placeholder.svg";
        
        // Extract the publication date
        const pubDate = item.querySelector("pubDate")?.textContent || new Date().toISOString();
        
        // Generate a unique slug from the title
        const title = item.querySelector("title")?.textContent || `Medium Post ${index + 1}`;
        const slug = title
          .toLowerCase()
          .replace(/[^\w\s]/gi, '')
          .replace(/\s+/g, '-');
        
        // Extract a short excerpt
        const description = item.querySelector("description")?.textContent || "";
        const excerpt = description.substring(0, 150) + "...";
        
        return {
          id: Date.now() + index,
          title,
          slug,
          date: new Date(pubDate).toISOString().split('T')[0],
          author: username,
          excerpt,
          imageUrl,
          content: contentEncoded,
          source: "medium"
        };
      });
      
      return { success: true, data: posts };
    } catch (error) {
      console.error("Error fetching Medium feed:", error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Failed to fetch Medium posts" 
      };
    }
  }
}
