import { createContext, useState } from "react"

import { DEFAULT_NODES_LISTING } from "../components/ui/FileSystem"

const FileSystemContext = createContext()


export function FileSystemProvider({children}){
    const [nodes, setNodes] = useState(DEFAULT_NODES_LISTING)
    const [nodeForm, setNodeForm] = useState('')
    const [selectNode, setSelectNode] = useState(null)

    return (
        <FileSystemContext.Provider value={{nodes, setNodes, nodeForm, setNodeForm, selectNode, setSelectNode}} >
            {children}
        </FileSystemContext.Provider>
    )
}


export default FileSystemContext