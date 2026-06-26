import axios from 'axios'
import { useState } from 'react'

import { useAuth } from '../hooks/useAuth'
import { useFileSystem } from '../hooks/useFileSystem'

import { colorList } from '../components/ui/FileSystem'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const NodeRenameForm = () => {
  const [openOption, setOpenOption] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [nodeName, setNodeName] = useState('')

  const [error, setError] = useState('')

  const { user } = useAuth()
  const { nodeForm, setNodeForm, selectNode } = useFileSystem()

  const handleRenameNode = async(e) => {
    e.preventDefault()
    if(!selectNode) return
    try{
        let data = { 
            id: nodeForm.id, 
            type: nodeForm.type, 
            name: nodeName, 
            userId: user.id 
        }
        if(nodeForm.type === 'FOLDER') data = {...data, color: selectedColor}
        await axios.post(`${BACKEND_URL}/nodes/rename`, data, { withCredentials: true })
        setNodeForm('')
    }
    catch(e){
        setError(e.response?.data?.message || e)
    }
  }

  return (
    <div
      className="
    realtive absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-70
    min-h-[40%] min-w-[35%] bg-slate-900/70 text-white rounded-lg border-2 border-slate-700/70
    "
    >
      <div className="h-10 rounded-t-lg flex justify-end items-center border-b border-slate-700/70">
        <button onClick={() => setNodeForm('')} className="px-2 py-2">
          <i className="ti ti-x text-slate-400 hover:text-slate-200 text-3xl transition-colors" />
        </button>
      </div>

      <div className="px-4 py-4">
        <div className="mb-8">
          <h1 className="text-2xl font-medium text-slate-200 mb-1.5">
            {`Rename ${nodeForm.type}`}
          </h1>
        </div>

        <form onSubmit={handleRenameNode} className="flex flex-col gap-4">
          {/* ------Error------ */}
          {error && (
            <div className="flex items-start gap-2.5 bg-red-500/8 border border-red-500/25 rounded-lg px-3.5 py-3 mb-4">
              <i className="ti ti-alert-circle text-red-400 text-lg mt-0.5 shrink-0" />
              <span className="text-red-300 text-sm leading-relaxed">
                {error}
              </span>
            </div>
          )}

          {/* ------Node Name------ */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-400">
              {`${nodeForm.type} Name`}
            </label>
            <div className="relative">
              <i className={`ti ti-${nodeForm.type === 'FILE' ? 'file': 'folder'} absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-base`} />
              <input
                type="text"
                placeholder="Enter Folder Name"
                name="name"
                required
                onChange={(e) => setNodeName(e.target.value)}
                className="w-full pl-9 pr-3 py-4 bg-slate-800/90 border border-indigo-500/30 rounded-lg text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/15"
              />
            </div>
          </div>

          {
            nodeForm.type === 'FOLDER' && (
            /* ------Color------ */
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-400">
                Color
              </label>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenOption((prev) => !prev)}
                  className="w-full flex items-center justify-between px-3 py-4 bg-slate-800/90 border border-indigo-500/30 rounded-lg text-slate-200 text-sm focus:outline-none focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/15"
                >
                  {/* Left Side */}
                  <div className="flex items-center gap-3">
                    <i className="ti ti-palette text-slate-600 text-base" />
                    <span>{selectedColor}</span>
                  </div>

                  {/* Right Side */}
                  <i
                    className={`ti ti-chevron-down text-slate-500 transition-transform ${
                      openOption ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openOption && (
                  <div className="absolute z-10 mt-2 h-dvh max-h-[20vh] overflow-y-scroll scrollbar-none w-full bg-slate-900 border border-indigo-500/30 rounded-lg overflow-hidden shadow-xl">
                    {colorList.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => {
                          setSelectedColor(color);
                          setOpenOption(false);
                        }}
                        className="w-full px-4 py-3 text-left text-slate-200 hover:bg-indigo-500/20 transition-colors"
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                )}

                <input type="hidden" name="color" value={selectedColor} />
              </div>
            </div>
          )}


          <button
            className="
          mt-2 w-full py-4 bg-indigo-500 hover:bg-indigo-600 
          rounded-lg text-white text-sm font-medium transition-colors
          "
          >
            Create Folder
          </button>
        </form>
      </div>
    </div>
  )
}

export default NodeRenameForm