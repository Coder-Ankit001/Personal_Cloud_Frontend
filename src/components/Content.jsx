import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

import { DEFAULT_NODES_LISTING } from './ui/FileSystem';
import BreadCrumb from './BreadCrumbs';
import CardGrid from './CardGrid';
import CreateNewFolder from '../layouts/CreateNewFolder';
import UploadFile from '../layouts/UploadFile';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Content = () => {
  const { loading, accessToken, directory } = useAuth();
  
  const [newOption, setNewOption] = useState(false);
  const [nodes, setNodes] = useState(DEFAULT_NODES_LISTING);

  const [nodeForm, setNodeForm] = useState('')


  console.log(directory)

  useEffect(() => {
    console.log('effect ran', { loading, accessToken: !!accessToken, directory })
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
    };
    handleNodes();
  }, [loading, directory, accessToken]);

  return (
    <section className="relative w-full lg:w-[70vw] flex flex-col gap-y-10 py-10 px-10">
      <BreadCrumb
        path={
          'documents/programming/webdevlopment/projects/hshshs/sjsjsjjs/ssjssjs/sjsjsjsjs/sjsjsjs'
        }
      />
      <div className="relative bg-amber-300rounded-lg flex justify-end px-2">
        <button
          onClick={() => setNewOption(!newOption)}
          className="
        bg-linear-to-r from-indigo-500/90 to-sky-400/90 border-3 
        border-slate-800/80 rounded-xl px-5 py-3 text-lg font-semibold"
        >
          + New
        </button>

        {newOption && (
          <div
            className="
            absolute right-30 bg-slate-700/90 flex flex-col 
            gap-y-1 py-1 text-md font-semibold text-slate-200
            rounded-lg
            "
          >
            <button
              onClick={()=>setNodeForm('FOLDER')}
              className="
              hover:bg-slate-600/60 px-4 py-1 
              min-h-12 flex justify-center items-center
              "
            >
              New Folder
            </button>
            <button
              onClick={()=>setNodeForm('FILE')}
              className="
              hover:bg-slate-600/60 px-4 py-1 
              min-h-12 flex justify-center items-center
              "
            >
              Upload File
            </button>
          </div>
        )}
      </div>
      <CardGrid nodes={nodes} />

      {
        nodeForm === 'FOLDER' && (
          <CreateNewFolder nodeForm={nodeForm} setNodeForm={setNodeForm}/>
        )
      }

      {
        nodeForm === 'FILE' && (
          <UploadFile nodeForm={nodeForm} setNodeForm={setNodeForm}/>
        )
      }
    </section>
  );
};

export default Content;
