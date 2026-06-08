import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import { SearchProvider } from './components/SearchOverlay'
import Layout from './components/Layout'
import Home from './pages/Home'
import VolumeStub from './pages/VolumeStub'
import Vol2Regulations from './pages/Vol2Regulations'

export default function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vol/2" element={<Vol2Regulations />} />
            <Route path="/vol/:id" element={<VolumeStub />} />
          </Route>
        </Routes>
      </SearchProvider>
    </ThemeProvider>
  )
}
