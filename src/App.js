import "./App.css";
import { useState } from "react";

let emojiDictionary = {
  "😁": "Smiling",
  "😳": "Disbelief",
  "😂": "Laughing",
  "🥰": "Loved",
  "😔": "Sad",
  "🥱": "Yawning",
  "😱": "Shocked",
  "😑": "Annoyed",
  "😡": "Angry",
  "🤒": "Sick",
};

let emojisWeKnow = Object.keys(emojiDictionary);

function App() {
  const [meaning, setMeaning] = useState("");

  function emojiHandler(e) {
    let emoji = e.target.value.trim();

    let meaning = emojiDictionary[emoji];

    // if (meaning === undefined) {
    //   meaning = "We don't have this Emoji in our Database";
    // }

    if (emoji in emojiDictionary) {
      setMeaning(meaning);
    } else {
      setMeaning("We don't have this Emoji in our Database");
    }
  }
  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1>Know Your Emoji</h1>
      <input
        onChange={emojiHandler}
        placeholder="Enter Your Emoji or Click from the ones below..."
      />
      <h2>{meaning}</h2>
      {emojisWeKnow.map((emoji) => {
        return <span onClick={() => emojiClickHandler(emoji)}>{emoji} </span>;
      })}
    </div>
  );
}

export default App;
