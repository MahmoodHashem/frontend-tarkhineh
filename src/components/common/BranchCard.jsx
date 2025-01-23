/* eslint-disable prettier/prettier */

import { Gallary, ArrowLeft } from "../icons";

function BranchCard({image, title, address}) {
    return (
      <div className="relative flex sm:flex-col items-start sm:items-center sm:max-w-72 w-full h-36 sm:h-auto border-2 rounded-xl text-center group sm:pb-2 cursor-pointer "> 
          <div className="w-full h-full relative">
            <img src={image} alt={title} className="w-full h-full  sm:h-48  object-cover rounded-s-xl sm:rounded-b-none sm:rounded-t-xl" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity">
            </div>
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Gallary className="w-12 h-12 " />
            </button>
          </div>
          <div className="relative w-full sm:group-hover:bottom-0 transition-all -bottom-6 p-2">
            <h1 className="text-md sm:text-lg font-bold">{title}</h1>
            <p className="text-sm sm:text-md" >{address}</p>
          </div>
          
          <button className="hidden sm:flex items-center border-2 border-primary text-primary px-6 py-2 rounded-md opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 ">
            صفحه شعبه
            <ArrowLeft className="w-4 h-4 fill-primary" />
          </button>
      </div>
    );
  }
  
  export default BranchCard;
  