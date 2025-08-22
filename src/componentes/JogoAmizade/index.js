
import React, { useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import styles from "./JogoAmizade.module.css"

const JogoAmizade = ({ onClose }) => {
  const [mensagem, setMensagem] = useState('');
  const btnNaoRef = useRef(null);

  const handleSim = () => {
    setMensagem('Parabéns! Contrato renovado com sucesso! 🎉');
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  const fugir = () => {
    const btn = btnNaoRef.current;
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = 'absolute';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  };

  return (
    <div className={styles.container}>
      <h1>Você quer renovar o contrato de amizade para o ano que vem?</h1>

      <div className={styles.botoes}>
        <button className={styles.btn-sim} onClick={handleSim}>Sim</button>
        <button
          className={styles.btn-nao}
          onMouseEnter={fugir}
          ref={btnNaoRef}
        >
          Não
        </button>
      </div>

      <div className={styles.mensagem}>{mensagem}</div>

      <button style={{ marginTop: '2rem' }} onClick={onClose}>Fechar</button>
    </div>
  );
};

export default JogoAmizade;
