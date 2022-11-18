import { Container } from './styles';
import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';
import { HeightLight } from '@components/Highlight';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { FlatList } from 'react-native'
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket']);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header />

      <HeightLight
        title="Turmas"
        subtitle="Jogue com a sua Turma"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button
        title="Criar nova turma"
        onPress={handleNewGroup} />

    </Container>
  );
}