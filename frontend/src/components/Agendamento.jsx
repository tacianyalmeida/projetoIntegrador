import React from "react";
import Header from "./header.jsx";
import img1 from "../img/img1.png"

import { Aten,ImageTextContainer, BackgroundStyle, EnglobaDiv, Input, StyledButton, StyledDivEngloba, StyledH1, StyledImage, StyledText, TextClient, TextInput, TextoIntro } from "../Styles/Agendamento.js";
const Agendamento = () => {
    return (

        <BackgroundStyle>
            <ImageTextContainer className="Image-text-container">
                <StyledImage src={img1} alt="foto-armonica" />
                <TextoIntro>
                    <StyledH1>Reserve um <br />
                        horário <br />
                        e garanta o <br />
                        melhor
                        <Aten>atendimento.</Aten>
                    </StyledH1>
                </TextoIntro>
            </ImageTextContainer>


            <EnglobaDiv>
                <TextClient>Dados do cliente</TextClient>

                <Input type="text" placeholder="CPF" />


                <Input type="text" placeholder="Numero do Pedido" />
            </EnglobaDiv>

            <StyledDivEngloba>
                <StyledText>Selecione o Dia </StyledText>
                <Input type="date" />



                <Input type="text" placeholder="Selecione um horário" />
            </StyledDivEngloba>


            <StyledButton>Agendar</StyledButton>

        </BackgroundStyle>


    )
}

export default Agendamento; 