import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

// Uji penjumlahan dengan angka positif
test("Menjumlahkan 2 + 3 harus menghasilkan 5", () => {
  assert.strictEqual(sum(2, 3), 5);
});

// Uji penjumlahan dengan angka negatif
test("Menjumlahkan -1 + -1 harus menghasilkan -2", () => {
  assert.strictEqual(sum(-1, -1), -2);
});

// Uji penjumlahan dengan nol
test("Menjumlahkan 0 + 0 harus menghasilkan 0", () => {
  assert.strictEqual(sum(0, 0), 0);
});

// Uji penjumlahan dengan angka desimal
test("Menjumlahkan 1.5 + 2.5 harus menghasilkan 4", () => {
  assert.strictEqual(sum(1.5, 2.5), 4);
});
