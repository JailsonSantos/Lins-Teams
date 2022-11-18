import { useState } from "react";
import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { HeightLight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {

  const navigation = useNavigation();

  const [newGroup, setNewGroup] = useState('');

  async function handleNew() {

    try {
      if (newGroup.trim().length === 0) {
        return Alert.alert("Novo Grupo", "Informe o nome da turma.");

      }

      await groupCreate(newGroup);

      navigation.navigate('players', { group: newGroup });

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo");
        console.log(error);
      }
    }
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