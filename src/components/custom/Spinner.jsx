// components/Spinner.jsx
export const Spinner = ({
  size = 'md',
  color = 'brand-purple',
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-4',
    lg: 'w-14 h-14 border-4',
    xl: 'w-20 h-20 border-[6px]',
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className={`${sizes[size]} border-${color} border-t-transparent rounded-full animate-spin ${className}`}
        {...props}
      />
    </div>
  );
};
