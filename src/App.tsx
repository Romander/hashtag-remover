import React from "react";
import "./App.css";

function App() {
  const [input, setInput] = React.useState<string>();
  const [result, setResult] = React.useState<string>();

  console.log(input, result);

  const onChangeInput = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInput(event.target.value);
    },
    []
  );

  const onChangeResult = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setResult(event.target.value);
    },
    []
  );

  const onClickRemove = React.useCallback(() => {
    const result = input
      ?.split(" ")
      .map((value) => {
        return value.charAt(0) === "#" ? value.replace("#", "") : value;
      })
      .join(" ");

    setResult(result);
  }, [input]);

  return (
    <div className="App">
      <h1>#✂️</h1>
      <div className="text-block-container">
        <textarea
          className="text-block"
          value={input}
          onChange={onChangeInput}
        />
        <textarea
          className="text-block"
          value={result}
          onChange={onChangeResult}
        />
      </div>
      <div>
        <button title="remove hashtags" onClick={onClickRemove}>
          DO IT
        </button>
      </div>
      <div className="card">
        <p>Click on button to remove hashtags</p>
      </div>
      <p className="read-the-docs">
        <a href="https://github.com/Romander" target="_blank">
          https://github.com/Romander
        </a>
      </p>
    </div>
  );
}

export default App;
