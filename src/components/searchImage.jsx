import React, { useState } from "react";
import axios from "axios";

async function imageSearchHandeler(message) {
  console.log(message);
  await axios
    .post("https://open-ai-image.codinghood.in/api/create-ai-image", {
      message: message,
      size: "lg",
      numberOfImages: 4,
      
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.error(e.response.data);
    });
  //   console.log(process.env.REACT_APP_SERVER_API);
}

export default function SearchImage() {
  const [search, setSearch] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setSearch(e.currentTarget.value)} />
      <button onClick={() => imageSearchHandeler(search)}>Search</button>
    </>
  );
}
