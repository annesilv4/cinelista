import Title from "@/app/components/Title/index";
import Grid from "./components/Grid";
import { getTrendingMovies } from "@/service/tmdb";

export default async function Home() {
  const filmes = await getTrendingMovies();

  return (
    <>
      <Title title="Filmes em destaque" />
      <Grid filmes={filmes} />
    </>
  );
}
