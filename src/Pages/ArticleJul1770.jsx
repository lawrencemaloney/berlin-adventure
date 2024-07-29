import Sidebar from "../Components/Sidebar";
import Footnote from "../Components/Footnote";
import { FaCross, FaStarOfLife } from "react-icons/fa6";
import Artfooter from "../Components/Artfooter";

function ArticleJul1770() {
  return (
    <>
      <Sidebar />

      {/* <div className="z-20 mx-auto max-w-2xl flex h-[100%] flex-col items-center  "> */}
      <img
        className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
        src="..\media\BO-Banner-main-head.jpg"
        alt="Berlin Observer Banner"
        width="592px"
        height="149"
      />

      <h1 className="mx-5 font-bold mt-2 mb-4 text-center text-2xl tablet:text-[30px]">
        July 17, 1970
      </h1>

      <div className="z-20 mx-auto max-w-2xl flex h-[100%] flex-col items-center">
        <h2 className="mx-5 text-center font-bold text-2xl mt-3  tablet:text-[24px]">
          The Importance of Being Published
        </h2>

        <h2 className="mx-5 text-center font-bold text-2xl mt-3  tablet:text-[24px]">
          My First Feature Article
        </h2>

        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          My career as a professional writer began with this issue. Although I
          didn't think of myself as a professional writer at the time, I did get
          paid ($138.39/month with room & board) for my early adventures in
          journalism!
        </p>
        <h3 className="mx-[20px] mt-3  font-bold text-center text-[1.35rem] italic">
          Background of the Article
        </h3>

        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          I remember riding in a convoy of military vehicles through the streets
          of Berlin from McNair Barracks to Tempelhof Airport and being curious
          about how the Berliners perceived this military presence in their
          city. While I'm sure some resented our presence, I never experienced
          any expression of animosity. In fact, I met people who had very recent
          memories of the misery after the fall of Berlin and then the Soviet
          blockade who were deeply appreciative of our presence.
        </p>
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          One middle-aged Berliner that I met told of how she had to scavenge
          through garbage cans to help keep her family alive immediately after
          the war. She said that her family had a picture of John F. Kennedy in
          a place of honor in their house. They would never forget his "ich ben
          ein Berliner" speech in 1963.
          <Footnote
            number={<FaCross />}
            text={
              <span className="mx-auto   p-2 w-[calc(100%-40px)] max-w-[600px]  text-sm	text-black  font-">
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
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          Tempelhof Airport, which closed in 2008, was the the center of Berlin
          Airlift of 1948-49.
          <Footnote
            number={<FaCross />}
            text={
              <span className="mx-auto   p-2 w-[calc(100%-40px)] max-w-[600px]  text-sm	text-black  font-">
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
        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Feature Article
        </h1>
        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article  07 17 70 (feature).jpg"
          alt="Berlin Observer July 17 1970"
          width="940px"
          height="840px"
        />
        <h2 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Battalion Briefs
        </h2>

        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          A regular feature of every Berlin Observer edition was the "Battalion
          Briefs". These were short bulletin board-type articles meant to keep
          the troops aware of the latest news impacting battalion personnel.
        </p>

        <img
          className="w-1/2"
          src="..\media\BO article 07 17 70 (main altered).JPG"
          alt="Berlin Observer July 17 1970"
          width="19px"
          height="840px"
        />

        <h2 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Sports
        </h2>

        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          Members of the Berlin Brigade participated in intermural sports
          leagues and on teams that competed within the U.S. Army Europe
          (USAREUR) command. The action was reported in the "Observer Sports"
          section in each edition of the Berlin Observer. I enjoyed covering
          many of these events, especially the Battalion's baseball games.
        </p>

        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article  07 17 70 (2nd).jpg"
          alt="Berlin Observer July 17 1970"
          width="519px"
          height="320px"
        />
        {/* </div> */}

        {/* Article page footer"> */}

        {/* Article page footer"> */}
        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V26_N28_jul17 1970.pdf"
          issuedate="Full July 17, 1970 Edition"
          previouspage="/BOarticles"
          previoustitle="My Articles"
          nextpage="/ArticleDec1170"
          nexttitle="December 11, 1970"
        />
      </div>

      {/* </div> */}
    </>
  );
}

export default ArticleJul1770;
