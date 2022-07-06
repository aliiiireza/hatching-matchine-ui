import { StyledButton } from "./StyledButton";

interface ButtonProps {
  onClick?: () => any;
  type?: "primary" | "success" | "warning";
  children?: JSX.Element | string;
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
