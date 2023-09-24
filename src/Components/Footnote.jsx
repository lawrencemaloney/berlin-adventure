import React, { useState } from "react"

const Footnote = ({ number, text }) => {
  const [isFootnoteVisible, setIsFootnoteVisible] = useState(false)

  const toggleFootnote = () => {
    setIsFootnoteVisible(!isFootnoteVisible)
  }

  return (
    <span className="relative inline-block   ">
      <button
        className=" text-black   -ml-1 mr-1  align-super text-xs  px-0.5 -py-1 focus:outline-none"
        onClick={toggleFootnote}
      >
        {number}
      </button>
      {isFootnoteVisible && (
        <span className="  mt-1 break-words mx-8 font-semibold flex flex-col bg-yellow-100 border-2 border-black p-1 rounded-lg shadow-lg text-sm">
          {text}

          <button
            onClick={toggleFootnote}
            className="cursor-pointer text-black pe-2 hover:text-fuchsia-600 "
          >
            (Close)
          </button>
        </span>
      )}
    </span>
  )
}

export default Footnote
