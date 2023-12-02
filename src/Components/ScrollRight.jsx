import React, { useRef } from "react"

function ScrollRightButton() {
  const ref = useRef(null)

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset
  }

  return (
    <button className="w-[30ox] h-[30px]" onClick={() => scroll(20)}>
      Scroll Right
    </button>
  )
}

export default ScrollRightButton
