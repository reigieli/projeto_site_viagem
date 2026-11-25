import { useState } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import type { SearchValues } from '../../components/SearchBar/SearchBar';
import { DestinationCard } from '../../components/DestinationCard/DestinationCard';
import { destinosPopulares } from '../../data/destinosPopulares';
import '../../components/Hero/Hero.css';

export function HomePage() {
  const [aviso, setAviso] = useState('');

  function handleSearch({ origem, destino }: SearchValues) {
    // A pesquisa de voos (tela 5) ainda não existe; por enquanto só confirmamos a busca.
    setAviso(`Busca de ${origem} para ${destino} registrada. A pesquisa de voos estará disponível em breve.`);
  }

  return (
    <div className="home-card">
      <Hero
        tag="EXPLORE O MUNDO"
        title="Para onde você quer ir?"
        text="Descubra destinos incríveis, planeje roteiros personalizados e economize na sua próxima viagem."
      >
        <SearchBar onSearch={handleSearch} defaultValues={{ origem: 'São Paulo (GRU)' }} />
        {aviso && <p className="search__message" role="status">{aviso}</p>}
      </Hero>

      <section className="destinations">
        <div className="destinations__header">
          <div>
            <h2 className="destinations__title">Destinos populares em alta</h2>
            <p className="destinations__subtitle">As opções mais buscadas pelos viajantes este mês</p>
          </div>
        </div>

        <div className="destinations__grid">
          {destinosPopulares.map((destino) => (
            <DestinationCard key={destino.id} {...destino} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
