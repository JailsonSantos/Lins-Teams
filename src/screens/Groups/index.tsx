import { Header } from '@components/Header';
import { HeightLight } from '@components/Highlight';
import { StyleSheet, Text, View } from 'react-native';

import { Container } from './styles';

export function Groups() {
  return (
    <Container>
      <Header />
      <HeightLight title="Turmas" subtitle="Jogue com a sua Turma" />
    </Container>
  );
}