import React, { useState } from "react"
import axios from "axios"
import "./index.scss"
import "./index.css"
import { useDispatch } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { apiErrorSetter, apiSetter } from "../../reducers/imageApi.reducer"
import {
  isFirstSetter,
  isLoadingSetterOff,
  isLoadingSetterOn,
} from "../../reducers/loadingApi.reducer"
let dispatch
const notifyError = (data) => toast.error(data)

async function imageSearchHandeler(message, size, items) {
  dispatch(isLoadingSetterOn())
  dispatch(isFirstSetter())
  dispatch(apiSetter(null))
  await axios
    .post("https://open-ai-image.codinghood.in/api/create-ai-image", {
      message: message,
      size: size,
      numberOfImages: items,
    })
    .then((res) => {
      console.log(res.data)
      dispatch(apiSetter(res.data))
      dispatch(isLoadingSetterOff())
    })
    .catch((e) => {
      if (e.response.data.message && e.response.data.isArray === true) {
        e.response.data.message.forEach((element) => {
          notifyError(element)
        })
      } else if (e.response.data.message && e.response.data.isArray === false) {
        notifyError(e.response.data.message)
      } else {
        notifyError("System Error")
      }
      console.error(e.response.data)
      dispatch(isLoadingSetterOff())
      dispatch(apiErrorSetter(e.response.data))
    })
  // console.log(process.env.REACT_APP_SERVER_API);
}

export default function SearchImage() {
  dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const [size, setSize] = useState("sm")
  const [items, setItemsCount] = useState(1)
  function formHandler(event) {
    event.preventDefault()
    imageSearchHandeler(search, size, items)
  }
  return (
    <>
      <form onSubmit={formHandler}>
        <div className="search-box">
          <input
            type="text"
            onChange={(e) => setSearch(e.currentTarget.value)}
            placeholder=" "
          />
          <button type="reset" onClick={() => setSearch("")}></button>
        </div>
        <br />
        <div className="container">
          <div className="selector">
            <div className="selecotr-item">
              <input
                type="radio"
                id="radio1"
                name="size"
                className="selector-item_radio"
                checked={size === "sm"}
                onChange={() => setSize("sm")}
              />
              <label htmlFor="radio1" className="selector-item_label">
                Small
              </label>
            </div>
            <div className="selecotr-item">
              <input
                type="radio"
                id="radio2"
                name="size"
                className="selector-item_radio"
                checked={size === "m"}
                onChange={() => setSize("m")}
              />
              <label htmlFor="radio2" className="selector-item_label">
                Medium
              </label>
            </div>
            <div className="selecotr-item">
              <input
                type="radio"
                id="radio3"
                name="size"
                className="selector-item_radio"
                checked={size === "lg"}
                onChange={() => setSize("lg")}
              />
              <label htmlFor="radio3" className="selector-item_label">
                Large
              </label>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <span
            className="minus"
            onClick={() => {
              if (items === 1) {
                toast.error("Minimum 1 image is required")
                return
              }
              setItemsCount(items - 1)
            }}
          >
            -
          </span>
          <span className="num">{items < 10 ? "0" + items : items}</span>
          <span
            className="plus"
            onClick={() => {
              if (items === 10) {
                toast.error("Maximum 10 images is possible")
                return
              }
              setItemsCount(items + 1)
            }}
          >
            +
          </span>
        </div>
      </form>
      <ToastContainer />
    </>
  )
}
