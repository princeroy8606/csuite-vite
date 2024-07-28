import React from "react";
import BlogCard from "./Blog/BlogCard";

const BlogList = () => {
  return (
    <div className="blogs-cnt">
      <div className="bloglist-cover">
        <div className="thoughts-cnt">
          <input
            type="text"
            className="thoughts-input"
            placeholder="Share your thoughts.."
          />
          <div className="add-btn"></div>
        </div>
        <div className="blog-list-cnt">
          <BlogCard />
        </div>
      </div>
      <div className="widget-cnt">
        
      </div>
    </div>
  );
};

export default BlogList;
