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

function ArticleFeb1971() {
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

        <h1
          className="mx-5 font-bold mt-2 mb-4 text-center text-2xl tablet:text-[30px]
"
        >
          February 19, 1971
        </h1>

        <h2 className="mx-5 text-center font-bold text-2xl mt-3  tablet:text-[24px]">
          Last Minute Change...of Life
        </h2>

        {/* <div className="columns-xl flex gap-6 justify-center "> */}
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          This was an amazing story, only part of which is told in the article.
          A group of about 300 soldiers, who recently graduated from Advance
          Infantry Training, were waiting in a hangar at Travis Air Force Base
          near San Francisco en route to Vietnam. Without explanation (this was
          the Army, after all) an officer formed the soldiers into ranks and
          divided the group roughly in half, apparently randomly. One group, the
          ones featured in this story, was told to pick up their gear and get on
          a plane.
        </p>
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          They did not know their destination. They ended up in Berlin. All of
          the remaining soldiers were put on a different plane bound for
          Vietnam. Stephen Graham, mentioned in the article, and I became
          friends and worked together. While I began focussing more on feature
          articles and photojournalism, Steve began taking over writing the
          Battalion Briefs. He eventually took over all of my duties. I remember
          that Steve was from Texas and a big Elvis fan.
        </p>
        {/* </div> */}

        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Featured Article
        </h1>

        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article 02 19 71 1st  new (enhanced).jpg"
          alt="Berlin Observer February 19 1970"
          width="940px"
          height="840px"
        />
        {/* <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">Battalion Briefs</h1> */}
        <img
          className="w-1/2"
          src=" ..\media\BO article 02 19 71 2nd  new (enhanced).jpg"
          alt="Berlin Observer February 19 1970"
          width="19px"
          height="840px"
        />

        {/* Article page footer"> */}

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N7_feb19 1971.pdf"
          issuedate="Full February 19, 1971 Edition"
          previouspage="/ArticleFeb1271"
          previoustitle="February 12, 1971"
          nexttitle="March 5, 1971"
          nextpage="/ArticleMar0571"
        />
      </div>
    </>
  )
}

export default ArticleFeb1971
