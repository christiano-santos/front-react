import styled from "styled-components";
import { Acumulou, DivResultado } from "../../TitleGame/styled";
import { DezenaDiv } from "../GeralStyle/style";

export const Container = styled(DezenaDiv)`
    background: var(--duplasena);
    color: #fff;
`;

export const Sorteio = styled(Acumulou)`
    margin-bottom: 0;
`;

export const DivRes = styled(DivResultado)`
    margin: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;