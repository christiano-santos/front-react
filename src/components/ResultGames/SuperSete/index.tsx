import { Div, Span } from "../GeralStyle/style";
import { Container, DivContainer, OrdemSorteio } from "./styled";

export function SuperSete() {
  return (
    <Div>
      <DivContainer>
        <OrdemSorteio>1</OrdemSorteio>
        <Container>
          <Span>3</Span>
        </Container>
      </DivContainer>
      <DivContainer>
        <OrdemSorteio>2</OrdemSorteio>
        <Container>
          <Span>3</Span>
        </Container>
      </DivContainer>
      <DivContainer>
        <OrdemSorteio>3</OrdemSorteio>
        <Container>
          <Span>7</Span>
        </Container>
      </DivContainer>
      <DivContainer>
        <OrdemSorteio>4</OrdemSorteio>
        <Container>
          <Span>8</Span>
        </Container>
      </DivContainer>
      <DivContainer>
        <OrdemSorteio>5</OrdemSorteio>
        <Container>
          <Span>5</Span>
        </Container>
      </DivContainer>
      <DivContainer>
        <OrdemSorteio>1</OrdemSorteio>
        <Container>
          <Span>3</Span>
        </Container>
      </DivContainer>
    </Div>
  );
}
