import { createContext, useState, FC, ReactNode } from "react";

interface IGosModal {
  isVisGosModal: boolean,
  setIsVisGosModal: (value: boolean) => void
}

const GosModalContext = createContext<IGosModal>({ isVisGosModal: false, setIsVisGosModal: () => {} })

const GosModalProvider = ({ children }: { children: ReactNode }) => {
  const [isVisGosModal, setIsVisGosModal] = useState<boolean>(false)

  return(
    <GosModalContext.Provider value={{isVisGosModal, setIsVisGosModal}}>
      {children}
    </GosModalContext.Provider>
  )
}

export { GosModalContext, GosModalProvider }