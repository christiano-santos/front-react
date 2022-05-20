import { Div, Span } from "../GeralStyle/style";
import { Container } from "./style";

interface dezenaProps {
  dezena: number[];
}

export function Quina(dezena: dezenaProps) {
  let dezenaOrdenada = dezena.dezena.sort((a, b) => a - b);

  return (
    <Div>
      {dezenaOrdenada.map((d) => {
        return (
          <Container key={d}>
            <Span>{d}</Span>
          </Container>
        );
      })}
    </Div>
  );
}
