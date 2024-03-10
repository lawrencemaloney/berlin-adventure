import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleJuly3071() {
  return (
    <>
      <Sidebar />

      <div className="z-20 mx-auto max-w-2xl flex h-[100%] flex-col items-center ">
        <img
          className="bannerpic my-[18px]"
          src="..\media\BO-Banner-main-head.jpg"
          alt="Berlin Observer Banner"
          width="592px"
          height="149"
        />
        <h2 className="mx-5 font-bold mt-2 mb-4 text-center text-2xl tablet:text-[30px]">
          July 30, 1971
        </h2>
        <h3 className="mx-5 text-center font-bold text-2xl mt-3  tablet:text-[24px]">
          Soldiers fighting!
        </h3>

        <h1 className=" tablet:text-[30px]   font-bold italic underline mt-4 mb-4 text-justify ">
          Feature Sports
        </h1>

        <img
          src="..\media\BO article  07 30 71 1st.jpg"
          alt="Berlin Observer July 30 1971"
          width="940px"
          height="840px"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N30_jul30 1971.pdf"
          issuedate="Full July 30, 1971 Edition"
          previouspage="/ArticleJul1671"
          previoustitle="July 16, 1971"
          nexttitle="August 20, 1971"
          nextpage="/ArticleAug2071"
        />
      </div>
    </>
  )
}

export default ArticleJuly3071
