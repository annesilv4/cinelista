import type { Filme } from "@/types/types";
import Style from './Card.module.css';
import Link from "next/link";

type Props = {
    filme: Filme
}

const Card = ({ filme }: Props) => {
    const { id, title, overview, poster_path, vote_average } = filme;

    const resume = overview?.length >= 256 ? `${overview?.substring(0, 253)}...` : overview;

    return (
        <div key={id} className={Style.card}>
            <Link href={`/filmes/${id}`}>
                <div className={Style.card__image}>
                    <img src={`${process.env.NEXT_PUBLIC_BASE_URL_IMG}${poster_path}`} alt={`Poster do filme ${title}`} width={300} height={200} />
                </div>
                <div className={Style.card__info}>
                    <h3 className={Style.card__title}>{title}</h3>
                    <p className={Style.card__description}>{resume}</p>
                    <p className={Style.card__description}>Nota: {vote_average}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card;