
import React, { useState } from 'react';
import { MediumService } from '@/utils/MediumService';
import { BlogPost } from '@/types/blog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

interface MediumImportProps {
  onImport: (posts: BlogPost[]) => void;
}

const MediumImport: React.FC<MediumImportProps> = ({ onImport }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<Set<number>>(new Set());
  const { toast } = useToast();

  const handleFetch = async () => {
    if (!username) {
      toast({
        title: "Username required",
        description: "Please enter a Medium username",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const result = await MediumService.fetchUserFeed(username);
      
      if (result.success && result.data) {
        setPosts(result.data);
        // Pre-select all posts
        setSelectedPosts(new Set(result.data.map(post => post.id)));
        toast({
          title: "Success",
          description: `Found ${result.data.length} posts from ${username}`,
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to fetch Medium posts",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error in fetch handler:", error);
      toast({
        title: "Error",
        description: "Failed to fetch Medium posts",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const togglePost = (id: number) => {
    setSelectedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleAll = () => {
    if (selectedPosts.size === posts.length) {
      setSelectedPosts(new Set());
    } else {
      setSelectedPosts(new Set(posts.map(post => post.id)));
    }
  };

  const handleImport = () => {
    const postsToImport = posts.filter(post => selectedPosts.has(post.id));
    if (postsToImport.length === 0) {
      toast({
        title: "No posts selected",
        description: "Please select at least one post to import",
        variant: "destructive"
      });
      return;
    }
    
    onImport(postsToImport);
    toast({
      title: "Import successful",
      description: `Imported ${postsToImport.length} posts from Medium`,
    });
    setPosts([]);
    setSelectedPosts(new Set());
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Import from Medium</h3>
        <p className="text-sm text-muted-foreground">
          Enter a Medium username (e.g., "jake") to import their latest posts
        </p>
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Enter Medium username (without @)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleFetch} disabled={loading}>
          {loading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
          Fetch Posts
        </Button>
      </div>

      {posts.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Available Posts ({posts.length})</h4>
            <Button variant="outline" size="sm" onClick={toggleAll}>
              {selectedPosts.size === posts.length ? "Deselect All" : "Select All"}
            </Button>
          </div>

          <div className="border rounded-md divide-y max-h-80 overflow-y-auto">
            {posts.map((post) => (
              <div key={post.id} className="flex items-start gap-3 p-3 hover:bg-muted/50">
                <Checkbox
                  id={`post-${post.id}`}
                  checked={selectedPosts.has(post.id)}
                  onCheckedChange={() => togglePost(post.id)}
                />
                <div className="flex-1 min-w-0">
                  <label 
                    htmlFor={`post-${post.id}`}
                    className="font-medium cursor-pointer hover:underline"
                  >
                    {post.title}
                  </label>
                  <p className="text-sm text-muted-foreground truncate">{post.excerpt}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {post.date} • {post.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button onClick={handleImport} disabled={selectedPosts.size === 0}>
            Import Selected ({selectedPosts.size})
          </Button>
        </div>
      )}

      <div className="text-xs text-muted-foreground mt-2">
        <p>Note: Medium limits RSS feeds to the 10 most recent posts.</p>
      </div>
    </div>
  );
};

export default MediumImport;
