import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 md:w-12 md:h-12',
    lg: 'w-16 h-16 md:w-20 md:h-20',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-3xl md:text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[10px] md:text-[11px] tracking-[0.25em]',
    lg: 'text-xs md:text-sm tracking-[0.3em]',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Símbolo Oficial Solimões: /logo.PNG */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center rounded-2xl overflow-hidden border border-amber-500/35 shadow-lg shadow-amber-950/30 bg-[#071324] group`}>
        <img
          src="/logo.PNG"
          alt="Solimões Consultoria Empresarial"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          loading="eager"
        />
      </div>

      {/* Tipografia da Marca */}
      <div className="flex flex-col leading-tight">
        <span className={`font-extrabold tracking-wider text-white font-['Outfit'] ${titleSizes[size]}`}>
          SOLIMÕES
        </span>
        {showSubtitle && (
          <span className={`font-semibold uppercase text-amber-400 font-['Plus_Jakarta_Sans'] ${subtitleSizes[size]}`}>
            CONSULTORIA EMPRESARIAL
          </span>
        )}
      </div>
    </div>
  );
};
