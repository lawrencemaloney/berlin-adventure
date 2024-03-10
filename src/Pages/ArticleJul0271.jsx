// import Collapsible from "../Components/Collapsible"
import React, { useState, useRef } from "react"
import Sidebar from "../Components/Sidebar"
import { PDFIcon } from "../Components/PDFIcon"
import { FaRegFilePdf } from "react-icons/fa6"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { BackToArticleIcon } from "../Components/BackToArticles"
import { useNavigate, useLocation } from "react-router-dom"
import ArticlePages from "../Components/ArticlePages"
import Artfooter from "../Components/Artfooter"

function ArticleJul0271() {
  const navigate = useNavigate()

  return (
    <>
      <Sidebar />

      <div className="z-20 mx-auto max-w-2xl flex h-[100%] flex-col items-center ">
        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO-Banner-main-head.jpg"
          alt="Berlin Observer Banner"
          width="592px"
          height="149"
        />
        <h1 className="mx-5 font-bold mt-2 mb-4 text-center text-2xl tablet:text-[30px]">
          July 2, 1971
        </h1>

        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Feature Article
        </h1>

        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article 07 02 71 (text only).JPG"
          alt="Berlin Observer July 2 1971"
          width="940px"
          height="840px"
        />
        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Feature Photo
        </h1>

        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          {" "}
          I was also given the chance to work on my portrait photography skills.
          Photos like this one were a regular feature in the Berlin Observer
          while I was in Berlin.
        </p>
        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article 07 02 71 2nd pic.JPG"
          alt="Berlin Observer July 2 1971"
          width="940px"
          height="840px"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N26_jul2 1971.pdf"
          issuedate="Full July 2, 1971 Edition"
          previouspage="/ArticleJun2571"
          previoustitle="June 25, 1971"
          nexttitle="July 9, 1971"
          nextpage="/ArticleJul0971"
        />
      </div>
    </>
  )
}

export default ArticleJul0271
