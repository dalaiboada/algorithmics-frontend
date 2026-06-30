import { Outlet } from 'react-router-dom';
import { AnimatedBackground } from '@/components/feedback/AnimatedBackground';
import { Flag, Building, GraduationCap, MapPin } from 'lucide-react';

export const AuthLayout = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-[#e6e3dc]">
      <AnimatedBackground />

      <div className="relative z-10 w-full min-h-screen flex flex-col md:flex-row items-stretch">
        {/* PANEL IZQUIERDO */}
        <div
          className="w-full md:w-[45%] lg:w-[40%] min-h-screen md:h-full flex flex-col justify-center items-center px-6 md:px-10 lg:px-14 py-10 z-10"
          style={{
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <Outlet />
        </div>

        {/* PANEL DERECHO */}
        <div
          className="hidden md:flex w-full md:w-[55%] lg:w-[60%] flex-col justify-start gap-4 p-6 lg:p-8 relative overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(244,245,249,0.3) 100%)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          {/* CONTENIDO DE TEXTO EN CABECERA */}
          <div className="relative z-10 w-full max-w-2xl mx-auto space-y-4">
            <h3 className="text-3xl lg:text-4xl font-extrabold text-[#1E1E2F] leading-tight tracking-tight">
              Tu hijo aprenderá en una escuela de{' '}
              <br className="hidden lg:inline" />
              <span className="text-[#8A3FFC] relative inline-block">
                calidad internacional
              </span>
            </h3>

            {/* Estadísticas / Métricas con iconos */}
            <div className="flex flex-wrap items-center gap-6 lg:gap-8 pt-2">
              {/* Países */}
              <div className="flex items-center gap-2.5 bg-white/70 px-4 py-2 rounded-2xl shadow-sm border border-white/50">
                <div className="w-9 h-9 bg-[#8A3FFC]/10 text-[#8A3FFC] rounded-xl flex items-center justify-center">
                  <Flag className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#1E1E2F] leading-none">
                    90+ países
                  </p>

                  <p className="text-[10px] text-gray-500 font-medium mt-0.5">
                    Presencia global
                  </p>
                </div>
              </div>

              {/* Socios */}
              <div className="flex items-center gap-2.5 bg-white/70 px-4 py-2 rounded-2xl shadow-sm border border-white/50">
                <div className="w-9 h-9 bg-[#8A3FFC]/10 text-[#8A3FFC] rounded-xl flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#1E1E2F] leading-none">
                    515 socios
                  </p>

                  <p className="text-[10px] text-gray-500 font-medium mt-0.5">
                    Aliados globales
                  </p>
                </div>
              </div>

              {/* Graduados */}
              <div className="flex items-center gap-2.5 bg-white/70 px-4 py-2 rounded-2xl shadow-sm border border-white/50">
                <div className="w-9 h-9 bg-[#8A3FFC]/10 text-[#8A3FFC] rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#1E1E2F] leading-none">
                    1.1M graduados
                  </p>

                  <p className="text-[10px] text-gray-500 font-medium mt-0.5">
                    Casos de éxito
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENEDOR CENTRAL: MAPA VECTORIAL */}
          <div className="relative z-10 w-full max-w-4xl mx-auto flex items-center justify-center">
            <div className="relative w-full max-h-[300px] flex items-center justify-center">
              <img
                src="https://chacao.alg.academy/_nuxt/img/4d36591.png"
                alt="Algorithmics World Map"
                className="w-full max-w-[650px] object-contain select-none"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=60';
                  e.target.classList.add('opacity-10', 'rounded-xl');
                }}
              />
            </div>
          </div>

          {/* PIE DE DETALLE CON BANNER INFORMATIVO */}
          <div className="relative z-10 w-full max-w-2xl mx-auto -mt-8">
            <div className="bg-white/70 backdrop-blur-md text-[#1E1E2F] rounded-2xl p-4 flex items-center gap-4 border border-white/80 shadow-md">
              <div className="w-10 h-10 bg-[#8A3FFC]/10 text-[#8A3FFC] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#1E1E2F]">
                  ¡La escuela del futuro en Venezuela! 🇻🇪
                </p>
                <p className="text-xs text-gray-600 font-medium mt-0.5">
                  Miles de padres confían en nuestro sistema educativo alrededor
                  del mundo y ahora nos adaptamos a tu región.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
