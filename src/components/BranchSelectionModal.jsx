import {useState} from 'react';
import BranchCard from './common/BranchCard';
import {Close} from './icons';
import {cn} from '../helpers/common';

const branches = [
  {
    id: 1,
    title: 'شعبه اکباتان',
    address: 'شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
    image: '/images/branch-ekbatan.png',
  },
  {
    id: 2,
    title: 'شعبه چالوس',
    address: 'چالوس، خیابان ۱۷ شهریور، بعد از کوچه کوروش',
    image: '/images/branch-chalus.png',
  },
  {
    id: 3,
    title: 'شعبه اقدسیه',
    address: 'خیابان اقدسیه، نرسیده به میدان خیام',
    image: '/images/branch-aghdasie.png',
  },
  {
    id: 4,
    title: 'شعبه ونک',
    address: 'میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر',
    image: '/images/branch-vanak.png',
  },
];

function BranchSelectionModal({isOpen, onClose}) {
  const [selectedBranch, setSelectedBranch] = useState(null);

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300',
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      )}
    >
      {/* Overlay */}
      <div
        className={cn(
          'absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0'
        )}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={cn(
          'relative flex flex-col bg-white rounded-xl p-6 max-w-4xl w-full mx-4 transition-all duration-300 transform h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-primary-100',
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4'
        )}
      >
        <button onClick={onClose} className="self-end">
          <Close className=" w-10 h-10" />
        </button>

        <h2 className="text-2xl font-bold text-center ">انتخاب شعبه</h2>
        <p className="mt-12 mb-5 text-center">
          برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((branch) => (
            <div
              key={branch.id}
              onClick={() => setSelectedBranch(branch.id)}
              className={`cursor-pointer ${selectedBranch === branch.id ? 'ring-2 ring-primary' : ''}`}
            >
              <BranchCard withHoverEffect={false} {...branch} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BranchSelectionModal;
