import { useEffect, useState } from "react";
import { Table, Td, Th } from "../../TitleGame/styled";
import { DivRes, Sorteio } from "../Dupla/style";

interface tabelaProps {
  tabela: [
    {
      descricaoFaixa: string;
      faixa: number;
      numeroDeGanhadores: number;
      valorPremio: number;
    }
  ];
}

interface tabela {
  descricaoFaixa: string;
  faixa: number;
  numeroDeGanhadores: number;
  valorPremio: number;
}

function handleCurrency(valorPremio: number) {
  let currency = valorPremio;
  return currency.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

export function TableDupla(tabela: tabelaProps) {
  const [award1, setAward1] = useState<tabela[]>([]);
  const [award2, setAward2] = useState<tabela[]>([]);

  useEffect(() => {
    setAward1(tabela.tabela.slice(0, 4));
    setAward2(tabela.tabela.slice(4, 8));
  }, []);

  return (
    <>
      <DivRes>
        <Sorteio>Premiação - 1° sorteio</Sorteio>
      </DivRes>
      <Table>
        <thead>
          <tr>
            {award1.map((t, index) => {
              return <Th key={index + t.descricaoFaixa}>{t.descricaoFaixa}</Th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {award1.map((t, index) => {
              return (
                <Td key={index}>
                  {t.numeroDeGanhadores} apostas ganhadoras,{" "}
                  {handleCurrency(t.valorPremio)}
                </Td>
              );
            })}
          </tr>
        </tbody>
      </Table>

      <DivRes>
        <Sorteio>Premiação - 2° sorteio</Sorteio>
      </DivRes>

      <Table>
        <thead>
          <tr>
            {award2.map((t, index) => {
              return <Th key={index + t.descricaoFaixa}>{t.descricaoFaixa}</Th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {award2.map((t, index) => {
              return (
                <Td key={index}>
                  {t.numeroDeGanhadores.toLocaleString('pt-BR')} apostas ganhadoras,{" "}
                  {handleCurrency(t.valorPremio)}
                </Td>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </>
  );
}
