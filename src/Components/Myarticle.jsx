import React from "react"
import Footnote from "./Footnote"

const MyArticle = () => {
  return (
    <div>
      <p>
        This is some text with a footnote.
        <Footnote
          number="1"
          text={
            <p className="para-fnote">
              <br />
              Carroll, Lewis. Alice’s Adventures in Wonderland. With
              illustrations by John Tenniel. Alice-in-wonderland.net Page 30.
              <br />
              <br />
              <a
                target="blank"
                rel="noopener noreferrer"
                href="https://www.alice-in-wonderland.net/wp-content/uploads/alice-in-wonderland.pdf"
                className="
        text-blue-600
        visited:text-purple-600"
              >
                https://www.alice-in-wonderland.net/wp-content/uploads/alice-in-wonderland.pdf
              </a>
              {/* <br /> */}
            </p>
          }
        />
      </p>
    </div>
  )
}

export default MyArticle
