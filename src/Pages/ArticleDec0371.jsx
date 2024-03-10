import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleDec0371() {
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
          December 3, 1971
        </h2>

        <h1 className=" tablet:text-[30px]   font-bold italic underline mt-4 mb-4 text-justify ">
          Front Page Feature Article
        </h1>
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          While he was climbing up, I was winding down! A little more than three
          weeks to go.
        </p>
        <img
          src="..\media\BO article 12 03 71 1st.JPG"
          alt="Berlin Observer December 3, 1971"
          width="940px"
          height="840px"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N48_dec3 1971.pdf"
          issuedate="Full December 3, 1971 Edition"
          previouspage="/ArticleNov2671"
          previoustitle="November 26, 1971"
          nexttitle="December 10, 1971"
          nextpage="/ArticleDec1071"
        />
      </div>
    </>
  )
}

export default ArticleDec0371
