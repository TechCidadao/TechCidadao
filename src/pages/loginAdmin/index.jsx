import { Container } from "./styled";

export const LoginAdmin = () => {
  return (
    <Container>
      <header className="header">
        <h1>PÁGINA DO ADMIN</h1>
        <button>Sair</button>
      </header>

      <main className="Body">
        <h2>Criar Card</h2>

        <form>
          <section className="input-topo">
            <div className="content titulo">
              <label>Título</label>
              <input type="text" placeholder="Título" />
            </div>

            <div className="content descricao">
              <label>Descrição</label>
              <input type="text" placeholder="Descrição" />
            </div>
          </section>

          <section className="content inputs">
            <label>Ícone/url</label>
            <input type="url" placeholder="Url" />
          </section>

          <section className="content inputs ">
            <label>Conteudos/links/vidios</label>
            <input className="link" type="text" />
          </section>

          <section className="div-select">
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
          </section>
        </form>
      </main>
    </Container>
  );
};

export default LoginAdmin;
