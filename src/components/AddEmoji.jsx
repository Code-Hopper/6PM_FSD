import { useState } from "react"
import { emojis } from "./DataSheet"

let AddEmoji = (props) => {

    let [newEmojies, setNewEmojies] = useState([])

    let [emojiData, setEmojiData] = useState(
        {
            emoji: "",
            emojiName: "",
            aboutEmoji: ""
        }
    )

    let EmojiDataChange = (event) => {

        // console.log(event.target.name)
        // console.log(event.target.value)

        let name = event.target.name
        let value = event.target.value

        // ... 

        setEmojiData({ ...emojiData, [name]: value , emoji_id :
        
            newEmojies.length ? 

            newEmojies[newEmojies.length - 1].emoji_id + 1 : 1 });

    }

    let EmojiSubmit = (event) => {
        event.preventDefault()
        console.log(emojiData)

        setNewEmojies((prevnewEmojies) => {
            
            let UpdatedEmojiArray =  [...prevnewEmojies, emojiData]

            props.onAdd(UpdatedEmojiArray)

            return UpdatedEmojiArray
        })
    }

    let DeleteEmojiFromEmojiArray = (who) =>{
        newEmojies.filter((emoji)=>{

            let remaing_element = [];
            
            remaing_element.push(emoji.emoji_id != who )

            props.onAdd(remaing_element) 
        })
    }

    return (
        <>
            <div className="contaienr-fluid">
                <form onSubmit={EmojiSubmit}>
                    <div className="container d-flex flex-column justify-content-center align-items-center gap-3">
                        <div className="row">
                            <div className="col-3">
                                <input className="form-control" onChange={EmojiDataChange} type="text" placeholder="Emoji" name="emoji" value={emojiData.emoji} required />
                            </div>
                            <div className="col-3"> <input className="form-control" onChange={EmojiDataChange} type="text" placeholder="Emoji Name" name="emojiName" value={emojiData.emojiName} required /> </div>
                            <div className="col"> <input className="form-control" onChange={EmojiDataChange} type="text" placeholder="About Emoji" name="aboutEmoji" value={emojiData.aboutEmoji} required /> </div>
                        </div>
                        <button className="btn btn-success">Add Emoji</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export { AddEmoji }