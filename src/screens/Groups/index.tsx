import { Container } from './styles';
import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';
import { HeightLight } from '@components/Highlight';

export function Groups() {
  return (
    <Container>
      <Header />
      <HeightLight title="Turmas" subtitle="Jogue com a sua Turma" />
      <GroupCard title="Galera do IGNITE" />
    </Container>
  );
}