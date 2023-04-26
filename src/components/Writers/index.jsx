import axios from "axios";
import React from "react";
import { BACK_END_URL } from "../../utils";
import Loader from "../Loader/index";
import Writer from "./Writer";
import "./index.css";

const index = () => {
  let [writers, setWriters] = React.useState([]);
  let token = JSON.parse(localStorage.getItem("token"));
  let [loading, setLoading] = React.useState(true);
  const start = async () => {
    setLoading(true);
    try {
      let { data } = await axios.get(
        `${BACK_END_URL}/writer/admin/writersRequests`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setWriters(data.Writters);
    } catch (error) {
      console.log(error?.response?.data?.msg);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    start();
  }, []);

  if (loading) {
    return <Loader loaderValue={loading} />;
  }
  return (
    <div>
      <div className="writersGrids">
        {writers.map((writer) => {
          return <Writer writer={writer} start={start}  />;
        })}
      </div>
    </div>
  );
};

export default index;
