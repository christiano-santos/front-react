import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Article } from "../Article";
import { Title } from "../Title";
import { Container } from "./style";

interface Game {
  award: [{
    descricaoFaixa: string;
    faixa: number;
    numeroDeGanhadores: number;
    valorPremio: number;
  }];
  link: string;
  concurso: number;
  next_contest: string;
  id_jogo: number;
  year: string;
  accumulated: number;
  valorEstimadoProximoConcurso: number;
  name: string;
  nome_jogo: string;
  total_collection: string;
  first_decade: number;
  second_decade: number;
  third_decade: number;
  fourth_decade: number;
  fifth_decade: number;
  sixth_decade: number
  seventh_decade: number;
  eighth_decade: number;
  ninth_decade: number;
  tenth_decade: number
  eleventh_decade: number;
  twelfth_decade: number;
  thirteenth_decade: number;
  fourteenth_decade: number;
  fifteenth_decade: number;
  sixteenth_decade: number;
  seventeenth_decade: number;
  eighteenth_decade: number;
  nineteenth_decade: number;
  twentieth_decade: number;
}

export function Main() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    api.get('/v1/index')
    .then(response => setGames(response.data))
  }, [])
  
  return (
    <Container>
      <Title />
      {games.map(game => {
        return <Article key={game.id_jogo} game={game} />
      })}
    </Container>
  );
}
