import { useContext } from "react"
import FileSystemContext from "../contexts/FIleSystemContext"

export function useFileSystem(){
    return useContext(FileSystemContext)
}
