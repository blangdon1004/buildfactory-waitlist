
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { blogPosts } from "@/data/blogPosts";
import { toast } from "sonner";

interface BlogPostEditorProps {
  post?: typeof blogPosts[0];
  onSave: (post: typeof blogPosts[0]) => void;
  onCancel: () => void;
}

const BlogPostEditor = ({ post, onSave, onCancel }: BlogPostEditorProps) => {
  const [title, setTitle] = useState(post?.title || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [date, setDate] = useState(post?.date || new Date().toISOString().split('T')[0]);
  const [author, setAuthor] = useState(post?.author || "BuildFactory Team");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [imageUrl, setImageUrl] = useState(post?.imageUrl || "");
  const [content, setContent] = useState(post?.content || "");

  const generateSlug = () => {
    const slugified = title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
    setSlug(slugified);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !slug || !date || !author || !excerpt || !content) {
      toast.error("Please fill all required fields");
      return;
    }
    
    onSave({
      title,
      slug,
      date,
      author,
      excerpt,
      imageUrl,
      content
    });
  };

  return (
    <div className="bg-card border rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-6">
        {post ? "Edit Post" : "Create New Post"}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => !slug && generateSlug()}
              placeholder="Post title"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="slug">Slug *</Label>
            <div className="flex gap-2">
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="post-url-slug"
                required
              />
              <Button 
                type="button" 
                variant="outline" 
                onClick={generateSlug}
              >
                Generate
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="date">Date *</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="author">Author *</Label>
            <Input
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author name"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="imageUrl">Featured Image URL</Label>
          <Input
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
          />
          {imageUrl && (
            <div className="mt-2 rounded-md overflow-hidden w-40 h-28">
              <img 
                src={imageUrl} 
                alt="Preview" 
                className="w-full h-full object-cover"
                onError={() => toast.error("Image failed to load")}
              />
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="excerpt">Excerpt *</Label>
          <textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Brief summary of the post"
            className="flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="content">Content *</Label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="HTML content of the post"
            className="flex h-80 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono"
            required
          />
        </div>
        
        <div className="flex justify-end gap-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button type="submit">
            {post ? "Update Post" : "Create Post"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostEditor;
