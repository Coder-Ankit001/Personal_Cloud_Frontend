import axios from 'axios'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const UploadFile = ({nodeForm, setNodeForm}) => {

  const [extension, setExtension] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [nodeName, setNodeName] = useState('')

  const [error, setError] = useState('')

  const { user, directory, accessToken } = useAuth()

  const handleFileChange = (e)=>{
    e.preventDefault()
    if (!e.target.files || e.target.files.length === 0) return
    const file = e.target.files[0]
    console.log(file)
    setSelectedFile(file)
    setNodeName(file.name.split(".")[0]) // Default Name
    setExtension(file.name.split(".")[1]) // Retrieved Extension
  }
  const handleFileUpload = async (e) => {
    e.preventDefault()
    if(!selectedFile){
        console.log('Upload a File!')
        return
    }

    const endpoint = `/storage/upload`
    try{
        const formData = new FormData()
        formData.append('metadata', JSON.stringify({
            name: nodeName,
            type: nodeForm,
            ext: extension,
            parentId: directory || 'root'
        }))
        formData.append('file', selectedFile)

        const res = await axios.post(
            `${BACKEND_URL}${endpoint}`,
            formData,
            { 
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        console.log(res.data)
    }
    catch(e){
        console.error("Error", e)
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
            Upload File
          </h1>
        </div>

        <form onSubmit={handleFileUpload} className="flex flex-col gap-4">
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
              File Name
            </label>
            <div className="relative">
              <i className="ti ti-file absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-base" />
              <input
                type="text"
                placeholder="Enter File Name"
                name="name"
                required
                value={nodeName}
                onChange={(e) => setNodeName(e.target.value)}
                className="w-full pl-9 pr-3 py-4 bg-slate-800/90 border border-indigo-500/30 rounded-lg text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/15"
              />
            </div>
          </div>
            {/* ------ File Upload -------- */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-400">
                Upload Your File
              </label>
              <div className="relative">
                <i className="ti ti-file absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-base" />
                <input
                  type="file"
                  placeholder="Enter Folder Name"
                  name="name"
                  required
                  onChange={handleFileChange}
                  className="w-full pl-9 pr-3 py-4 bg-slate-800/90 border border-indigo-500/30 rounded-lg text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/15"
                />
              </div>
            </div>
            
          <button
            type='submit'
            className="
          mt-2 w-full py-4 bg-indigo-500 hover:bg-indigo-600 
          rounded-lg text-white text-sm font-medium transition-colors
          "
          >
            Upload File
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadFile
