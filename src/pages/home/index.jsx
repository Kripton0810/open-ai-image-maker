import React from "react"
import Typer from "../../components/typer"
import SearchImage from "../../components/searchBox"
import ImageViewer from "../../components/imageViewer"

export default function Home() {
  return (
    <div>
      <Typer />
      <SearchImage />
      <ImageViewer />
    </div>
  )
}
