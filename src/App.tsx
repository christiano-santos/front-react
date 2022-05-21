import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { LinkComponente } from "./components/LinkComponente";
import { GlobalStyle } from "./styles/global";
import { Routes, Route } from "react-router-dom";


export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jogos" element={<LinkComponente />}>
          <Route path="mega/:id" element={<LinkComponente />} />
          <Route path="lotofacil/:id" element={<LinkComponente />} />
          <Route path="quina/:id" element={<LinkComponente />} />
          <Route path="lotomania/:id" element={<LinkComponente />} />
          <Route path="timemania/:id" element={<LinkComponente />} />
          <Route path="dupla-sena/:id" element={<LinkComponente />} />
          <Route path="dia-de-sorte/:id" element={<LinkComponente />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}
