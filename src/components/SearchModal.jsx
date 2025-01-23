import {cn} from '../helpers/common';
import {Close, Search} from './icons';

function SearchModal({isOpen, onClose}) {
  return (
    <div
      className={cn(
        'fixed hidden  inset-0 z-50 sm:flex items-center justify-center transition-opacity duration-300',
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      )}
    >
      <div
        className={cn(
          'fixed inset-0 bg-black/50  backdrop-blur-sm transition-all duration-300',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        onClick={onClose}
      />

      <div
        className={cn(
          'relative bg-white rounded-lg w-full max-w-2xl mx-4 transition-all duration-300 transform',
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4'
        )}
      >
        <div className="pb-6">
          <div className="flex justify-center items-center p-4 bg-neutral-200 rounded-t-lg">
            <h2 className="text-2xl  mr-auto font-bold text-center ">جستجو</h2>
            <button onClick={onClose} className="mr-auto">
              <Close className=" h-8 w-8" />
            </button>
          </div>
          <p className="text-center mt-7">
            لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.
          </p>
          <div className="relative py-4 max-w-80 mx-auto">
            <input
              type="text"
              placeholder="جستجو"
              className="w-full py-3 px-4 pr-12 rounded-lg border border-neutral-200 focus:outline-none focus:border-primary"
              autoFocus
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Search className="w-6 h-6 fill-neutral-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
