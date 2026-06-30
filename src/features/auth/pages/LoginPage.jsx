import { useAuthStore } from "@/stores/auth-store";
import { useNavigate } from "react-router-dom";
import { ButtonBrand } from "@/components/custom/ButtonBrand";
import { ArrowRight } from "lucide-react";

import { InputBrand } from "@/components/custom/InputBrand";
import { CheckboxBrand } from "@/components/custom/CheckboxBrand";
import { PasswordFieldBrand } from "@/components/custom/PasswordFieldBrand";
import { UserIcon } from "lucide-react";

export const LoginPage = () => {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: "Demo User", role: "student", twoFactorEnabled: true });
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl font-heading">Algorithmics</h1>
        <p className="text-muted-foreground">Inicia sesión para continuar</p>
        {/* Botones habilitados */}
        <ButtonBrand brand="primary" onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </ButtonBrand>
        <ButtonBrand brand="secondary" onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </ButtonBrand>
        <ButtonBrand brand="subtle" onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </ButtonBrand>
        {/* Botones desabilitados */}
        <ButtonBrand brand="primary" disabled onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </ButtonBrand>
        <ButtonBrand brand="secondary" disabled onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </ButtonBrand>
        <ButtonBrand brand="subtle" disabled onClick={handleLogin} size="lg">
          Entrar a la plataforma
          <ArrowRight className="size-4" />
        </ButtonBrand>
        {/* Inputs */}
        <InputBrand
          type="email"
          label="Correo electrónico"
          placeholder="tu@correo.com"
        />
        <InputBrand type="text" label="Apellido" placeholder="Pérez" />
        <PasswordFieldBrand />
        <PasswordFieldBrand
          label="Nueva contraseña"
          placeholder="mín. 8 caracteres"
        />
        <PasswordFieldBrand aria-invalid data-invalid />
        <InputBrand
          type="text"
          label="Nombre"
          placeholder="Juan"
          icon={<UserIcon />}
        />
        {/* Checkboxes */}
        <CheckboxBrand id="remember" label="Recordarme" />
        <CheckboxBrand id="terms" label="Acepto los términos" defaultChecked />
        <CheckboxBrand
          id="disabled-example"
          label="Opción no disponible"
          disabled
        />
      </div>
    </div>
  );
};
