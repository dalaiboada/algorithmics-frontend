import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { ProtectedRoute } from '@/routes/ProtectedRoute';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { AuthLayout } from '@/layouts/AuthLayout';
import { CoursesPage } from '@/features/shared/CoursesPage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: 'courses', element: <CoursesPage /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      // { path: '2fa', element: <TwoFactorPage /> },
      // { path: 'reset-password', element: <ResetPasswordPage /> },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            path: 'dashboard',
            element: (
              <div className="p-8">
                <h1 className="text-2xl font-heading">Dashboard</h1>
              </div>
            ),
          },
        ],
      },
    ],
  },
]);
