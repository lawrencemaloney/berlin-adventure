// import React from "react";

// import Header from "../Components/Header";
import React, { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import Footnote from "../Components/Footnote"
import Collapsible from "../Components/Collapsible"
import { FaCross, FaStarOfLife } from "react-icons/fa6"
import { FaRegFilePdf } from "react-icons/fa6"
import { FaChevronLeft } from "react-icons/fa6"

// import Sidebar from "../Components/Sidebar";

function ArticleJuly1770() {
  const navigate = useNavigate()

  return (
    <>
      <div className="page-std  ">
        <img
          className="bannerpic my-[18px]"
          src="..\media\BO-Banner-main-head.jpg"
          alt="Berlin Observer Banner"
          width="592px"
          height="149"
        />

        <h1 className="h1-std">July 17, 1970</h1>

        <div className="page-std">
          <h2 className="h2-std">The Importance of Being Published</h2>

          <p className=" para-std">
            My desk was in a large open area in the headquarters building of the
            2nd Battalion 6th Infantry, in close proximity to the battalion
            commander’s office. The battalion commander, Lt. Colonel Daniel J.
            Tobin, made it clear to me that my main job was to get as many
            feature articles extolling accomplishments of the battalion
            published in the Berlin Observer. This was not a suggestion! He did
            not want to see me “hanging around the office”!
          </p>
          <h2 className="h2-std">My First Published Writing</h2>

          <p className=" para-std">
            My career as a professional writer began with this issue. Although I
            didn't think of myself as a professional writer at the time, I did
            get paid ($138.39/month with room & board) for my early adventures
            in journalism!
          </p>
          <h3 className="h3-std">Background of the Article</h3>

          <p className=" para-std">
            I remember riding in a convoy of military vehicles through the
            streets of Berlin from McNair Barracks to Tempelhof Airport and
            being curious about how the Berliners perceived this military
            presence in their city. While I'm sure some resented our presence, I
            never experienced any expression of animosity. In fact, I met people
            who had very recent memories of the misery after the fall of Berlin
            and then the Soviet blockade who were deeply appreciative of our
            presence.
          </p>
          <p className="para-std">
            One middle-aged Berliner that I met told of how she had to scavenge
            through garbage cans to help keep her family alive immediately after
            the war. She said that her family had a picture of John F. Kennedy
            in a place of honor in their house. They would never forget his "ich
            ben ein Berliner" speech in 1963.
            <Footnote
              number={<FaCross />}
              text={
                <span className="para-fnote">
                  <br />
                  Wikipedia contributors, "Ich bin ein Berliner," Wikipedia, The
                  Free Encyclopedia, <br />
                  <br />
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://en.wikipedia.org/w/index.php?title=Ich_bin_ein_Berliner&oldid=1162407726"
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    "https://en.wikipedia.org/w/index.php?title=Ich_bin_ein_Berliner&oldid=1162407726
                  </a>
                </span>
              }
            />
          </p>
          <p className="para-std">
            Tempelhof Airport, which closed in 2008, was the the center of
            Berlin Airlift of 1948-49.
            <Footnote
              number={<FaCross />}
              text={
                <span className="para-fnote">
                  <br />
                  Wikipedia contributors, "Berlin Blockade," Wikipedia, The Free
                  Encyclopedia, <br />
                  <br />
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://en.wikipedia.org/w/index.php?title=Berlin_Blockade&oldid=1162784690"
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    https://en.wikipedia.org/w/index.php?title=Berlin_Blockade&oldid=1162784690
                  </a>
                </span>
              }
            />
            <span>
              <a
                href="https://en.wikipedia.org/wiki/Berlin_Blockade#Start_of_the_Berlin_Airlift"
                target="blank"
                className=" reflink text-blue-600 underline visited:text-purple-600 "
              >
                {" "}
              </a>
            </span>
          </p>

          <img
            className="img-class"
            src="..\media\BO article  07 17 70 (feature).jpg"
            alt="Berlin Observer July 17 1970"
            width="940px"
            height="840px"
          />
          <h2 className="h2-std">Battalion Briefs</h2>

          <p className=" para-std">
            A regular feature of every Berlin Observer edition was the
            "Battalion Briefs". These were short bulletin board-type articles
            meant to keep the troops aware of the latest news impacting
            battalion personnel.
          </p>

          <img
            className="w-1/2"
            src="..\media\BO article 07 17 70 (main altered).JPG"
            alt="Berlin Observer July 17 1970"
            width="19px"
            height="840px"
          />

          <h2 className="h2-std">Sports</h2>

          <p className=" para-std">
            Members of the Berlin Brigade participated in intermural sports
            leagues and on teams that competed within the U.S. Army Europe
            (USAREUR) command. The action was reported in the "Observer Sports"
            section in each edition of the Berlin Observer. I enjoyed covering
            many of these events, especially the Battalion's baseball games.
          </p>

          <img
            className="img-class"
            src="..\media\BO article  07 17 70 (2nd).jpg"
            alt="Berlin Observer July 17 1970"
            width="519px"
            height="320px"
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
              href="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V26_N28_jul17 1970.pdf"
              target="blank"
            >
              <div className="flex  items-center font-bold  rounded-lg bold border-2 border-black px-4 py-1 outline-double">
                <FaRegFilePdf className="h-9 w-auto items-center ">
                  {" "}
                </FaRegFilePdf>
                <p className="p-4">Full July 17, 1970 Edition</p>
              </div>
            </a>
          </button>
        </div>
      </div>
    </>
  )
}

export default ArticleJuly1770
