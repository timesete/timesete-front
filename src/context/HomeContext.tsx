import { createContext, FunctionComponent, useCallback, useContext, useState } from "react"

interface IHomeContextData {
  isOpenVideoModal: boolean;
  changeVideoStateModal(): void;
}

export const HomeContext = createContext({} as IHomeContextData);

export const HomeProvider: FunctionComponent = ({ children }) => {
  const [isOpenVideoModal, setIsOpenVideoModal] = useState(false)

  const changeVideoStateModal = useCallback(()=>{
    setIsOpenVideoModal(!isOpenVideoModal);
  },[isOpenVideoModal]);

  return (
    <HomeContext.Provider value={{ isOpenVideoModal, changeVideoStateModal }}>
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
