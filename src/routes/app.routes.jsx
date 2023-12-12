import { Route, Routes } from "react-router-dom"

import { Home } from "../pages/Home"
import { View } from "../pages/View"
import { NewItem } from "../pages/NewItem"
import { Edit } from "../pages/Edit"
import { Search } from "../pages/Search"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view/:id" element={<View />} />
      <Route path="/new" element={<NewItem />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  )
}
