// src/components/ScrollToSectionButton.jsx
import React from "react"
import { Link } from "react-router-dom"

const ScrollToSectionButton = ({ targetSectionId, buttonText, className }) => {
  const scrollToSection = () => {
    const section = document.getElementById(targetSectionId)

    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Link to="/#" onClick={scrollToSection} className={className}>
      {buttonText}
    </Link>
  )
}

export default ScrollToSectionButton
