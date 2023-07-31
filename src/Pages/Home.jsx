// import React, { useState, useRef } from "react";
import Header from "../Components/Header";
import Collapsible from "../Components/Collapsible";
import Sidebar from "../Components/Sidebar";


function Home() {
  return (
    <>
        <Header />
        <Sidebar />

      <div className="homewrap z-20 mx-auto mt-0  flex h-[100%] flex-col items-center  tablet:mt-2  ">

        <div className="thedecision z-20 mx-auto mt-[40px]   h-[100%]  ">
          <h1 className="mx-[20px] mt-[1rem] mb-3 text-center text-3xl 	 tablet:text-4xl">
          It Began With a Lottery.
          </h1>

          <p className="   mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            On December 3, 1969, at the height of American involvement in the
            Vietnam War, I joined the U.S. Army. As with most decisions, my
            choices were remarkably few. I could enlist, live with the
            uncertainty of the draft, or evade military service altogether. The
            events and convictions that influenced my decision were varied,
            complex, and mostly out of my control.
          </p>
          <h2 className="  mt-3 text-center  text-3xl">The Draft Lottery</h2>

          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            The timing of my decision was determined primarily by the outcome of
            a lottery. On December 1, 1969, at Selective Service National
            Headquarters in Washington, D.C., a nationally televised lottery
            determined the "order of call" for induction into military service
            for 1970. The lottery was established to address perceived
            inequities in the "oldest man first" method for conscripting
            civilians.
          </p>

          <div className=" mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              src="images/Draft Lottery glass bowl Pirnie.jpg"
              width="940px"
              alt="Lottery 1969"
            />
            <span className="text-sm leading-none">(Library of Congress)</span>
          </div>

          <h3 className="mt-4  text-center text-2xl underline">The Process</h3>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            366 opaque plastic capsules, each containing a slip of paper with a
            number from 1 to 366 representing each day of the year (366 to
            account for those born on February 29th during leap years), were
            placed in a large glass container and drawn by hand. The number in
            each capsule represented the birth date of each eligible registrant.
          </p>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            The sequence in which a person’s birth date was drawn determined the
            order in which young men between 18 and 26 were to be called to
            serve. The event was covered live on TV and radio. I remember
            watching it with rapt attention. The first capsule drawn by
            Congressman Alexander Pirnie (R-NY) of the House Armed Services
            Committee, contained the number representing September 14, so all
            men born on September 14 in any year between 1944 and 1950 were
            assigned lottery number 1. The drawing continued until all days of
            the year had been paired with a sequence number.
          </p>
          <h3 className="mt-4  text-center text-2xl underline">The Results</h3>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            My birth date, November 27, 1947, was on the 47th capsule chosen.
            (See results card.)
          </p>
          <div className=" mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="mt-4 border-2 border-black"
              src="images/lottery-card-1970-marked.jpg"
              alt="Lottery 1969"
              width="880px"
            />
            <span className="mr-8 text-sm leading-none ">1970 Results.</span>
          </div>
          <h3 className="mt-4 text-center text-2xl  underline">
            Seeking Advice
          </h3>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            I decided to get an expert opinion on how long I had until I was
            likely to be drafted. So, on December 3rd, I visited the local Army
            recruitment office in Midland Park, NJ, "You might make it to
            February." the Recruitment Officer said after I told him that my
            lottery number was 47.
          </p>
          <div className=" mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black"
              src="images/Enlisting.webp"
              alt="Lottery 1969"
              width="880px"
            />
            <span className="text-sm leading-none">U.S. Army Recruiter</span>
          </div>

          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            I asked him if there was any benefit in volunteering rather than
            waiting to be drafted. He said that my military records would show
            that I was "RA" (Regular Army volunteer) rather than "US,"
            indicating draftee status. He suggested that the Drill Instructors
            (DI) at Basic Training might treat volunteers better than draftees.
          </p>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            He also said that enlisting would allow me to schedule my induction
            rather than be in a constant state of anticipation. If my RA status
            had a positive impact during my Army career, it certainly wasn't
            obvious during Basic Training.{" "}
            <span className="font-bold">
              I signed up and scheduled my induction for February 2, 1970.
            </span>
          </p>
          {/* <img className='max-w-[35vw] ' src={sectionDiv} alt='divider' /> */}

          <h2 className="  mt-6 mb-4 text-center text-3xl ">
            How did I Get Here?
          </h2>

          <div className=" mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black"
              src="images/JTAlicewithCCat500.webp"
              alt="Alice and the Cat"
              width="980px"
            />
          </div>
          <p className="leading-1 tablet:leading-1 ml-[140px] mb-[6px] -mt-[275px] w-[30ch] text-[12px]  tablet:ml-[246px] tablet:-mt-[475px] tablet:w-[29ch] tablet:text-[20px]">
            `Would you tell me, please, which way I ought to go from here?'{" "}
            <br />
            `That depends a good deal on where you want to get to,' said the
            Cat. <br />
            `I don't much care where--' said Alice. <br />
            `Then it doesn't matter which way you go,' said the Cat. <br />
            `--so long as I get SOMEWHERE,' Alice added as an explanation.{" "}
            <br />
            `Oh, you're sure to do that,' said the Cat, `if you only walk long
            enough
          </p>
          <div className="ml-2 	text-center">
            <Collapsible icon="[&#8224;]">
              <p className="ml-1  max-w-[45ch]  text-[18]	text-black	">
                {/* [&#8224;] */}
                Carroll, Lewis. Alice’s Adventures in Wonderland. With
                illustrations by John Tenniel. Alice-in-wonderland.net Page 30.
                <br />
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://www.alice-in-wonderland.net/wp-content/uploads/alice-in-wonderland.pdf"
                  className="
                  text-blue-600
                  visited:text-purple-600"
                >
                  https://www.alice-in-wonderland.net/wp-content/uploads/alice-in-wonderland.pdf
                </a>
                {/* <br /> */}
              </p>
            </Collapsible>
          </div>

          <p className=" mx-[20px] mt-[12px] max-w-[38ch] text-[20px] leading-[32px] tablet:mt-[22px] tablet:max-w-[40ch] tablet:text-[25px]  laptop:max-w-[60ch] ">
            Like Alice, I had no clear idea of where I wanted to "get to" in the
            years and months leading to my enlistment. The war in Vietnam, the
            university I attended, the courses I took, the interests I
            developed, and the experiences I had that led directly to my
            enlistment decision were not planned,
            <b>at least not by me</b>.
          </p>
          <h3 className=" mx-[20px] my-3 text-center text-2xl underline">
            The Decision-Making Process
          </h3>

          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            We make thousands of decisions every day. Some decisions seem so
            easy that we hardly know were making them. Others are so momentous
            that we think of them as “life-changing”. But each decision is
            greatly influenced by many factors. Our daily interactions with
            family, friends, the various communities in which we live, and our
            mental, physical, and spiritual health all play a role in our
            decision-making. We have very little control over the things that
            influence our decisions, yet there are consequences for our
            decisions and we are held responsible by God for them.
          </p>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            Although I can’t record here all the things that influenced my
            decision to join the Army in December 1969, I thought it would be
            interesting, maybe even helpful, to present a picture of the more
            significant events of my personal life and the political, social,
            cultural, and technological events of the 1960s.
          </p>
          <h3 className=" mx-[20px] my-3 text-center text-2xl underline">
            My Personal life and the World Around me
          </h3>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            For nearly the entire decade of the 1960s, from September 1960 to
            May 1969, my personal life focused on high school and college and
            all the interests, activities, and social “angst” like every other
            teenager in the 60s. While I was focused on my personal life, I was
            also aware of the events going on in the world around me. While they
            had some influence, they did not seem to directly impact my life
            during this time. But the impact was there, and, for the purposes of
            the story, they significantly impacted my decision to join the Army.
          </p>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            Unlike many typical high schools in northern New Jersey, Ridgewood
            high school only covered grades 10 through 12. Grades nine through
            11 were housed in two middle school buildings: the Benjamin Franklin
            school, and the George Washington school. Having attended a private
            school through eighth grade, I spent my “freshman” year of high
            school at George Washington school, about a mile from our house.
          </p>
          <div className=" mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black "
              src="images/GW.jpg"
              alt="Riodgewood High"
              width="980px"
            />
            <span className="text-sm leading-none">
              George Washington Middle School, Ridgewood, NJ
            </span>
          </div>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            From September 1962 to June 1965, I attended Ridgewood high school
            in Ridgewood, New Jersey. I had an unremarkable career there. I
            could get by with minimum effort, and, to my later shame, a minimum
            effort is what I gave. I was more interested in my activities away
            from school. From 6th grade until high school, my closest friend,
            Dick Gilmour, and I would spend a lot of time together after school
            building model cars, reading Mad Magazine, and riding our bicycles
            around the neighborhood.
          </p>
          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch] ">
            <img
              className="border-2 border-black "
              src="images/Ridgewood_High_School BW.webp"
              alt="Riodgewood High"
              width="980px"
            />
            <span className="text-sm leading-none">
              Ridgewood Highschool, Ridgewood, NJ
            </span>
          </div>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            While I attended the public school in Ridgewood, Dick attended a
            private military high school in Manhattan. As we moved on in our
            high school careers, we began spending weekends and summers mainly
            playing sports. If I remember correctly, Dick started to take tennis
            lessons, and he would teach me what he learned. Since we had a
            good-quality public tennis court near our neighborhood, we would
            play on many weekends, both days and throughout the summer. The
            tennis courts were only a couple blocks from van Dyck’s ice cream
            parlor, so many a summer day was spent going back and forth between
            the tennis courts and Van Dyk’s. Those were beautiful days.
          </p>
          <div className="mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <a href="https://www.vandyksicecream.com/">
              {" "}
              <img
                className="border-2 border-black "
                src="images/va dyks icecreamridgewood nj.jpg"
                alt="Van Dyks Ice Cream Ridgewwod NJ"
                width="980px"
              />
              Van Dyk's Ice Cream, Ridgewwod NJ
            </a>
          </div>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
            While we were able to enjoy a great deal of freedom without much
            responsibility, we were certainly aware of the political, social,
            and cultural events going on around us. The proliferation of
            television sets across the United States brought news of these
            events into our homes every night.
          </p>
          <h3 className=" mt-4  text-center text-2xl underline ">
            Off to College -September 1964
          </h3>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            As an example of how little control we have over our lives, I
            attended Loyola University in New Orleans because I had received an
            acceptance letter from them in the spring of 1965, even though I had
            never officially applied.
          </p>
          <p className="  mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            It turned out that Loyola was looking to expand the geographic scope
            of its student base in 1964, and New Jersey was in their target
            zone. They accepted me because I lived in New Jersey and had scored
            well on my SATs. (It certainly was not due to my grades.) Loyola had
            received my SAT scores because I had put a checkmark next to "Loyola
            University (LA)" on my SAT document as a place to send my results. I
            thought "LA" meant Los Angles when it meant Louisiana. It was the
            only acceptance letter I had received, so in September 1965, off I
            went to New Orleans
            <span>
              <a
                href="https://goo.gl/maps/F6HwQFJxHC5DLHMC8"
                target="blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                {" "}
                (Click for map location)
              </a>
            </span>
            .
          </p>

          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch] ">
            <img
              className="border-2 border-black "
              src="images/Loyola Marquette Hall 1960s LA stat archives.webp"
              alt="U2"
              width="980px"
            />
            <span className="text-sm leading-none">
              Loyola University, New Orleans Louisiana - from Louisiana State
              archives.
            </span>
          </div>

          <p className="  mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            With a student deferment in hand, I was not concerned about being
            drafted into military service as I arrived at Loyola for my first
            year. During registration, I had to declare a major field of study.
            I approached this decision with a vague notion that I should take
            classes that would help me get a job in “business” eventually. A
            faculty advisor convinced me to enroll in a new ambitious “Business
            Law” program. In this program, a student would complete all
            requirements for a BA degree in Business Administration within three
            years and then spend their senior year taking business-related
            courses at the Loyola School of Law. This program was dropped by
            Loyola the following year because the up-front course load was
            considered too burdensome by the Association to Advance Collegiate
            Schools of Business (AACSB). I had to find a new degree program.
          </p>

          <h3 className="mt-4  mb-3 text-center text-2xl underline">
            A Change in Direction
          </h3>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            Happily, some friends had asked me to join the staff of the
            student-run WVSU-AM radio station, which broadcast to the campus
            over telephone lines (carrier current) from the balcony in the
            theatre in Marquette Hall. By the end of my freshman year, the radio
            station moved to new facilities in the basement of the Danna Student
            Center and changed the call letters to{"   "}
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Crescent_City_Radio"
              className="
                  text-blue-600
                  visited:text-purple-600"
            >
              WOLF
            </a>{" "}
            . (Wolf Pack being the mascot of Loyola’s sports teams).
          </p>
          <p className="  mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            During this same time, Loyola worked with WWL executives to
            introduce a new BA program in Communications (later named Bachelor
            of Arts in Mass Communications) at Loyola. I transferred to that
            program.
          </p>
          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black "
              src="images/Me on camera yearbook 1968.webp"
              alt="Me at Loyola"
              width="980px"
            />
            <span className="text-sm leading-none">
              That's me on the headset, upper right - from 1968 Loyola Yearbook
            </span>
          </div>
          <p className="mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]  ">
            I worked as an early morning DJ, a play-by-play radio announcer at
            the Loyola Basketball games, the PA announcer at a few Loyola
            Baseball team and football club games. As a reporter, I had the
            opportunity to interview many notable musical artists who came to
            perform at the Loyola Field House. Among them were: Peter, Paul and
            Mary, Simon & Garfunkel, The 5th Dimension (my favorites - they took
            a couple of us starving college interviewers to an expensive
            restaurant and paid for our meals. Marilyn McCoo was even more
            beautiful in person!), and Johnny Rivers. I also got to work
            backstage at a Beach Boys concert at the field house (April 18,
            1968) but did not get to interview them. My friend, Jeff Bray, was
            the MC for the show.{" "}
          </p>
          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch] ">
            <img
              className="border-2 border-black "
              src="images/Loyola_Field_House.jpg"
              alt="Loyola New Orleans Field House"
              width="980px"
            />
            <span className="text-sm leading-none">
              Loyola University Field House, New Orleans, LA
            </span>
          </div>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            After the Department of Communications and changing my major, I was
            able to take courses in TV writing, directing, announcing, and
            camera operation. At the start of my senior year, I was named Senior
            Operations Director for the radio station now named WLDC . These
            skills were to come in handy when I finally got to Berlin.
          </p>
          <p className="  mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            I also joined the ROTC was a member of the competitive rifle team,
            and the Drill Team. As far as I know, neither one of these
            activities.
          </p>

          <div className="	mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className="border-2 border-black "
              src="images/loyola-cadet-battalion-marches-back-to-campus-from-audubon-park-1966.webp"
              alt="Loyola ROTC Drill Tea,"
              width="980px"
            />
            <span className="text-sm leading-none">
              Loyola ROTC back to campus from drill practice in Audubon Park.
            </span>
          </div>
        </div>



      </div>
    </>
  );
}

export default Home;
