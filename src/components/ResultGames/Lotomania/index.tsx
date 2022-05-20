import { Div, Span } from "../GeralStyle/style";
import { Container } from "./styled";

interface dezenaProps {
  dezena: number[][];
}

export function Lotomania(dezena: dezenaProps) {
  let dezenas = dezena.dezena[0].concat(
    dezena.dezena[1],
    dezena.dezena[2],
    dezena.dezena[3],
    dezena.dezena[4]
  );
  let dezenaOrdenada = dezenas.sort((a, b) => a - b);
  return (
    <>
      <Div>
        {dezenaOrdenada.map((d, i) => {
          if (i <= 4) {
            return (
              <Container key={i}>
                <Span>{d}</Span>
              </Container>
            );
          }
        })}
      </Div>
      <Div>
        {dezenaOrdenada.map((d, i) => {
          if (i >= 5 && i <= 9) {
            return (
              <Container key={i}>
                <Span>{d}</Span>
              </Container>
            );
          }
        })}
      </Div>
      <Div>
        {dezenaOrdenada.map((d, i) => {
          if (i >= 10 && i <= 14) {
            return (
              <Container key={i}>
                <Span>{d}</Span>
              </Container>
            );
          }
        })}
      </Div>
      <Div>
        {dezenaOrdenada.map((d, i) => {
          if (i >= 15 && i <= 19) {
            return (
              <Container key={i}>
                <Span>{d}</Span>
              </Container>
            );
          }
        })}
      </Div>
    </>
  );
}
