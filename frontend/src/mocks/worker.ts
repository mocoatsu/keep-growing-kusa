export {};

// test実行時のみモックデータを返す
if (typeof window === "undefined") {
  const { worker } = require("./server");

  worker.listen();
}
