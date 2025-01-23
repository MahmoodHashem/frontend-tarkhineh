/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {cn} from '../helpers/common';
import {Close} from './icons';

const images = [
  '/images/branch-aghdasie.png',
  '/images/branch-chalus.png',
  '/images/branch-ekbatan.png',
  '/images/branch-vanak.png',
];

function GalleryModal({isOpen, onClose, branchTitle}) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div
    className={cn(
      "fixed inset-0 z-50 flex items-center justify-center transition-all duration-300",
      isOpen ? "opacity-100 visible" : "opacity-0 invisible"
    )}
    >
      <div
       className={cn(
        "absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0"
      )}
        onClick={onClose}
      />

      <div className={cn(
        "relative w-full max-w-2xl mx-4 transition-all duration-300 transform",
        isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
      )}>
        <button 
        onClick={onClose}
        className="absolute z-50 left-5 top-5">
          <Close className=" sm:w-12 sm:h-12 fill-white" />
        </button>

        <div className="relative aspect-video">
          <img
            src={images[currentImage]}
            alt={branchTitle}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center gap-4 mt-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={cn(
                'w-10 h-10 sm:w-20 rounded-sm sm:h-20 sm:rounded-lg overflow-hidden transition-all duration-300',
                currentImage === index
                  ? 'ring-2 ring-white/50 scale-110'
                  : 'opacity-60'
              )}
            >
              <img
                src={img}
                alt={`thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryModal;
