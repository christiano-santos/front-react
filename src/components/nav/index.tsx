import { Games } from '../games';
import { Container, Logo } from './style';

export function Nav(){
    return (
        <Container>
            <Logo>
                Loterias
            </Logo>
            <Games />
        </Container>
    )
}