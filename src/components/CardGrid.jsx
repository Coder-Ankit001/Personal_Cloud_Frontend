import { useState } from "react";

import FileCard from "./FileCard";
import FolderCard from "./FolderCard";

const CardGrid = () => {

  const [nodes, setNodes] = useState([
    { name: 'Design Assets', type: 'folder', count: 3, color: 'blue' },
    { name: 'Projects', type: 'folder', count: 3, color: 'emerald' },
    { name: 'Media', type: 'folder', count: 4, color: 'rose' },
    { name: 'Archives', type: 'folder', count: 2, color: 'gray' },
    { name: 'Machine Learning', type: 'folder', count: 2, color: 'orange' },
    { name: 'Web Development', type: 'folder', count: 2, color: 'pink' },
    { name: 'Photos', type: 'folder', count: 2, color: 'violet' },
    { name: 'Algorithms', type: 'folder', count: 2, color: 'teal' },
    { name: 'Beautiful Scenery', ext: 'img', type: 'file' },
    { name: 'Mountain View', ext: 'img', type: 'file' },
    { name: 'Resume', ext: 'pdf', type: 'file' },
    { name: 'Practical File', ext: 'pdf', type: 'file' },
  ])

  const [openId, setOpenId] = useState(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {nodes.map((node, index) => (
        <>
          {node.type === 'folder' ? 
          (
            <FolderCard node={node}  index={index} openId={openId} setOpenId={setOpenId}/>
          )
          : 
          (
            <FileCard node={node} index={index} openId={openId} setOpenId={setOpenId}/>
          )}
        </>
      ))}
    </div>
  );
};

export default CardGrid;
