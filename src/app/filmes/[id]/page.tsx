import Link from "next/link";
import { notFound } from "next/navigation";
import Style from "./DetalheFilme.module.css";
import { getMoviesDetails } from "@/service/tmdb";
import Image from "next/image";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: number }>;
}) => {
  const { id } = await params;

  const details = await getMoviesDetails(id);

  if (!details) {
    return notFound();
  }

  return {
    title: `${details.title} | Cinelista`,
    description: details.overview,
    openGraph: {
      title: `${details.title} | Cinelista`,
      description: details.overview,
      images: [`${process.env.NEXT_PUBLIC_BASE_URL_IMG}${details.poster_path}`],
    },
  };
};

export const DetalhesFilme = async ({
  params,
}: {
  params: Promise<{ id: number }>;
}) => {
  const { id } = await params;

  const details = await getMoviesDetails(id);

  if (!details) {
    return notFound();
  }

  const { title, overview, poster_path } = details || {};

  return (
    <>
      <div className={Style.detalhes}>
        <div className={Style.detalhes__container}>
          <Link href="/" className={Style.detalhes__voltar}>
            Voltar
          </Link>
          <section>
            <figure>
              <Image
                className={Style.detalhes__image}
                src={`${process.env.NEXT_PUBLIC_BASE_URL_IMG}${poster_path}`}
                alt={`Poster do filme ${title}`}
                width={300}
                height={200}
              />
            </figure>
            <article className={Style.detalhes__info}>
              <h2>{title}</h2>
              <p>{overview}</p>
            </article>
          </section>
        </div>
      </div>
    </>
  );
};

export default DetalhesFilme;
