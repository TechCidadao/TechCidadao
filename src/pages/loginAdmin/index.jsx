import { Container } from "./styled";


const LoginAdmin = () =>{
  return (
    <Container>
      <div className="header">
        <h1>PÁGINA DO ADMIN</h1> <button>Sair</button>
      </div>

      <div className="Body">
        <h2>Criar Card</h2>

        <form>
        <div className="input-topo">
          <div className="content titulo">
            <label>Título</label>
            <input type="text" placeholder="Título" />
          </div>

          <div className="content descricao">
            <label>Descrição</label>
            <input type="text" placeholder="Descrição" />
          </div>
        </div>

          <div className="content inputs">
            <label>Ícone/url</label>
            <input type="url" placeholder="Url" />
          </div>

          <div className="content inputs ">
            <label>Conteudos/links/vidios</label>
            <input className="link" type="text" />
          </div>

          <div className="div-select">
            <div className="content inputs">
              <label>Tipo: Computador ou celular</label>
              <select>
                <option value="celular inputs">Celular</option>
                <option value="computador">Computador</option>
              </select>
            </div>
            <div className="btn-container">
              <button>Enviar Conteúdo</button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default LoginAdmin