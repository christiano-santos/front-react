import { Game, Li, Ul } from "./style";
import { NavLink } from "react-router-dom";

export function Games() {
  return (
    <Ul>
      <Li>
        <NavLink to={"jogos/mega/1"} style={{ textDecoration: 'none' }}>
          <Game>Mega</Game>
        </NavLink>
      </Li>
      <Li>
        <NavLink to={"jogos/lotofacil/2"} style={{ textDecoration: 'none' }}>
          <Game>Lotofácil</Game>
        </NavLink>
      </Li>
      <Li>
        <NavLink to={"jogos/quina/3"} style={{ textDecoration: 'none' }}>
          <Game>Quina</Game>
        </NavLink>
      </Li>
      <Li>
        <NavLink to={"jogos/lotomania/4"} style={{ textDecoration: 'none' }}>
          <Game>Lotomania</Game>
        </NavLink>
      </Li>
      <Li>
        <NavLink to={"jogos/timemania/5"} style={{ textDecoration: 'none' }}>
          <Game>Timemania</Game>
        </NavLink>
      </Li>
      <Li>
        <NavLink to={"jogos/dupla-sena/6"} style={{ textDecoration: 'none' }}>
          <Game>Dupla</Game>
        </NavLink>
      </Li>
      <Li>
        <NavLink to={"jogos/dia-de-sorte/7"} style={{ textDecoration: 'none' }}>
          <Game>Dia de Sorte</Game>
        </NavLink>
      </Li>
    </Ul>
  );
}
