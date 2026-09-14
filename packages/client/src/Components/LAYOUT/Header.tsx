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
      <header>
         <div
            className={clsx(
               menuOpen ? ' text-[#666143]' : 'text-[#ffee7d]',
               'header__bar'
            )}
         >
            {/* LOGO */}
            <div></div>

            {/* BOOKING & MENU */}
            <div className="header__actions">
               <Link to="/reservations">Bookings</Link>
               <button
                  aria-controls="nav-menu"
                  aria-label="Toggle navigation menu"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className='uppercase'
               >
                  {menuOpen ? 'close' : 'menu'}
               </button>
            </div>
         </div>
         <nav
            id="nav__menu"
            aria-hidden={!menuOpen}
            className={clsx(
               'nav__menu',
               menuOpen
                  ? 'nav__menu__open'
                  : 'nav__menu__close'
            )}
         >
            <ul className="nav__list">
               {navLinks.map(({ href, label }, index) => (
                  <li className="" key={label}>
                     <a href={href}>
                        <span className="link__index">
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
