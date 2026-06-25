import { createContext, useEffect, useState } from "react"

const FileSystemContext = createContext()


export function FileSystemProvider({children}){
    const [nodeForm, setNodeForm] = useState('')
    const [selectNode, setSelectNode] = useState(null)
    const [nodes, setNodes] = useState()

    useEffect(() => {

    }, [])

    return (
        <FileSystemContext.Provider value={{nodeForm, setNodeForm, selectNode, setSelectNode}} >
            {children}
        </FileSystemContext.Provider>
    )
}


export default FileSystemContext