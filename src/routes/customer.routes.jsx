import { Route, Routes, Navigate } from "react-router-dom"

import { Home } from "../pages/Home"
import { View } from "../pages/View"
import { Search } from "../pages/Search"
import { NotFound } from "../pages/NotFound"

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view/:id" element={<View />} />
      <Route path="/search" element={<Search />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
