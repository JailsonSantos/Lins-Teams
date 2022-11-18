import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/FIlter";
import { Header } from "@components/Header";
import { HeightLight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Form } from "./styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <HeightLight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>

        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon icon="add" />
      </Form>

      <Filter title="time A" isActive />
    </Container>
  )
}