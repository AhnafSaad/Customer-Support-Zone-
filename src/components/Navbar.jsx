import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({onNewTicket}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-base-100 sticky top-0 z-50 px-4 md:px-16 py-4 border-b border-base-300">
    <div className="flex justify-between items-center h-12">
        <div className="flex justify-between items-center h-12 gap-2">
        {/* Mobile menu toggle button */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden btn btn-ghost btn-circle"
        >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
        {/* Logo redirecting to Home */}
        <Link to="/" className="text-lg md:text-xl font-bold text-base-content shrink-0">
          CS — Ticket System
        </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-8">
        
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6 text-sm font-medium text-base-content">
            <li><Link to="/" className="cursor-pointer transition hover:text-primary">Home</Link></li>
            <li><Link to="/reports" className="cursor-pointer transition hover:text-primary">Reports</Link></li>
            <li><Link to="/faq" className="cursor-pointer transition hover:text-primary">FAQ</Link></li>
            <li className="cursor-pointer transition hover:text-primary">Changelog</li>
            <li className="cursor-pointer transition hover:text-primary">Blog</li>
        </ul>

        {/* New Ticket Button */}
        <button onClick={onNewTicket} className="btn btn-primary text-white px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm shrink-0">
            + New Ticket
        </button>
        </div>
    </div>
    
    {/* Mobile Navigation Dropdown */}
    <div className={`lg:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="flex flex-col gap-4 pb-4 text-sm font-medium text-base-content border-t border-base-300 pt-4">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="cursor-pointer transition hover:text-primary">Home</Link></li>
            <li><Link to="/reports" onClick={() => setIsOpen(false)} className="cursor-pointer transition hover:text-primary">Reports</Link></li>
            <li><Link to="/faq" onClick={() => setIsOpen(false)} className="cursor-pointer transition hover:text-primary">FAQ</Link></li>
            <li className="cursor-pointer transition hover:text-primary">Changelog</li>
            <li className="cursor-pointer transition hover:text-primary">Blog</li>
        </ul>
    </div>
    </nav>
    );
};

export default Navbar;