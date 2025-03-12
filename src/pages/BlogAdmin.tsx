
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Edit, Trash, Plus, Import } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlogHeader from "@/components/blog/BlogHeader";
import { blogPosts } from "@/data/blogPosts";
import { toast } from "sonner";
import NotionImporter from "@/components/blog/NotionImporter";
import BlogPostEditor from "@/components/blog/BlogPostEditor";

const BlogAdmin = () => {
  const [posts, setPosts] = useState([...blogPosts]);
  const [editingPost, setEditingPost] = useState<typeof blogPosts[0] | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [showImporter, setShowImporter] = useState(false);
  
  // For demo purposes, we'll use localStorage to persist changes
  useEffect(() => {
    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const savePosts = (updatedPosts: typeof blogPosts) => {
    setPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    toast.success("Blog posts updated successfully");
  };

  const handleDeletePost = (slug: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = posts.filter(post => post.slug !== slug);
      savePosts(updatedPosts);
    }
  };

  const handleSavePost = (post: typeof blogPosts[0], isNew = false) => {
    let updatedPosts;
    
    if (isNew) {
      updatedPosts = [...posts, post];
    } else {
      updatedPosts = posts.map(p => p.slug === post.slug ? post : p);
    }
    
    savePosts(updatedPosts);
    setEditingPost(null);
    setIsCreating(false);
  };

  const handleImportFromNotion = (importedPosts: typeof blogPosts) => {
    savePosts([...posts, ...importedPosts]);
    setShowImporter(false);
    toast.success(`Imported ${importedPosts.length} posts from Notion`);
  };

  return (
    <div className="min-h-screen pb-12">
      <BlogHeader />

      <div className="max-w-5xl mx-auto px-4 pt-20">
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button 
              onClick={() => setIsCreating(true)} 
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" /> New Post
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowImporter(true)}
              className="flex items-center gap-2"
            >
              <Import className="h-4 w-4" /> Import from Notion
            </Button>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-8">Blog Administration</h1>

        {editingPost && (
          <BlogPostEditor 
            post={editingPost} 
            onSave={(post) => handleSavePost(post)} 
            onCancel={() => setEditingPost(null)}
          />
        )}

        {isCreating && (
          <BlogPostEditor 
            onSave={(post) => handleSavePost(post, true)} 
            onCancel={() => setIsCreating(false)}
          />
        )}

        {showImporter && (
          <NotionImporter 
            onImport={handleImportFromNotion}
            onCancel={() => setShowImporter(false)}
          />
        )}

        {!editingPost && !isCreating && !showImporter && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Manage Posts</h2>
            
            {posts.length === 0 ? (
              <div className="text-center py-8 bg-muted rounded-lg">
                <p className="text-muted-foreground">No blog posts yet. Create your first post!</p>
              </div>
            ) : (
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left">Title</th>
                      <th className="px-4 py-3 text-left">Date</th>
                      <th className="px-4 py-3 text-left">Author</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post) => (
                      <tr key={post.slug} className="border-t">
                        <td className="px-4 py-3">
                          <Link 
                            to={`/blog/${post.slug}`} 
                            className="font-medium hover:underline"
                          >
                            {post.title}
                          </Link>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{post.date}</td>
                        <td className="px-4 py-3 text-muted-foreground">{post.author}</td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => setEditingPost(post)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleDeletePost(post.slug)}
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAdmin;
