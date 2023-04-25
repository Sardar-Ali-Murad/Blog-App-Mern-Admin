import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/index";
import axios from "axios";
import { BACK_END_URL } from "../../utils";
import Blog from "./Blog";
import WriterInfo from "./WriterInfo";

const SingleBlog = () => {
  let { blogId } = useParams();
  let [blog, setBlog] = React.useState([]);
  let [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    let start = async () => {
      setLoading(true);
      let { data } = await axios.get(
        `${BACK_END_URL}/blog/singleBlog/${blogId}`
      );
      setBlog(data?.Blog);
      setLoading(false);
    };
    start();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="singleBlogMainDiv">
      <WriterInfo blog={blog} />
      <Blog blog={blog} />
    </div>
  );
};

export default SingleBlog;
