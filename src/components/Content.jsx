import axios from 'axios'
import { useState, useEffect } from 'react'

import { useFileSystem } from '../hooks/useFileSystem'
import { useAuth } from '../hooks/useAuth'

import { BACKEND_URL } from '../utils/api'

import BreadCrumb from './BreadCrumbs'
import CardGrid from './CardGrid'
import CreateNewFolder from '../layouts/CreateNewFolder'
import UploadFile from '../layouts/UploadFile'
import NodeRenameForm from './NodeRenameForm'

const Content = () => {
  
  const [newOption, setNewOption] = useState(false)

  const { loading, accessToken, directory } = useAuth()
  const { loadList, nodes, setNodes, nodeForm, setNodeForm, onMove, handleMoveFile } = useFileSystem()

  const formMode = !nodeForm ? null : nodeForm.id ? 'rename': 'create'
  const formType = nodeForm?.type
  

  // Render Current Directory Elements
  useEffect(() => {
      if (loading || !accessToken || !directory) return
      const handleNodes = async () => {
          try {
              const nodeId = directory
              const res = await axios.get(`${BACKEND_URL}/nodes/${nodeId}/contents`, {
              withCredentials: true,
              headers: {
                  Authorization: `Bearer ${accessToken}`,
              },
              });
              console.log(res.data);
              setNodes(res.data.content);
          } catch (e) {
              console.error('Error:', e);
          }
      }
      handleNodes()
  }, [loading, directory, accessToken, loadList, setNodes])

  return (
    <section className="relative w-full lg:w-[70vw] flex flex-col gap-y-10 py-10 px-10">
      <BreadCrumb
        path={
          'documents/programming/webdevlopment/projects/hshshs/sjsjsjjs/ssjssjs/sjsjsjsjs/sjsjsjs'
        }
      />
      <div className="relative bg-amber-300rounded-lg flex justify-end px-2">
        <button
          onClick={() => {
            if(onMove){
              handleMoveFile()
            }
            else{
              setNewOption(!newOption)
            }
          }
          }
          className="
        bg-linear-to-r from-indigo-500/90 to-sky-400/90 border-3 
        border-slate-800/80 rounded-xl px-5 py-3 text-lg font-semibold"
        >
          { onMove ? ' Move Here' : '+ New'}
        </button>
        {
          !onMove && newOption && (
            <div
              className="
              absolute right-30 bg-slate-700/90 flex flex-col 
              gap-y-1 py-1 text-md font-semibold text-slate-200
              rounded-lg
              "
            >
              <button
                onClick={()=>setNodeForm({type: 'FOLDER'})}
                className="
                hover:bg-slate-600/60 px-4 py-1 
                min-h-12 flex justify-center items-center
                "
              >
                New Folder
              </button>
              <button
                onClick={()=>setNodeForm({type: 'FILE'})}
                className="
                hover:bg-slate-600/60 px-4 py-1 
                min-h-12 flex justify-center items-center
                "
              >
                Upload File
              </button>
            </div>
          )
        }
      </div>
      <CardGrid nodes={nodes} />

      { formMode === 'create' && formType === 'FOLDER' && <CreateNewFolder /> }
      { formMode === 'create' && formType === 'FILE' && <UploadFile /> }
      { formMode === 'rename' && <NodeRenameForm /> }

    </section>
  );
};

export default Content;
