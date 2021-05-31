import { HomeHeader, ModalInfo } from "../../components";
import { useHomeContext } from "../../context/HomeContext"
import { MundoWrapper, Personagem } from "../../styles/pages/MundoStyles";
import withAuth from "../../utils/withAuth";

const Mundo = () => {
  const { changeVideoStateModal, isOpenVideoModal } = useHomeContext();

  return (
    <>
    <MundoWrapper>
      <HomeHeader />
      <main>
        <div>
          <p>Clique nos amigos e descubra mais sobre eles</p>
        </div>
        <img src="icons/mundo_diverso.svg" alt="Mundo diverso personagens" />
        <Personagem>
            <img src="icons/personagens/padrao.svg" alt="Personagem padrão" onClick={changeVideoStateModal} />
        </Personagem>
      </main>
    </MundoWrapper>

    {isOpenVideoModal && <ModalInfo />}
    </>
  )
}

export default withAuth(Mundo);
