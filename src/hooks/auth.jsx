import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../../services/api"

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const res = await api.post("/sessions", { email, password })
      const { token, user } = res.data

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
      localStorage.setItem("@foodexplorer:token", token)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({ token, user })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possíve logar.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:user")
    localStorage.removeItem("@foodexplorer:token")
    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user")
    const token = localStorage.getItem("@foodexplorer:token")

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setData({
        token,
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
