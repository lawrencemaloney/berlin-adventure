import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleFeb0571() {
  return (
    <>
      <Sidebar />

      <div className="z-20 mx-auto max-w-2xl flex h-[100%] flex-col items-center  ">
        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO-Banner-main-head.jpg"
          alt="Berlin Observer Banner"
          width="592px"
          height="149"
        />

        <h1 className="mx-5 font-bold mt-2 mb-4 text-center text-2xl tablet:text-[30px]">
          February 5, 1971
        </h1>

        <h2 className="mx-5 text-center font-bold text-2xl mt-3  tablet:text-[24px]">
          Getting Settled in!
        </h2>

        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          George Linfors was one of my first friends in the Army. Our desks were
          next to each other and he "showed me the ropes" when I was new and
          completely bewildered.
        </p>
        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Featured Article
        </h1>

        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article 02 05 71 1st (enhanced twice).jpg"
          alt="Berlin Observer February 5, 1971"
          width="940px"
          height="840px"
        />
        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Battalion Briefs
        </h1>
        <div className="columns-xl flex justify-center ">
          <img
            className="w-1/2"
            src="..\media\BO article 02 05 71 2nd top.jpg"
            alt="Berlin Observer February 5, 1971"
            width="19px"
            height="840px"
          />
          <img
            className="w-1/2"
            src="..\media\BO article 02 05 71 2nd bottom.jpg"
            alt="Berlin Observer February 5, 1971"
            width="19px"
            height="840px"
          />
        </div>

        {/* Article page footer"> */}

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N5_feb5 1971.pdf"
          issuedate="Full February 5, 1971 Edition"
          previouspage="/ArticleDec1870"
          previoustitle="December 18, 1970"
          nexttitle="February 12, 1971"
          nextpage="/ArticleFeb1271"
        />
      </div>
    </>
  )
}

export default ArticleFeb0571
