import '../components/Hero/Hero.css';
export function Page01({ onMudarTela }: { onMudarTela: (tela: number) => void }) {
  
  return (


      <main className="content-body">
        
        {/* Banner Central */}
        <section className="hero">
          <span className="hero__tag">EXPLORE O MUNDO</span>
          <h2 className="hero__title">Para onde você quer ir?</h2>
          <p className="hero__text">Descubra destinos incríveis, planeje roteiros personalizados e economize na sua próxima viagem.</p>

          <form className="search-bar">
            <div className="search__field">
              <span className="search__label">ORIGEM</span>
              <input className="search__input" type="text" name="origem" defaultValue="São Paulo (GRU)" />
            </div>
            
            <div className="search__divider"></div>

            <div className="search__field">
              <span className="search__label">DESTINO</span>
              <input className="search__input" type="text" name="destino" defaultValue="Kathmandu, Nepal" />
            </div>

            <div className="search__divider"></div>

            <div className="search__field">
              <span className="search__label">DATA</span>
              <input className="search__input" type="text" name="data" defaultValue="12 Mai - 25 Mai" />
            </div>

            <button className="search__button" type="submit">
              🔍 Buscar Agora
            </button>
          </form>
        </section>

        {/* Destinos Populares */}
        <section className="destinations">
          <div className="destinations__header">
            <div>
              <h2 className="destinations__title">Destinos Populares em Alta</h2>
              <p className="destinations__subtitle">As opções mais buscadas pelos viajantes este mês</p>
            </div>
            <a href="#" className="destinations__link">Ver todos ›</a>
          </div>

          <div className="grid-4">
            
            <article className="card card-interactive">
              <div className="card__image-container">
                <span className="badge">Aventura</span>
                {/* Lembre-se de ajustar o caminho da imagem conforme a pasta do projeto React */}
                <img className="card__image" src="/imagens/Nepal.PNG" alt="Kathmandu, Nepal" />
              </div>
              <div className="card__content">
                <h3 className="card__title">Kathmandu, Nepal</h3>
                <p className="card__price">A partir de <strong>R$ 5.200</strong></p>
              </div>
            </article>

            <article className="card card-interactive">
              <div className="card__image-container">
                <span className="badge">Romântico</span>
                <img className="card__image" src="/imagens/Paris.PNG" alt="Paris, França" />
              </div>
              <div className="card__content">
                <h3 className="card__title">Paris, França</h3>
                <p className="card__price">A partir de <strong>R$ 12.100</strong></p>
              </div>
            </article>

            <article className="card card-interactive">
              <div className="card__image-container">
                <span className="badge">Neve</span>
                <img className="card__image" src="/imagens/Barioche.PNG" alt="Bariloche, Argentina" />  
              </div>
              <div className="card__content">
                <h3 className="card__title">Bariloche, Argentina</h3>
                <p className="card__price">A partir de <strong>R$ 3.400</strong></p>
              </div>
            </article>

            <article className="card card-interactive">
              <div className="card__image-container">
                <span className="badge">Praia</span>
                <img className="card__image" src="/imagens/Phuket.PNG" alt="Phuket, Tailândia" /> 
              </div>
              <div className="card__content">
                <h3 className="card__title">Phuket, Tailândia</h3>
                <p className="card__price">A partir de <strong>R$ 4.800</strong></p>
              </div>
            </article>

          </div> 
        </section>
      </main>

  );
}