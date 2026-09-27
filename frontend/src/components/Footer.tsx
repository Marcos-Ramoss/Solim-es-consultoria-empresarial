import React from 'react';
import { Logo } from './Logo';
import { ArrowUp, BarChart3 } from 'lucide-react';

interface FooterProps {
  onIrParaDashboard?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onIrParaDashboard }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030914] text-slate-400 text-xs border-t border-amber-500/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          
          {/* Coluna 1: Marca & Propósito */}
          <div className="space-y-4 lg:col-span-2">
            <Logo size="lg" />
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Solimões Consultoria Empresarial. Apoio estratégico no planejamento financeiro, capital de giro e reservas de segurança para empresas que buscam longevidade e solidez.
            </p>
            <div className="p-3.5 rounded-xl bg-[#071324] border border-amber-500/20 max-w-md">
              <p className="text-amber-300 font-bold italic text-xs">
                “Empresa forte é aquela que se planeja hoje para vencer amanhã!”
              </p>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#capital-de-giro" className="hover:text-amber-400 transition-colors">
                  Capital de Giro
                </a>
              </li>
              <li>
                <a href="#reserva-de-emergencia" className="hover:text-amber-400 transition-colors">
                  Reserva de Emergência
                </a>
              </li>
              <li>
                <a href="#dicas-de-ouro" className="hover:text-amber-400 transition-colors">
                  Dicas de Ouro
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-400 transition-colors">
                  Simulador Financeiro
                </a>
              </li>
              <li className="pt-1">
                <button
                  onClick={onIrParaDashboard}
                  className="inline-flex items-center gap-1.5 text-amber-400 font-bold hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Dashboard PF × PJ</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Inferior com Copyright e Botão Subir */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Solimões Consultoria Empresarial. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#0a1b33] border border-amber-500/20 text-slate-300 hover:text-amber-400 hover:border-amber-400 transition-all flex items-center gap-1.5 text-xs focus:outline-none cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
