import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './cursor.css';

const BolinhaSeguindoMouse = () => {
  const [posicao, setPosicao] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(20); // Tamanho inicial da bolinha, 30px por exemplo
  const cursorRef = useRef<HTMLDivElement | null>(null); // Referência para a bolinha
  const [cursorColor] = useState(' #ffffff'); // Cor padrão do cursor

  useEffect(() => {
    const moverBolinha = (e: MouseEvent) => {
      setPosicao({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', moverBolinha);

    // Limpar o evento quando o componente for desmontado
    return () => {
      window.removeEventListener('mousemove', moverBolinha);
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a');
    const buttonsCustom = document.querySelectorAll('.button-custom'); // Selecionando os botões com classe "button-custom"
    const areasEspeciais = document.querySelectorAll('.area-especial'); // Selecionando as áreas com a classe "area-especial"

    // Eventos para links
    links.forEach(link => {
      link.addEventListener("mouseover", () => {
        gsap.to('.cursor_', { scale: 2, backgroundColor: '#ffffff', duration: 0.4 });
        setCursorSize(20); // Reduz o tamanho ao passar sobre o link
      });

      link.addEventListener("mouseleave", () => {
        gsap.to('.cursor_', { scale: 1, backgroundColor: cursorColor, duration: 0.4 });
        setCursorSize(20); // Retorna ao tamanho original
      });
    });

    // Eventos para botões personalizados
    buttonsCustom.forEach(button => {
      button.addEventListener("mouseover", () => {
        gsap.to('.cursor_', { scale: 2.5, backgroundColor: ' #ffffff', duration: 0.4 });
        setCursorSize(50); // Ajusta o tamanho do cursor ao passar sobre os botões
      });

      button.addEventListener("mouseleave", () => {
        gsap.to('.cursor_', { scale: 1, backgroundColor: cursorColor, duration: 0.4 });
        setCursorSize(20); // Retorna ao tamanho original
      });
    });

    // Eventos para áreas especiais
    areasEspeciais.forEach(area => {
      area.addEventListener("mouseover", () => {
        gsap.to('.cursor_', { scale: 3, backgroundColor: ' #ffffff', duration: 0.4 });
        setCursorSize(60); // Aumenta ainda mais o tamanho na área especial
      });

      area.addEventListener("mouseleave", () => {
        gsap.to('.cursor_', { scale: 1, backgroundColor: cursorColor, duration: 0.4 });
        setCursorSize(20); // Retorna ao tamanho original
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("mouseover", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
      buttonsCustom.forEach(button => {
        button.removeEventListener("mouseover", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
      areasEspeciais.forEach(area => {
        area.removeEventListener("mouseover", () => {});
        area.removeEventListener("mouseleave", () => {});
      });
    };
  }, [cursorColor]);

  useEffect(() => {
    // Atualiza a posição e o tamanho da bolinha
    if (cursorRef.current) {
      const { x, y } = posicao;
      cursorRef.current.style.left = `${x - cursorSize / 5}px`; // Ajusta a posição com base no tamanho
      cursorRef.current.style.top = `${y - cursorSize / 5}px`; // Ajusta a posição com base no tamanho
      cursorRef.current.style.width = `${cursorSize}px`; // Ajusta a largura
      cursorRef.current.style.height = `${cursorSize}px`; // Ajusta a altura
    }
  }, [posicao, cursorSize]); // Atualiza quando a posição ou o tamanho mudam

  return (
    <div
      ref={cursorRef}
      className="cursor_"
      style={{
        position: 'fixed',
        zIndex: '3000',
        borderRadius: '50%',
        backgroundColor: cursorColor,  // Usando a cor padrão do estado
        pointerEvents: 'none',
        transition: 'background-color 0.4s, width 0.4s, height 0.4s',  // Transição para a cor e o tamanho
      }}
    />
  );
};

export default BolinhaSeguindoMouse;
