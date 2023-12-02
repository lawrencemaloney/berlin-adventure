import Collapsible from "../Components/Collapsible"
import React, { useState, useRef } from "react"
import { PDFIcon } from "../Components/PDFIcon"
import { FaRegFilePdf } from "react-icons/fa6"
import { FaChevronLeft } from "react-icons/fa6"

import { BackToArticleIcon } from "../Components/BackToArticles"
import { useNavigate } from "react-router-dom"

function ArticleDec1170() {
  const navigate = useNavigate()

  return (
    <>
      <div className=" page-std ">
        <img
          className="img-class"
          src="..\media\BO-Banner-main-head.jpg"
          alt="Berlin Observer Banner"
          width="592px"
          height="149"
        />
        <h1 className="h1-std">December 11, 1970</h1>
        <p className=" para-std">
          Only three editions of the Berlin Observer for 1970 are available on
          the Berlin Observer.com archive website. Even though the battalion
          spent the month of September field training in southern Germany, it is
          very unlikely that I would have been allowed to go all of October and
          November without having anything published in the Observer. Who knows
          what journalistic gems are now lost forever? Of course, that could be
          a good thing!
        </p>
        <p className="para-std"> Not exactly Pulitzer material here!</p>

        <img
          className="img-class"
          src="..\media\BO article 12 11 70 2nd (enhanced).jpg"
          alt="Berlin Observer December 11 1970"
          width="940px"
          height="840px"
        />

        <img
          className="img-class"
          src="..\media\BO article 12 11 70 1st marked.jpg"
          alt="Berlin Observer December 11 1970"
          width="940px"
          height="840px"
        />
      </div>
      <div className="flex space-x-20">
        <button
          className="flex items-center"
          onClick={() => {
            navigate("/BOarticles")
          }}
        >
          <div className="flex items-center font-bold  rounded-lg   px-4 py-1 ">
            <FaChevronLeft className="h-9 w-auto items-center ">
              {"   "}
            </FaChevronLeft>
            <p className="p-4">Back to Articles</p>
          </div>
        </button>
        <button className="max-w-[420px] mb-10  h-[50px]   p-3 text-black ">
          <a
            href="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V26_N49_Dec_11 1970.pdf"
            target="blank"
          >
            <div className="flex  items-center font-bold  rounded-lg bold border-2 border-black px-4 py-1 outline-double">
              <FaRegFilePdf className="h-9 w-auto items-center ">
                {" "}
              </FaRegFilePdf>
              <p className="p-4">Full December 11, 1970 Edition</p>
            </div>
          </a>
        </button>
      </div>
    </>
  )
}

export default ArticleDec1170
