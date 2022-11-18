import { useState } from "react";
import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { HeightLight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {

  const navigation = useNavigation();
  const [newGroup, setNewGroup] = useState('');

  function handleNew() {
    navigation.navigate('players', { group: newGroup });
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <HeightLight
          title="Nova turma"
          subtitle="Cria a turma para adicioanr as pessoas."
        />

        <Input
          placeholder="Nome da turma"
          onChangeText={setNewGroup}
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />

      </Content>
    </Container>
  )
}