import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onIrParaDashboard?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onIrParaDashboard }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Capital de Giro', href: '#capital-de-giro' },
    { label: 'Reserva de Emergência', href: '#reserva-de-emergencia' },
    { label: 'Dicas de Ouro', href: '#dicas-de-ouro' },
    { label: 'Simulador', href: '#simulador' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071326]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1">
            <Logo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#0d2142]/60 border border-white/10 rounded-full px-5 py-2 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-200 hover:text-amber-300 transition-colors rounded-full hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onIrParaDashboard}
              className="px-3 py-1.5 text-xs xl:text-sm font-bold text-amber-300 hover:text-amber-200 transition-colors rounded-full hover:bg-white/5 cursor-pointer"
            >
              Dashboard PF × PJ
            </button>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onIrParaDashboard}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>Acessar Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#0e2447] border border-amber-500/20 text-slate-200 hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071326]/98 border-b border-amber-500/20 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onIrParaDashboard) onIrParaDashboard();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>Acessar Painel / Dashboard</span>
            </button>
            <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-2 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Solimões Consultoria Empresarial • Gestão Estratégica</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
