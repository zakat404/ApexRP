import { createContext, useState, FC, ReactNode } from "react";

interface IPaymentModal {
  isVisPayment: boolean,
  setIsVisPayment: (value: boolean) => void
}

const PaymentModalContext = createContext<IPaymentModal>({ isVisPayment: false, setIsVisPayment: () => {} })

const PaymentModalProvider = ({ children }: { children: ReactNode }) => {
  const [isVisPayment, setIsVisPayment] = useState<boolean>(false)

  return(
    <PaymentModalContext.Provider value={{isVisPayment, setIsVisPayment}}>
      {children}
    </PaymentModalContext.Provider>
  )
}

export { PaymentModalContext, PaymentModalProvider }