interface IButtonGeneral {
  color?: string;
  background?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  border?: string;
  radius?: string;
  width?: string;
  type?: "button" | "submit";
  className?: string;
}

const ButtonGeneral = ({
  color,
  background,
  onClick,
  children,
  border,
  radius,
  width,
  type,
  className,
}: IButtonGeneral) => {
  return (
    <button
      onClick={onClick}
      style={{
        color,
        background,
        border,
        borderRadius: radius,
        width,
      }}
      className={className}
      type={type}
    >
      {children}
    </button>
  );
};
export default ButtonGeneral;
