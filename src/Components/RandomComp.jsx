// import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

const RandomComp = () => {
  useEffect(() => {
    // const someFunc = () => {
    //   //some logic
    // }

    // window.addEventListener("touchstart", (e) => {
    //   console.log(e)
    // })
    // window.addEventListener("touchmove", (e) => {
    //   console.log(e)
    // })
    // window.addEventListener("touchend", (e) => {
    //   console.log(e)
    // })
    window.addEventListener("touchstart", (e) => this.touchStart(e))
    window.addEventListener("touchmove", (e) => this.touchMove(e))
    window.addEventListener("touchend", (e) => this.touchEnd(e))
  }, [])
  return (
    <h1 className="text-[32px] flex justify-center">Hello</h1>
    // { touchStart (e) {console.log(e)}}
  )
}

export default RandomComp
