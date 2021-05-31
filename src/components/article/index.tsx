import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Button } from ".."
import { ArticleLargeWrapper, ArticleMediumWrapper, ArticleSmallWrapper } from "./styles"

interface ArticleProps {
  title?: string;
  description?: string;
  src?: string;
  href?: string;
}

export const ArticleMedium: FunctionComponent<ArticleProps> = ({ title, description, src, href="" }) => {

  return (
    <ArticleMediumWrapper>
      {src && <Image src={src} width={500} height={500} alt="Imagem da noticia" objectFit="cover" />}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href}>
          <Button>Saiba mais</Button>
        </Link>
      </div>
    </ArticleMediumWrapper>
  )
}

export const ArticleLarge: FunctionComponent<ArticleProps> = ({ title, description, src, href="" }) => {

  return (
    <ArticleLargeWrapper>
      {src && <Image src={src} width={500} height={500} alt="Imagem da noticia" objectFit="cover" />}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href}>
          <Button>Saiba mais</Button>
        </Link>
      </div>
    </ArticleLargeWrapper>
  )
}

export const ArticleSmall: FunctionComponent<ArticleProps> = ({ description, src, href="" }) => {

  return (
    <ArticleSmallWrapper>
      <p>{description}</p>
      {src && <Image src={src} width={500} height={500} alt="Imagem da noticia" objectFit="cover" />}
      <div>
        <Link href={href}>
          <a>saiba mais</a>
        </Link>
      </div>
    </ArticleSmallWrapper>
  )
}
