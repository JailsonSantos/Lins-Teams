import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { HeightLight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

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

        <Input />

        <Button title="Criar" style={{ marginTop: 20 }} />

      </Content>
    </Container>
  )
}