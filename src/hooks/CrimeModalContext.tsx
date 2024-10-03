import { createContext, useState, FC, ReactNode } from "react";

interface ICrimeModal {
  isVisCrimeModal: boolean,
  setIsVisCrimeModal: (value: boolean) => void
}

const CrimeModalContext = createContext<ICrimeModal>({ isVisCrimeModal: false, setIsVisCrimeModal: () => {} })

const CrimeModalProvider = ({ children }: { children: ReactNode }) => {
  const [isVisCrimeModal, setIsVisCrimeModal] = useState<boolean>(false)

  return(
    <CrimeModalContext.Provider value={{isVisCrimeModal, setIsVisCrimeModal}}>
      {children}
    </CrimeModalContext.Provider>
  )
}

export { CrimeModalContext, CrimeModalProvider }