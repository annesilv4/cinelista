import { renderHook } from "@testing-library/react";
import { useResumofilme } from "./useResumofilme";

test("Retorna overview inteiro se menor que o limite", () => {
    const texto = "Resumo curto";
    const { result } = renderHook(() => useResumofilme(texto, 256));
    expect(result.current).toBe(texto);
});

test("Retorna overview cortado e retisências se passar do limite", () => {
    const texto =
        "Miranda Priestly navega por sua carreira em meio ao declínio das publicações tradicionais de revistas. Ela se confronta com Emily Charlton, sua ex-assistente, agora uma influente executiva de um grupo de luxo, que detém verbas publicitárias de que Miranda Priestly precisa desesperadamente.";
    const { result } = renderHook(() => useResumofilme(texto, 10));
    expect(result.current).toBe("Miranda Pr...");
});
