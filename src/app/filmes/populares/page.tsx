import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getPopular } from "@/service/tmdb";

export const revalidate = 60

const filmesPopulares = async () => {
    const filmes = await getPopular();

    return (
        <>
            <Title title="Cinelista | Filmes Populares" />
            <Grid filmes={filmes} />
        </>
    )
}

export default filmesPopulares;