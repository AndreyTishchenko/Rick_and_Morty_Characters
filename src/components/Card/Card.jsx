import { StyledCard, CardImg, CardInfo } from './styles';
import { CardTitle } from './CardTitle';
import { CardStatus } from './CardStatus';
import { useCallback } from 'react';

export function Card({ onClick, data }) {
  const handleClick = useCallback(() => {
    onClick(data);
  }, [onClick, data]);

  return (
    <StyledCard onClick={handleClick}>
      <CardImg src={data.image} alt={data.name} />
      <CardInfo>
        <CardTitle name={data.name} gender={data.gender} />
        <CardStatus
          status={data.status}
          species={data.species}
          type={data.type}
        />
      </CardInfo>
    </StyledCard>
  );
}
