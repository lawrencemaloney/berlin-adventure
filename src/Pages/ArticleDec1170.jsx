import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleDec1170() {
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
          December 11, 1970
        </h1>

        <h2 className="mx-5 text-center font-bold text-2xl mt-3  tablet:text-[24px]">
          {" "}
          The Gap
        </h2>
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          Only three editions of the Berlin Observer for 1970 are available on
          the Berlin Observer.com archive website. Even though the battalion
          spent the month of September field training in southern Germany, it is
          very unlikely that I would have been allowed to go all of October and
          November without having anything published in the Observer. Who knows
          what journalistic gems are now lost forever? Of course, it could be a
          good thing!
        </p>
        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Featured Article
        </h1>

        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          {" "}
          Not exactly Pulitzer material here!
        </p>

        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article 12 11 70 2nd (enhanced).jpg"
          alt="Berlin Observer December 11 1970"
          width="940px"
          height="840px"
        />
        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Battalion Briefs
        </h1>

        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article 12 11 70 1st marked.jpg"
          alt="Berlin Observer December 11 1970"
          width="940px"
          height="840px"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V26_N49_Dec_11 1970.pdf"
          issuedate="Full December 11, 1970 Edition"
          previouspage="/ArticleJul1770"
          previoustitle="July 17, 1970"
          nexttitle="December 18, 1970"
          nextpage="/ArticleDec1870"
        />
      </div>
    </>
  )
}

export default ArticleDec1170
