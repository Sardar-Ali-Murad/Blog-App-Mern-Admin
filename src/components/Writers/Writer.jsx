import React from "react";
import axios from "axios";
import { BACK_END_URL } from "../../utils";

const Writer = ({ writer, start }) => {
  let token = JSON.parse(localStorage.getItem("token"));
  const accept = async () => {
    try {
      await axios.get(
        `${BACK_END_URL}/writer/admin/approveWriter/${writer?._id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      start();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="writerBox">
      <p>{writer?.email}</p>
      <p>{writer?.name}</p>
      <p>{writer?.city}</p>
      <p>{writer?.contactNumber}</p>
      <p>{writer?.country}</p>
      <p>{writer?.designation}</p>
      <p>{writer?.purpose}</p>
      <div className="btns">
        <button className="accept" onClick={accept}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default Writer;
