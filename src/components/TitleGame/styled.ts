
import styled from "styled-components";

interface NomeGameProps {
    cor: string;
}

export const ContaierGame = styled.div`
    margin-bottom: 1.5rem;
`;

export const Container = styled.div`
    display: flex;
    /* border: 1px solid blue; */
    border-bottom: 0.1rem solid #bbb;
    align-items: center;
    justify-content: start;
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-left: 0.5rem;
`;

export const NomeGame = styled.h4`
    margin-left: 0.2rem;
    font-size: 1.5rem;
    color: var(--${(props: NomeGameProps) => props.cor});
`;

export const Concurso = styled.h5`
    margin-top: 2rem;
    margin-left: 1rem;
    font-size: 1.20rem;
`;

export const DescGame = styled.p`
    margin-top: 0.5rem;
    margin-left: 1rem;
`;

export const DivResultado = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    /* border: 1px solid green; */
    justify-content: center;
`;

export const Acumulou = styled.span`
    font-size: 1.5em;
    color: #006bae;
    font-family: 'Fjalla One', sans-serif;
    font-weight: bold;
    margin-bottom: 1.3rem;
`;

export const Ganhadores = styled.span`
    color: #f7941d;
    font-weight: bold;
    font-family: 'Fjalla One', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
`;

export const ContainerTable = styled.div`
    width: 100%;
    overflow-x: auto;
`;

export const Table = styled.table`
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    border-collapse: collapse;
    word-wrap: break-word;
`;

export const Th = styled.th`
    border-top: 0.1rem solid #bbb;
    border-bottom: 0.2rem solid #bbb;
    font-size: 1.1rem;
    padding: 0.5rem;
`;

export const Td = styled.td`
    padding: 1rem;
`;

export const RodapeGame = styled.div`
    border-top: 0.1rem solid #bbb;
    padding-top: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;

export const Button = styled.span`
    text-decoration: none;
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
    padding: 0.4rem;
    border-radius: 0.2rem;
    font-weight: bold;
`;
