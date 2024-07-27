import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="demo-sidebar">
      <p onClick={() => navigate("/")}>Reviews</p>
      <p onClick={() => navigate("/blogs")}>Blogs</p>
    </div>
  );
};

export default Sidebar;
