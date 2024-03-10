import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleAug2771() {
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
          August 27, 1971
        </h2>
        <h3 className="mx-5 text-center font-bold text-2xl mt-3  tablet:text-[24px]">
          Another trip to the "Zone".
        </h3>

        <h1 className=" tablet:text-[30px]   font-bold italic underline mt-4 mb-4 text-justify ">
          Feature Article
        </h1>

        <img
          src="..\media\BO article  08 27 71 1st.jpg"
          alt="Berlin Observer August 27 1971"
          width="940px"
          height="840px"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N34_aug27 1971.pdf"
          issuedate="Full August 27, 1971 Edition"
          previouspage="/ArticleAug2071"
          previoustitle="August 20, 1971"
          nexttitle="September 24, 1971"
          nextpage="/ArticleSep2471"
        />
      </div>
    </>
  )
}

export default ArticleAug2771
