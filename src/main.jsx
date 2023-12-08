// Dependências do React
import React from "react"
import ReactDOM from "react-dom/client"

// Estilos globais
import GlobalStyle from "./styles/global"

// Rotas da aplicação
import { Routes } from "./routes"

//
import { AuthProvider } from "./hooks/auth"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>
)
