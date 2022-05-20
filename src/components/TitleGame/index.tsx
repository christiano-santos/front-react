import {
  Acumulou,
  Button,
  Concurso,
  ContaierGame,
  Container,
  ContainerTable,
  DescGame,
  DivResultado,
  Ganhadores,
  NomeGame,
  RodapeGame,
  Table,
} from "./styled";
import { Mega } from "../ResultGames/Mega";
import { Quina } from "../ResultGames/Quina";
import { Lotomania } from "../ResultGames/Lotomania";
import { Timemania } from "../ResultGames/Timemania";
import { Dupla } from "../ResultGames/Dupla";
import { DiaDeSorte } from "../ResultGames/DiaDeSorte";
import { Lotofacil } from "../ResultGames/Lotofacil";
import { TableResultado } from "../ResultGames/Table";
import { TableDupla } from "../ResultGames/TableDupla";
import { Link } from "react-router-dom";

interface gameProps {
  game: {
    award: [
      {
        descricaoFaixa: string;
        faixa: number;
        numeroDeGanhadores: number;
        valorPremio: number;
      }
    ];
    link: string;
    concurso: number;
    next_contest: string;
    accumulated: number;
    id_jogo: number;
    year: string;
    valorEstimadoProximoConcurso: number;
    name: string;
    nome_jogo: string;
    total_collection: string;
    first_decade: number;
    second_decade: number;
    third_decade: number;
    fourth_decade: number;
    fifth_decade: number;
    sixth_decade: number;
    seventh_decade: number;
    eighth_decade: number;
    ninth_decade: number;
    tenth_decade: number;
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
  };
}

