import { Button } from './styles/shared.styled';

export function FilterButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}
