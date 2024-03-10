import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleDec1771() {
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
          December 17, 1971
        </h2>

        <h1 className=" tablet:text-[30px]   font-bold italic underline mt-4 mb-4 text-justify ">
          Feature Article
        </h1>
        <h2 className="mx-5 font-bold mt-2 mb-4 text-center text-2xl tablet:text-[30px]">
          Getting "REALLY short"!
        </h2>

        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          Just 12 days after the publication of this issue, I was at Ft. Dix
          again, this time to process out of active duty. I had come full circle
          after an unexpected adventure that lasted one year, ten months, and 28
          days. In those days no one greeted returning soldiers, at least not in
          a positive way. The last interaction at Ft. Dix was a cash payment of
          all that I was owed (about $400 as I recall). Now unemployed, I had to
          figure out what to do with the rest of my life, or at least the next
          couple of months. The writing skills I learned in the Army would play
          a big part in my immediate future.
        </p>
        <img
          src="..\media\BO article 12 17 71.jpg"
          alt="Berlin Observer December 17, 1971"
          width="940px"
          height="840px"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N50_dec17 1971.pdf"
          issuedate="Full December 17, 1971 Edition"
          previouspage="/ArticleDec1071"
          previoustitle="December 10, 1971"
          nexttitle="December 23, 1971"
          nextpage="/ArticleDec2371"
        />
      </div>
    </>
  )
}

export default ArticleDec1771
