import {Link, NavLink} from 'react-router';
import {Logo, Search, ShoppingCart, User, ArrowDownIcon} from '../../icons';
import {cn} from '../../../helpers/common';
import MobileNavbar from './MobileNavbar';
import ROUTES from '../../../router/routePaths';
import {useState, useRef, useEffect} from 'react';
import SearchModal from '../../SearchModal';

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function toggleDropdown(dropdown) {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }

  const menuItems = [
    {title: 'غذای اصلی', href: '#'},
    {title: 'پیش غذا', href: '#'},
    {title: 'دسر', href: '#'},
    {title: 'نوشیدنی', href: '#'},
  ];

  const branches = [
    {title: ' اکباتان', href: '#'},
    {title: ' چالوس', href: '#'},
    {title: ' اقدسیه', href: '#'},
    {title: ' ونک', href: '#'},
  ];

  return (
    <header className="py-8 shadow">
      <div className="container">
        <div className="flex items-center justify-between gap-4 text-neutral-700">
          <MobileNavbar />
          <Link>
            <Logo />
          </Link>
          <nav className="items-center hidden gap-4 md:flex" ref={dropdownRef}>
            <NavLink
              to={ROUTES.HOME}
              className={({isActive}) =>
                cn('text-base', {
                  'text-primary font-semibold': isActive,
                })
              }
            >
              {'صفحه اصلی'}
            </NavLink>

            <div className="relative">
              <button
                className={cn(
                  'flex items-center gap-1 hover:text-primarytransition-all',
                  activeDropdown === 'branch'
                    ? 'border-b border-primary font-bold text-primary'
                    : ''
                )}
                onClick={() => toggleDropdown('branch')}
              >
                شعبه
                <ArrowDownIcon
                  className={cn(
                    'w-5 h-5 transition-transform',
                    activeDropdown === 'branch' ? ' rotate-180' : ''
                  )}
                />
              </button>

              {activeDropdown === 'branch' && (
                <div className="absolute z-50 top-full right-0 w-48 bg-white rounded-lg shadow-card py-2 mt-2">
                  {branches.map((branch, index) => (
                    <a
                      key={index}
                      href={branch.href}
                      className="block px-4 py-2 hover:bg-primary-100 text-neutral-800"
                    >
                      {branch.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className={cn(
                  'flex items-center gap-1 hover:text-primarytransition-all',
                  activeDropdown === 'menu'
                    ? 'border-b border-primary font-bold text-primary'
                    : ''
                )}
                onClick={() => toggleDropdown('menu')}
              >
                منو
                <ArrowDownIcon
                  className={cn(
                    'w-5 h-5 transition-transform',
                    activeDropdown === 'menu' ? ' rotate-180' : ''
                  )}
                />
              </button>

              {activeDropdown === 'menu' && (
                <div className="absolute z-50 top-full right-0 w-48 bg-white rounded-lg shadow-card py-2 mt-2">
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-primary-100 text-neutral-800"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <NavLink
              to={ROUTES.ABOUT}
              className={({isActive}) =>
                cn('text-base', {
                  'text-primary font-semibold': isActive,
                })
              }
            >
              {'درباره ما'}
            </NavLink>
            <NavLink
              to={ROUTES.CONTACT}
              className={({isActive}) =>
                cn('text-base', {
                  'text-primary font-semibold': isActive,
                })
              }
            >
              {' تماس با ما'}
            </NavLink>
          </nav>
          <div className="flex items-center gap-2 [&>*]:p-2 [&>*]:bg-primary-100 [&>*]:rounded [&_svg]:fill-primary">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:block"
            >
              <Search />
            </button>

            <NavLink
              to="/cart"
              className={({isActive}) => (isActive ? 'bg-primary' : '')}
            >
              <ShoppingCart />
            </NavLink>
            <NavLink
              to="/login"
              className={({isActive}) => (isActive ? 'bg-primary' : '')}
            >
              <User />
            </NavLink>
          </div>
        </div>
      </div>
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  );
}

export default Header;
