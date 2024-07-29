import { useState, useEffect, useRef } from "react";
import articles from "../Json Files/my_BO_articles.json";
import { useNavigate, Link, useLocation } from "react-router-dom";
// import articles from "../Json Files/my_BO_articles.json"

import {
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiOutlineCloseSquare
} from "react-icons/ai";

function ArticlePages() {
  return (
    <>
      <div className=" z-20 mx-auto max-w-2xl flex h-[100%] flex-col items-center ">
        <div className="article-intro">
          <h1 className="mx-5 font-bold mt-2 mb-4 text-center text-2xl tablet:text-[30px]">
            My Articles
          </h1>
          <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
            My battalion commander, Lt. Colonel Daniel J. Tobin, made it clear
            to me that my main job was to get feature articles extolling the
            battalion's accomplishments published in the Berlin Observer as
            frequently as possible. My desk was very close to the battalion
            commander’s office, and he did not want to see me “hanging around”!
            The more I could get published the happier he would be.
          </p>

          <p className=" mx-auto my-3 p-1 w-[calc(100%-3em)] max-w-[35em] font-normal text-[1.4375rem]">
            Below are links to each issue of the Berlin Observer that contains
            articles and/or photos contributed by me. Clicking the image will
            open a page containing my articles and photos that appeared in that
            issue. You can access the full edition by clicking the "Full Edition
            PDF" button at the bottom of each article page.
          </p>
          <p className=" mx-auto my-3 p-1 w-[calc(100%-3em)] max-w-[35em] font-normal text-[1.4375rem]">
            In order to preserve the historical collection assembled by the
            Berlin Observer.com webmaster past its funding end date of 2023, I
            have downloaded each issue, which can be accessed from the Archives
            page.
          </p>

          <div className="container grid-cols-2 p-4  tablet:w-full  align-middle		grid tablet:grid-cols-3	text-center   gap-4 mb-32">
            {articles.map((article, i) => (
              // <div className="border-2 m-2" >
              <div className="border-black border-2 rounded-md " key={i}>
                <Link to={article.pagename}>
                  <img
                    className=""
                    src={"/media/BO Banner general.jpg"}
                    width="211px"
                    height="139px"
                  />
                  <p className="w-full text-[1.25rem] tablet:text-[1.6rem]   p-2 text-red-800 font-bold">
                    {article.issuedate}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticlePages;
