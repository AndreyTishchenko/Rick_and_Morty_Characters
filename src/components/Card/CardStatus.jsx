import { CardStatusContainer, StyledCardStatus, CardType } from './styles';

export function CardStatus({ status, species, type, className }) {
  return (
    <CardStatusContainer className={className}>
      <StyledCardStatus $status={status}>{status}</StyledCardStatus>
      &nbsp;-&nbsp;
      <span>{species}</span>
      {type?.trim() && <CardType>{type}</CardType>}
    </CardStatusContainer>
  );
}
