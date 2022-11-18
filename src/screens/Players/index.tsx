import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/FIlter";
import { Header } from "@components/Header";
import { HeightLight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { FlatList } from 'react-native';
import { useState } from "react";

export function Players() {

  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

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

      <HeaderList>

        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

    </Container>
  )
}