import {useState} from 'react';

import BranchSelectionModal from '../BranchSelectionModal';

function MenuItem({image, title}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative pt-8">
        <div className="relative max-w-full sm:w-80 h-44 border-2 border-primary-400 rounded-md p-4 ">
          {/* Elevated image */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[70%] max-w-52 md:w-[90%]">
            <img src={image} alt={title} className="object-cover rounded-2xl" />
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white px-2 w-32 py-2 rounded-sm hover:bg-primary-800 transition-colors text-sm"
          >
            {title}
          </button>
        </div>
      </div>
      <BranchSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default MenuItem;
