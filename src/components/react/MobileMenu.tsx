import { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

interface Props {
  navItems: NavItem[];
}

export default function MobileMenu({ navItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden">
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-slate-600 hover:text-blue-600 transition-colors focus:outline-hidden"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-white animate-fadeIn">
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-4 text-lg font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
              >
                {item.name}
                {item.external && <ExternalLink className="w-4 h-4 ml-2 opacity-50" />}
              </a>
            ))}

            <div className="pt-8 mt-8 border-t border-slate-100 px-4">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Idioma / Language
              </p>
              <div className="flex space-x-6">
                <a href="/es" className="text-lg font-bold text-slate-700 hover:text-blue-600 transition-colors">ES</a>
                <a href="/en" className="text-lg font-bold text-slate-700 hover:text-blue-600 transition-colors">EN</a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
