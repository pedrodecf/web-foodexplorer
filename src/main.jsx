// Dependências do React
import React from "react"
import ReactDOM from "react-dom/client"

// Estilos globais
import GlobalStyle from "./styles/global"

// Rotas da aplicação
import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>
)
