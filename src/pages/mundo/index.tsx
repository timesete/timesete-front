import { HomeHeader, ModalInfo } from "../../components";
import { useHomeContext } from "../../context/HomeContext"
import { MundoWrapper, Personagem } from "../../styles/pages/MundoStyles";
import withAuth from "../../utils/withAuth";

const Mundo = () => {
  const { changeVideoStateModal, isOpenVideoModal, setModalParameters } = useHomeContext();

  return (
    <>
    <MundoWrapper>
      <HomeHeader />
      <main>
        <div>
          <p>Clique nos amigos e descubra mais sobre eles</p>
        </div>
        <img src="mundo-criacao.svg" alt="Mundo diverso personagens" />
        <Personagem top={490} left={200}>
            <img src="Personagem pré-definido 03.svg" alt="Personagem pré-definido" onClick={()=>{
              changeVideoStateModal();
              setModalParameters({
                srcYoutube: 'https://www.youtube.com/watch?v=O79Xxl7RzkE',
                srcThumbnail: 'https://yt3.ggpht.com/ytc/AAUvwniO2jPOppn6i5j_47tv52KfGG1jkh-qlhzl-2Jl=s176-c-k-c0x00ffffff-no-rj',
                author: 'Esta é a minha história',
                subscribe: '212 mil inscritos',
                title: 'Eu vou para a escola de cadeira de rodas | Eu perdi as minhas pernas | História animada',
              })
            }} />
        </Personagem>
        <Personagem top={500} left={450} >
            <img src="icons/personagens/padrao.svg" alt="Personagem padrão" onClick={()=>{
              changeVideoStateModal();
              setModalParameters({
                srcYoutube: 'https://www.youtube.com/watch?v=zWhGS-AzSQ0',
                title: 'O que é LGBTQIA+ para crianças!',
                author: 'Ana Paula Xongani',
                subscribe: '95,9 mil inscritos',
                srcThumbnail: 'https://yt3.ggpht.com/ytc/AAUvwng1N2YzEowbVSD76eUvrxIZ7Sa0JKHWQg6zx3SZFg=s176-c-k-c0x00ffffff-no-rj'
              })
            }} />
          </Personagem>
      </main>
    </MundoWrapper>

    {isOpenVideoModal && <ModalInfo />}
    </>
  )
}

export default withAuth(Mundo);
