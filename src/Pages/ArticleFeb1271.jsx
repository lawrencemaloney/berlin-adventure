// import React from "react";

// import Header from "../Components/Header";
import React, { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../Components/Sidebar"

import Footnote from "../Components/Footnote"
import { FaCross, FaStarOfLife } from "react-icons/fa6"
import { FaRegFilePdf } from "react-icons/fa6"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import Artfooter from "../Components/Artfooter"

// import Sidebar from "../Components/Sidebar";

function ArticleFeb1271() {
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
          February 12, 1971
        </h1>
        <h1></h1>

        <h2 className="mx-5 text-center font-bold text-2xl mt-3  tablet:text-[24px]">
          First Christmas in Berlin under my belt!
        </h2>
        <div className="z-20 mx-auto max-w-2xl flex h-[100%] flex-col items-center">
          <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
            One year and 10 days (who's counting?) after enlistment and roughly
            6 months in Berlin, I'm getting more comfortable in the Army, in
            Berlin, and as a writer.
          </p>

          <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
            Featured Article
          </h1>

          <img
            className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
            src="..\media\BO article 02 12 71 3rd (enhanced).jpg"
            alt="Berlin Observer February 12 1970"
            width="940px"
            height="840px"
          />
          <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
            Battalion Briefs
          </h1>
          <div className="columns-xl flex justify-center ">
            <img
              className="w-1/2"
              src="..\media\BO article 02 12 71 bb top.jpg"
              alt="Berlin Observer February 12 1970"
              width="19px"
              height="840px"
            />
            <img
              className="w-1/2"
              src="..\media\BO article 02 12 71 bb bottom.jpg"
              alt="Berlin Observer February 12, 1971"
              width="19px"
              height="840px"
            />
          </div>

          {/* Article page footer"> */}

          <Artfooter
            fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N6_feb12 1971.pdf"
            issuedate="Full February 12, 1971 Edition"
            previouspage="/ArticleFeb0571"
            previoustitle="February 5, 1971"
            nexttitle="February 19, 1971"
            nextpage="/ArticleFeb1971"
          />
        </div>
      </div>
    </>
  )
}

export default ArticleFeb1271
