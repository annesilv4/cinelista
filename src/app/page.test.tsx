import { render, screen } from "@testing-library/react";
import Home from "./page";
import { getTrendingMovies } from "../service/tmdb";
import "@testing-library/jest-dom";

jest.mock("../service/tmdb", () => ({
    getTrendingMovies: jest.fn(),
}));

test("Exibe o título 'Filmes em destaque' na página inicial corretamente", async () => {
    const title = "Filmes em destaque";
    (getTrendingMovies as jest.Mock).mockResolvedValue([]);
    render(await Home());
    expect(screen.getByText(title)).toBeInTheDocument();
});

test("Renderiza os filmes em destaque corretamente", async () => {
    (getTrendingMovies as jest.Mock).mockResolvedValue([
        {
            id: "1",
            title: "Filme 1",
            overview: "Desc 1",
            post_path: "public/next.svg",
            vote_average: 8.0,
        },
    ]);
    render(await Home());
    expect(await screen.findByText("Filme 1")).toBeInTheDocument();
});

test("Exibir uma mensagem quando não houver filmes disponíveis", async () => {
    (getTrendingMovies as jest.Mock).mockResolvedValue([]);
    render(await Home());
    expect(
        await screen.findByText("Nenhum filme encontrado."),
    ).toBeInTheDocument();
});
