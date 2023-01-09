import { useState } from "react";
import { useFetchCat } from "../../hooks/useFetchCat";
import { setRandomStatusCode } from "../../utils/buttonsRange";
import { Container, SmallButtons, Content } from "./styles";
import { Section, Portrait, Button, Header } from "../../components";

export function HttpCat() {
  const defaultImageUrl = "https://http.cat/599";
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const { imageUrl } = useFetchCat(statusCode);

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <h2>
            <span>HTTP</span> Cat
          </h2>
          <Section title="A API HTTP Cat retorna um gato bonitinho em resposta a uma requisição HTTP." />
          {
            <Portrait
              src={imageUrl || defaultImageUrl}
              alt={"Imagem Randômica do HTTP Cat."}
            />
          }
          <p>Status code: {statusCode}</p>
          <Section title="Selecione o range do status code e invoque seu gato randomicamente:">
            <SmallButtons>
              <Button
                title="100+"
                onClick={() => setRandomStatusCode(setStatusCode, 100, 104)}
              />
              <Button
                title="200+"
                onClick={() => setRandomStatusCode(setStatusCode, 200, 208)}
              />
              <Button
                title="300+"
                onClick={() => setRandomStatusCode(setStatusCode, 300, 310)}
              />
              <Button
                title="400+"
                onClick={() => setRandomStatusCode(setStatusCode, 400, 440)}
              />
              <Button
                title="500+"
                onClick={() => setRandomStatusCode(setStatusCode, 500, 599)}
              />
            </SmallButtons>
          </Section>
        </Content>
      </main>
    </Container>
  );
}
