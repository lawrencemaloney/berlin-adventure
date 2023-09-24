import React from "react"

export default function Popout({ visible, onClose, popData }) {
  if (!visible) return null
  return (
    <>
      <div className=" flex justify-center  items-center z-100">
        <div className=" rounded flex flex-col bg-black  bg-opacity-30 inset-0 para-fnote border-2 border-black">
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
