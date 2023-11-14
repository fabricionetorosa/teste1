import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:3000";

function Alunos() {
  const [aluno, setAlunos] = useState([]);
  const [nome, setNome] = useState("");

  const listarAlunos = () => {
    axios.get(`${API}/aluno/aluno-ordenadas`).then(
      ({ data }) => {
        setAlunos(data.message);
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
    listarAlunos();
  }, []);

  return (
    <>
      <h1>Lista de Alunos</h1>
      <div className="divListaAlunos">
        <div className="divPesquisa">
        <input
        className="inputPesquisa"
          type="text"
          onChange={onChangeNome}
          placeholder="Nome"
          value={nome}
        />
        </div>
        {aluno.map((aluno) => {
          return (
            <div className="cardAlunos">
              <div className="informacao">
                <h7>{aluno.nome}</h7>
                <h7>{aluno.fase}</h7>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Alunos;
