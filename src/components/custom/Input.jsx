import * as React from 'react';
import { cn } from '@/lib/utils';

// Envolvemos en forwardRef para que React Hook Form maneje el foco de los campos
const Input = React.forwardRef(
  ({ id, label, icon, className, error, ...props }, ref) => {
    const autoId = React.useId();
    const inputId = id || autoId;

    return (
      <div className="max-w-100 w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-xs font-bold text-gray-700 ml-1 uppercase tracking-wide dark:text-muted-foreground',
              error && 'text-red-500 dark:text-red-400' // Color de error para el label
            )}
          >
            {label}
          </label>
        )}

        <div
          className={cn(
            'relative flex items-center rounded-xl bg-white/60 border outline-none transition-all shadow-sm backdrop-blur-sm dark:bg-input/30',
            error
              ? 'border-red-400 focus-within:border-red-500 focus-within:ring-0 dark:border-red-500'
              : 'border-gray-200/80 focus-within:border-(--color-brand-purple) focus-within:ring-0 dark:border-gray-700 dark:focus-within:border-(--color-brand-purple)'
          )}
        >
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
              {React.cloneElement(icon, {
                className: cn('size-4 text-gray-500', icon.props.className),
              })}
            </div>
          )}

          <input
            id={inputId}
            ref={ref} // Inyectamos la referencia aquí
            className={cn(
              'w-full bg-transparent border-0 rounded-xl focus:ring-0 outline-none text-gray-700 text-sm font-medium placeholder-gray-400 dark:text-gray-200 dark:placeholder-gray-500',
              icon ? 'pl-10 pr-4 py-2.5' : 'px-4 py-2.5',
              className
            )}
            {...props}
          />
        </div>

        {/* Mensaje de error accesible */}
        {error && (
          <p className="text-xs text-red-500 font-medium ml-1 mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export { Input };
