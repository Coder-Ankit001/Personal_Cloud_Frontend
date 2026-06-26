import axios from "axios"
import { createContext, useCallback, useState } from "react"

import { useAuth } from "../hooks/useAuth"
import { BACKEND_URL } from "../utils/api"
import { DEFAULT_NODES_LISTING } from "../components/ui/FileSystem"

const FileSystemContext = createContext()


export function FileSystemProvider({children}){
    const [nodes, setNodes] = useState(DEFAULT_NODES_LISTING)
    const [nodeForm, setNodeForm] = useState('')
    const [toast, setToast] = useState(null)
    const [selectNode, setSelectNode] = useState(null)
    const [loadList, setLoadList] = useState(false)
    const [onMove, setOnMove] = useState(false) // [false -> 'idle', true -> 'active']

    const { user, directory } = useAuth()

    // Callback function for Moving File
    const handleMoveFile = useCallback(async()=>{ 
        try{
            const data = {id: selectNode, userId: user.id, destId: directory}
            const res = await axios.post(`${BACKEND_URL}/nodes/move`, data, { withCredentials: true })
            setToast(res.data)
            setLoadList(prev => !prev)
        }
        catch(e){
            console.error(e)
            setToast(e.response?.data || e || ('Something went wrong!'))
        }
    }, [selectNode, directory, user, setLoadList])

    return (
        <FileSystemContext.Provider value={{nodes, setNodes, nodeForm, setNodeForm, selectNode, setSelectNode, onMove, setOnMove, loadList, setLoadList, toast, handleMoveFile}} >
            {children}
        </FileSystemContext.Provider>
    )
}


export default FileSystemContext