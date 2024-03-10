import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleJul1671() {
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
          July 16, 1971
        </h1>
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          {" "}
          Summertime, and the livin' was easy!
        </p>
        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Feature Sports
        </h1>

        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article 07 16 71 1st.jpg"
          alt="Berlin Observer July 16 1971"
          width="940px"
          height="840px"
        />
        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Feature Photo
        </h1>
        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article 07 16 71 2nd.jpg"
          alt="Berlin Observer Banner"
          width="592px"
          height="149"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N28_jul16 1971.pdf"
          issuedate="Full July 16, 1971 Edition"
          previouspage="/ArticleJul0971"
          previoustitle="July 9, 1971"
          nexttitle="July 30, 1971"
          nextpage="/ArticleJul3071"
        />
      </div>
    </>
  )
}

export default ArticleJul1671
