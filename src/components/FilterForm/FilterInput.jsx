import styled from 'styled-components';
import { Field } from './styles/shared.styled';

let Input = styled.input`
  ${Field}
`;

export function FilterInput({ name, value, onChange, placeholder }) {
  return (
    <Input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
