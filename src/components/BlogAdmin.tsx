import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { BlogPost } from '@/types/blog';
import BlogPostForm from './BlogPostForm';
import NotionImport from './NotionImport';
import MediumImport from './MediumImport';
import { PlusCircle, Edit, Trash2, FileText, ExternalLink, BookOpen } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const BlogAdmin: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    if (typeof window !== 'undefined') {
      const storedPosts = localStorage.getItem('blogPosts');
      return storedPosts ? JSON.parse(storedPosts) : [];
    }
    return [];
  });
  const [open, setOpen] = useState(false);
  const [editPost, setEditPost] = useState<BlogPost | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  const handleDelete = (id: number) => {
    setBlogPosts(prev => prev.filter(post => post.id !== id));
    toast({
      title: "Post deleted",
      description: "The blog post has been successfully deleted.",
    });
  };

  const handleEdit = (post: BlogPost) => {
    setEditPost(post);
    setOpen(true);
  };

  const handleSubmit = (post: BlogPost) => {
    if (editPost) {
      // Update existing post
      setBlogPosts(prev =>
        prev.map(p => (p.id === editPost.id ? { ...post, id: editPost.id } : p))
      );
      toast({
        title: "Post updated",
        description: "The blog post has been successfully updated.",
      });
    } else {
      // Add new post
      setBlogPosts(prev => [...prev, { ...post, id: Date.now() }]);
      toast({
        title: "Post created",
        description: "The blog post has been successfully created.",
      });
    }
    setOpen(false);
    setEditPost(null);
  };

  const handleMediumImport = (importedPosts: BlogPost[]) => {
    setBlogPosts(prev => {
      // Check for duplicates by slug
      const existingSlugs = new Set(prev.map(post => post.slug));
      
      // Filter out posts with duplicate slugs
      const newPosts = importedPosts.filter(post => !existingSlugs.has(post.slug));
      
      if (newPosts.length !== importedPosts.length) {
        toast({
          title: "Some posts skipped",
          description: `${importedPosts.length - newPosts.length} posts were skipped because they already exist.`,
          variant: "warning"
        });
      }
      
      return [...prev, ...newPosts];
    });
  };

  return (
    <div className="container py-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Blog Administration</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle>Create New Blog Post</DialogTitle>
            </DialogHeader>
            <BlogPostForm onSubmit={handleSubmit} />
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="posts">
        <TabsList className="mb-4">
          <TabsTrigger value="posts" className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            Manage Posts
          </TabsTrigger>
          <TabsTrigger value="notion" className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            Import from Notion
          </TabsTrigger>
          <TabsTrigger value="medium" className="flex items-center gap-1">
            <ExternalLink className="h-4 w-4" />
            Import from Medium
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map(post => (
              <Card key={post.id}>
                <CardContent className="space-y-2">
                  <h2 className="text-lg font-semibold">{post.title}</h2>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <Button variant="secondary" size="sm" onClick={() => handleEdit(post)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(post.id)}>
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="notion">
          <Card>
            <CardContent className="pt-6">
              <NotionImport onImport={(post) => setBlogPosts(prev => [...prev, post])} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="medium">
          <Card>
            <CardContent className="pt-6">
              <MediumImport onImport={handleMediumImport} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BlogAdmin;
