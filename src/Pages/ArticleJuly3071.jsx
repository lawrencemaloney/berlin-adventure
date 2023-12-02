import Collapsible from "../Components/Collapsible"
import React, { useState, useRef } from "react"
import { PDFIcon } from "../Components/PDFIcon"
import { FaRegFilePdf } from "react-icons/fa6"
import { FaChevronLeft } from "react-icons/fa6"

import { BackToArticleIcon } from "../Components/BackToArticles"
import { useNavigate } from "react-router-dom"

function ArticleJuly3071() {
  const navigate = useNavigate()

  return (
    <>
      <div className=" page-std ">
        <div className="">
          <img
            className="bannerpic my-[18px]"
            src="..\media\BO-Banner-main-head.jpg"
            alt="Berlin Observer Banner"
            width="592px"
            height="149"
          />
        </div>
        <h2 className="h2-std">July 30, 1971</h2>
        <h3 className="h3-std">Soldiers fighting!</h3>

        <div className="img-class">
          <img
            src="..\media\BO article  07 30 71 1st.jpg"
            alt="Berlin Observer July 30 1971"
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
              href="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N30_jul30 1971.pdf"
              target="blank"
            >
              <div className="flex  items-center font-bold  rounded-lg bold border-2 border-black px-4 py-1 outline-double">
                <FaRegFilePdf className="h-9 w-auto items-center ">
                  {" "}
                </FaRegFilePdf>
                <p className="p-4">Full July 30, 1971 Edition</p>
              </div>
            </a>
          </button>
        </div>
      </div>
    </>
  )
}

export default ArticleJuly3071
