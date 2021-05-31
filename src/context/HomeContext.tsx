import { createContext, FunctionComponent, useCallback, useContext, useState } from "react"

interface IHomeContextData {
  modalData: ModalProps;
  isOpenVideoModal: boolean;
  setModalParameters(props: ModalProps): void;
  changeVideoStateModal(): void;
}

interface ModalProps {
  srcThumbnail: string;
  srcYoutube: string;
  title: string;
  author: string;
  subscribe: string;
}

export const HomeContext = createContext({} as IHomeContextData);

export const HomeProvider: FunctionComponent = ({ children }) => {
  const [isOpenVideoModal, setIsOpenVideoModal] = useState(false)
  const [modalData, setModalData] = useState({} as ModalProps)

  const changeVideoStateModal = useCallback(()=>{
    setIsOpenVideoModal(!isOpenVideoModal);
  },[isOpenVideoModal]);

  const setModalParameters = useCallback((props: ModalProps)=>{
    setModalData({
      srcYoutube: props.srcYoutube,
      srcThumbnail: props.srcThumbnail,
      title: props.title,
      author: props.author,
      subscribe: props.subscribe,
    });

    console.log(modalData)
  },[modalData])

  return (
    <HomeContext.Provider value={{
      changeVideoStateModal,
      isOpenVideoModal,
      setModalParameters,
      modalData,
    }}>
      { children }
    </HomeContext.Provider>
  )
};

export function useHomeContext(): IHomeContextData {
  const context = useContext(HomeContext);

  if(!context){
    throw new Error('Shoulbe use with HomeContextProvider')
  }

  return context;
}
