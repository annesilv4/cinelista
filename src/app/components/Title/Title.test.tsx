import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Title from ".";

test("Renderiza o título com o texto correto", async () => {
    const title = "Título";
    render(<Title title={title} />);
    const element = await screen.findByText(title);
    expect(element).toBeInTheDocument();
});
