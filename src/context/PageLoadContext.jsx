import { createContext, useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PageLoadContext = createContext()

export const usePageLoadContext = () => {
  return useContext(PageLoadContext)
}

export const PageLoadProvider = ({ children }) => {
  const location = useLocation()
  const [isPageLoaded, setIsPageLoaded] = useState(false)

  useEffect(() => {
    setIsPageLoaded(false)
    
    // Carga de la página
    const timeoutId = setTimeout(() => {
      setIsPageLoaded(true)
    }, 300)

    // Limpia el estado
    return () => {
      clearTimeout(timeoutId)
    }
  }, [location.pathname])

  const contextValue = {
    isPageLoaded,
  }

  return (
    <PageLoadContext.Provider value={contextValue}>
      {children}
    </PageLoadContext.Provider>
  )
}
