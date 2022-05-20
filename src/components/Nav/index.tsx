import { Games } from "../Games";
import { Container, Logo } from "./style";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <Container>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Logo>Loterias</Logo>
      </Link>
      <Games />
    </Container>
  );
}
