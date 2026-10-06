export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2';

  const styles = {
    primary:
      'bg-sky-950 text-white shadow-[0_12px_30px_rgba(9,34,40,0.18)] hover:bg-sky-900',
    secondary:
      'border border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50',
    ghost:
      'bg-teal-50 text-teal-800 hover:bg-teal-100',
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
