import {
  Typography,
  Input,
  PasswordField,
  Checkbox,
  Link,
  Button,
} from '@/components';

import Logo from '/algorithmics-logo_largo.webp';
import { ArrowRight, Mail } from 'lucide-react';

export const LoginPage = () => {
  return (
    <>
      <div className="flex items-center mb-2">
        <img src={Logo} alt="Algorithmics Logo" className="w-auto h-8" />
      </div>
      <Typography variant="h2" color="dark">
        ¡Hola de nuevo! 👋
      </Typography>
      <Typography color="gray">Preparate para programar el futuro</Typography>

      <Input
        type="email"
        label="Correo electrónico"
        placeholder="tu@email.com"
        icon={<Mail className="size-4" />}
      />
      <PasswordField />

      <Checkbox id="remember" label="Recordarme" />

      <Link to="/auth/reset-password">¿Olvidaste tu contraseña?</Link>

      <Button variant="default" size="lg">
        Entrar a la plataforma <ArrowRight className="size-4" />
      </Button>

      <Button variant="default" size="lg">
        Entrar con Google
      </Button>

      <Typography variant="bodySmall" color="gray">
        ¿No tienes cuenta? <Link to="/auth/register">Regístrate aquí</Link>
      </Typography>
    </>
  );
};
