import React, { useRef, useState } from "react";
import Editor from "./Editor";
import Sidebar from "../Sidebar";
import "./blogs.css";
import BlogInput from "./BlogInput";
import Quill from "quill";
import "quill/dist/quill.core.css";

const Blogs = () => {
  const [iscurrentFocus, setIscurrentFocus] = useState(null);
  const [newBlogdata, setNewBlogdata] = useState({
    title: "",
    author: "",
    category: "",
    subCategory: "",
    tags: "",
    status: "",
    description: "",
    image: null,
  });

  console.log(iscurrentFocus, newBlogdata);

  const [lastChange, setLastChange] = useState();
  const Delta = Quill.import("delta");
  const quillRef = useRef();

  return (
    <div className="reviews-page">
      <Sidebar />
      <div className="reviews-cnt">
        <div className="demo-top-component"></div>
        <div className="reviews">
          <h2 className="reviews-title">Blogs</h2>
          <div className="create-blog-cnt">
            <div className="blog-details-cnt">
              <BlogInput
                currentFocus={iscurrentFocus}
                setcurrentFocus={(label) => setIscurrentFocus(label)}
                updateValue={(value) =>
                  setNewBlogdata({ ...newBlogdata, title: value })
                }
                value={newBlogdata.title}
                label="title"
                placeholder={"Blog Title"}
              />

              <BlogInput
                currentFocus={iscurrentFocus}
                setcurrentFocus={(label) => setIscurrentFocus(label)}
                updateValue={(value) =>
                  setNewBlogdata({ ...newBlogdata, author: value })
                }
                value={newBlogdata.author}
                label="author"
                placeholder={"Author Name"}
              />

              <BlogInput
                currentFocus={iscurrentFocus}
                setcurrentFocus={(label) => setIscurrentFocus(label)}
                updateValue={(value) =>
                  setNewBlogdata({ ...newBlogdata, category: value })
                }
                value={newBlogdata.category}
                label="category"
                placeholder={"Blog Category"}
              />

              <BlogInput
                currentFocus={iscurrentFocus}
                setcurrentFocus={(label) => setIscurrentFocus(label)}
                updateValue={(value) =>
                  setNewBlogdata({ ...newBlogdata, subCategory: value })
                }
                value={newBlogdata.subCategory}
                label="subCategory"
                placeholder={"Blog Sub Category"}
              />

              <BlogInput
                currentFocus={iscurrentFocus}
                setcurrentFocus={(label) => setIscurrentFocus(label)}
                updateValue={(value) =>
                  setNewBlogdata({ ...newBlogdata, tags: value })
                }
                value={newBlogdata.tags}
                label="tags"
                placeholder={"Tags (separated with a comma)"}
              />
            </div>
            <div className="text-editor-cnt">
              <Editor
                ref={quillRef}
                onTextChange={(value) =>
                  setNewBlogdata({ ...newBlogdata, description: value })
                }
              />
            </div>
            {/* <div className="blog-short-input-cnt">
              <input
                type="text"
                value={value}
                className="blog-short-input"
                onFocus={() => setIscurrentFocus(image)}
                onChange={(e) => updateValue(e.target.value)}
              />
              <p
                className="input-placeholder"
                style={{
                  top: checkPlaceholderCondition() ? "-0.8rem" : null,
                }}
              >
                {placeholder}
                <span style={{ color: "red" }}> *</span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
