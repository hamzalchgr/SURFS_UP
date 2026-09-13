import clsx from 'clsx';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const navLinks = [
   { href: '#the-camp', label: 'the camp' },
   { href: '#program', label: 'program' },
   { href: '#stay', label: 'stay' },
   { href: '#team', label: 'team' },
   { href: '#pricing', label: 'pricing' },
];

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <header className='fixed top-0 left-0 w-full'>
         <div
            className={clsx(
               menuOpen && 'fixed z-50 top-0 w-full',
               'flex items-center justify-between px-5 md:px-7 py-4 font-anton text-lg text-[#666143]'
            )}
         >
            {/* LOGO */}
            <div></div>

            {/* BOOKING & MENU */}
            <div className="flex items-center gap-5 uppercase">
               <Link to="/reservations">Bookings</Link>
               <button
                  aria-controls="nav-menu"
                  aria-label="Toggle navigation menu"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className='cursor-pointer uppercase'
               >
                  {menuOpen ? 'close' : 'menu'}
               </button>
            </div>
         </div>
         <nav
            id="nav-menu"
            aria-hidden={!menuOpen}
            className={clsx(
               'transition-all ease-in-out duration-150',
               menuOpen
                  ? 'opacity-100 visible pointer-events-auto'
                  : 'opacity-0 invisible pointer-events-none'
            )}
         >
            <ul className="header-nav-list">
               {navLinks.map(({ href, label }, index) => (
                  <li className="" key={label}>
                     <a href={href}>
                        <span className="text-xs w-8.5 font-medium font-inter">
                           0{index + 1}
                        </span>
                        <span>{label}</span>
                     </a>
                  </li>
               ))}
            </ul>
         </nav>

         <Outlet />
      </header>
   );
};

export default Header;
