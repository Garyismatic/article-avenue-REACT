import Header from "./components/Header";
import Feed from "./components/Feed";
import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("");

  return (
    <>
      <Header setTopic={setTopic} />
      <Feed topic={topic} setTopic={setTopic} />
    </>
  );
}

export default App;
