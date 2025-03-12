
import { Link } from "react-router-dom";

const BlogHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-50">
      <div className="container h-full flex items-center justify-between">
        <Link to="/">
          <img src="/lovable-uploads/2ce219f4-ccff-4e6b-ad09-3454e4dff9b7.png" alt="BuildFactory Logo" className="h-24 w-auto" />
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
