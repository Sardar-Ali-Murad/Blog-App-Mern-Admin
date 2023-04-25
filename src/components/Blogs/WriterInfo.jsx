import React from "react";
import "./index.css";
import { SlCalender } from "react-icons/sl";
import { BiCircle } from "react-icons/bi";

import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import moment from "moment";


const BlogWriterLeftIntro = ({blog}) => {


  return (
    <div className="blogsWriterLeftIntroMain">
      {/*  */}
      <div>
        {/*  */}
        <div className="blogWriterLeftIntroFlex">
            <img
              src={blog?.writer?.photo}
              style={{ height: "70px", width: "70px", borderRadius: "50%",marginRight:"20px" }}
            />
          <div>
            <h1 className="writerName">
              {blog?.writer?.name}
            </h1>
            <div className="singleBlogFlex">
              <SlCalender  />
              <p >
                {" "}
                {moment(blog?.createdAt).format("DD/MM/YYYY")}
              </p>
              <div className="blogLine"></div>
              <BiCircle  />
              <p >3 Min To read</p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="blogIconsMain">
        <CiTwitter className="blogIcons" />
        <CiFacebook className="blogIcons" />
        <AiOutlineLinkedin className="blogIcons" />
        <BiLinkAlt className="blogIcons" />
      </div>
    </div>
  );
};

export default BlogWriterLeftIntro;
