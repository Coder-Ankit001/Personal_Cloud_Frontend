import axios from 'axios'
import { useAuth } from '../hooks/useAuth';
import { useFileSystem } from '../hooks/useFileSystem'

import { NODE_OPTIONS } from "./ui/FileSystem"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const NodeOptions = ({ type }) => {
  const { accessToken } = useAuth()
  const { setNodeForm, selectNode, setSelectNode, setOnMove, setToast } = useFileSystem()

  const handleDownloadFile = async() => {
    console.log("Download triggered")
    if((!selectNode)) return
    console.log(`${BACKEND_URL}/storage/download/${selectNode}`)
    try{
      const res = await axios.get(
        `${BACKEND_URL}/storage/download/${selectNode}`, 
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          withCredentials: true, 
          responseType: 'blob',
        })

      const fileName = res.headers['x-filename'] || 'downloaded-file'
      
      // Convert binary response into temporary browser URL
      const blobUrl = window.URL.createObjectURL(res.data)
      const link = document.createElement('a')
      link.href = blobUrl

      // Assign file name for file download prompt
      // Inject link into DOM, and virtually click it
      link.setAttribute('download', fileName || 'download-file')
      document.body.appendChild(link)
      link.click()

      // Free up memory
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl)
    }
    catch(e){
      console.error("Download Fail", e)
      setToast(e)
    }
  }

  const handleDeleteFile = async() => {
    console.log("Delete triggered")
    if((!selectNode)) return
    console.log(`${BACKEND_URL}/storage/delete/${selectNode}`)
    try{
      const res = await axios.get(
        `${BACKEND_URL}/storage/delete/${selectNode}`, 
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          withCredentials: true,
        })
        console.log(res.data)
        setSelectNode(null)
    }
    catch(e){
      console.error("Download Fail", e)
      setToast(e)
    }
  }

  return (
    <div className={`absolute bottom-12 left-0 ${type === 'folder'} ?  bg-slate-900/80 z-50 w-44 border border-white/10 rounded-xl shadow-xl`}>
    {NODE_OPTIONS
        .filter((opt) => opt.nodeType === 'BOTH' || opt.nodeType === type)
        .map((opt) => (
        <div
            key={opt.action}
            onClick={(e)=>{
              e.stopPropagation()
              if(opt.label === 'Rename'){
                return setNodeForm({id: selectNode, type})
              }
              else if(opt.label === 'Download' && opt.nodeType === 'FILE'){
                return handleDownloadFile()
              }
              else if(opt.label === 'Delete'){
                handleDeleteFile()
              }
              else if(opt.label === 'Move'){
                setOnMove(selectNode)
              }
            }}
            className={`flex items-center gap-2.5 w-full px-3.5 py-2 text-sm transition-colors hover:bg-white/5
            ${opt.danger ? 'text-rose-400' : 'text-slate-300'}`}
        >
            <i className={`ti ${opt.icon} text-base`} />
            {opt.label}
        </div>
        ))
    }
    </div>
  );
};

export default NodeOptions;
