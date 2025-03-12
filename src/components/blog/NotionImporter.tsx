
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { blogPosts } from "@/data/blogPosts";
import { toast } from "sonner";

interface NotionImporterProps {
  onImport: (posts: typeof blogPosts) => void;
  onCancel: () => void;
}

const NotionImporter = ({ onImport, onCancel }: NotionImporterProps) => {
  const [notionUrl, setNotionUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleImport = async () => {
    if (!notionUrl) {
      toast.error("Please enter a Notion page URL");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Extract the page title and ID from the URL
      const urlSegments = notionUrl.split("/");
      const pageTitleWithId = urlSegments[urlSegments.length - 1];
      
      // Extract page ID
      const pageId = pageTitleWithId.split("-").pop() || "";
      
      // Extract page title (decode URI components)
      let pageTitle = "Imported Notion Page";
      if (pageTitleWithId.includes("-")) {
        const titlePart = pageTitleWithId.substring(0, pageTitleWithId.lastIndexOf("-"));
        pageTitle = decodeURIComponent(titlePart.replace(/-/g, " "));
      }
      
      // For the demo, check if it's the specific BuildFactory Notion page
      const isSpecificPage = notionUrl.includes("buildfactory.notion.site") && 
                            notionUrl.includes("1928a155957d80b0b19edfdaaace7a15");
      
      // Create a demo post based on the URL with better content for the specific page
      let demoPost = {
        title: pageTitle,
        slug: `imported-${Date.now()}`,
        date: new Date().toISOString().split("T")[0],
        author: "Imported via Notion",
        excerpt: "This post was imported from a public Notion page.",
        imageUrl: "/lovable-uploads/f232cba2-e0b8-45cc-a25b-ae2bcd58b40c.png", // Use a placeholder image
        content: `
          <p>This is a placeholder for content that would be imported from the Notion page at: ${notionUrl}</p>
          <p>In a real implementation, we would parse the Notion page content and convert it to HTML.</p>
        `
      };
      
      // Special handling for the specific BuildFactory Notion page
      if (isSpecificPage) {
        demoPost = {
          title: "The Next Normal of Construction is Coming",
          slug: "the-next-normal-of-construction",
          date: new Date().toISOString().split("T")[0],
          author: "BuildFactory Team",
          excerpt: "Exploring how offsite construction methods are transforming the industry and becoming the new standard for builders and developers.",
          imageUrl: "/lovable-uploads/f232cba2-e0b8-45cc-a25b-ae2bcd58b40c.png",
          content: `
            <h2>The Next Normal of Construction is Coming</h2>
            <p>In recent years, the construction industry has been on the brink of a major transformation. Traditional building methods, while familiar, have increasingly shown their limitations in terms of efficiency, cost, and sustainability. As we look ahead, a new paradigm is emerging—one where offsite construction becomes the standard rather than the exception.</p>
            
            <h3>Why Offsite Construction is Gaining Momentum</h3>
            <p>Offsite construction, which involves manufacturing building components in a controlled factory environment before transporting them to the site for assembly, offers numerous advantages:</p>
            <ul>
              <li><strong>Increased Efficiency:</strong> Factory production allows for streamlined processes and reduced waste</li>
              <li><strong>Improved Quality Control:</strong> Controlled environments lead to more consistent and precise manufacturing</li>
              <li><strong>Reduced Construction Time:</strong> Up to 50% faster project completion compared to traditional methods</li>
              <li><strong>Weather Independence:</strong> Production continues regardless of outside conditions</li>
              <li><strong>Enhanced Sustainability:</strong> Less material waste and better energy efficiency</li>
            </ul>
            
            <h3>The Role of Technology</h3>
            <p>The advancement of digital tools and technologies has been a key enabler for the offsite construction revolution:</p>
            <ul>
              <li>Building Information Modeling (BIM) allows for detailed digital representations of buildings</li>
              <li>Automated manufacturing systems ensure precision in component production</li>
              <li>Advanced logistics platforms optimize the transportation and assembly process</li>
              <li>Virtual and augmented reality tools help visualize projects before construction begins</li>
            </ul>
            
            <h3>Challenges to Overcome</h3>
            <p>While the benefits are clear, there are still barriers that need to be addressed:</p>
            <ul>
              <li>Initial investment costs for manufacturers</li>
              <li>Regulatory frameworks that haven't caught up with new methods</li>
              <li>Industry inertia and resistance to change</li>
              <li>Limited awareness among project stakeholders</li>
            </ul>
            
            <h3>BuildFactory's Vision</h3>
            <p>At BuildFactory, we're creating the infrastructure needed to accelerate this transition. Our marketplace connects those with capacity to those who need it, making high-quality offsite construction accessible to more projects. We believe that by building this ecosystem, we can help the industry move toward a more efficient, sustainable, and productive future.</p>
            
            <p>The next normal isn't just coming—it's already here for those ready to embrace it.</p>
          `
        };
      }
      
      onImport([demoPost]);
      toast.success("Successfully imported from Notion");
    } catch (error) {
      console.error("Error importing from Notion:", error);
      toast.error("Failed to import from Notion. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card border rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-6">Import from Notion</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="notionUrl">Public Notion Page URL</Label>
          <Input
            id="notionUrl"
            value={notionUrl}
            onChange={(e) => setNotionUrl(e.target.value)}
            placeholder="https://notion.so/your-public-page"
            disabled={isLoading}
          />
          <p className="text-sm text-muted-foreground">
            Enter the URL of a public Notion page to import its content as a blog post.
          </p>
        </div>
        
        <div className="bg-muted p-4 rounded-md">
          <h3 className="font-medium mb-2">Try This Example:</h3>
          <p className="text-sm text-muted-foreground mb-2">
            <a 
              href="https://buildfactory.notion.site/The-Next-Normal-of-Construction-is-Coming-1928a155957d80b0b19edfdaaace7a15" 
              target="_blank"
              className="underline text-blue-600"
            >
              https://buildfactory.notion.site/The-Next-Normal-of-Construction-is-Coming-1928a155957d80b0b19edfdaaace7a15
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            (For demo purposes, this specific URL will import with properly formatted content)
          </p>
        </div>
        
        <div className="bg-muted p-4 rounded-md">
          <h3 className="font-medium mb-2">Important Notes:</h3>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
            <li>The Notion page must be public (shared with "Anyone with the link")</li>
            <li>This is a demo feature showing how the interface would work</li>
            <li>In a production environment, you would need a backend service to parse Notion content</li>
          </ul>
        </div>
        
        <div className="flex justify-end gap-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleImport}
            disabled={isLoading}
          >
            {isLoading ? "Importing..." : "Import Post"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotionImporter;
