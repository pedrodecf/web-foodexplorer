import { Route, Routes } from "react-router-dom"

import { Home } from "../pages/Home"
import { View } from "../pages/View"
import { NewItem } from "../pages/NewItem"
import { Edit } from "../pages/Edit"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view/:id" element={<View />} />
      <Route path="/new" element={<NewItem />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  )
}
