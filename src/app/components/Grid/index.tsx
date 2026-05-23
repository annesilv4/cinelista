import type { Filme } from '@/types/types';
import Card from '../Card';
import Style from './Grid.module.css';

type Props = {
  filmes: Filme[];
};

const Grid = ({ filmes }: Props) => {
  return (
    <section className={Style.grid}>
      {filmes.map((filme) => (
        <Card key={filme.id} filme={filme} />
      ))}
    </section>
  );
};

export default Grid;
