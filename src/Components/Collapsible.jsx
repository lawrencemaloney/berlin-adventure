import React, { useState, useRef } from "react"

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false)
  const parentRef = useRef()

  // if (parentRef.current) console.log(parentRef.current)
  console.log(parentRef.style)

  // console.log(parentRef.current.scrollHeight)
  return (
    <>
      <span className="collapsible  cursor-pointer text-red-600 text-2xl w-[2px]   font-bold		">
        <div className="toggle " onClick={() => setIsOpen(!isOpen)}>
          {props.icon}
        </div>

        <div
          className="content-parent "
          ref={parentRef}
          style={
            isOpen
              ? {
                  height: parentRef.current.scrollHeight + 30 + "px",
                  display: "inline-block"
                  // width: 420 + "px"

                  // marginBottom: "10px",
                  // marginBottom: "15px"
                }
              : {
                  display: "none"
                }
          }
        >
          <div className="content mt-2 p-4 text-left w-full	 text-sm border border-4 rounded-sm border-red-600 leading-4 ">
            {props.children}
          </div>
        </div>
      </span>
    </>
  )
}

export default Collapsible
