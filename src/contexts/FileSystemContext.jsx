import axios from "axios"
import { createContext, useState, useCallback } from "react"

import { useAuth } from "../hooks/useAuth"
import { BACKEND_URL } from "../utils/api"
import { DEFAULT_NODES_LISTING } from "../components/ui/FileSystem"

const FileSystemContext = createContext()


export function FileSystemProvider({children}){
    const [nodes, setNodes] = useState(DEFAULT_NODES_LISTING)
    const [nodeForm, setNodeForm] = useState({})
    const [toast, setToast] = useState(null)
    const [selectNode, setSelectNode] = useState(null)
    const [loadList, setLoadList] = useState(false)
    const [onMove, setOnMove] = useState({})

    const { user, directory } = useAuth()

    // Callback function for Moving File
    const handleMoveFile = useCallback(async()=>{
        try{
            const data = {id: onMove.id, userId: user.id, destId: directory}
            const res = await axios.post(`${BACKEND_URL}/nodes/file/move`, data, { withCredentials: true })
            setToast(res.data)
            setLoadList(prev => !prev)
        }
        catch(e){
            setToast(e.response?.data || e || ('Something went wrong!'))
        }
        finally{
            setOnMove({})
        }
    }, [user, directory, onMove])

    // Callback function for Moving Folder
    const handleMoveFolder = useCallback(async()=>{
        try{
            const data = {srcId: onMove.id, userId: user.id, destId: directory}
            console.log("About to call axios", data)
            const res = await axios.post(`${BACKEND_URL}/nodes/folder/move`, data, { withCredentials: true })
            console.log(res.data)
            setLoadList(prev => !prev)
        }
        catch(e){
            console.error("Error here: ", e.response)
            setToast(e.response?.data || ('Something went wrong!'))
        }
        finally{
            setOnMove({})
            console.log("Finally Calling On Move", onMove)
        }
    }, [user, directory, onMove])

    return (
        <FileSystemContext.Provider value={{nodes, setNodes, nodeForm, setNodeForm, selectNode, setSelectNode, onMove, setOnMove, loadList, setLoadList, toast, handleMoveFile, handleMoveFolder}} >
            {children}
        </FileSystemContext.Provider>
    )
}


export default FileSystemContext