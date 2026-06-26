import React from "react"
import { useAuth } from "../hooks/useAuth"

import { IoHomeOutline } from "react-icons/io5"

const BreadCrumb = () => {
  const { rootId, path, setDirectory } = useAuth()

  const crumbs = path.length > 5 ? [...path.slice(0, 2), '...', ...path.slice(-2)] : path;
  return (
      <nav className="h-20 px-5 py-2 rounded-lg flex items-center gap-4 overflow-x-auto">
        <div
            onClick={() => setDirectory(rootId)}
            className="
            h-10 px-3 py-2 hover:bg-blue-500/20 hover:text-blue-400
            flex justify-center items-center gap-2
            text-lg font-semibold rounded-lg text-slate-300
            cursor-pointer transition-colors
            "
            >
            <IoHomeOutline />
        </div>
        {crumbs.map((segment, index) => (
            <React.Fragment key={index}>
            <span className="text-2xl text-center text-white"> {'>'} </span>
            <div
                onClick={() => segment.id && setDirectory(segment.id)}
                className="
                h-10 px-2 py-2 hover:bg-blue-500/20 hover:text-blue-400
                flex justify-center items-center 
                text-lg font-semibold rounded-lg text-white
                "
            >
                {segment.name}
            </div>
            </React.Fragment>
        ))}
    </nav>
  )
}

export default BreadCrumb
