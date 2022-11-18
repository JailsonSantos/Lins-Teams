import { Container } from './styles';
import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';
import { HeightLight } from '@components/Highlight';
import { useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Alert, FlatList } from 'react-native'
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { groupsGetAll } from '@storage/group/groupsGetAll';
import { Loading } from '@components/Loading';

export function Groups() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket']);

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fecthGroups() {
    try {
      setIsLoading(true);

      const data = await groupsGetAll();
      setGroups(data);

    } catch (error) {
      console.log(error);
      Alert.alert('Turmas', 'Não foi possível carregar as turmas.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fecthGroups();
  }, []));

  return (
    <Container>
      <Header />

      <HeightLight
        title="Turmas"
        subtitle="Jogue com a sua Turma"
      />

      {isLoading ? <Loading /> :

        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard
              title={item}
              onPress={() => handleOpenGroup(item)}
            />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
          showsVerticalScrollIndicator={false}
        />
      }

      <Button
        title="Criar nova turma"
        onPress={handleNewGroup} />

    </Container>
  );
}