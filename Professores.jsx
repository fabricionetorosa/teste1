import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:3000";

function Professores() {
  const [professor, setProfessores] = useState([]);
  const [nome, setNome] = useState("");

  const listarProfessores = () => {
    axios.get(`${API}/professor/professor-ordenadas`).then(
      ({ data }) => {
        setProfessores(data.message);
        console.log(data.message);
      },
      (err) => {
        alert("Erro!");
      }
    );
  };

  const onChangeNome = ({ target }) => {
    setNome(target.value);
  };

  useEffect(() => {
    listarProfessores();
  }, []);

  return (
    <>
      <h1>Lista de Professores</h1>
      <div className="divListarofessores">
        <div className="divPesquisa">
        <input
        className="inputPesquisa"
          type="text"
          onChange={onChangeNome}
          placeholder="Nome"
          value={nome}
        />
        </div>
        {professor.map((professor) => {
          return (
            <div className="cardProfessores">
              <div className="informacao">
                <h7>{professor.nome}</h7>
                <h7>{professor.materia}</h7>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Professores;
