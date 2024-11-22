import styled from "styled-components";
import fotoBody from "../img/fotoBody.png"; // A imagem de fundo

// Estilo de fundo do container, com Flexbox para organizar os elementos verticalmente
export const BackgroundStyle = styled.div`
  background-image: url(${fotoBody});
  background-size: cover;
  background-position: center;
  margin: 0;/* Ajusta a altura mínima da tela */
  display: flex;
  flex-direction: column; /* Organiza os itens verticalmente */
  justify-content: flex-start; /* Alinha o conteúdo no topo */
  padding: 20px; /* Adiciona espaçamento interno */
`;
export const ImageTextContainer = styled.div`
  display: flex;
  flex-direction: row; /* Alinha a imagem e o texto lado a lado */
  justify-content: space-between; /* Espaço entre imagem e texto */
  width: 100%;
  max-width: 1200px; /* Limite máximo da largura */
  padding: 20px;
  align-items: center; /* Centraliza o conteúdo verticalmente */
  gap: 20px; /* Espaço entre a imagem e o texto */
`;

// Estilo da imagem
export const StyledImage = styled.img`
  width: 100%;
  max-width: 900px;
  height: auto;
  margin-top: 100px; /* Ajusta a margem superior */
  margin-right: 20px;
`;

// Estilo do título de introdução
export const TextoIntro = styled.div`
 text-align: right;
  display: flex;
  flex-direction: column-reverse;
  margin-top: 0px;/* Ajusta o espaço entre a imagem e o título */
`;

export const StyledH1 = styled.h1`
  color: pink;
  font-size: 50px;
  line-height: 1.2;
`;

// Estilo do texto de "atendimento"
export const Aten = styled.div`
  color: white;
`;

// Estilos para o formulário (EnglobaDiv)
export const EnglobaDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #6D3C3E;
  height: 400px;
  width: 800px;
  padding: 20px;
  margin-top: 30px; /* Espaço entre o texto e os campos de formulário */
  border-radius: 10px; /* Cantos arredondados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombras para destaque */
`;

// Estilos para o título "Dados do cliente"
export const TextClient = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
`;

// Estilos para os campos de entrada de texto
export const TextInput = styled.label`
  color: white;
  margin-top: 10px;
  font-size: 16px;
`;

// Estilo dos campos de entrada de dados
export const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box; /* Faz com que o padding não afete o tamanho total */
  margin-bottom: 20px; /* Espaço entre os campos */
`;

// Estilos para o segundo bloco de formulário (StyledDivEngloba)
export const StyledDivEngloba = styled.div`
  background-color: #260909;
  height: 400px;
  width: 800px;
  padding: 20px;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombras para destaque */
`;

// Estilo do texto para "Selecione o Dia"
export const StyledText = styled.h2`
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
`;

// Estilo do botão de agendamento
export const StyledButton = styled.button`
  height: 50px;
  width: 200px;
  background-color: #6D3C3E;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4C2A2D; /* Cor do botão ao passar o mouse */
  }
`;

