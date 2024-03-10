import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleDec1870() {
  return (
    <>
      <Sidebar />

      <div className="z-20 mx-auto max-w-2xl flex h-[100%] flex-col items-center">
        <img
          className=" my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO-Banner-main-head.jpg"
          alt="Berlin Observer Banner"
          width="592px"
          height="149"
        />

        <h1 className="mx-5 font-bold mt-2 mb-4 text-center text-2xl tablet:text-[30px]">
          December 18, 1970
        </h1>

        <div className="z-20 mx-auto max-w-2xl flex h-[100%] flex-col items-center">
          <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
            The only article I had published in this edition was the "end of
            year" Battalion Brief. It does present an interesting summary of the
            highlights of the year for the Battalion. Notice the mention of Lt.
            Floyd C. O'Quinn who was on his way to Viet Nam. I can't help
            wondering if he made it back home.
          </p>
          <h1 className="font-bold    italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
            Battalion Briefs
          </h1>

          <img
            className=" my-5 mx-auto  rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
            src="..\media\BO article 12 18 70.jpg"
            alt="Berlin Observer December 18 1970"
            width="19px"
            height="840px"
          />

          <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
            Photo
          </h1>

          <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
            Command Sergeant Major (CSM) is the highest enlisted rank in the
            U.S. Army. Acheiving that rank, especially in times of war, is not
            trivial. I got to spend some time with CSM Allen when we were doing
            field training in southern Germany. Very impressive physically and
            in his demeanor. I think Clint Eastwood would play him in a movie.
          </p>

          <img
            className=" my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
            src="..\media\BO article 12 18 70(2).jpg"
            alt="Berlin Observer December 18 1970"
            width="519px"
            height="320px"
          />
        </div>

        {/* Article page footer"> */}
        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V26_50_Dec_18 1970.pdf"
          issuedate="Full December 18, 1970 Edition"
          previouspage="/ArticleDec1170"
          previoustitle="December 11, 1970"
          nexttitle="February 5, 1971"
          nextpage="/ArticleFeb0571"
        />
      </div>
    </>
  )
}

export default ArticleDec1870
