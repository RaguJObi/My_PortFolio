import { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type AnchorProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type' | 'onClick' | 'className' | 'children'>;

type NativeButtonProps = {
  href?: undefined;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

type ButtonProps = AnchorProps | NativeButtonProps;

const Button = (props: ButtonProps) => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    icon,
    iconPosition = 'left',
    ...rest
  } = props;

  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500',
    secondary: 'bg-teal-500 hover:bg-teal-600 text-white focus:ring-teal-500',
    outline: 'bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 focus:ring-indigo-500',
  };
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  if ('href' in props && props.href) {
    // Only pass anchor props to <a>
    const { href, ...anchorRest } = rest as AnchorProps;
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...anchorRest}
      >
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </a>
    );
  }

  // Only pass button props to <button>
  const buttonRest = rest as NativeButtonProps;
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...buttonRest}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;