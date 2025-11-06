import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // --- FIX ---
      // Changed window.screenY to window.scrollY
      // screenY refers to the browser window's position, not the page scroll.
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        // --- IMPROVEMENT ---
        // Changed top-2 to top-0 for a true "sticky-to-the-top" navbar.
        // The floating 'top-2' can look a bit unintentional.
        'fixed w-full z-40 transition-all duration-300 top-0',
        isScrolled
          ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs'
          : 'py-5',
        // Removed redundant 'flex items-center' as the container div handles this.
      )}
    >
      {/* --- IMPROVEMENT ---
        Added 'relative' to the container. This allows us to use
        absolute positioning for the desktop nav links to *perfectly*
        center them, regardless of the brand or button width.
      */}
      <div className="container flex items-center justify-between relative">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
          // --- UX IMPROVEMENT ---
          // Added onClick to close the mobile menu if the user clicks the brand.
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="relative z-10 bottom-1">
            <span className="text-glow text-foreground max-sm:text-2xl text-3xl">
              {" "}
              Jithendra's{" "}
            </span>{" "}
            Portfolio
          </span>
        </a>

        {/* --- IMPROVEMENT: Desktop Nav ---
          This is now absolutely positioned to be in the *exact* center.
          The 'left-1/2 -translate-x-1/2' is a standard Tailwind
          trick to guarantee perfect centering.
        */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          // --- ACCESSIBILITY IMPROVEMENT ---
          // These attributes tell screen readers what the button controls
          // and whether that section is currently expanded (open).
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{' '}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          // --- ACCESSIBILITY IMPROVEMENT ---
          // This ID connects the menu to the button's 'aria-controls' attribute.
          id="mobile-menu"
          className={cn(
            'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
            'transition-all duration-300 md:hidden',
            isMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none',
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;