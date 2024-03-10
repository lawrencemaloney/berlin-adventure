import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleSep2471() {
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
          September 24, 1971
        </h2>
        <h3 className="mx-5 text-center font-bold text-2xl mt-3  tablet:text-[24px]">
          On the road again!
        </h3>

        <h1 className=" tablet:text-[30px]   font-bold italic underline mt-4 mb-4 text-justify ">
          Feature Article
        </h1>

        <img
          src="..\media\BO article  09 24 71 1st.jpg"
          alt="Berlin Observer September 24, 1971"
          width="940px"
          height="840px"
        />

        <h1 className=" tablet:text-[30px]   font-bold italic underline mt-4 mb-4 text-justify ">
          Special Training Mission
        </h1>
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          Before there was a "Mission Impossible" movie series, there was a TV
          series that ran from September 1966 through March 1973. This special
          training mission used the TV show's popularity to make it more
          interesting to the soldiers involved.
        </p>
        <img
          src="..\media\BO article  09 24 71 big combined cropped.jpg"
          alt="Berlin Observer September 24, 1971"
          width="940px"
          height="840px"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N38_sep24 1971.pdf"
          issuedate="Full September 24, 1971 Edition"
          previouspage="/ArticleAug2771"
          previoustitle="August 27, 1971"
          nexttitle="October 15, 1971"
          nextpage="/ArticleOct1571"
        />
      </div>
    </>
  )
}

export default ArticleSep2471
