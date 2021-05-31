import Link from "next/link"
import { FunctionComponent } from "react"
import { Button } from ".."
import { useHomeContext } from "../../context/HomeContext"

import { ModalOverlayInfo, ModalOverlay, ModalVideo } from "./styles"

interface ModalProps {
  title: string;
  description: string;
}

export const Modal: FunctionComponent<ModalProps> = ({ title = "", description ="", children}) => {

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

export const ModalInfo: FunctionComponent = () => {
  const { changeVideoStateModal } = useHomeContext();

  return (
    <ModalOverlayInfo>
        <ModalVideo>
        <header>
          <button onClick={changeVideoStateModal}><img src="icons/close.svg" alt="Fechar" /></button>
        </header>
        <main>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zWhGS-AzSQ0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </main>
        <div>
          <h2>O que é LGBTQIA+ para crianças!</h2>
          <div>
            <img src="https://yt3.ggpht.com/ytc/AAUvwng1N2YzEowbVSD76eUvrxIZ7Sa0JKHWQg6zx3SZFg=s176-c-k-c0x00ffffff-no-rj" alt="Imagem de perfil do Youtube" />
            <div>
              <h3>Ana Paula Xongani</h3>
              <p>95,9 mil inscritos</p>
            </div>
          </div>

          <Button>Abrir no Youtube</Button>
        </div>
        </ModalVideo>
    </ModalOverlayInfo>
  )
}
