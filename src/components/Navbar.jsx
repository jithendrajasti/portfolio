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
      setIsScrolled(window.scrollY > 10);
      setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        'fixed w-full z-40 transition-all duration-300 top-0',
        isScrolled
          ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs'
          : 'py-5',
      )}
    >
      <div className="container flex items-center justify-between relative">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
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
        {!isScrolled && (
          <button
          className='md:hidden relative bottom-1 z-50 text-foreground/80 hover:text-primary transition-colors duration-300'
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{' '}
        </button>
        )}

        {/* Mobile Menu Overlay */}
        <div
          id="mobile-menu"
          className={cn(
            'fixed inset-0 backdrop-blur-md z-40 flex flex-col items-center justify-center',
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
