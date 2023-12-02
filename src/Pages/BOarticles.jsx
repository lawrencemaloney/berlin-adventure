// import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import Header from "../Components/Header"
import Sidebar from "../Components/Sidebar"
import Footnote from "../Components/Footnote"
import { FaCross, FaStarOfLife } from "react-icons/fa6"

function BOarticles() {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <Sidebar />

      <div className=" page-std ">
        <div className="article-intro">
          <h1 className="h1-std">My Articles</h1>

          <p className=" para-std">
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
          <div className=" img-class	">
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

          <p className="para-std">
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
          <p className=" para-std ">
            Not every edition was preserved on this site. For example, there
            were only three editions from 1970, my first year in Berlin. My
            first article appeared in the July 17, 1970 edition, two weeks after
            my arrival in Berlin. The next edition in the archive is December
            11, some 5 months later. I would not have been allowed to go that
            long without the "2/6" being represented in the Observer.
          </p>

          <p className=" para-std ">
            Each of the images below represents the cover page of an issue of
            the Berlin Observer that contains articles and/or photos contributed
            by me. Clicking the image will open a page containing my articles
            and photos that appeared in that issue. You can also access the full
            edition by clicking the "Full Edition PDF" button at the bottom of
            each article page. In order to preserve the historical collection
            assembled by the Berlin Observer.com webmaster past its funding end
            date of 2023, I have downloaded each issue, which can be accessed by
            clicking "Archives" on the menu.
          </p>
        </div>

        <div className="BO-article-container">
          <div className="BO-article">
            <Link to="/ArticleJuly1770">
              <img
                className="BO-article-img"
                src="/media/BO part 07 17 70.JPG"
                alt="Berlin Observer July 17 1970"
                width="211px"
                height="139px"
              />
            </Link>
            <p>July 17, 1970 </p>
          </div>
          <div className="BO-article">
            <Link to="/ArticleDec1170">
              <img
                className="BO-article-img"
                src="/media/BO part 12 11 1970.JPG"
                alt="Berlin Observer December 11 1970"
                width="211px"
                height="139px"
              />
            </Link>
            <p>December 11, 1970 </p>
          </div>

          <div className="BO-article">
            <Link to="/ArticleJuly3071">
              <img
                className="BO-article-img"
                src="/media/BO part 07 30 71.JPG"
                alt="Berlin Observer July 30 1971"
                width="211px"
                height="139px"
              />
            </Link>
            <p>July 30, 1971</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BOarticles
