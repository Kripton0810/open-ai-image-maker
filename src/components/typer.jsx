import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function Typer() {
  return (
    <>
      <div
        style={{
          fontFamily: "Book Antiqua",
          fontSize: "5rem",
          color: "white",
        }}
      >
        <TypeAnimation
          sequence={[
            "Search your Imagination",
            1000,
            "Search your Likeness",
            1000,
            "Search your Portrayal",
            1000,
          ]}
          speed={30}
          wrapper="span"
          repeat={Infinity}
        />
      </div>
    </>
  )
}
