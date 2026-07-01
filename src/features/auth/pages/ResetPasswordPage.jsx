import { Typography, Input, Link, Button } from '@/components';
import { ArrowRight, Mail, KeyRound } from 'lucide-react';

import Logo from '/algorithmics-logo_largo.webp';

export const ResetPasswordPage = () => {
  return (
    <div className="flex items-center mb-2 flex-col">
      <img src={Logo} alt="Algorithmics Logo" className="w-auto h-8 mb-0.5" />

      <div className="flex items-center gap-1">
        <KeyRound className="text-brand-purple text-2xl" />

        <Typography variant="h2" color="dark" className={'lg:text-[1.68rem]'}>
          ¿Olvidaste tu contraseña?
        </Typography>
      </div>

      <Typography color="gray" className={'mt-1'}>
        Ingresa tu correo electrónico y te enviaremos un enlace para
        restablecerla.
      </Typography>

      <form
        action=""
        className="mt-6 w-full max-w-md flex flex-col justify-center items-center px-10"
      >
        <Input
          label="Correo electrónico"
          type="email"
          placeholder="tu@email.com"
          icon={<Mail />}
        />

        <Button className="w-full mt-4" size="lg">
          Enviar enlace
          <ArrowRight className="ml-2" />
        </Button>

        <Typography variant="bodySmall" color="gray" className="mt-6">
          ¿Recordaste tu contraseña? <Link to="/auth">Inicia sesión</Link>
        </Typography>
      </form>
    </div>
  );
};
