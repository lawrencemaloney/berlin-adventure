import React from "react"
import { useSwipeable } from "react-swipeable"

const SwipeableComponent = (props) => {
  const [swipeDirection, setSwipeDirection] = React.useState(null)

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  })

  const handleSwipe = (direction) => {
    setSwipeDirection(direction)
    // You can perform additional actions based on the swipe direction
    console.log(`Swiped ${direction}`)
  }

  return (
    <div
      {...handlers}
      className="w-full h-full flex items-center justify-center bg-gray-200"
    >
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-2xl mb-4">Swipeable Component</h1>
        {swipeDirection && <p className="text-lg">Swiped {swipeDirection}</p>}
        {/* <p className="text-gray-700">Swipe left or right on this area.</p> */}
      </div>
    </div>
  )
}

export default SwipeableComponent
