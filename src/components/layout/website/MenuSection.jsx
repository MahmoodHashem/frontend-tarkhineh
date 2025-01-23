import MenuItem from '../../common/MenuItem';

const menuItems = [
  {
    id: 1,
    title: 'غذای اصلی',
    image: '/images/menu-4.png',
  },
  {
    id: 2,
    title: 'پیش غذا',
    image: '/images/menu-3.png',
  },
  {
    id: 3,
    title: 'دسر',
    image: '/images/menu-2.png',
  },
  {
    id: 1,
    title: 'نوشیدنی',
    image: '/images/menu-1.png',
  },
];

function MenuSection() {
  return (
    <section className="py-16 px-4 sm:px-10 sm:mx-auto">
      <h2 className="text-3xl font-bold text-center mb-24">منوی رستوران</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {menuItems.map((item) => (
          <MenuItem key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
