import { useState } from "react"
import { useFileSystem } from "../hooks/useFileSystem";

import FileCard from "./FileCard"
import FolderCard from "./FolderCard"

const CardGrid = () => {
  const { nodes } = useFileSystem()

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {nodes.map((node, index) => {
        const props = { node, index }
        const key = node.id || index
        return node.type === 'FOLDER' ?
        (
          <FolderCard key={key} {...props}/>
        )
        : 
        (
          <FileCard key={key} {...props}/>
        )
      }
      )}
    </div>
  );
};

export default CardGrid;
