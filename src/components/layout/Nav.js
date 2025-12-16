'use client';

import { useRouter } from 'next/navigation';

import AnimatedButton from '@/components/ui/AnimatedButton';
import { ROUTES_CONSTANTS } from '@/constants/routesConstants'
import { useState } from 'react';

const Nav = ({ mobileClose }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      router.push(href);
    }

    if (mobileClose) {
      mobileClose();
    }
  };

  const navItems = [
    { label: 'About us', href: ROUTES_CONSTANTS.ABOUT_US },
    { label: 'Services', href: ROUTES_CONSTANTS.SERVICES,  isDropdown: true },
    { label: 'Why us', href: ROUTES_CONSTANTS.WHY_US },
    { label: 'Products', href: ROUTES_CONSTANTS.PRODUCTS },
    { label: 'Testimonials', href: ROUTES_CONSTANTS.TESTIMONIALS },
    { label: 'Blog', href: ROUTES_CONSTANTS.BLOG },
  ]

  const servicesDropdown = [
    { label: "Branding & UI/UX Design", href: ROUTES_CONSTANTS.BRANDING },
    { label: "Product Development", href: ROUTES_CONSTANTS.DEVELOPMENT },
    { label: "E-Commerce Solutions", href: ROUTES_CONSTANTS.ECOMMERCE },
    { label: "Cloud Services", href: ROUTES_CONSTANTS.CLOUD },
    { label: "AI agent/ AI solutions", href: ROUTES_CONSTANTS.SECURITY },
    { label: "Digital Marketing", href: ROUTES_CONSTANTS.MARKETING },
  ];
  return (
    <nav className="flex flex-col items-start p-10 md:flex-row md:items-center bg-white md:p-[6px] lg:space-x-4 xl:space-x-6 rounded-2xl md:shadow-[0_4px_4px_#00000040] shadow-none md:relative z-50">
      <div className="flex flex-col md:px-5 md:text-xs md:text-[13px] xl:text-sm xl:px-3 md:flex-row items-center sm:space-x-3 lg:space-x-5 xl:space-x-10">
      {navItems.map((item, i) => (
          <div key={i} className="relative group">
            <a
              href={item.href}
              className="text-gray-600 font-['SatoshiVariable'] hover:text-blue-600 py-2 md:py-5 transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, item.href)}
              onMouseEnter={() => item.isDropdown && setDropdownOpen(true)}
              onMouseLeave={() => item.isDropdown && setDropdownOpen(false)}
            >
              {item.label}
            </a>
            {item.isDropdown && isDropdownOpen && (
              <div
                className="absolute left-0 top-10 bg-white shadow-lg w-60 rounded-md flex flex-col border overflow-hidden border-gray-300 z-50"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                {servicesDropdown.map((subItem, j) => (
                  <a
                    key={j}
                    href={subItem.href}
                    className="block text-sm hover:bg-[#211951] py-3 px-3 text-gray-700 hover:text-white cursor-pointer"
                    onClick={(e) => handleNavClick(e, subItem.href)}
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <AnimatedButton text="Lets Talk" href="#contact" />
    </nav>
  );
};

export default  Nav;



