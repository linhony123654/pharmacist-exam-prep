import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import { SearchProvider } from './components/SearchOverlay'
import Layout from './components/Layout'
import Home from './pages/Home'
import VolumeStub from './pages/VolumeStub'
import Vol1Strategy from './pages/Vol1Strategy'
import Vol2Regulations from './pages/Vol2Regulations'
import Vol3Pharmacy1 from './pages/Vol3Pharmacy1'
import Vol4Pharmacy2 from './pages/Vol4Pharmacy2'
import Vol5Practice from './pages/Vol5Practice'
import AIGenerator from './pages/AIGenerator'
import ExamPaper from './pages/ExamPaper'

export default function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vol/1" element={<Vol1Strategy />} />
            <Route path="/vol/2" element={<Vol2Regulations />} />
            <Route path="/vol/3" element={<Vol3Pharmacy1 />} />
            <Route path="/vol/4" element={<Vol4Pharmacy2 />} />
            <Route path="/vol/5" element={<Vol5Practice />} />
            <Route path="/vol/:id" element={<VolumeStub />} />
            <Route path="/ai-generator" element={<AIGenerator />} />
            <Route path="/exam" element={<ExamPaper />} />
          </Route>
        </Routes>
      </SearchProvider>
    </ThemeProvider>
  )
}
