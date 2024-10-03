import { createContext, useState, FC, ReactNode } from "react";

interface IHamburgerContext {
  isVisHamburger: boolean,
  setIsVisHamburger: (value: boolean) => void
}

const HamburgerContext = createContext<IHamburgerContext>({ isVisHamburger: false, setIsVisHamburger: () => {} })

const HamburgerProvider = ({ children }: { children: ReactNode }) => {
  const [isVisHamburger, setIsVisHamburger] = useState<boolean>(false)

  return(
    <HamburgerContext.Provider value={{isVisHamburger, setIsVisHamburger}}>
      {children}
    </HamburgerContext.Provider>
  )
}

export { HamburgerProvider, HamburgerContext }