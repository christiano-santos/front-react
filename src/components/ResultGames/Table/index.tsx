/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Table, Td, Th } from "../../TitleGame/styled";

interface tabelaProps {
  nomeJogo: string;
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

export function TableResultado(tabela: tabelaProps) {
  const [award, setAward] = useState<tabela[]>([]);
  useEffect(() => {
    if (tabela.nomeJogo === "timemania" || tabela.nomeJogo === "diadesorte") {
      setAward(tabela.tabela.slice(0, -2));
    } else {
      setAward(tabela.tabela);
    }
  }, []);

  return (
    <>
      <Table>
        <thead>
          <tr>
            {award.map((t, index) => {
              return <Th key={index + t.descricaoFaixa}>{t.descricaoFaixa}</Th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {award.map((t, index) => {
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
