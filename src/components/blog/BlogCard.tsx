
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

interface BlogCardProps {
  post: typeof blogPosts[0];
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow hover-scale">
      {post.imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-xl font-semibold">{post.title}</h3>
        
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-3.5 w-3.5" />
            <span>{post.author}</span>
          </div>
        </div>
        
        <p className="py-4 text-muted-foreground line-clamp-3">{post.excerpt}</p>
        
        <Button asChild variant="ghost" className="mt-2 justify-start gap-1 px-0">
          <Link to={`/blog/${post.slug}`}>
            Read more <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
