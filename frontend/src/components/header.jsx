import React from "react";

import {HeaderContainer, Link,  LinksContainer, Logo} from "../../src/Styles/HeaderStyle.js"

const Header = () => {
    return (
      <HeaderContainer>
        <LinksContainer>
          <Link href="#link1">Agendamento</Link>
          <Link href="#link2">Horarios</Link>
          <Link href="#link3">Atendimentos</Link>
        </LinksContainer>
        <Logo>Minha Logo</Logo>
      </HeaderContainer>
    );
  };

export default Header; 