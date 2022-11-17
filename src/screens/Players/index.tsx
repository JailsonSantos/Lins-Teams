import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { HeightLight } from "@components/Highlight";
import { Container } from "./styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <HeightLight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <ButtonIcon />
    </Container>
  )
}