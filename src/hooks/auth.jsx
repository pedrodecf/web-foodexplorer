import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../../services/api"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const res = await api.post("/sessions", { email, password }, { withCredentials: true })
      const { user } = res.data

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user))

      setData({ user })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possíve logar.")
      }
    }
  }

  function signOut() {
    const user = localStorage.removeItem("@foodexplorer:user")
    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user")

    if (user) {
      setData({
        user: JSON.parse(user),
      })
    }
  }, [])

  return <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
