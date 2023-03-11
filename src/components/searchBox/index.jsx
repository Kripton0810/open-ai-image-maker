import React, { useState } from "react"
import axios from "axios"
import "./index.scss"
import { useDispatch } from "react-redux"
import { apiSetter } from "../../reducers/imageApi.reducer"
let dispatch
async function imageSearchHandeler(message) {
  console.log(message)
  await axios
    .post("https://open-ai-image.codinghood.in/api/create-ai-image", {
      message: message,
      size: "lg",
      numberOfImages: 4,
    })
    .then((res) => {
      console.log(res.data)
      dispatch(apiSetter(res.data))
    })
    .catch((e) => {
      console.error(e.response.data)
    })
  // console.log(process.env.REACT_APP_SERVER_API);
}

export default function SearchImage() {
  dispatch = useDispatch()
  const [search, setSearch] = useState("")
  function formHandler(event) {
    event.preventDefault()
    imageSearchHandeler(search)
  }
  return (
    <form className="search-box" onSubmit={formHandler}>
      <input
        type="text"
        onChange={(e) => setSearch(e.currentTarget.value)}
        placeholder=" "
      />
      <button type="reset"></button>
    </form>
  )
}
