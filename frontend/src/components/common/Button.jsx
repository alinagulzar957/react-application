const Button = ({ children, onClick, type = "button", variant = "primary" }) => {
  const base = "px-4 py-2 rounded-md text-white font-medium shadow-sm";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
