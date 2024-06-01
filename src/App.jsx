import { useState } from 'react'
import { Buffer } from 'buffer'
globalThis.Buffer = Buffer

import Context from './Context'
import CredentialsCreateExample from './navigator.credentials.create'
import CredentialsGetExample from './navigator.credentials.get'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [credential, setCredential] = useState(null)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Context.Provider value={[credential, setCredential]}>
      <div className="container mx-auto px-4 py-8" data-theme={isDarkMode ? 'dark' : 'light'}>

        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">webauthn-example</a>
          </div>
          <div className="flex-none gap-2">
            <button
              onClick={toggleTheme}
              className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'}`}
            >
              {isDarkMode ? 'Dark' : 'Light'}
            </button>
          </div>
        </div>

        <>
          <CredentialsCreateExample darkmode={isDarkMode} />
          {credential && <CredentialsGetExample />}
        </>
      </div>
    </Context.Provider>
  )
}

export default App;