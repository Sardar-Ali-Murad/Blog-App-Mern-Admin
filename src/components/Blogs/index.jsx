import axios from "axios";
import React from "react";
import { BACK_END_URL } from "../../utils";
import Loader from "../Loader/index";
import Blogs from "./Blogs"

const index = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  let [loading, setLoading] = React.useState(true);
  let [blogs,setBlogs]=React.useState([])
    const start = async () => {
      setLoading(true);
      try {
        let { data } = await axios.get(
          `${BACK_END_URL}/blog/admin/getAllPendingBlogs`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        setBlogs(data?.pendingBlogs)
      } catch (error) {
        console.log(error?.response?.data?.msg);
      }
      setLoading(false);
    };

    React.useEffect(()=>{
      start()
    },[])


  if (loading) {
    return <Loader loaderValue={loading} />;
  }
  return <div>
       <Blogs blogs={blogs} start={start}/>
  </div>;
};

export default index;
