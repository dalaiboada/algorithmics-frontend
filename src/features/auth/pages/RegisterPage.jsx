import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <>
      <h1>Registrarse</h1>
      <Link to="/auth">Iniciar sesión</Link>
    </>
  );
};
