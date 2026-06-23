import React from "react"

import { IoHomeOutline } from "react-icons/io5";

const BreadCrumb = ({path}) => {
   const segments = path.split("/").filter(Boolean).slice(0, -1).map(item => item[0].toUpperCase() + item.slice(1))
   const crumbs = segments.length > 5 ? [...segments.slice(0, 3), "...", segments[segments.length - 1]] : segments;
  return (
      <nav className="h-20 px-5 py-2 rounded-lg flex items-center gap-4 overflow-x-auto">
        <div 
            className="
            h-10 px-2 py-2 hover:bg-blue-500/20 hover:text-blue-400
            flex justify-center items-center 
            text-lg font-semibold rounded-lg text-white
            "
          >
          <IoHomeOutline/>
          </div>
        {crumbs.map((segment, index) => (
            <React.Fragment key={index}>
            <span className="text-2xl text-center text-white"> {'>'} </span>
            <div 
                className="
                h-10 px-2 py-2 hover:bg-blue-500/20 hover:text-blue-400
                flex justify-center items-center 
                text-lg font-semibold rounded-lg text-white
                "
            >
                {segment}
            </div>
            </React.Fragment>
        ))}
    </nav>
  )
}

export default BreadCrumb
