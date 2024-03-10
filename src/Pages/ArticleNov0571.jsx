import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleNov0571() {
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
          November 5, 1971
        </h2>
        <h3 className="mx-5 text-center font-bold text-2xl mt-3  tablet:text-[24px]">
          Just a photo in this issue! But, it was on Page 1
        </h3>

        <h1 className=" tablet:text-[30px]   font-bold italic underline mt-4 mb-4 text-justify ">
          Feature Photo
        </h1>
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]"></p>
        <img
          src="..\media\BO article  11 05 71 1st.jpg"
          alt="Berlin Observer October 15, 1971"
          width="940px"
          height="840px"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N44_nov5 1971.pdf"
          issuedate="Full November 5, 1971 Edition"
          previouspage="/ArticleOct1571"
          previoustitle="October 15, 1971"
          nexttitle="November 26, 1971"
          nextpage="/ArticleNov2671"
        />
      </div>
    </>
  )
}

export default ArticleNov0571
