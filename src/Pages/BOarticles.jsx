// import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom"
import Header from "../Components/Header"
import Sidebar from "../Components/Sidebar"
import Footnote from "../Components/Footnote"
import { FaCross, FaStarOfLife } from "react-icons/fa6"
import articles from "../Json Files/my_BO_articles.json"
import ArticlePages from "../Components/ArticlePages"

function BOarticles() {
  const navigate = useNavigate()
  const location = useLocation()
  // console.log("location", location)
  return (
    <>
      <Header />
      <Sidebar />

      <div className=" z-20 mx-auto max-w-2xl flex h-[100%] flex-col items-center ">
        <div className="article-intro">
          <h1 className="mx-5 font-bold mt-2 mb-4 text-center text-2xl tablet:text-[30px]">
            The Berlin Observer
          </h1>

          <p className=" mx-auto my-3 p-1 w-[calc(100%-3em)] max-w-[35em] font-normal text-[1.4375rem]">
            A major part of my job as PIO Clerk was to make sure that the 2nd
            Battalion, 6th Infantry (the "2/6" ) was often and favorably
            represented in the Brigade weekly newspaper: the Berlin Observer.
            The Observer began publication in September 1945 as the “Grooper”
            just five and a half months after Germany surrendered. Its final
            publication was 39 years later on July 15, 1994. The “Second
            Anniversary” edition (below) presents a picture of the early years
            of the Berlin Brigade, how the Observer was produced, and a preview
            of the historical value that the Observer maintained over the years.
          </p>
          <div className=" my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5-class	">
            <a
              className="w-[100%]  px-[30px] py-[20px] "
              href="\media\BO PDFs\Berlin Observer 1947suppl.pdf"
              target="_blank"
            >
              <img
                className=" w-[100%]   text-[20px] leading-[32px] outline outline-black hover:outline-red-500  mobile:max-w-[35ch] mobile:text-[25px] laptop:max-w-[60ch]"
                src="..\media\BO part 1947 Special.JPG"
                alt="Berlin Observer July 17 1970"
                width=""
                height=""
              />
            </a>
            <span>(Click Image for Full Edition)</span>
          </div>

          <p className="mx-auto my-3 p-1 w-[calc(100%-3em)] max-w-[35em] font-normal text-[1.4375rem]">
            Thanks to the efforts of an unnamed webmaster and contributions from
            "... former Berlin Observer staffers and Veterans of the Berlin
            Brigade..." many PDF copies of Berlin Observer editions were
            preserved on the website:
            <a
              className="reflink text-blue-600 underline visited:text-purple-600"
              href="http://www.theberlinobserver.com"
              target="blank"
              rel="noopener noreferrer"
            >
              Berlin Observer.com.
            </a>{" "}
          </p>

          <p className=" mx-auto my-3 p-1 w-[calc(100%-3em)] max-w-[35em] font-normal text-[1.4375rem] ">
            Not every edition was preserved on this site. For example, there
            were only three editions from 1970, my first year in Berlin. My
            first article appeared in the July 17, 1970 edition, two weeks after
            my arrival in Berlin. The next edition in the archive is December
            11, some 5 months later. I would not have been allowed to go that
            long without the "2/6" being represented in the Observer.
          </p>

          <ArticlePages />
        </div>
      </div>
    </>
  )
}

export default BOarticles
