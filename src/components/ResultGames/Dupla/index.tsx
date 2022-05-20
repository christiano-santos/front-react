import { Div, Span } from "../GeralStyle/style";
import { Container, DivRes, Sorteio } from "./style";

interface dezenaProps {
  dezena: number[][];
}

export function Dupla(dezena: dezenaProps) {
  let dezenaOrdenada1 = dezena.dezena[0].sort((a, b) => a - b);
  let dezenaOrdenada2 = dezena.dezena[1].sort((a, b) => a - b);
  return (
    <>
      <DivRes>
        <Sorteio>1° sorteio</Sorteio>
      </DivRes>
      <Div>
        {dezenaOrdenada1.map((d) => {
          return (
            <Container key={d}>
              <Span>{d}</Span>
            </Container>
          );
        })}
      </Div>
      <DivRes>
        <Sorteio>2° sorteio</Sorteio>
      </DivRes>
      <Div>
        {dezenaOrdenada2.map((d) => {
          return (
            <Container key={d}>
              <Span>{d}</Span>
            </Container>
          );
        })}
      </Div>
    </>
  );
}
