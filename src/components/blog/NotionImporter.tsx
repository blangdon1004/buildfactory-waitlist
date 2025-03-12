
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
      // In a real implementation, we would make an API call to a backend service
      // that would scrape the Notion page and convert it to our blog post format.
      // For this demo, we'll simulate a successful import after a short delay.
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create a demo post based on the URL
      const pageName = notionUrl.split("/").pop() || "notion-import";
      const demoPost = {
        title: "Imported from Notion: " + pageName,
        slug: "imported-" + pageName.toLowerCase().replace(/[^\w]+/g, "-"),
        date: new Date().toISOString().split("T")[0],
        author: "Imported via Notion",
        excerpt: "This post was imported from a public Notion page.",
        imageUrl: "",
        content: `
          <p>This is a placeholder for content that would be imported from the Notion page at: ${notionUrl}</p>
          <p>In a real implementation, we would parse the Notion page content and convert it to HTML.</p>
        `
      };
      
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
