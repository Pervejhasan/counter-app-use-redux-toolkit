import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostView from "./features/posts/postView";
function App() {
  return (
    <div className="App">
      <h2>redux-toolkit Counter App</h2>
      <CounterView></CounterView>
      <PostView></PostView>
    </div>
  );
}

export default App;
