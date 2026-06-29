import { useContext } from "react"
import FileSystemContext from "../contexts/FileSystemContext"

export function useFileSystem(){
    return useContext(FileSystemContext)
}
