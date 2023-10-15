import React, { useState, useRef } from "react"
import Header from "../Components/Header"
import Sidebar from "../Components/Sidebar"
import { FaCross, FaStarOfLife } from "react-icons/fa6"
import Popout from "../Components/Popout"
import Footnote from "../Components/Footnote"

function Decision() {
  const [showPopout, setShowPopout] = useState(false)
  const handleOnClose = () => setShowPopout(false)
  // const [fnID, setFnID] = useState(0)

  return (
    <>
      <Header />
      <Sidebar />

      <div className="homewrap z-20 mx-auto  flex h-[100%] flex-col items-center  ">
        <p className="para-std ">
          On December 3, 1969, at the height of American involvement in the
          Vietnam War, I joined the U.S. Army. As with most decisions, my
          choices were remarkably few. I could enlist, live with the uncertainty
          of the draft, or evade military service altogether. The events and
          convictions that influenced my decision were varied, complex, and
          mostly out of my control.
        </p>

        <h2 className="h2-std">
          In 1970, 40% of US Army recruits were sent to Vietnam. <br />I was
          sent to Berlin!
        </h2>

        <p className="para-std ">
          From June 28, 1970, to December 29, 1971, I served as the Public
          Information Office (PIO) clerk for the 2nd Battalion, 6th Infantry
          (the "2/6") Regiment of the Berlin Brigade, U.S. Army Berlin (USAB) in
          Berlin, Germany. My primary duty was to promote the 2/6 by getting
          vignettes, feature articles, and photos of Battalion accomplishments
          published in the Brigade's weekly newspaper, the Berlin Observer.
        </p>
        <p className="para-std ">
          In February 2020, I discovered an online archive of over 900 complete
          editions of the Observer preserving Brigade-related events (many of
          significant historical importance) from the first issue on September
          25, 1945 (just five and a half months after Germany surrendered)
          through the final publication on July 15, 1994. (See the Berlin
          Observer Archives page to access all PDFs).
        </p>
        <p className="para-std ">
          My wife suggested that I preserve my work contained in that archive
          along with some context so that my family, particularly my sons and
          grandchildren, would know a little of what my life in the Army was
          like. This website is the result of that effort. (For a description of
          how and why I started this project. Go to the page).
        </p>
        <p className="para-std "></p>

        <div className=" img-class	">
          <img
            className="border-2 border-black"
            src="images/Berlin scenes 41  resized.webp"
            alt="Ku-Damm Berlin"
            width="880px"
          />
          <span className="text-sm leading-none">
            Ku-damm Strasse & Kaiser Wilhelm Memorial, Berlin Germany c. 1970
          </span>
        </div>

        <div className="thedecision z-20 mx-auto   h-[100%]  ">
          <h2 className="h2-std">Hot War/Cold War - Vietnam/Germany</h2>
          <p className="para-std ">
            During my high school and college years (1963-1969) the undercurrent
            of the Vietnam War was ever-present and constantly growing. The
            closer young men got to graduation, whether high school or college,
            the more their anxiety grew about the possibility of being drafted
            to serve in this increasingly unpopular war. As I approached my
            graduation from college in the spring of 1969, many of us were
            asking ourselves (and each other): "will I go if drafted?" Many
            avoided the draft by staying in school as long as possible,
            "relocating" to Canada, or through some even less honorable means.
            For myself, I decided to go if called.
          </p>

          <div className=" img-class	">
            <img
              className="border-2 border-black"
              src="images\choppesandtroops.webp"
              alt="Lottery 1969"
              width="880px"
            />
            <span className="text-sm leading-none">
              US Soldiers in Vietnam - Wikipedia (Public Domain)
            </span>
          </div>

          <p className="para-std ">
            So, as graduation approached, I was very aware that, within a year,
            I could be in the jungles of Vietnam. I had no idea that, instead,
            through God's providence, I would be living a pretty easy life in
            Berlin, Germany. The major events that were part of my journey from
            college graduate to soldier in Berlin.
          </p>
          <p className="para-std ">
            The Vietnam War, officially the war between North and South Vietnam,
            began in 1955 and ended in 1975.
            <Footnote
              number={<FaCross />}
              text={
                <span className="para-fnote">
                  <br />
                  Wikipedia contributors, "Vietnam War," Wikipedia, The Free
                  Encyclopedia, (accessed August 14, 2022).
                  <br />
                  <br />
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://en.wikipedia.org/w/index.php?title=Vietnam_War&oldid=1102834758
                    "
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    https://en.wikipedia.org/w/index.php?title=Vietnam_War_casualties&oldid=1062906270
                  </a>
                </span>
              }
            />
            US troop involvement in Vietnam escalated from approximately 23,000
            US advisors in early 1964 to over 184,000 by the end of that year.
            This dramatic increase was in response to an alleged attack on two
            US destroyers in the Gulf of Tonkin by fast attack craft from North
            Vietnam. This escalation was made possible by the passing of the
            Gulf of Tonkin Resolution by the U.S. Congress on August 5, 1964. It
            authorized President Johnson to take any measures he believed were
            necessary to retaliate and to promote the maintenance of
            international peace and security in southeast Asia. This resolution
            became the legal basis for the Johnson and Nixon Administrations’
            prosecution of the Vietnam War.
          </p>
          <div className=" img-class	">
            <img
              className="border-2 border-black"
              src="images\11_vietnam_war.jpg"
              alt="Lottery 1969"
              width="880px"
            />
            <span className="text-sm leading-none">
              US Soldiers in Vietnam - Wikipedia (Public Domain)
            </span>
          </div>
          <p className="para-std ">
            Every year onward, there was significant build-up of U.S forces,
            despite little progress. U.S Secretary of Defense Robert McNamara,
            one of the principal architects of the war, began expressing doubts
            of victory by the end of 1966. U.S. and South Vietnam forces relied
            on air superiority and overwhelming firepower to conduct search and
            destroy operations, involving ground forces, artillery, and
            airstrikes. The U.S. also conducted a large-scale strategic bombing
            campaign against North Vietnam and Laos.
          </p>
          <div className=" img-class	">
            <img
              className="border-2 border-black "
              src="images\A-6A_Intruders_drop_bombs_over_vietnam _1968_BW_.webp"
              alt="US Bombers Vietnam"
              width="980px"
            />
            <span className="text-sm leading-none">
              Two U.S. Navy A-6A Intruder aircraft dropping Mk 82 227 kg (500
              lbs) bombs over Vietnam 1968, U.S. Navy National Naval Aviation
              Museum (Public Domain)
            </span>
          </div>
          <p className="para-std ">
            Since North Vietnam was supported by the Soviet Union, China, and
            other communist allies and South Vietnam was supported by the United
            States, South Korea, the Philippines, Thailand, and other
            anti-communist allies, the war was seen as an extension of the Cold
            War.
          </p>

          <p className="para-std ">
            The Tet Offensive of 1968 showed the lack of progress with these
            doctrines. With the VC and PAVN mounting large-scale urban
            offensives throughout 1968, U.S domestic support for the war began
            fading. The Army of the Republic of Vietnam (ARVN) expanded
            following a period of neglect after Tet and was modeled after U.S
            doctrine. The VC sustained heavy losses during the Tet Offensive and
            subsequent U.S.-ARVN operations in the rest of 1968, losing over
            50,000 men. The CIA's Phoenix Program further degraded the VC's
            membership and capabilities. By the end of the year, the VC
            insurgents held almost no territory in South Vietnam, and their
            recruitment dropped by over 80% in 1969, signifying a drastic
            reduction in guerrilla operations, necessitating increased use of
            PAVN regular soldiers from the north.
          </p>
          <div className=" img-class	">
            <img
              className="border-2 border-black "
              // src='images\US Soldiers vietnam war flickr by manhhai (1).webp'
              src="images\19vietnam-web-NYT_ARVN_cropped.jpg"
              alt="US Soldiers Vietnam"
              width="980px"
            />
            <span className="text-sm leading-none">NY Times</span>
          </div>
          <p className="para-std ">
            The ARVN, buttressed by said U.S. support, stopped the largest and
            first mechanized PAVN offensive to date during the Easter Offensive
            of 1972.The offensive resulted in heavy casualties on both sides and
            the failure of the PAVN to subdue South Vietnam, but the ARVN itself
            failed to recapture all territory, leaving its military situation
            difficult.
          </p>
          <p className="para-std ">
            The Paris Peace Accords of January 1973 saw all U.S forces
            withdrawn; the Case–Church Amendment, passed by the U.S Congress on
            15 August 1973, officially ended direct U.S military involvement.
            The Peace Accords were broken almost immediately, and fighting
            continued for two more years. Phnom Penh fell to the Khmer Rouge on
            17 April 1975 while the 1975 Spring Offensive saw the capture of
            Saigon by the PAVN on 30 April; this marked the end of the war, and
            North and South Vietnam were reunified the following year.
          </p>
          <p className="para-std ">
            The conflicting world views and political ambitions of the U.S. and
            the Soviet Union, which contributed to the escalating involvement of
            the U.S. in the Vietnam War, had their genesis in post-war Germany.
            Fundamental philosophical differences regarding how people should be
            governed, at the root of the conflict in Vietnam, were earlier made
            manifest to the world in post-war Berlin.
          </p>

          <h1 className="h1-std"> My Decision to Join the Army</h1>
          <p className="para-std">
            On December 3, 1969, at the height of American involvement in the
            Vietnam War, I joined the U.S. Army. As with most decisions, my
            choices were remarkably few. I could enlist, live with the
            uncertainty of the draft, or evade military service altogether. The
            events and convictions that influenced my decision were varied,
            complex, and mostly out of my control.
          </p>
          <h2 className="h2-std">What's Your Number?</h2>
          <p className=" para-std ">
            The timing of my decision was determined primarily by the outcome of
            a lottery. On December 1, 1969, at Selective Service National
            Headquarters in Washington, D.C., a nationally televised lottery
            determined the "order of call" for induction into military service
            for 1970. The lottery was established to address perceived
            inequities in the "oldest man first" method for conscripting
            civilians.
          </p>
          <div className=" img-class	">
            <img
              src="images/Draft Lottery glass bowl Pirnie.jpg"
              width="940px"
              alt="Lottery 1969"
            />
            <span className="text-sm leading-none">(Library of Congress)</span>
          </div>
          <h2 className="h2-std">The Process</h2>
          <p className="para-std">
            366 opaque plastic capsules, each containing a slip of paper with a
            number from 1 to 366 representing each day of the year (366 to
            account for those born on February 29th during leap years), were
            placed in a large glass container and drawn by hand. The number in
            each capsule represented the birth date of each eligible registrant.
          </p>
          <p className="para-std">
            {" "}
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
          <h2 className="h2-std">The Results</h2>
          <p className="para-std">
            My birth date, November 27, 1947, was on the 47th capsule chosen.
          </p>
          <div className=" img-class	">
            <img
              className="border-2 border-black"
              src="images/lottery-card-1970-marked.jpg"
              alt="Lottery 1969"
              width="880px"
            />
            <span className="text-sm leading-none ">1970 Results.</span>
          </div>
          <h2 className="h2-std">Seeking Advice</h2>
          <p className="para-std ">
            I decided to get an expert opinion on how long I had until I was
            likely to be drafted. So, on December 3rd, I visited the local Army
            recruitment office in Midland Park, NJ,
            <b>"You might make it to February."</b> the Recruitment Officer said
            after I told him that my lottery number was 47.
          </p>
          <div className="img-class ">
            <img
              className="border-2 border-black"
              src="images/Enlisting.webp"
              alt="Lottery 1969"
              width="880px"
            />
            <span className="text-sm leading-none">U.S. Army Recruiter</span>
          </div>
          <p className="para-std">
            I asked him if there was any benefit in volunteering rather than
            waiting to be drafted. He said that my military records would show
            that I was "RA" (Regular Army volunteer) rather than "US,"
            indicating draftee status. He suggested that the Drill Instructors
            (DI) at Basic Training might treat volunteers better than draftees.
          </p>
          {/* <p className="mx-auto my-3 p-2 w-[calc(100%-100px)] max-w-[600px] text-xl ">  */}
          <p className="para-std">
            He also said that enlisting would allow me to schedule my induction
            rather than be in a constant state of anticipation. If my RA status
            had a positive impact during my Army career, it certainly wasn't
            obvious during Basic Training.{" "}
          </p>
          <h2 className="h2-std">The Decision</h2>
          <p className="para-std">
            I signed up and scheduled my induction for February 2, 1970.
          </p>
          <img
            className="max-w-[17em] -my-6 mx-auto mt-2"
            src="\media\SectionSeperatorShort.svg"
            alt="divider"
          />
          <h1 className="h1-std ">How Did I Get Here?</h1>
          <img
            className="max-w-[17em] mx-auto -my-5 rotate-180"
            src="\media\SectionSeperatorShort.svg"
            alt="divider"
          />
          <div className=" img-class  img-cap	">
            <img
              className=""
              src="images/JTAlicewithCCat500.webp"
              alt="Alice and the Cat"
              width="980px"
            />
            <div
              className="leading-tight  ml-[162px]  mb-[1em] -mt-[310px] w-[28ch] text-sm  
          mobile:leading-normal  mobile:ml-[280px] mobile:-mt-[470px] mobile:w-[29ch] mobile:text-lg  tablet:leading-tight   tablet:ml-[290px] tablet:-mt-[490px] tablet:w-[26ch] tablet:text-xl  	"
            >
              <div className="py-1">
                `Would you tell me, please, which way I ought to go from here?'
              </div>
              <div className="py-1 px-2">
                `That depends a good deal on where you want to get to,' said the
                Cat.{" "}
              </div>
              <div className="py-2">
                `I don't much care where--' said Alice.
              </div>
              <div className="py-1 px-2">
                {" "}
                `Then it doesn't matter which way you go,' said the Cat.{" "}
              </div>
              <div className="py-2">
                `--so long as I get SOMEWHERE,' Alice added as an explanation.
              </div>
              <div className="py-1 px-2 [counter-reset:section]">
                `Oh, you're sure to do that,' said the Cat, `if you only walk
                long enough{" "}
                <Footnote
                  number={<FaCross />}
                  text={
                    <span className="para-fnote">
                      <br /> Illustrations by John Tenniel.
                      Alice-in-wonderland.net Page 30.
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
                    </span>
                  }
                />
              </div>
            </div>
          </div>
          {/* <div className="ml-2 	text-center"> */}
          {/* </div> */}
          <p className="para-std">
            Like Alice, I had no clear idea of where I wanted to "get to" in the
            years and months leading to my enlistment. The war in Vietnam, the
            university I attended, the courses I took, the interests I
            developed, and the experiences I had that led directly to my
            enlistment decision were not planned,
            <b>at least not by me</b>.
          </p>

          <h3 className="h3-std"> What was I getting into?</h3>
          <p className="para-std ">
            At the time I made my decision to join the Army in December 1969,
            the world's attention was firmly focused on the war in Vietnam. At
            that time, the casualty figures exceeded 1.5 million people killed
            (50,000 U.S., 254,000 South Vietnamese, 849,000 North Vietnamese
            military personnel, and 400,000 North and South Vietnamese
            civilians).
            <Footnote
              number={<FaCross />}
              text={
                <p className="para-fnote">
                  <br />
                  Wikipedia contributors, "Vietnam War casualties,"{" "}
                  <span className="italic">
                    Wikipedia, The Free Encyclopedia,
                  </span>
                  <br />
                  <br />
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://en.wikipedia.org/w/index.php?title=Vietnam_War_casualties&oldid=1062906270"
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    https://en.wikipedia.org/w/index.php?title=Vietnam_War_casualties&oldid=1062906270
                  </a>
                  {/* <br /> */}
                </p>
              }
            />
          </p>
          <h3 className="h3-std"></h3>
          <p className="para-std ">
            The Pervasive Undercurrent of the Cold War.
          </p>
          <p className="para-std "></p>
          <p className="para-std "></p>
          <p className="para-std "></p>
          <p className="para-std ">
            “Cold War” confrontations between the Soviet Union and the United
            States that took place in the 60s not only influenced my decision to
            join the Army but also greatly impacted my life in Berlin. These
            events were born of distrust that began before the “allies” defeated
            Hitler’s Germany in World War II.{" "}
            <Footnote
              number={<FaCross />}
              text={
                <p className="para-fnote">
                  <br />
                  Caulfield, J. (2020). The grand alliance during World War II.
                  The National WWII Museum.
                  https://www.nationalww2museum.org/war/articles/big-three.
                  <br />
                  <br />
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://www.nationalww2museum.org/war/articles/big-three#:~:text=In%20World%20War%20II%2C%20the,the%20war%20should%20be%20fought."
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    https://www.nationalww2museum.org/war/articles/big-three.
                  </a>
                  {/* <br /> */}
                </p>
              }
            />
          </p>
          <h2 className="h2-std">Cold War Flashpoints Deepen Distrust</h2>
          <p className="para-std ">
            Berlin airlift Goes here Sww
            https://www.defense.gov/News/Inside-DOD/Blog/Article/2062719/the-berlin-airlift-what-it-was-its-importance-in-the-cold-war/
          </p>
          <p className="para-std ">
            Events like the U-2 spy plane incident, the isolation of Berlin by
            the Berlin wall, the showdown at the wall between USSR and US tanks,
            and the Cuban missile crisis, and even the Vietnam War, can be
            traced back to the distrust between the US and US.{" "}
            <Footnote
              number={<FaCross />}
              text={
                <span className="para-fnote">
                  "Race Riots of the 1960s ." U*X*L Encyclopedia of U.S.
                  History. . Encyclopedia.com. (August 22, 2023).
                  https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/race-riots-1960s
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/race-riots-1960s"
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    https://www.nationalww2museum.org/war/articles/big-three..
                  </a>
                  {/* <br /> */}
                </span>
              }
            />
          </p>
          <h3 className=" h3-box">1960 to 1962 - Cold War Confrontations </h3>
          <h4 className="h4-headline ">
            May 1 - U.S. Spy Plane Shot Down over USSR
          </h4>
          <p className="para-std">
            The ongoing Cold War between the Soviet Union and the western
            allies, three major political assassinations, the nation-wide racial
            violence, and the escalation of the Vietnam War all played a major
            role in my decision.
          </p>
          <div className="img-class  img-cap ">
            <img
              className="border-2 border-black "
              src="images/First-U-2.jpg"
              alt="U2"
              width="980px"
            />
            <span className="text-sm leading-none ">
              U2 Spy Plane Photo credit: U.S. Air Force
            </span>
          </div>
          <p className="para-std">
            On May 1, 1960 a CIA U-2 Spy Plane, flown by Francis Gary Powers,
            was shot down by the Soviet air defense forces while performing
            photographic aerial reconnaissance deep inside Soviet territory.
            This incident was a significant international embarrassment to the
            United States. It came at a very sensitive time in the developing
            Cold War between the United States and the Soviet Union.
          </p>
          <h4 className="h4-headline ">
            August 13, 1961 – Berlin Wall Isolates West Berlin.
          </h4>
          <p className="para-std">
            In an effort to stem the flow of immigrants, especially those who
            were young well-educated, Soviet Union began building the Berlin
            Wall.
          </p>
          <p className="para-std">
            <span className="font-bold"> Rewrite this section </span>- "On
            Saturday, 12 August 1961, the leaders of the GDR attended a garden
            party at a government guesthouse in Döllnsee, in a wooded area to
            the north of East Berlin. There, Ulbricht signed the order to close
            the border and erect a wall. At midnight, the police and units of
            the East German army began to close the border and, by Sunday
            morning, 13 August, the border with West Berlin was closed. East
            German troops and workers had begun to tear up streets running
            alongside the border to make them impassable to most vehicles and to
            install barbed wire entanglements and fences along the 156 km (97
            mi) around the three western sectors, and the 43 km (27 mi) that
            divided West and East Berlin.[59] The date of 13 August became
            commonly referred to as Barbed Wire Sunday in Germany."
            <Footnote
              number={<FaCross />}
              text={
                <span className="para-fnote ">
                  Wikipedia contributors, "Berlin Wall," Wikipedia, The Free
                  Encyclopedia,
                  https://en.wikipedia.org/w/index.php?title=Berlin_Wall&oldid=1177818029
                  (accessed September 30, 2023).
                  <br />
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://en.wikipedia.org/wiki/Berlin_Wall#"
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    https://en.wikipedia.org/wiki/Berlin_Wall#
                  </a>
                  <br />
                </span>
              }
            />
          </p>
          <div className="img-class  img-cap ">
            <img
              className="border-2 border-black "
              src="images/Leap_into_Freedom.jpeg"
              alt="Leap for freedom"
              width="980px"
            />
            <span className="text-sm leading-none ">
              By Peter Leibing - Time: 100 Photographs: The Most Influential
              Images of All Time: Leap into FreedomOriginally distributed by the
              Associated Press and published in numerous newspapers. See for
              example the Globe-Gazette.Cropped from the source image to the
              portion that was published in newspapers., PD-US,
              https://en.wikipedia.org/w/index.php?curid=71522903
            </span>
          </div>
          <div className="img-class  img-cap ">
            <img
              className="border-2 border-black "
              src="images/Berlin_Wall_1961-11-20.webp"
              alt="Leap for freedom"
              width="980px"
            />
          </div>
          <h4 className="h4-headline ">
            October 27 – Soviet and American Tanks Faceoff in Berlin.
          </h4>
          <p className="para-std">
            "On October 27, 1961, combat-ready American and Soviet tanks faced
            off in Berlin at the U.S. Army\'s Checkpoint Charlie. Tensions
            between the United States and the Soviet Union over access to the
            outpost city of Berlin and its Soviet-controlled eastern sector had
            increased to the point of direct military confrontation."{" "}
            <div className="img-class  img-cap ">
              <img
                className="border-2 border-black "
                src="images/US Soviet tank confrontation religion 1961.webp"
                alt="U2"
                width="980px"
              />
              <span className="text-sm leading-none ">
                Soldiers from the U.S. Army Berlin Command face off against
                police from the former East Germany during one of several
                standoffs at Checkpoint Charlie in 1961. On several occasions
                that year, a U.S. quick reaction force of tanks and infantry
                Soldiers ... (Photo Credit: U.S. Army){" "}
                <Footnote
                  number={<FaCross />}
                  text={
                    <p className="para-fnote">
                      Hendrix, Thomas L. Standoff in Berlin, October 1961.
                      <br />
                      <a
                        target="blank"
                        rel="noopener noreferrer"
                        href="https://www.army.mil/article/46993/standoff_in_berlin_october_1961"
                        className="
                        text-blue-600
                        visited:text-purple-600"
                      >
                        https://www.army.mil/article/46993/standoff_in_berlin_october_1961
                      </a>
                      <br />
                    </p>
                  }
                />
              </span>
            </div>
          </p>
          <h4 className="h4-headline ">
            November 20,1961 – East German workers building the Berlin Wall.
          </h4>
          <div className="img-class  img-cap ">
            <img
              className="border-2 border-black "
              src="images/Berlin_Wall_1961-11-20.webp"
              alt="U2"
              width="980px"
            />
            <span className="text-sm leading-none ">
              East German construction workers building the Berlin Wall, 20
              November 1961
            </span>
          </div>
          <h3 className=" h3-box">1962 to 1965 - High School Years</h3>
          <h4 className="h4-headline ">
            September 1962 – First Year of High School
          </h4>
          <p className="para-std">
            From September 1962 to June 1965, I attended high school in
            Ridgewood, New Jersey. Unlike many typical high schools in northern
            New Jersey, Ridgewood high school was a three-year school covering
            grades 10 through 12. So, I attended grade nine at the George
            Washington middle school, about a mile from our house.
          </p>
          <div className=" my-5 mx-auto  w-[calc(100%-40px)] max-w-[740px]	">
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
          <h4 className="h4-headline ">
            October 16 to November 20, 1962 - Cuban Missile Crisis
          </h4>
          <p className="para-std">
            On October 17, 1962, every network brought news that a U.S. U2 spy
            plane photographed evidence that as many as 32 Soviet-built
            medium-range ballistic missiles capable of delivering a nuclear
            warhead to any location within a 1,600-mile radius were already in
            Cuba with more on the way. In response, President Kennedy
            established an Executive Committee of the National Security Council
            comprised of top officials of the U.S. Departments of Defence,
            State, the CIA, and other national security experts.
            <Footnote
              number={<FaCross />}
              text={
                <div className=" para-fnote ">
                  <p className="para-fnote">
                    “CUBAN MISSILE CRISIS” Accessed February 11, 2022.
                    <br />
                    <a
                      target="blank"
                      rel="noopener noreferrer"
                      href="https://www.jfklibrary.org/learn/about-jfk/jfk-in-historycuban-missile-crisis"
                      className="
                  text-blue-600
                  visited:text-purple-600"
                    >
                      {" "}
                      https://www.jfklibrary.org/learn/about-jfk/jfk-in-history/cuban-missile-crisis
                    </a>
                  </p>
                  <p className="para-fnote">
                    Britannica, T. Editors of Encyclopaedia. "Cuban missile
                    crisis." Encyclopedia Britannica, December 20, 2021.
                    <br />
                    <a
                      target="blank"
                      rel="noopener noreferrer"
                      href="https://www.britannica.com/event/Cuban-missile-crisis"
                      className="
                  text-blue-600
                  visited:text-purple-600"
                    >
                      https://www.britannica.com/event/Cuban-missile-crisis
                    </a>
                  </p>
                  <p className="para-fnote">
                    Schwarz, Benjamin, Janury/February 2013 Issue, The Real
                    Cuban Missile Crisis.The Atlantic.
                    <br />
                    <a
                      target="blank"
                      rel="noopener noreferrer"
                      href="https://www.theatlantic.com/magazine/archive/2013/01/the-real-cuban-mssile-crisis/309190/"
                      className="
                  text-blue-600
                  visited:text-purple-600"
                    >
                      https://www.theatlantic.com/magazine/archive/2013/01/the-real-cuban-mssile-crisis/309190/
                    </a>
                  </p>
                </div>
              }
            />
          </p>
          <div className="img-class  img-cap  ">
            <img
              className="border-2 border-black "
              src="images/Cuban Missle Crisis Stevenson at UN.webp"
              alt="Cuban Missile Crisis"
              width="980px"
            />
            <p className=" px-8">
              (Confrontation at the United Nations, October 25, 1962: deputy
              NPIC director David Parker points out the photographic evidence
              while U.S. ambassador Adlai Stevenson (at right) describes the
              photos. USSR ambassador Valerian Zorin is presiding at far left.
              (National Security Archives))
            </p>
          </div>
          <p className="para-std">
            The President received advice on the most appropriate response
            ranging from a direct attack on the missile sites to a blockade of
            the island nation. Arguing for the direct attack approach, Air Force
            Chief General Curtis LeMay stated, “They'll do nothing," in response
            to the President's question about a Soviet response to a direct
            attack. Kennedy responded: "Are you trying to tell me they'll let us
            bomb their missiles and kill a lot of Russians and then do nothing?
            If they don't do anything in Cuba they'll certainly do something in
            Berlin."
          </p>
          <p className="para-std">
            Secretary of Defense Robert McNamara proposed that a blockade of
            Cuba would put pressure on the Soviets but give them time to
            reconsider and deescalate. It would also provide the U.S. with time
            to prepare for more aggressive action if warranted. McNamara noted
            that surgical airstrikes were not practical unless followed by an
            invasion.
          </p>
          <div className="img-class  img-cap">
            <img
              className="border-2 border-black "
              src="images/P-2H_Neptune_over_Soviet_ship_Oct_1962 (1).webp"
              alt="Van Dyks Ice Cream Ridgewwod NJ"
              width="980px"
            />
            <span className="text-sm leading-none">
              (A US Navy P-2H Neptune anti-submarine warfare (ASW) aircraft
              monitors a Soviet cargo ship. (Public Domain))
            </span>
          </div>
          <p className="para-std">
            President Kennedy decided on a plan based upon McNamara's advice and
            ordered a total naval "quarantine" of Cuba, declaring that the U.S.
            would prevent any ship carrying offensive weapons from reaching
            Cuba. There was a real possibility that the U.S. Navy would forcibly
            stop and board Soviet ships and that war would ensue. Eventually,
            the two nations negotiated the total removal of missiles and the
            destruction of the launch facilities.
          </p>
          <h5 className="h4-headline ">
            September 15, 1963 - Birmingham Bombings ignite a decade of
            violence.
          </h5>
          <p className="para-std">
            As I began my second year of high school, Birmingham, Alabama, was
            rocked by a terrorist bomb that killed four little girls aged 11 to
            14 as they prepared for Sunday services at the 16th Street Baptist
            Church. This bombing was just the latest in a series that took place
            beginning in 1948. Forty-eight such bombings were reported in
            Birmingham between 1948 in 1957. In one month in 1957, four black
            churches and at least seven private residences were bombed.
            <Footnote
              number={<FaCross />}
              text={
                <div className=" para-fnote ">
                  <p className="para-fnote">
                    “16th Street Baptist Church Bombing (1963)”. Accessed
                    September 26, 2023.
                    <a
                      target="blank"
                      rel="noopener noreferrer"
                      href="https://www.nps.gov/articles/16thstreetbaptist.htm"
                      className="
                  text-blue-600
                  visited:text-purple-600"
                    >
                      https://www.nps.gov/articles/16thstreetbaptist.htm
                      <br />
                    </a>
                  </p>

                  <p className="para-fnote">
                    CNN Editorial Research. September 14, 2023. “1963 Birmingham
                    Church Bombing Fast Facts.”
                    <a
                      target="blank"
                      rel="noopener noreferrer"
                      href=" https://www.cnn.com/2013/06/13/us/1963-birmingham-church-bombing-fast-facts/index.html"
                      className="
                  text-blue-600
                  visited:text-purple-600"
                    >
                      https://www.cnn.com/2013/06/13/us/1963-birmingham-church-bombing-fast-facts/index.html
                      <br />
                    </a>
                  </p>
                  <p className="para-fnote">
                    Morgan, DeMarco et al, September 15, 2023 "Birmingham church
                    bombing survivor reflects on 60th anniversary of attack".
                    <a
                      target="blank"
                      rel="noopener noreferrer"
                      href="https://abcnews.go.com/US/birmingham-church-bombing-survivor-reflects-60th-anniversary-attack/story?id=103217582"
                      className="
                  text-blue-600
                  visited:text-purple-600"
                    >
                      https://abcnews.go.com/US/birmingham-church-bombing-survivor-reflects-60th-anniversary-attack/story?id=103217582
                      <br />
                    </a>
                  </p>
                  <p className="para-fnote">
                    Gado, Mark (2007). "Bombingham". CrimeLibrary.com/Court TV
                    Online. Archived from the original on August 18, 2007.
                    <a
                      target="blank"
                      rel="noopener noreferrer"
                      href="https://web.archive.org/web/20070818222057/http://www.crimelibrary.com/terrorists_spies/terrorists/birmingham_church/3.html"
                      className="
                  text-blue-600
                  visited:text-purple-600"
                    >
                      https://web.archive.org/web/20070818222057/http://www.crimelibrary.com/terrorists_spies/terrorists/birmingham_church/3.html
                      <br />
                    </a>
                  </p>
                </div>
              }
            />
          </p>
          <div className="img-class img-cap ">
            <img
              className="border-2 border-black "
              src="images/16th street church birminghamLOC BW.jpg"
              alt="Four Girls Murdered in Birmingham 1963"
              width="980px"
            />
            <span className="text-sm  leading-none">
              (16th Street Church, Birminham, AL (Librarry of Congress) )
            </span>
          </div>
          <div className="img-class img-cap ">
            <img
              className="border-2 border-black "
              src="images/16th Street Church bombed 1963 outside view.jpg"
              alt="Four Girls Murdered in Birmingham 1963"
              width="980px"
            />
            <span className="text-sm leading-none">
              (The crater and other damage caused by the bombing of the
              Sixteenth Street Baptist Church, which killed four
              African-American girls. AP Photo. )
            </span>
          </div>
          <div className="img-class img-cap ">
            <img
              className="border-2 border-black "
              src="images/birmingham riots dogs.webp"
              alt="Dogs attack protesters in Birmingham"
              width="980px"
            />
            <span className="text-sm  leading-none">
              (Dogs attack protesters in Birmingham, AL - By Bill Hudson, of the
              Associated Press)
            </span>
          </div>
          <h5 className="h4-headline ">
            November 22, 1963 - President John F. Kennedy Assassinated in
            Dallas, TX,
          </h5>
          <p className="para-std">
            On November 22, 1963, President John F. Kennedy was assassinated in
            Dallas, TX. I remember being in the Ridgewood, NJ Highschool
            cafeteria when a news broadcast could suddenly be heard over the PA
            system reporting that the President had been shot. There was a
            stunned silence as we all tried to make sense of what we heard
            <Footnote
              number={<FaCross />}
              text={
                <p className="para-fnote">
                  Robert Siegel, "Walter Cronkite On The Assassination Of John
                  F. Kennedy," NPR News All Things Considered, Washington, DC,
                  November 22, 2013 4:22 PM ET.
                  <br />
                  <br />
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://www.npr.org/transcripts/246628793"
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    https://www.npr.org/transcripts/246628793
                    <br />
                    <br />
                  </a>
                </p>
              }
            />
          </p>
          <div className="img-class img-cap ">
            <img
              className="border-2 border-black "
              src="images/JFK_limousine BW.webp"
              alt="JFK at Dealey Plaza"
              width="980px"
            />
            <span className="text-sm leading-none">
              (President Kennedy motorcade in Dallas, Texas, on Main Street,
              minutes before the assassination. November 22, 1963 (Public
              Domain))
            </span>
          </div>
          <h5 className="h4-headline ">
            September 15, 1963 - Birmingham Bombings ignite a decade of
            violence.
          </h5>
          <p className="para-std">
            Over the next five years, riots fueled by racial injustice rocked
            the U.S. Riots began in Birmingham, Alabama (1963), reignited in
            Harlem in New York City (1964), spread to Watts in Los Angeles
            (1965), then to Chicago (1966). During the "long hot summer" of
            1967, riots erupted in Atlanta, Cincinnati, Detroit, Boston,
            Buffalo, Milwaukee, Minneapolis, Newark, NJ, Plainfield, NJ,
            Rochester, NY, Tampa Bay, FL, and Toledo, OH. It seemed that things
            couldn't get much worse. But they did!
          </p>
          <div className="img-class img-cap ">
            <img
              className="border-2 border-black "
              src="images\Watts_car_flipped.webp"
              alt="Watts Riots"
              width="980px"
            />
            <span className="text-sm leading-none">
              Burned out cars during Watts Riots of August 1965 (Public Domain)
            </span>
          </div>
          <p className="para-std ">
            Amid violence, Dr. Martin Luther King worked to turn the violent
            protests non-violent in hopes of realizing his dream of a nation
            dedicated to peace and justice for all people. Just five years after
            his hopeful "I have a dream" speech, Dr. King was assassinated by a
            white man.
            <Footnote
              number={<FaCross />}
              text={
                <p className="para-fnote">
                  King, Martin L. “I Have a Dream.” Speech presented at the
                  March on Washington for Jobs and Freedom, Washington, D.C.,
                  August 1968.
                  <br />
                  <br />
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://static.pbslearningmedia.org/media/media_files/Full_text_I_Have_a_Dream_.pdf"
                    className="
                  text-blue-600
                  visited:text-purple-600"
                  >
                    "https://static.pbslearningmedia.org/media/media_files/Full_text_I_Have_a_Dream_.pdf"
                    <br />
                    <br />
                  </a>
                </p>
              }
            />
            <div className="img-class img-cap ">
              <img
                className="border-2 border-black "
                src="images\Martin_Luther_King_Jr_delivering_I_have_a_dream_speech_March_on_Washington_August_28_1963.jpg"
                alt="MLK Dream Speach"
                width="980px"
              />
              <span className="text-sm leading-none">
                Martin Luther King, Jr., delivering "I have a dream" speech,
                March on Washington, August 28, 1963 Courtesy U.S. Library of
                Congress (2013645765) (Public Domain)
              </span>
            </div>
          </p>
          <div className="img-class  img-cap ">
            <img
              className="border-2 border-black "
              src="images/MLK Shooting.webp"
              alt="MLK Shot"
              width="980px"
            />
            <span className="text-sm leading-none ">
              Martin Luther King Jr. was fatally shot at the Lorraine Motel in
              Memphis, Tennessee, on April 4, 1968.
            </span>
          </div>
          <h4 className="h4-headline ">Bobbby Kennedy goes here</h4>
          <div className="img-class  img-cap ">
            <img
              className="border-2 border-black "
              src="images/RFK Speech.webp"
              alt="RFK Shot"
              width="980px"
            />
            <span className="text-sm leading-none ">
              Sen. Robert Kennedy speaks at an election rally in 1968..
            </span>
          </div>
          <div className="img-class  img-cap ">
            <img
              className="border-2 border-black "
              src="images/Rfk_assassination.jpg"
              alt="RFK Shot"
              width="980px"
            />
            <span className="text-sm leading-none ">
              RFK immediately after he was shot at the Ambassador Hotel in Los
              Angeles, California on June 5, 1968.
            </span>
          </div>
          <p className="para-std ">
            At the forefront of my mind during this period were sports,
            developing friendships, the relatively new technologies of
            television and transistor radios. The significance of these 2
            technologies not be underestimated. For the first time in history,
            events anywhere in the world could be seen on the evening news in
            your living room. Transistor radios, and later, portable cassette
            and 8-Track Tape players, made it possible to be constantly
            influenced by the music base culture of the world.
            <div className="img-class img-cap ">
              <img
                className="border-2 border-black "
                src="images/8-tracks (i pinimg).jpg"
                alt="8 track tape player in the car"
                width="980px"
              />
              <span className="text-sm leading-none">
                8-Track Tape Player in car.
              </span>
            </div>
          </p>
          <h3 className=" h3-box">1962 to 1965 - My Highschool Years </h3>
          <p className="para-std">
            I had an unremarkable career there. I could get by with minimum
            effort, and, to my later shame, a minimum effort is what I gave. I
            was more interested in my activities away from school. From 6th
            grade until high school, my closest friend, Dick Gilmour, and I
            would spend a lot of time together after school building model cars,
            reading Mad Magazine, and riding our bicycles around the
            neighborhood.
          </p>
          <div className=" my-5 mx-auto  w-[calc(100%-40px)] max-w-[740px]	">
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
          <p className="para-std">
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
          <div className=" my-5 mx-auto  w-[calc(100%-40px)] max-w-[740px]	">
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
          <p className="para-std">
            While we were able to enjoy a great deal of freedom without much
            responsibility, we were certainly aware of the political, social,
            and cultural events going on around us. The proliferation of
            television sets across the United States brought news of these
            events into our homes every night.
          </p>
          <h2 className="h2-std">Off to College -September 1964</h2>
          <p className="para-std">
            As an example of how little control we have over our lives, I
            attended Loyola University in New Orleans because I had received an
            acceptance letter from them in the spring of 1965, even though I had
            never officially applied.
          </p>
          <p className="para-std">
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
          <div className=" my-5 mx-auto  w-[calc(100%-40px)] max-w-[740px]	">
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
          <p className="para-std">
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
          <h3 className="h3-std">A Change in Direction</h3>
          <p className="para-std">
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
          <p className="para-std">
            During this same time, Loyola worked with WWL executives to
            introduce a new BA program in Communications (later named Bachelor
            of Arts in Mass Communications) at Loyola. I transferred to that
            program.
          </p>
          <div className=" my-5 mx-auto  w-[calc(100%-40px)] max-w-[740px]	">
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
          <p className="para-std">
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
          <div className=" my-5 mx-auto  w-[calc(100%-40px)] max-w-[740px]	">
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
          <p className="para-std">
            After the Department of Communications and changing my major, I was
            able to take courses in TV writing, directing, announcing, and
            camera operation. At the start of my senior year, I was named Senior
            Operations Director for the radio station now named WLDC . These
            skills were to come in handy when I finally got to Berlin.
          </p>
          <p className="para-std">
            I also joined the ROTC was a member of the competitive rifle team,
            and the Drill Team. As far as I know, neither one of these
            activities.
          </p>
          <div className=" my-5 mx-auto  w-[calc(100%-40px)] max-w-[740px]	">
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
  )
}

export default Decision
