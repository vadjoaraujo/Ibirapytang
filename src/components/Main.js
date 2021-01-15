import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/Responsabilidade_Social.jpg'
import pic02 from '../images/garrafas.png'
import pic03 from '../images/Ibirapytang-1.png'
import pic04 from '../images/puff-garaffa-pet-1.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Sobre Nós</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>Somos uma empresa nacional que visa a preservação do meio ambiente e a reutilização de materiais que agridem o mesmo.
            Na Ibirapytang é da nossa natureza proteger a natureza. 
            Nosso foco principal são puffs feitos de garrafas pet, pois assim nós cuidamos da natureza ao mesmo tempo que cuidamos do seu conforto.</p>
          <h1>Missão</h1>
          <p>"Fornecer soluções ambientais inovadoras, contribuindo com segurança, qualidade e responsabilidade social para o desenvolvimento sustentável de empresas e comunidades.”</p>
          <h1>Visão</h1>
          <p>Ser reconhecida como a principal empresa de estofados feitos com materiais recicláveis no Brasil com foco na sustentabilidade do planeta.</p>
          <h1>Valores</h1>
          <p>★ Satisfação dos clientes através do atendimento de suas necessidades específicas;</p>
          <p>★ Investimento contínuo em soluções recicláveis diferenciadas;</p>
          <p>★ Ética e transparência no relacionamento com clientes, fornecedores e colaboradores;</p>
          <p>★ Prevenção da poluição e proteção ao meio ambiente;</p>
          <p>★ Melhoria contínua dos serviços prestados.</p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Trabalho</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h1>serviços</h1>
          <p>
          A gestão dos resíduos engloba uma coleta de garrafas pets, onde são tratados e destinados para
          a reciclagem onde são iniciados a criação dos produtos. 
          </p>
          <h1>Produtos</h1>
          <p>
          A Ibirapytang é especializada na criação de puffs estilizados Reciclando esses materiais 
          transformando-os em decoração para a casa de uma forma criativa e sustentável.
          </p>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h2 className="major">Responsabilidade Social</h2>
            <p>   O programa de responsbilidade social da Ibirapytang busca desenvolver o consumo 
            consciente: esta linha de ação visa conscientizar e sensibilizar a todos sobre a 
            importância da redução do desperdício e do reaproveitamento de materiais, 
            evitando assim o impacto ambiental causado pelo consumo desnecessário de plásticos 
            impedindo uma série de prejuízos ambientais.<br/> </p>
            <p>   O objetivo deste projeto é criar uma linha sustentável provocando um novo olhar 
              para o mercado, incentivando ações coletivas voltadas para a sustentabilidade.</p>
         
          

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contato</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Menssagem</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Mandar Menssagem" className="special" />
              </li>
              <li>
                <input type="reset" value="Limpar" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="#"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ibirapytang_/?hl=pt-br" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
