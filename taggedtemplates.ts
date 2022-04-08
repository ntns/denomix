// Useful tagged template for jsx-like strings
export function j(
  strings: TemplateStringsArray,
  ...substitutions: unknown[]
): string {
  return strings
    .map((string: string, i: number) => {
      return Array.isArray(substitutions[i])
        ? string + (substitutions[i] as Array<unknown>).join("")
        : string + (substitutions[i] ?? "");
    })
    .join("");
}