export function Game(game: gameProps) {
  function switchComponent() {
    switch (game.game.nome_jogo) {
      case "MEGA-SENA":
        let resutadoDezenaMega = [
          game.game.first_decade,
          game.game.second_decade,
          game.game.third_decade,
          game.game.fourth_decade,
          game.game.fifth_decade,
          game.game.sixth_decade,
        ];
        return <Mega dezena={resutadoDezenaMega}></Mega>;
      case "LOTOFÁCIL":
        let resultadoDezenaLoto = [
          [
            game.game.first_decade,
            game.game.second_decade,
            game.game.third_decade,
            game.game.fourth_decade,
            game.game.fifth_decade,
          ],
          [
            game.game.sixth_decade,
            game.game.seventh_decade,
            game.game.eighth_decade,
            game.game.ninth_decade,
            game.game.tenth_decade,
          ],
          [
            game.game.eleventh_decade,
            game.game.twelfth_decade,
            game.game.thirteenth_decade,
            game.game.fourteenth_decade,
            game.game.fifteenth_decade,
          ],
        ];
        return <Lotofacil dezena={resultadoDezenaLoto}></Lotofacil>;
      case "QUINA":
        let resultadoDezenaQuina = [
          game.game.first_decade,
          game.game.second_decade,
          game.game.third_decade,
          game.game.fourth_decade,
          game.game.fifth_decade,
        ];
        return <Quina dezena={resultadoDezenaQuina}></Quina>;
      case "LOTOMANIA":
        let resultadoDezenaLotomania = [
          [
            game.game.first_decade,
            game.game.second_decade,
            game.game.third_decade,
            game.game.fourth_decade,
            game.game.fifth_decade,
          ],
          [
            game.game.sixth_decade,
            game.game.seventh_decade,
            game.game.eighth_decade,
            game.game.ninth_decade,
            game.game.tenth_decade,
          ],
          [
            game.game.eleventh_decade,
            game.game.twelfth_decade,
            game.game.thirteenth_decade,
            game.game.fourteenth_decade,
            game.game.fifteenth_decade,
          ],
          [
            game.game.sixteenth_decade,
            game.game.seventeenth_decade,
            game.game.eighteenth_decade,
            game.game.nineteenth_decade,
            game.game.twentieth_decade,
          ],
        ];
        return <Lotomania dezena={resultadoDezenaLotomania}></Lotomania>;
      case "TIMEMANIA":
        let resultadoDezenaTimemania = [
          game.game.first_decade,
          game.game.second_decade,
          game.game.third_decade,
          game.game.fourth_decade,
          game.game.fifth_decade,
          game.game.sixth_decade,
          game.game.seventh_decade,
        ];
        return <Timemania dezena={resultadoDezenaTimemania}></Timemania>;
      case "DUPLA SENA":
        let resultadoDezenaDupla = [
          [
            game.game.first_decade,
            game.game.second_decade,
            game.game.third_decade,
            game.game.fourth_decade,
            game.game.fifth_decade,
            game.game.sixth_decade,
          ],
          [
            game.game.seventh_decade,
            game.game.eighth_decade,
            game.game.ninth_decade,
            game.game.tenth_decade,
            game.game.eleventh_decade,
            game.game.twelfth_decade,
          ],
        ];
        return <Dupla dezena={resultadoDezenaDupla}></Dupla>;
      case "DIA DE SORTE":
        let resultadoDezenaDiaDeSorte = [
          game.game.first_decade,
          game.game.second_decade,
          game.game.third_decade,
          game.game.fourth_decade,
          game.game.fifth_decade,
          game.game.sixth_decade,
          game.game.seventh_decade,
        ];
        return <DiaDeSorte dezena={resultadoDezenaDiaDeSorte}></DiaDeSorte>;
    }
  }

  function acumulado() {
    if (game.game.accumulated === 0) {
      return "saiu!";
    } else if (game.game.accumulated === 1) {
      return "acumulou!";
    }
  }

  function handleDataPorExtenso() {
    handleTableGanhadores();
    let meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    let dias = [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
    ];

    let dataArray = game.game.year.split("/");
    let dataAmd = dataArray[2] + "/" + dataArray[1] + "/" + dataArray[0];

    let dataextenso =
      dias[new Date(dataAmd).getDay()] +
      ", " +
      dataArray[0] +
      " de " +
      meses[new Date(dataAmd).getMonth()] +
      " de " +
      dataArray[2];
    return dataextenso;
  }

  function handleTableGanhadores() {
    switch (game.game.nome_jogo) {
      case "MEGA-SENA":
        return (
          <TableResultado
            nomeJogo="mega"
            tabela={game.game.award}
          ></TableResultado>
        );
      case "LOTOFÁCIL":
        return (
          <TableResultado
            nomeJogo="lotofacil"
            tabela={game.game.award}
          ></TableResultado>
        );
      case "QUINA":
        return (
          <TableResultado
            nomeJogo="quina"
            tabela={game.game.award}
          ></TableResultado>
        );
      case "LOTOMANIA":
        return (
          <TableResultado
            nomeJogo="lotomania"
            tabela={game.game.award}
          ></TableResultado>
        );
      case "TIMEMANIA":
        return (
          <TableResultado
            nomeJogo="timemania"
            tabela={game.game.award}
          ></TableResultado>
        );
      case "DIA DE SORTE":
        return (
          <TableResultado
            nomeJogo="diadesorte"
            tabela={game.game.award}
          ></TableResultado>
        );
      case "DUPLA SENA":
        return <TableDupla tabela={game.game.award}></TableDupla>;
    }
  }

  function handleCurrency(componente: string) {
    if (componente === "descgame") {
      let currency = game.game.valorEstimadoProximoConcurso;
      return currency.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    } else if (componente === "rodape") {
      let currency = parseFloat(game.game.total_collection);
      return currency.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    }
  }
  return (
    <ContaierGame>
      <Container>
        <img
          src={require("../../assets/img/" + game.game.nome_jogo + ".png")}
          alt={game.game.nome_jogo}
        />
        <NomeGame cor={game.game.name}>{game.game.nome_jogo}</NomeGame>
      </Container>
      <Concurso>Concurso {game.game.concurso}</Concurso>
      <DescGame>
        Resultado <b>{game.game.nome_jogo}</b> concurso, {game.game.concurso}{" "}
        realizado {handleDataPorExtenso()}
      </DescGame>
      {switchComponent()}
      <DivResultado>
        <Acumulou>{acumulado()}</Acumulou>
      </DivResultado>
      <DescGame>
        Estimativa de prêmio do próximo concurso {game.game.next_contest},{" "}
        {handleCurrency("descgame")}
      </DescGame>
      <DivResultado>
        <Ganhadores>Veja os ganhadores</Ganhadores>
      </DivResultado>
      <ContainerTable>{handleTableGanhadores()}</ContainerTable>
      <RodapeGame>
        <Link
          to={`jogos/${game.game.link}/${game.game.id_jogo}`}
          style={{ textDecoration: "none" }}
        >
          {/* <Button>Concursos Anteriores</Button> */}
        </Link>
        <span>Arrecadação Total {handleCurrency("rodape")}</span>
      </RodapeGame>
    </ContaierGame>
  );
}
