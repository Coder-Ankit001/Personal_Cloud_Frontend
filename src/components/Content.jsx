import axios from 'axios'
import { useEffect, useState, useCallback } from "react";
import { useAuth } from '../hooks/useAuth';

import { DEFAULT_NODES_LISTING } from './ui/FileSystem';
import BreadCrumb from "./BreadCrumbs";
import CardGrid from "./CardGrid";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const Content = () => {
  const [nodes, setNodes] = useState(DEFAULT_NODES_LISTING)

  const { accessToken, directory } = useAuth()

  useEffect(() => {
    const handleNodes = async() => {
      try{
        const nodeId = directory || 'default'
        const res = await axios.get(
          `${BACKEND_URL}/nodes/${nodeId}/contents`, 
          { 
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          })
        console.log(res.data)
        setNodes(res.data.content)
      }
      catch(e){
        console.error("Error:", e)
      }
    }
    handleNodes()
  }, [directory, accessToken]);


  return (
    <section className="w-full lg:w-[70vw] flex flex-col gap-y-10 py-10 px-10">
      <BreadCrumb path={"documents/programming/webdevlopment/projects/hshshs/sjsjsjjs/ssjssjs/sjsjsjsjs/sjsjsjs"}/>
      
      <CardGrid nodes={nodes}/>
    </section>
  );
};

export default Content;
