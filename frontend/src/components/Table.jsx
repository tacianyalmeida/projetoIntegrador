import React, { useState } from "react";

const Table = ({ cpfData, dateData }) => {
  const [rows, setRows] = useState([
    { id: 1, cpf: cpfData || "123.456.789-00", date: dateData || "24/11/2024", startTime: "09:00", endTime: "10:00", isEditing: false },
    { id: 2, cpf: cpfData || "987.654.321-11", date: dateData || "24/11/2024", startTime: "10:30", endTime: "11:30", isEditing: false },
  ]);

  // Função para calcular o cronômetro
  const calculateTimer = (startTime, endTime) => {
    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);

    const startInMinutes = startHours * 60 + startMinutes;
    const endInMinutes = endHours * 60 + endMinutes;

    const diffInMinutes = Math.max(0, endInMinutes - startInMinutes); // Evita valores negativos
    const hours = Math.floor(diffInMinutes / 60).toString().padStart(2, "0");
    const minutes = (diffInMinutes % 60).toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  // Função para alternar modo de edição
  const toggleEdit = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, isEditing: !row.isEditing } : row
      )
    );
  };

  // Função para atualizar os campos de horários
  const handleEdit = (id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  // Função para deletar uma linha
  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src="/logo.png" alt="Logo" style={styles.logo} />
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Horários</a>
          <a href="#" style={styles.navLink}>Agendamento</a>
        </nav>
      </header>

      <div style={styles.boxContainer}>
        <div style={styles.titleContainer}>
          <h1 style={styles.title}>DADOS DO CLIENTE</h1>
          <h1 style={styles.title}>DADOS DO ATENDIMENTO</h1>
        </div>

        {/* Cabeçalhos das colunas */}
        <div style={styles.headerRow}>
          <span style={styles.columnHeader}>CPF</span>
          <span style={styles.columnHeader}>DATA</span>
          <span style={styles.columnHeader}>HORÁRIO INÍCIO</span>
          <span style={styles.columnHeader}>HORÁRIO TÉRMINO</span>
          <span style={styles.columnHeader}>CRONÔMETRO</span>
          <span style={styles.columnHeader}>AÇÕES</span>
        </div>

        {/* Dados das linhas */}
        {rows.map((row) => (
          <div key={row.id} style={styles.dataRow}>
            <span style={styles.cell}>{row.cpf}</span>
            <span style={styles.cell}>{row.date}</span>
            {row.isEditing ? (
              <input
                type="text"
                value={row.startTime}
                style={styles.input}
                onChange={(e) => handleEdit(row.id, "startTime", e.target.value)}
              />
            ) : (
              <span style={styles.cell}>{row.startTime}</span>
            )}
            {row.isEditing ? (
              <input
                type="text"
                value={row.endTime}
                style={styles.input}
                onChange={(e) => handleEdit(row.id, "endTime", e.target.value)}
              />
            ) : (
              <span style={styles.cell}>{row.endTime}</span>
            )}
            <span style={styles.cell}>
              {calculateTimer(row.startTime, row.endTime)}
            </span>
            <div style={styles.actions}>
              <img
                src="/edit-icon.png"
                alt="Editar"
                style={styles.icon}
                onClick={() => toggleEdit(row.id)}
              />
              <img
                src="/delete-icon.png"
                alt="Deletar"
                style={styles.icon}
                onClick={() => handleDelete(row.id)}
              />
            </div>
          </div>
        ))}
      </div>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} TimePlanner. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: "url('./background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#D4C9BE",
  },
  headerRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 0.5fr", // Divisão para 6 colunas
    width: "100%",
    textAlign: "center",
    padding: "10px 0",
    backgroundColor: "#130404",
    color: "#D4C9BE",
    borderBottom: "2px solid #D4C9BE",
  },
  dataRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 0.5fr", // Mesma divisão do cabeçalho
    width: "100%",
    textAlign: "center",
    padding: "10px 0",
    backgroundColor: "#46121C",
    color: "#D4C9BE",
    borderBottom: "1px solid #D4C9BE",
  },
  cell: {
    padding: "5px",
  },
  input: {
    width: "90%",
    padding: "5px",
    textAlign: "center",
    borderRadius: "5px",
    border: "1px solid #D4C9BE",
    backgroundColor: "#46121C",
    color: "#D4C9BE",
  },
  columnHeader: {
    fontWeight: "bold",
    fontSize: "1rem",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: "20px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "#D4C9BE",
    textDecoration: "none",
  },
  boxContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "90%",
    marginTop: "20px",
  },
  footer: {
    marginTop: "20px",
    backgroundColor: "#130404",
    width: "100%",
    textAlign: "center",
    padding: "10px",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  icon: {
    width: "20px",
    height: "20px",
    cursor: "pointer",
  },
};

export default Table;