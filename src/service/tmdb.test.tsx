import tmdbApi from "./axios";
import { getTrendingMovies } from "./tmdb";

jest.mock("./axios");
test("Retorna filmes em destaque corretamente", async () => {
    const mockResults = [{ id: 1, title: "Matrix" }];
    (tmdbApi.get as jest.Mock).mockResolvedValue({
        data: {
            results: mockResults,
        },
    });
    const filmes = await getTrendingMovies();
    expect(filmes).toEqual(mockResults);
});
