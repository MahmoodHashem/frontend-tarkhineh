import BranchCard from '../../common/BranchCard';

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
    address:
      'چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی',
    image: '/images/branch-chalus.png',
  },
  {
    id: 3,
    title: 'شعبه اقدسیه',
    address: 'خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸',
    image: '/images/branch-aghdasie.png',
  },
  {
    id: 4,
    title: 'شعبه ونک',
    address: 'میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر',
    image: '/images/branch-vanak.png',
  },
];

function BranchesSection() {
  return (
    <section className="py-16 px-2 sm:px-10 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">ترخینه گردی</h2>
      <div className="grid items-center justify-items-center grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 md:gap-20">
        {branches.map((branch) => (
          <BranchCard key={branch.id} {...branch} />
        ))}
      </div>
    </section>
  );
}

export default BranchesSection;
