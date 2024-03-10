import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleOct1571() {
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
          October 15, 1971
        </h2>
        <h3 className="mx-5 text-center font-bold text-2xl mt-3  tablet:text-[24px]">
          Behind enemy lines!
        </h3>

        <h1 className=" tablet:text-[30px]   font-bold italic underline mt-4 mb-4 text-justify ">
          Feature Article
        </h1>
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          Another Special Training Mission - Another full-page spread. I got to
          ride in the Jeep with Captain Slade.
        </p>
        <img
          src="..\media\BO article 10 15 71 Optimized.jpg"
          alt="Berlin Observer October 15, 1971"
          width="940px"
          height="840px"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N41_oct15 1971.pdf"
          issuedate="Full October 15, 1971 Edition"
          previouspage="/ArticleSep2471"
          previoustitle="September 24, 1971"
          nexttitle="November 5, 1971"
          nextpage="/ArticleNov0571"
        />
      </div>
    </>
  )
}

export default ArticleOct1571
