import React, { useState } from "react";

import img1 from "../img/img1.png"
import { Aten, ImageTextContainer, BackgroundStyle, EnglobaDiv, Input, StyledButton, StyledDivEngloba, StyledH1, StyledImage, StyledText, TextClient, TextInput, TextoIntro, SideBySideContainer, ButtonContainer, ErrorMessage  } from "../Styles/Agendamento.js";
import HorariosModal from "./HorariosModal.jsx";
import { useNavigate } from "react-router-dom";

const Agendamento = () => {

    const [isModalOpen, setIsModalOpen] = React.useState(false); 
    const [selectedTime, setSelectedTime] = React.useState(""); 
    const [cpf, setCpf] = React.useState("")
    const [numeroPedido, setNumeroPedido] = React.useState("");
    const [data, setData] = React.useState("");
    const [error, setError] = React.useState({
      cpf: "",
      numeroPedido: "",
      horario: "",
      data: ""
    });
    
    
    const horariosDisponiveis = [
        "08:00", "08:15", "08:30", "08:45", "09:00", "09:15", "09:30", "09:45", "10:00", "10:15",
        "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "13:00", "13:15", "13:30", "13:45", "14:00",
        "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"
    ];

    const handleTimeInputClick = () => {
        setIsModalOpen(true); 
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); 
    };

    const handleSelectTime = (time) => {
        setSelectedTime(time);
        setIsModalOpen(false); 
    };
    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value); 
      };

      const validateForm = () => {
        let isValid = true;
        let errors = {};
    
        if (!cpf) {
          errors.cpf = "CPF é obrigatório.";
          isValid = false;
        }
    
        if (!numeroPedido) {
          errors.numeroPedido = "Número do pedido é obrigatório.";
          isValid = false;
        }
    
        if (!data) {
          errors.data = "Data é obrigatória.";
          isValid = false;
        }
    
        if (!selectedTime) {
          errors.horario = "Horário é obrigatório.";
          isValid = false;
        }
    
        setError(errors);
        return isValid;
      };
      const navigate = useNavigate();
      const handleSubmit = (e) => {
        e.preventDefault(); 
        if (validateForm()) {
        
          alert("Agendamento feito com sucesso!");
         navigate(`/horarios?cpf=${encodeURIComponent(cpf)}&data=${encodeURIComponent(data)}`);
        }
      };
      
   

     

        
      

    return (
        <BackgroundStyle>
            <ImageTextContainer className="Image-text-container">
                <StyledImage src={img1} alt="foto-armonica" />
                <TextoIntro>
                    <StyledH1>
                        Reserve um <br />
                        horário <br />
                        e garanta o <br />
                        melhor
                        <Aten>atendimento.</Aten>
                    </StyledH1>
                </TextoIntro>
            </ImageTextContainer> 

            <SideBySideContainer>
                <EnglobaDiv> 
                    <TextClient>Dados do cliente</TextClient>

                    <Input id="cpf" name="cpf" type="text" value={cpf} placeholder="CPF" onChange={(e) => setCpf(e.target.value)} />
                    {error.cpf && <ErrorMessage >{error.cpf}</ErrorMessage >}
                    <Input id="Numero" name="Num" type="text" placeholder="Numero do Pedido " value={numeroPedido} onChange={(e) => setNumeroPedido(e.target.value)} />
                    {error.numeroPedido && <ErrorMessage >{error.numeroPedido}</ErrorMessage >}
                </EnglobaDiv>

                <StyledDivEngloba>
                    <StyledText>Selecione o Dia</StyledText>
                    <Input name="data" type="date" value={data} onChange={(e) => setData(e.target.value)} />
                    {error.data && <ErrorMessage >{error.data}</ErrorMessage >}
                    <Input name="horario" type="text" value={selectedTime} placeholder="Selecione um horário" onChange={handleTimeChange} onClick={handleTimeInputClick} />
                    {error.horario && <ErrorMessage >{error.horario}</ErrorMessage >}
                </StyledDivEngloba>
            </SideBySideContainer>
            <HorariosModal horarios={horariosDisponiveis} isOpen={isModalOpen} onClose={handleCloseModal} onSelect={handleSelectTime}
            />

            <ButtonContainer>
                <StyledButton onClick={handleSubmit}>Agendar</StyledButton>
            </ButtonContainer>
        </BackgroundStyle>
    );
};

export default Agendamento;
             