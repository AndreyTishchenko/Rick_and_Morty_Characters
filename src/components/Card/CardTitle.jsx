import { StyledCardTitle, CardTitleContainer, IconContainer } from './styles';
import { genderIcons } from './utils';

export function CardTitle({ name, gender, className }) {
  return (
    <CardTitleContainer className={className}>
      <StyledCardTitle className="card-title">{name}</StyledCardTitle>
      <IconContainer>{genderIcons[gender] || null}</IconContainer>
    </CardTitleContainer>
  );
}
