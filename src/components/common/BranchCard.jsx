/* eslint-disable prettier/prettier */



import { cn } from "../../helpers/common";
import GalleryModal from "../GalleryModal";
import { useState } from 'react';
import { Gallary, ArrowLeft } from "../icons";



function BranchCard({image, title, address, withHoverEffect = true}) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  function openGallery(e) {
    e.stopPropagation();
    setIsGalleryOpen(true)
  }

    return (
      <>
     
      <div 
      
      className="relative flex sm:flex-col items-start sm:items-center sm:max-w-72 w-full h-36 sm:h-auto border-2 rounded-xl text-center group sm:pb-2 cursor-pointer hover:shadow-card"> 
          <div className="w-full h-full relative">
            <img 
            
            src={image} alt={title} className="w-full h-full  sm:h-48  object-cover rounded-s-xl sm:rounded-b-none sm:rounded-t-xl" />
           { withHoverEffect &&
            <>
            <div 
           
            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity">
            </div>
            <button 
           onClick={openGallery}
            className=" absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0  group-hover:opacity-100 transition-opacity">
              <Gallary className="w-12 h-12 " />
            </button>
            </>
            }
          </div>
          <div className={cn(" w-full p-2", 
          withHoverEffect ? "relative transition-all -bottom-6 sm:group-hover:bottom-0" : "sm:bottom-0"

          )}>
            <h1 className="text-md sm:text-lg font-bold">{title}</h1>
            <p className="text-sm sm:text-md" >{address}</p>
          </div>
          
          {withHoverEffect && <button 
         
          className="hidden sm:flex items-center border-2 border-primary text-primary px-6 py-2 rounded-md opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 ">
            صفحه شعبه
            <ArrowLeft className="w-4 h-4 fill-primary" />
          </button>}
      </div>
      <GalleryModal 
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        branchTitle={title}
      />
      </>
    );
  }
  
  export default BranchCard;
  