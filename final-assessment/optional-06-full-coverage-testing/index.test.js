import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

// ✅ Uji kasus 1: Menjumlahkan dua bilangan positif
test("Menjumlahkan 5 + 3 harus menghasilkan 8", () => {
  assert.strictEqual(sum(5, 3), 8);
});

// ✅ Uji kasus 2: Salah satu angka negatif (harus mengembalikan 0)
test("Menjumlahkan -1 + 3 harus menghasilkan 0", () => {
  assert.strictEqual(sum(-1, 3), 0);
});

// ✅ Uji kasus 3: Kedua angka negatif (harus mengembalikan 0)
test("Menjumlahkan -2 + -4 harus menghasilkan 0", () => {
  assert.strictEqual(sum(-2, -4), 0);
});

// ✅ Uji kasus 4: Salah satu operand bukan angka (harus mengembalikan 0)
test("Menjumlahkan '5' + 3 harus menghasilkan 0", () => {
  assert.strictEqual(sum("5", 3), 0);
});

// ✅ Uji kasus 5: Kedua operand bukan angka (harus mengembalikan 0)
test("Menjumlahkan 'a' + 'b' harus menghasilkan 0", () => {
  assert.strictEqual(sum("a", "b"), 0);
});

// ✅ Uji kasus 6: Menjumlahkan 0 + 0 (kasus batas minimum)
test("Menjumlahkan 0 + 0 harus menghasilkan 0", () => {
  assert.strictEqual(sum(0, 0), 0);
});

// ✅ Uji kasus 7: Menjumlahkan bilangan desimal
test("Menjumlahkan 1.5 + 2.5 harus menghasilkan 4", () => {
  assert.strictEqual(sum(1.5, 2.5), 4);
});
