import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => {
          dispatch(increaseByAmount(5));
        }}
      >
        IncreaseBy-5
      </button>
    </div>
  );
};

export default CounterView;
