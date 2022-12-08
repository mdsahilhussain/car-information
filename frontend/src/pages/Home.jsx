import React, { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  const [userinfo, setUserinfo] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/userInfo");
        const data = response.data;
        setUserinfo(data.userData);
      } catch (error) {
        console.log(error, "error hahi bhai");
      }
    };

    getData();
  }, []);
  return (
    <div>
      {userinfo?.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.avater} alt="avater" />
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
