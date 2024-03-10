import React, { useState } from "react"
import Slider from "../Components/Slider"
import images from "../Json Files/images.json"
// import './style.css'

// Whatever you render out in the Slider will be draggable 'slides'
function SliderApp() {
  // state should start with the index you want to start the slide on
  const [index, setIndex] = useState(1)

  const increment = () => {
    if (index < images.length - 1) setIndex(index + 1)
  }

  const decrement = () => {
    if (index > 0) setIndex(index - 1)
  }

  return (
    <>
      <main>
        <button className="btnLeft" onClick={decrement} disabled={index === 0}>
          〈
        </button>
        <button
          className="btnRight"
          onClick={increment}
          disabled={index === images.length - 1}
        >
          〉
        </button>
        <Slider
          onSlideComplete={setIndex}
          onSlideStart={(i) => {
            console.log("started dragging on slide", i)
          }}
          activeIndex={index}
          threshHold={100}
          transition={0.3}
          scaleOnDrag={true}
        >
          {images.map(({ url, title }, index) => (
            <img src={url} key={index} alt={title} />
          ))}
        </Slider>
      </main>
    </>
  )
}

export default SliderApp
