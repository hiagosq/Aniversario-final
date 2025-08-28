// App.js
import React, { useRef, useState, useEffect } from 'react';
import './Jogo.css';

function Jogo() {
  const noButtonRef = useRef(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      const button = noButtonRef.current;
      if (!button) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const rect = button.getBoundingClientRect();
      const buttonX = rect.left + rect.width / 2;
      const buttonY = rect.top + rect.height / 2;

      const distance = Math.hypot(buttonX - mouseX, buttonY - mouseY);

      if (distance < 120) {
        moveButton();
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const moveButton = () => {
    const button = noButtonRef.current;
    if (!button) return;

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  };

  const handleYesClick = () => {
    setMessage('Você renovou o contrato para 2026! ❤️');
  };

  return (
    <div className="App">
      <h1>Você quer renovar o contrato de amizade para 2026?</h1>
      <div className="buttons">
        <button className="yes-button" onClick={handleYesClick}>Sim</button>
        <button className="no-button" ref={noButtonRef}>Não</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Jogo;
