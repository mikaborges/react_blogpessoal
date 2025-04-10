import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/home/login/Login'
import Cadastro from './pages/home/cadastro/Cadastro'
import Footer from './components/navbar/footer/Footer'
import { AuthProvider } from './contexts/AuthContext'
import ListaTemas from './components/navbar/temas/listatemas/ListaTemas'
import FormTema from './components/navbar/temas/formtema/FormTema'
import DeletarTema from './components/navbar/temas/deletartemas/DeletarTema'



function App() {
  return (
    <>
        <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  )
}

export default App