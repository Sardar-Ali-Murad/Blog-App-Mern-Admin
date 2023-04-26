import React from "react";
import "./index.css";
import calender from "../../assets/calender.png";
import time from "../../assets/time.png";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { BACK_END_URL } from "../../utils";

const Trending = ({ blogs, start }) => {
  let token = JSON.parse(localStorage.getItem("token"));
  const blogAction = async (action, id) => {
    try {
      await axios.get(`${BACK_END_URL}/blog/admin/${action}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      start();
    } catch (error) {
      console.log(error?.response?.data?.msg);
    }
  };
  return (
    <div className="trendingMain">
      <div className="trendingText">
        <div className="trendingGrid">
          {blogs?.map((item, i) => {
            return (
              <div className="trendingContainer" key={i}>
                <Link
                  to={`/home/blog/${item?._id}`}
                  style={{ listStyle: "none", textDecoration: "none" }}
                >
                  <div className="mainImageWrapper">
                    <img src={item?.posterImage} className="mainImage" />
                  </div>
                </Link>
                <div className="blogBtns">
                  <a className="trendingHead">{item?.title}</a>
                  <div className="blogButtonsFlex">
                    <button
                      className="acceptBtn"
                      onClick={() => blogAction("approveBlog", item?._id)}
                    >
                      Accept
                    </button>
                    <button
                      className="rejectBtn"
                      onClick={() => blogAction("rejectBlog", item?._id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
                <div className="trendingFlex">
                  <img
                    src={item?.writer?.photo}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                  <p>{item?.writer?.name}</p>
                </div>
                <div className="trendingTime">
                  <img src={calender} />
                  <p> {moment(item?.createdAt).format("DD/MM/YYYY")}</p>
                  <img src={time} />
                  <p>3 min to read</p>
                </div>
                <p className="trendingEnd">{item?.subTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trending;
