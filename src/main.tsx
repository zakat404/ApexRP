import React from 'react'
import ReactDOM from 'react-dom/client'
import { HamburgerProvider } from './hooks/HamburgerContext'
import { CrimeModalProvider } from './hooks/CrimeModalContext'
import { GosModalProvider } from './hooks/GosModalContext'
import { PaymentModalProvider } from './hooks/PaymentModalContext'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PaymentModalProvider>
      <HamburgerProvider>
        <CrimeModalProvider>
          <GosModalProvider>
            <App />
          </GosModalProvider>
        </CrimeModalProvider>
      </HamburgerProvider>
    </PaymentModalProvider>
  </React.StrictMode>
)
