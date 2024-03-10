import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleNov2671() {
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
          November 26, 1971
        </h2>

        <h1 className=" tablet:text-[30px]   font-bold italic underline mt-4 mb-4 text-justify ">
          Front Page Feature Article
        </h1>
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          In command! Are you sure you want that promotion?
        </p>
        <img
          src="..\media\BO article 11 26 71.jpg"
          alt="Berlin Observer November  26, 1971"
          width="940px"
          height="840px"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N47_nov26 1971.pdf"
          issuedate="Full November 26, 1971 Edition"
          previouspage="/ArticleNov0571"
          previoustitle="November 5, 1971"
          nexttitle="December 3, 1971"
          nextpage="/ArticleDec0371"
        />
      </div>
    </>
  )
}

export default ArticleNov2671
