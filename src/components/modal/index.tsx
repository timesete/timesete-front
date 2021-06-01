import Link from "next/link"
import { FunctionComponent } from "react"
import { Button } from ".."
import { useHomeContext } from "../../context/HomeContext"

import { ModalOverlayInfo, ModalOverlay, ModalVideo } from "./styles"

interface ModalProps {
  title: string;
  description: string;
}

export const Modal: FunctionComponent<ModalProps> = ({ title = "", description = "", children }) => {

  return (
    <ModalOverlay>
      <div>
        <header>
          <h2>{title}</h2>
        </header>
        <div>
          <p>{description}</p>
        </div>
        <footer>
          <Link href="/entrarnaconta">
            <Button>Entrar na conta</Button>
          </Link>
        </footer>
      </div>
    </ModalOverlay>
  )
}

export const ModalInfo: FunctionComponent = ({

}) => {
  const {changeVideoStateModal, modalData} = useHomeContext();

  return (
    <ModalOverlayInfo>
      <ModalVideo>
        <header>
          <button onClick={changeVideoStateModal}><img src="icons/close.svg" alt="Fechar" /></button>
        </header>
        <main>
          <div>
            <iframe width="560" height="315" src={modalData.srcYoutube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </main>
        <div>
          <h2>{modalData.title}</h2>
          <div>
            <img src={modalData.srcThumbnail} alt="Imagem de perfil do Youtube" />
            <div>
              <h3>{modalData.author}</h3>
              <p>{modalData.subscribe}</p>
            </div>
          </div>

          <Button><a href={modalData.srcYoutube} target="blank">Abrir no Youtube</a></Button>
        </div>
      </ModalVideo>
    </ModalOverlayInfo>
  )
}
