import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleMay2171() {
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
          May 21, 1971
        </h1>

        <h2 className="mx-5 text-center font-bold text-2xl mt-3  tablet:text-[24px]">
          {" "}
          More baseball! What could be better?
        </h2>

        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Sports
        </h1>

        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article  05 21 71 1st.jpg"
          alt="Berlin Observer May 14 1971"
          width="940px"
          height="840px"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N20_may21 1971.pdf"
          issuedate="Full May 21, 1971 Edition"
          previouspage="/ArticleMay1471"
          previoustitle="May 14, 1971"
          nexttitle="May 28, 1971"
          nextpage="/ArticleMay2871"
        />
      </div>
    </>
  )
}

export default ArticleMay2171
