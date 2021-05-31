import Link from "next/link";
import { GetServerSideProps } from "next";

import { useHomeContext } from "../context/HomeContext"

import { HomeWrapper, LearnMoreGrid} from "../styles/pages/HomeStyles";
import { ArticleMedium, HomeHeader, ArticleLarge, ArticleSmall, Card, Button, FooterHome, ModalInfo } from "../components"
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Personagem } from "../styles/pages/MundoStyles";

interface HomeProps {
  token: string;
  refreshToken: string;
}

const Home = ({ token, refreshToken}: HomeProps) => {
  const { isOpenVideoModal, changeVideoStateModal } = useHomeContext();
  const { changeAuthenticationState } = useAuth();

  useEffect(()=>{
    if(token) {
      changeAuthenticationState(true);
    }
  },[])

  return (
    <>
      <HomeWrapper>
      <HomeHeader />
        <main>
          <div><p>Clique nos amigos e descubra mais sobre eles</p></div>
          <img src="icons/mundo_diverso.svg" alt="Mundo diverso personagens" />

          <Personagem>
            <img src="icons/personagens/padrao.svg" alt="Personagem padrão" onClick={changeVideoStateModal} />
          </Personagem>
        </main>
        <div>
          <img src="icons/design_top.svg" alt="" />
          <article>
            <div>
            <ArticleMedium
            src="https://images.unsplash.com/photo-1615445036633-fb135bc7913a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            title="O que é um hijab"
            description="Ensinando a criança sobre culturas e religiões diversas."
            />
            <ArticleMedium
            src="https://images.unsplash.com/photo-1617573211120-1165b16c2900?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=345&q=80"
            title="Gente da minha terra"
            description="Descubra a diversidade de povos indígenas do Brasil."
            />
            </div>
            <div>
          <ArticleLarge
          src="https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
          title="Meu amiguinho da escola é autista"
          description="Como ajudar sua criança a entender mais sobre autismo?"
          />
          <LearnMoreGrid>
          <ArticleSmall
          src="https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
          description="Meu cabelo é minha coroa"
          />
          <ArticleSmall
          src="https://images.unsplash.com/photo-1599818497948-eea9a2698ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
          description="Eu também posso jogar futebol"
          />
          <ArticleSmall
          src="https://image.freepik.com/fotos-gratis/familia-lgbt-ao-ar-livre-no-parque-se-divertindo-juntos_23-2148953028.jpg"
          description="Minha família tem duas mamães"
          />
          <ArticleSmall
          src="https://image.freepik.com/fotos-gratis/mulheres-surdas-se-comunicando-atraves-da-linguagem-gestual_23-2148590350.jpg"
          description="Linguagem dos sinais para crianças"
          />
          </LearnMoreGrid>
          </div>
          </article>

          <section>
            <h2>Monte um novo amigo agora e descubra mais sobre ele!</h2>
            <p>Cada personagem criado apresenta um conteúdo em vídeo sobre um tema em diversidade.</p>
            <div>
            <Card src="/icons/amigo_completo1.svg" />
            <Card src="/icons/amigo_completo2.svg" />
            <Card src="/icons/amigo_completo3.svg" />
            <Card src="/icons/amigo_completo4.svg" />
            <Card src="/icons/amigo_completo5.svg" />
            </div>
            <Link href="/criaramigo"><Button>Criar novo amigo</Button></Link>
          </section>

          <img src="icons/design_bottom.svg" alt="" />
        </div>
        <FooterHome />
      </HomeWrapper>
      {isOpenVideoModal && <ModalInfo />}
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {token, refreshToken} = ctx.req.cookies;

  if(!token) {
    return {
      props: {

      }
    }
  }

  return {
    props: {
      token,
      refreshToken,
    }
  }
}

export default Home;