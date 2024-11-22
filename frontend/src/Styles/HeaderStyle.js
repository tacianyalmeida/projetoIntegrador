import styled from 'styled-components';


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;  /* Logo à direita, links à esquerda */
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  background: transparent;
`;

export const Logo = styled.div`
  font-family: 'Inder', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-align: left;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;  /* Alinha os links à esquerda */
  gap: 15px;
  /* Adiciona z-index para garantir que os links fiquem acima de outros elementos */
  background: transparent; /* Garante que o fundo seja transparente */
 
`;

export const Link = styled.a`
  font-family: 'Inder', sans-serif;
  text-decoration: none;
  color: #D6C3C3;
  transition: color 0.3s;
  position: relative; /* Para garantir que o link não tenha interferência do z-index */
  
  &:hover {
    color: #007bff;
  }
`;
