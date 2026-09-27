import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CapitalDeGiro } from './components/CapitalDeGiro';
import { ReservaEmergencia } from './components/ReservaEmergencia';
import { DicasDeOuro } from './components/DicasDeOuro';
import { SimuladorFinanceiro } from './components/SimuladorFinanceiro';
import { Footer } from './components/Footer';
import { DashboardPage } from './components/dashboard/DashboardPage';

export const App: React.FC = () => {
  const [paginaAtual, setPaginaAtual] = useState<'folder' | 'dashboard'>(() => {
    return window.location.hash === '#dashboard' ? 'dashboard' : 'folder';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#dashboard') {
        setPaginaAtual('dashboard');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setPaginaAtual('folder');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navegarParaDashboard = () => {
    window.location.hash = '#dashboard';
    setPaginaAtual('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navegarParaFolder = () => {
    window.location.hash = '#inicio';
    setPaginaAtual('folder');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Se a rota for o Dashboard, exibe a página do Dashboard Financeiro
  if (paginaAtual === 'dashboard') {
    return <DashboardPage onVoltarParaFolder={navegarParaFolder} />;
  }

  // Caso contrário, exibe o Folder Online Interativo
  return (
    <div className="min-h-screen bg-[#050e1d] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Barra de Navegação Fixa */}
      <Navbar onIrParaDashboard={navegarParaDashboard} />

      {/* Conteúdo Principal do Folder Online */}
      <main className="flex-grow">
        {/* Seção 1: Hero Principal */}
        <Hero onIrParaDashboard={navegarParaDashboard} />

        {/* Seção 2: Capital de Giro (Coluna Esquerda do Folder) */}
        <CapitalDeGiro />

        {/* Seção 3: Reserva de Emergência (Coluna Direita do Folder) */}
        <ReservaEmergencia />

        {/* Seção 4: Dicas de Ouro & 3 Pilares Estratégicos (Coluna Central do Folder) */}
        <DicasDeOuro />

        {/* Seção 5: Simulador Interativo de Cálculo com Botão para o Dashboard */}
        <SimuladorFinanceiro onIrParaDashboard={navegarParaDashboard} />
      </main>

      {/* Rodapé Institucional */}
      <Footer onIrParaDashboard={navegarParaDashboard} />
    </div>
  );
};

export default App;
