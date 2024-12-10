import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      test buasdtton {count}
    </button>
  );
}
