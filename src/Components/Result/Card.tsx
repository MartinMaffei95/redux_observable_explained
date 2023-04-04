import { StyledCard } from '../../styled-components/Card.styles';

const Card = ({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <StyledCard>
      <div className="card-image_container">
        <img alt={`Image of ${title}`} src={image} />
      </div>
      <div className="card-data_container">
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </StyledCard>
  );
};

export default Card;
