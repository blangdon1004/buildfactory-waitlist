
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Header with Logo */}
      <BlogHeader />

      {/* Blog Hero Section */}
      <section className="py-12 md:py-20 mt-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">BuildFactory Blog</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              The latest news, updates, and insights from the BuildFactory team
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-16 container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
        
        {blogPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-4">No blog posts yet</h3>
            <p className="text-muted-foreground mb-6">Check back soon for updates!</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Want to learn more?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our community to stay updated with all the latest news and developments
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button asChild className="bg-[#488bfb]">
              <Link to="/" className="flex items-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
