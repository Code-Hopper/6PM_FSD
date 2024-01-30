// importing bootstrap
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// importing components
import { AddEmoji } from "./components/AddEmoji";
import { EmojiContainer } from './components/EmojiContainer';
import { useState } from "react";

function App() {

  let [data , setData] = useState([])

  let onNewEmojiAddition = (emojiData) =>{
    console.log("this is from app.js: ")
    console.log(emojiData)
    setData(emojiData)
  }

  return (
    <>

      <h1 className="text-center">Emoji<span className="fw-bolder text-primary">Pedia 😊</span></h1>

      {/* add emojies */}
      {/* this will add new emojies */}
      <AddEmoji onAdd={onNewEmojiAddition}/> 

      {/* display emojies */}
      {/* this will display all the emojies that exists or added by addemoji*/}
      <EmojiContainer emojiArray={data} />
    </>
  );
}

export default App;
