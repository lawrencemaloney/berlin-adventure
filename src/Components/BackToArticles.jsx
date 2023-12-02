import React from "react"

const BackToArticleIcon = () => {
  return (
    <div>
      <svg
        // xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        width="63"
        height="52"
        viewBox="0 0 63 52"
      >
        <defs>
          <pattern
            id="pattern"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 125 59"
          >
            <image
              width="125"
              height="59"
              //   xlink:href="data:image/jpeg;base64,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"
            />
          </pattern>
        </defs>
        <g id="Group_6" data-name="Group 6" transform="translate(-803 -1000)">
          <g
            id="Rectangle_4"
            data-name="Rectangle 4"
            transform="translate(811 1000)"
            fill="#050505"
            stroke="#d8cccc"
            stroke-width="1"
          >
            <rect width="55" height="42" stroke="none" />
            <rect x="0.5" y="0.5" width="54" height="41" fill="none" />
          </g>
          <g
            id="Rectangle_5"
            data-name="Rectangle 5"
            transform="translate(807 1005)"
            fill="#050505"
            stroke="#d8cccc"
            stroke-width="1"
          >
            <rect width="55" height="42" stroke="none" />
            <rect x="0.5" y="0.5" width="54" height="41" fill="none" />
          </g>
          <g
            id="Rectangle_6"
            data-name="Rectangle 6"
            transform="translate(803 1010)"
            fill="#050505"
            stroke="#d8cccc"
            stroke-width="1"
          >
            <rect width="55" height="42" stroke="none" />
            <rect x="0.5" y="0.5" width="54" height="41" fill="none" />
          </g>
          <rect
            id="BO_head_small"
            data-name="BO head small"
            width="46.555"
            height="21.75"
            transform="translate(807.222 1020.125)"
            fill="url(#pattern)"
          />
        </g>
      </svg>
    </div>
  )
}
export { BackToArticleIcon }
