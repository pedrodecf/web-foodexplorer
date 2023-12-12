import { Route, Routes, Navigate } from "react-router-dom"

import { Home } from "../pages/Home"
import { View } from "../pages/View"
import { NewItem } from "../pages/NewItem"
import { Edit } from "../pages/Edit"
import { Search } from "../pages/Search"
import { NotFound } from "../pages/NotFound"

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view/:id" element={<View />} />
      <Route path="/new" element={<NewItem />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/search" element={<Search />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
