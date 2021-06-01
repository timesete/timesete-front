import { FunctionComponent } from "react";
import { CardWrapper } from "./styles";

interface CardProps {
  src: string;
}

export const Card: FunctionComponent<CardProps> = ({ src }) => {

  return (
    <CardWrapper>
      <img src={src} alt="Amigo completo" />
    </CardWrapper>
  )
}
