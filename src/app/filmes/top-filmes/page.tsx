import Title from "@/app/components/Title";
import Grid from "@/app/components/Grid";
import { getTopRated } from "@/service/tmdb";

export const dynamic = 'force-static';

const filmesTopFilmes = async () => {
    const filmes = await getTopRated();

    return (
        <>
            <Title title="Cinelista | Top Filmes" />
            <Grid filmes={filmes} />
        </>
    )
}

export default filmesTopFilmes;