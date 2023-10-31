export default function Header() {
  return (
    <>
      <div className="banner flex flex-col h-[180px]  justify-center z-20 w-full   ">
        <h1 className=" text-center mt-6  ipx:mt-0 text-3xl mobile:text-4xl text-bold italic font-medium tablet:text-5xl  ">
          An Unexpected Adventure
        </h1>
        <h2 className=" text-center text-[22px] mobile:text-[28px] italic my-4 tablet:text-3xl">
          Larry Maloney
        </h2>

        <div className="seperator my-4 w-full h-[1px] bg-black"></div>
      </div>
    </>
  )
}
