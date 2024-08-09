import Header from "./components/Header";
import Feed from "./components/Feed";
import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("");
  const [sort, setSort] = useState("created_at");

  return (
    <>
      <Header setTopic={setTopic} setSort={setSort} />
      <Feed topic={topic} setTopic={setTopic} sort={sort} setSort={setSort} />
    </>
  );
}

export default App;
