import { assertEquals } from "https://deno.land/std@0.134.0/testing/asserts.ts";
import { j } from "./taggedtemplates.ts";

Deno.test("tagged template works without any substitutions", () => {
  const got = j`<ul><li>Alice</li><li>Bob</li><li>Mallory</li></ul>`;
  const expected = `<ul><li>Alice</li><li>Bob</li><li>Mallory</li></ul>`;
  assertEquals(got, expected);
});

Deno.test("tagged template works with simple substitutions", () => {
  const got = j
    `<ul><li>${"Alice"}</li><li>${"Bob"}</li><li>${"Mallory"}</li></ul>`;
  const expected = `<ul><li>Alice</li><li>Bob</li><li>Mallory</li></ul>`;
  assertEquals(got, expected);
});

Deno.test("tagged template works with array substitutions", () => {
  const users = ["Alice", "Bob", "Mallory"];
  const got = j`<ul>${users.map((x) => j`<li>${x}</li>`)}</ul>`;
  const expected = `<ul><li>Alice</li><li>Bob</li><li>Mallory</li></ul>`;
  assertEquals(got, expected);
});

Deno.test("tagged template works with array of numbers", () => {
  const got = j`<span>${[1, 2, 3]}</span>`;
  const expected = `<span>123</span>`;
  assertEquals(got, expected);
});

Deno.test("tagged template works with number substitutions", () => {
  const got = j`<span>${1 + 2}</span>`;
  const expected = `<span>3</span>`;
  assertEquals(got, expected);
});

Deno.test("tagged template works with substitution value of 0", () => {
  const got = j`<span>${0}</span>`;
  const expected = `<span>0</span>`;
  assertEquals(got, expected);
});
