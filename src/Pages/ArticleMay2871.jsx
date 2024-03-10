import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleMay2871() {
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
          May 28, 1971
        </h1>

        <h2 className="mx-5 text-center font-bold text-2xl mt-3  tablet:text-[24px]">
          {" "}
          A rare combined training exercise.
        </h2>

        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Feature Article
        </h1>

        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article 05 28 71 1st.JPG"
          alt="Berlin Observer May 28 1971"
          width="940px"
          height="840px"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N21_may28 1971.pdf"
          issuedate="Full May 28, 1971 Edition"
          previouspage="/ArticleMay2171"
          previoustitle="May 21, 1971"
          nexttitle="June 25, 1971"
          nextpage="/ArticleJun2571"
        />
      </div>
    </>
  )
}

export default ArticleMay2871
