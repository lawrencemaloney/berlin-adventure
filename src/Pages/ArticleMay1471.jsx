import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleMay1471() {
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
          May 14, 1971
        </h1>

        <h2 className="mx-5 text-center font-bold text-2xl mt-3  tablet:text-[24px]">
          {" "}
          Standard fare.
        </h2>

        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Featured Article
        </h1>

        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article 05 14 71 1st (3) v2.jpg"
          alt="Berlin Observer May 14 1971"
          width="940px"
          height="840px"
        />
        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Sports
        </h1>

        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article 05 14 71 2nd.JPG"
          alt="Berlin Observer May 14 1970"
          width="940px"
          height="840px"
        />

        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          Long before Wriggley Field had rooftop fans, McNair had them!
        </p>
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          "Let's play 5!!!" (See the caption below.)
        </p>
        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article 05 14 71 3rd.JPG"
          alt="Berlin Observer May 14 1970"
          width="940px"
          height="840px"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N19_may14 1971.pdf"
          issuedate="Full May 14, 1971 Edition"
          previouspage="/ArticleMay0771"
          previoustitle="May 7, 1971"
          nexttitle="May 21, 1971"
          nextpage="/ArticleMay2171"
        />
      </div>
    </>
  )
}

export default ArticleMay1471
