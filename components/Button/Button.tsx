import { StyledButton } from "./StyledButton";

interface ButtonProps {
  onClick?: () => any;
  type?: "primary" | "success" | "warning" | "disabled";
  children?: JSX.Element | string;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = ({
  children,
  onClick,
  type = "primary",
  loading = false,
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={loading} type={type}>
      {loading ? "LOADING..." : children}
    </StyledButton>
  );
};
export default Button;
