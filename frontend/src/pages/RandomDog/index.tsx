import { useState } from "react";
import { useFetchDog } from "../../hooks/useFetchDog";
import { Header, Section, Portrait } from "../../components";
import { MdOutlineRefresh } from "react-icons/md";
import { Container, RefreshButton, Content } from "./styles";

export function RandomDog() {
  const { data, error, isLoading, fetchData } =
    useFetchDog("/random-dog/image");
  const isVideo = data && data.endsWith(".mp4");
  const [isRefreshing, setIsRefreshing] = useState(false);

  function handleRefresh() {
    if (isRefreshing) return;
    if (error) return <p>Erro ao carregar a imagem</p>;

    setIsRefreshing(true);
    fetchData();
    setIsRefreshing(false);
  }

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Section title="Hello World, This Is Dog">
            {isLoading ? (
              <p>Carregando...</p>
            ) : (
              <Portrait
                src={data}
                isVideo={isVideo}
                alt="Imagem de um cachorro aleatório"
              />
            )}
          </Section>
          {isLoading ? (
            <RefreshButton disabled></RefreshButton>
          ) : (
            <RefreshButton onClick={handleRefresh}>
              <MdOutlineRefresh />
            </RefreshButton>
          )}
          <p>
            Random Dog é uma simples página que mostra uma imagem de <br />
            cachorro aleatória a cada clique no botão de refresh.
          </p>
        </Content>
      </main>
    </Container>
  );
}
