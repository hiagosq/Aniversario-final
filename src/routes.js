import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Rodape from "Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "./pages/Post";
import NaoEncontrada from "pages/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";
import Jogo from "./pages/Jogo";
import musica from 'assents/musica/Taka.mp3';
import musicafoto from 'assents/frecuencia-do-som.png'
import { useEffect, useRef } from "react";

function AppRoutes() {

  const audioRef = useRef(null);

  useEffect (() => {
    const audio = audioRef.current;

    if (audio) {
      // Tenta tocar automaticamente
     const playAudio = () => {
          audio.volume = 0.3; // volume opcional
          audio.play().catch((err) => {
          console.warn('Autoplay bloqueado:', err);
        });
      };

      // Tenta tocar ao carregar
      playAudio();
    }
  }, []);


  return (
    <BrowserRouter>
    
    <button className="musica-botao" onClick={() => audioRef.current.play()}>Tocar música</button>

    <audio ref={audioRef} src={musica} autoPlay loop hidden />
    <ScrollToTop />

      <Routes>

        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="jogo" element={<Jogo/>} />
        </Route>

        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
};

export default AppRoutes;
