'use client'
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { decrement, increment } from "@/lib/redux";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <main className="Home">
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </main>
  );
}
