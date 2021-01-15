import PropTypes from 'prop-types'
import React from 'react'



const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-tree" ></span> 
    </div>
    <div className="content">
      <div className="inner">
        <h1>Ibirapytang</h1>
        <p>
          Já imaginou usar o seu lixo para ajudar o planeta e ainda a si mesmo?<br/>Pois aqui na Ibirapytang isso é possivel.<br/>Somos uma empresa especializada na confecção de puffs e artigos de casa com garrafas pet recicladas.<br/>Então sempre que quiser preservar o meio ambiente, pense sustentável, pense conforto, pense Ibirapytang.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Sobre Nós
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Trabalho
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Responsabilidade Social
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contato
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
