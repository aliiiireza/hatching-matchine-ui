import { StyledButton } from "./StyledButton";

interface ButtonProps {
  onClick?: () => any;
  type?: "primary" | "success" | "warning" | "secondary" | "danger";
  color?: string;
  children?: JSX.Element | string;
  disabled?: boolean;
  loading?: boolean;
  textTransform?: string;
  label?: string;
  fullWidth?: boolean;
  selected?: boolean;
}

export const Button = ({
  children,
  onClick,
  type = "primary",
  color,
  loading = false,
  textTransform = "uppercase",
  label = "",
  fullWidth = false,
  selected = false,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={loading}
      type={type}
      color={color}
      textTransform={textTransform}
      fullWidth={fullWidth}
      selected={selected}
    >
      {loading ? "LOADING..." : children || label}
    </StyledButton>
  );
};
export default Button;
