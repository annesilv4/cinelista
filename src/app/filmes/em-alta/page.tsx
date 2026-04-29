import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getNowPlayingMovies } from "@/service/tmdb";

export const dynamic = 'force-dynamic';

const filmesEmAlta = async () => {
    const filmes = await getNowPlayingMovies();

    return (
        <>
            <Title title="Cinelista | Filmes em Alta" />
            <Grid filmes={filmes} />
        </>
    )
}

export default filmesEmAlta;