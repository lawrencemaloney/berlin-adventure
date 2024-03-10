import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleJun2571() {
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
          June 25, 1971
        </h1>

        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          {" "}
          The photo is not related to the story at all, but I like the
          composition and the caption (supplied by the editor).
        </p>

        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Feature Article
        </h1>

        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article 06 25 71 1st and 2nd combined.jpg"
          alt="Berlin Observer June 25 1971"
          width="940px"
          height="840px"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N25_jun25 1971.pdf"
          issuedate="Full June 25, 1971 Edition"
          previouspage="/ArticleMay2871"
          previoustitle="May 28, 1971"
          nexttitle="July 2, 1971"
          nextpage="/ArticleJul0271"
        />
      </div>
    </>
  )
}

export default ArticleJun2571
