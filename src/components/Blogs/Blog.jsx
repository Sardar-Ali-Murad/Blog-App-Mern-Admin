import React from "react";
import "./index.css";
import axios from "axios";
import { BACK_END_URL } from "../../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogContent = ({ blog }) => {
  function htmlDecode(content) {
    let e = document.createElement("div");
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  let token = JSON.parse(localStorage.getItem("token"));
  const blogAction = async (action, id) => {
    try {
      await axios.get(`${BACK_END_URL}/blog/admin/${action}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(action==="approveBlog"){
        toast.success("Blog Approved Successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if(action==="rejectBlog"){
        toast.success("Blog Rejected Successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.success(error?.response?.data?.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="blogContentMain">
      <ToastContainer/>
      <div className="blogBtns">
        <h1 className="blogContentHeading" style={{ color: "#FAF9F6" }}>
          {blog?.title}
        </h1>
        <div className="blogButtonsFlex">
          <button
            className="acceptBtn"
            onClick={() => blogAction("approveBlog", blog?._id)}
          >
            Accept
          </button>
          <button
            className="rejectBtn"
            onClick={() => blogAction("rejectBlog", blog?._id)}
          >
            Reject
          </button>
        </div>
      </div>
      <section
        dangerouslySetInnerHTML={{
          __html: htmlDecode(blog?.description),
        }}
        className="SearchResult-body BlogContentMain BlogContentMainDangerousHTML"
      />
    </div>
  );
};

export default BlogContent;
