function fibonacci(n, sequence = [0, 1]) {
  if (sequence.length > n) {
    return sequence.slice(0, n + 1);
  }
  return fibonacci(n, [
    ...sequence,
    sequence[sequence.length - 1] + sequence[sequence.length - 2],
  ]);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
