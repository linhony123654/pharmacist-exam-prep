import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import { SearchProvider } from './components/SearchOverlay'
import Layout from './components/Layout'
import Home from './pages/Home'
import VolumeStub from './pages/VolumeStub'

export default function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vol/:id" element={<VolumeStub />} />
          </Route>
        </Routes>
      </SearchProvider>
    </ThemeProvider>
  )
}
