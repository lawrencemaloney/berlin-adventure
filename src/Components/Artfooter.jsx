import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { FaRegFilePdf } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Artfooter(props) {
  const navigate = useNavigate();

  return (
    <>
      {/* Article page footer"> */}

      <button className=" mb-20  h-[50px] pt-3 text-black ">
        <a href={props.fullpdf} target="blank">
          <div className="flex  items-center font-bold  rounded-lg bold border-2 border-black px-4 py-1 outline-double">
            <FaRegFilePdf className="h-9 w-auto items-center "> </FaRegFilePdf>
            <p className="p-4">{props.issuedate}</p>
          </div>
        </a>
      </button>
      {/* <div className=" mb-60  "> */}

      <button
        data={props.previoustitle}
        className=" z-30 tablet:hover:after:content-[attr(data)] tablet:hover:opacity-90 bg-stone-900 opacity-30 text-white p-2 rounded-full flex items-center fixed top-1/2 left-0 tablet:left-[14%]   font-bold   "
        onClick={() => {
          navigate(props.previouspage);
        }}
      >
        <div className="flex items-center font-bold rounded-lg ">
          <FaChevronLeft className="h-7 w-auto items-center ">
            {"   "}
          </FaChevronLeft>
          <p className="text-2xl font-bold"></p>
        </div>
      </button>
      <button
        data={props.nexttitle}
        className=" z-30 tablet:hover:before:content-[attr(data)] tablet:hover:opacity-90 bg-stone-900 opacity-30	 text-white p-2 rounded-full flex items-center fixed top-1/2 right-[14%]    font-bold   "
        onClick={() => {
          navigate(props.nextpage);
        }}
      >
        <p className=" text-2xl  font-bold"></p>

        <div className="   ">
          <FaChevronRight className="h-7 w-auto items-center ">
            {"   "}
          </FaChevronRight>
        </div>
      </button>
    </>
  );
}
