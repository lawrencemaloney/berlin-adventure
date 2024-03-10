import React from "react"

export default function Popout({ visible, onClose, popData }) {
  if (!visible) return null
  return (
    <>
      <div className=" flex justify-center  items-center z-100">
        <div className=" rounded flex flex-col bg-black  bg-opacity-30 inset-0 mx-auto   p-2 w-[calc(100%-40px)] max-w-[600px]  text-sm	text-black  font- border-2 border-black">
          <p>{popData}</p>
          <button
            onClick={onClose}
            className="cursor-pointer hover:text-fuchsia-600 "
          >
            (Close)
          </button>
        </div>
      </div>
    </>
  )
}
