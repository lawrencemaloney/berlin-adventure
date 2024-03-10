import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleDec1071() {
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
          December 10, 1971
        </h2>

        <h1 className=" tablet:text-[30px]   font-bold italic underline mt-4 mb-4 text-justify ">
          Feature Article
        </h1>
        <h2 className="mx-5 font-bold mt-2 mb-4 text-center text-2xl tablet:text-[30px]">
          Fussball - An international game!
        </h2>
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          This game took on an international flavor once when our battalion was
          en route to our bi-annual trip to Hoenfels. We were guests of the
          German Army (part of the Bundeswehr formed after WW II) as a
          stop-over. Although there were some initial language difficulties,
          they were soon overcome by the international language of beer and
          Fussball. I don't remember who won, but we held our own, on both
          fronts, as I recall.
        </p>
        <img
          src="..\media\BO article 12 10 71 1st.JPG"
          alt="Berlin Observer December 10, 1971"
          width="940px"
          height="840px"
        />
        <h1 className=" tablet:text-[30px]   font-bold italic underline mt-4 mb-4 text-justify ">
          Other interesting news in this edition:
        </h1>
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          The Baader/Meinhof gang (aka Red Army Faction) who were bombers and
          assassins responsible for 34 deaths over three decades are also
          mentioned in this edition. They made direct threats against U.S. Army
          facilities, personnel, and dependents. We were put on alert at one
          point.
        </p>
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          On a more peaceful note, there is also an article featuring Steve
          Stills.
        </p>
        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N49_dec10 1971.pdf"
          issuedate="Full December 10, 1971 Edition"
          previouspage="/ArticleDec0371"
          previoustitle="December 3, 1971"
          nexttitle="December 17, 1971"
          nextpage="/ArticleDec1771"
        />
      </div>
    </>
  )
}

export default ArticleDec1071
