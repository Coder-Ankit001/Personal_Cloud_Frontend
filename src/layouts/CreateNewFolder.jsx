import axios from 'axios';
import { useState } from 'react';

import { colorList } from '../components/ui/FileSystem';
import { useAuth } from '../hooks/useAuth';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const CreateNewFolder = ({ nodeForm, setNodeForm }) => {

  const [selectedColor, setSelectedColor] = useState(null);
  const [nodeName, setNodeName] = useState('');

  const [error, setError] = useState('');
  const [openOption, setOpenOption] = useState(false);

  const { user, directory } = useAuth();

  const handleCreateFolder = async (e) => {
    e.preventDefault();
    let data = {
      name: nodeName,
      type: nodeForm,
      parentId: directory,
      userId: user.id,
      color: selectedColor,
    };
    const endpoint = `/nodes/folder/create`
    try {
      const res = await axios.post(`${BACKEND_URL}${endpoint}`, data, {
        withCredentials: true,
      });
      console.log(res.data)
      setNodeForm('')
    } catch (e) {
      console.error(e)
      setError(e.message)
    }
  }

  
  return (
    <div
      className="
    realtive absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    h-[80%] w-[70%] bg-slate-900/70 text-white rounded-lg border-2 border-slate-700/70
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
            Create New Folder
          </h1>
        </div>

        <form onSubmit={handleCreateFolder} className="flex flex-col gap-4">
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
              Folder Name
            </label>
            <div className="relative">
              <i className="ti ti-folder absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-base" />
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

            {/* ------Color------ */}
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
  );
};

export default CreateNewFolder
