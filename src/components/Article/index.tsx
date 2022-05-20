import { Game } from "../TitleGame";
import { Container } from "./style";

interface gameProps {
  game:{
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
}

export function Article(game: gameProps) {
  return (
    <>
      <Container>
          <Game game={game.game} />
      </Container>
    </>
  );
}
