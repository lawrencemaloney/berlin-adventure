import Sidebar from "../Components/Sidebar"
import Artfooter from "../Components/Artfooter"

function ArticleMar0571() {
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
          March 5, 1971
        </h1>
        <h1></h1>

        <h2 className="mx-5 text-center font-bold text-2xl mt-3  tablet:text-[24px]">
          {" "}
          Trip to the "Zone".
        </h2>

        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          Twice each year, our battalion traveled by convoy from Berlin, through
          occupied East Germany, to the U.S. Army training area in Hohenfels,
          West Germany. Hohenfels is located about 60 miles southwest of
          Nuremberg and about the same distance from Czechoslovakia (now known
          as the Czech Republic), which in those days was not super friendly
          with the U.S. Army. The trip from Berlin (about 300 miles) took three
          days. As the battalion commander's sedan driver, though Lt. Col. Tobin
          rarely used the sedan while in the training area, I had the advantage
          of driving a car during this trip while most soldiers were bouncing
          around in Jeeps or other uncomfortable military vehicles many on
          wooden benches in the back of trucks. What fun!
        </p>
        <p className="  my-3 p-1  max-w-[60ch] font-normal text-[1.4375rem]">
          The Headquarters (HQ) company's First Sergeant was a passenger in the
          sedan with me and was responsible for leading three "Duce and a half"
          mess trucks in a small convoy ahead of the main convoy to set up a
          field kitchen for each Battalion meal. The trucks were equipped with
          "speed governors", which limited the distance that the accelerator
          could be depressed by the driver. Unfortunately, this made it more
          difficult for the sedan, which was leading the convoy, to maintain
          visual contact with the lead truck. Because their speed was restricted
          going up long hills the convoy was a painfully slow process. For the
          trucks to make it up steep hills, they had to gain as much speed as
          possible going down the previous hill. It was somewhat stressful
          trying to keep them in my rearview mirror while contending with
          civilian traffic, especially with the First Sergeant gently reminding
          me to "slow down" and "speed up"!
        </p>

        <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">
          Featured Article
        </h1>

        <img
          className="my-5 mx-auto rounded-lg border-2 border-black w-[calc(100%-40px)] max-w-[600px] text-[14px] leading-5"
          src="..\media\BO article 03 05 71 1st.JPG"
          alt="Berlin Observer March 5 1970"
          width="940px"
          height="840px"
        />
        {/* <h1 className="font-bold italic underline mt-4 mb-4 text-justify tablet:text-[30px]">Battalion Briefs</h1> */}

        {/* Article page footer"> */}
        <Artfooter
          fullpdf="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N9_mar5 1971.pdf"
          issuedate="Full March 5, 1971 Edition"
          previouspage="/ArticleFeb1971"
          previoustitle="February 19, 1971"
          nexttitle="May 7, 1971"
          nextpage="/ArticleMay0771"
        />
      </div>
    </>
  )
}

export default ArticleMar0571
