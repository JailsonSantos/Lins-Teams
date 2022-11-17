import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { HeightLight } from "@components/Highlight";
import { Button } from "@components/Button";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <HeightLight
          title="Nova turma"
          subtitle="Cria a turma para adicioanr as pessoas."
        />

        <Button title="Criar" />

      </Content>
    </Container>
  )
}