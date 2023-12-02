import { useNavigate } from "react-router-dom"
import { FaRegFilePdf } from "react-icons/fa6"
import { FaChevronLeft } from "react-icons/fa6"

export default function Artfooter() {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex space-x-20">
        <button
          className="flex items-center"
          onClick={() => {
            navigate("/BOarticles")
          }}
        >
          <div className="flex items-center font-bold  rounded-lg   px-4 py-1 ">
            <FaChevronLeft className="h-9 w-auto items-center ">
              {"   "}
            </FaChevronLeft>
            <p className="p-4">Back to Articles</p>
          </div>
        </button>
        <button className="max-w-[420px] mb-10  h-[50px]   p-3 text-black ">
          <a
            href="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N30_jul30 1971.pdf"
            target="blank"
          >
            <div className="flex  items-center font-bold  rounded-lg bold border-2 border-black px-4 py-1 outline-double">
              <FaRegFilePdf className="h-9 w-auto items-center ">
                {" "}
              </FaRegFilePdf>
              <p className="p-4">Full July 30, 1971 Edition</p>
            </div>
          </a>
        </button>
      </div>
    </>
  )
}
