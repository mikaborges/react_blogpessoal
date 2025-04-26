import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/home/login/Login'
import Cadastro from './pages/home/cadastro/Cadastro'
import Footer from './components/navbar/footer/Footer'
import { AuthProvider } from './contexts/AuthContext'
import ListaTemas from './components/temas/listatemas/ListaTemas'
import FormTema from './components/temas/formtema/FormTema'
import DeletarTema from './components/temas/deletartemas/DeletarTema'
import ListaPostagens from './components/postagens/cardpostagens/listapostagens/ListaPostagens'
import FormPostagem from './components/postagens/formpostagem/FormPostagem'
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem'
import Perfil from './pages/perfil/Perfil'
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify'



function App() {
  return (
    <>
        <AuthProvider>
        <ToastContainer />
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
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  )
}

export default App