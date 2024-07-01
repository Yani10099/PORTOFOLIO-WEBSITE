import React from "react";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default PortfolioCard; // Make sure to export the component
