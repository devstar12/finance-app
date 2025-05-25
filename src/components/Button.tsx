import { type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary:
      'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300 focus:ring-gray-400',
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
