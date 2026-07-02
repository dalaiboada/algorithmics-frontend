import { AlertCircleIcon, CircleCheck, CircleX } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const variants = {
  error: {
    variant: 'destructive',
    icon: <CircleX />,
    defaultTitle: 'Error',
    title: 'max-w-sm bg-red-100 text-red-800 border-red-300',
    description: 'text-red-800!',
  },
  warning: {
    variant: 'default',
    icon: <AlertCircleIcon />,
    defaultTitle: 'Advertencia',
    title: 'max-w-sm bg-yellow-100 border-yellow-300 text-yellow-800',
    description: 'text-yellow-800!',
  },
  success: {
    variant: 'default',
    icon: <CircleCheck />,
    defaultTitle: 'Éxito',
    title: 'max-w-sm bg-green-100 border-green-300 text-green-800',
    description: 'text-green-800!',
  },
};

export const AlertCircleIconComponent = ({
  Title,
  Description,
  type = 'warning',
}) => {
  return (
    <Alert variant={variants[type].variant} className={variants[type].title}>
      {variants[type].icon}
      <AlertTitle>{Title}</AlertTitle>
      <AlertDescription className={variants[type].description}>
        {Description}
      </AlertDescription>
    </Alert>
  );
};
