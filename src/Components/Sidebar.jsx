import React, { useState } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
// import { isCompositeComponentWithType } from 'react-dom/test-utils';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {!isOpen ? (
        <FaBars
          className="mobileopen fixed  right-2 top-2 z-30	 flex h-[18px] w-[18px] cursor-pointer bg-gray-500  fill-white stroke-0 	tablet:h-[32px] tablet:w-[32px]"
          onClick={() => setIsOpen(!isOpen)}
        ></FaBars>
      ) : (
        <FaTimes
          className="mobileclose  fixed right-2 top-2 z-50 h-[18px] w-[18px] cursor-pointer  fill-red-400 stroke-2 tablet:h-[32px] tablet:w-[32px]"
          onClick={() => setIsOpen(!isOpen)}
        ></FaTimes>
      )}

      <div
        className={`navbar fixed top-0 right-0 z-40   h-full w-full  bg-[#ccc9bc] p-10 mobile:w-[63%] tablet:w-[35%]  ${
          isOpen ? "translate-x-0" : "translate-x-full  "
        } duration-300 ease-in-out`}
      >
        <p className="-mt-6  text-3xl font-bold  ">Pages</p>

        <nav className="">
          <div className="mt-4 ml-4 flex flex-col  space-y-3 text-2xl leading-relaxed	  font-bold landscape:mt-6 landscape:grid landscape:grid-cols-2 mobile:landscape:flex ">
            <CustomLink to="/Decision">&#8883; The Decision to Join</CustomLink>

            <CustomLink to="/Beginning">
              &#8883; The Adventure Begins
            </CustomLink>
            <CustomLink to="/Training">&#8883; Training</CustomLink>

            <CustomLink to="/InBerlin">&#8883; Life In Berlin</CustomLink>

            <CustomLink to="/BOarticles">&#8883; My Journalism</CustomLink>

            <CustomLink to="/MyPhotos">&#8883; My Photos</CustomLink>

            <CustomLink to="/Backstory">&#8883; The Backstory </CustomLink>
            <CustomLink to="/PostWW2">&#8883; Hot War/Cold War</CustomLink>
            <CustomLink to="/Archives">&#8883; Archives</CustomLink>
            <CustomLink to="/About">&#8883; About</CustomLink>
          </div>
        </nav>
      </div>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <span className={isActive ? " text-red-600" : "text-black	 "}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </span>
  )
}
