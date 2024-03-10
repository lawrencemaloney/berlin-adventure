import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleDec2371() {
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
          December 23, 1971
        </h2>

        <h1 className=" tablet:text-[30px]   font-bold italic underline mt-4 mb-4 text-justify ">
          Special Christmas Edition
        </h1>

        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          Even though my journalism career was over by the time this Special
          Edition was published, I've included it here for two reasons: 1) a
          photo that I took that had been published in a previous edition was
          included at the bottom of this page and, 2) if you take close look at
          the headline at the top of the page, you will see the work of a friend
          of mine, Mike Sowell, who was the Associate Editor. I'm pretty sure
          his headlines got closer scrutiny after this got past the "brass".
        </p>
        <img
          src="..\media\BO article Special Dec 23 1971 Optimized.jpg"
          alt="Berlin Observer December 23, 1971"
          width="940px"
          height="840px"
        />

        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N51_dec23 1971.pdf"
          issuedate="Full December 23, 1971 Edition"
          previouspage="/ArticleDec1771"
          previoustitle="December 17, 1971"
          nexttitle="My Articles"
          nextpage="/BOarticles"
        />
      </div>
    </>
  )
}

export default ArticleDec2371
