import axios from "axios";
import React from "react";
import { BACK_END_URL } from "../../utils";
import Loader from "../Loader/index";

const index = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  let [loading, setLoading] = React.useState(true);
  let [contacts, setContacts] = React.useState([]);
  React.useEffect(() => {
    const start = async () => {
      setLoading(true);
      try {
        let { data } = await axios.get(`${BACK_END_URL}/contact`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setContacts(data?.Contacts);
      } catch (error) {
        console.log(error?.response?.data?.msg);
      }
      setLoading(false);
    };
    start();
  }, []);

  if (loading) {
    return <Loader loaderValue={loading} />;
  }
  return (
    <div className="writersGrids">
      {contacts?.map((contact, i) => {
        return (
          <div className="writerBox" key={i}>
            <p>{contact?.name}</p>
            <p>{contact?.email}</p>
            <p>{contact?.contact}</p>
            <p>{contact?.message}</p>
            <p>{contact?.reason}</p>
          </div>
        );
      })}
    </div>
  );
};

export default index;
