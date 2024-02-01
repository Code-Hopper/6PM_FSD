import { FaTrash } from "react-icons/fa";

// importing dataset for emojies

const DisplayEmojies = (props) => {

    let whoIstryingToDelete = () =>{
        props.delete(props.element.emoji_id)
    }

    return (
        <div className="col-3">
            <div className="card p-2 border-0 shadow-lg">
                <h1 className="emoji">{props.element.emoji}</h1>
                <h3>{props.element.emojiName}</h3>
                <p className="about-emoji">{props.element.aboutEmoji}</p>
                <div>
                    <button onClick={whoIstryingToDelete} className="btn btn-danger">
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    );
};

let EmojiContainer = (props) => {

    console.log("this is emoji container page : ")
    console.log(props.emojiArray)

    let handelDeleteClick = (who) =>{
        console.log("delete has been called by id "+ who)
        props.onDelete(who)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row text-center py-5 px-2 gap-5 justify-content-center align-items-center">
                        {
                            props.emojiArray.map((emoji, index) => (
                                <DisplayEmojies key={index} element={emoji} delete={handelDeleteClick}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export { EmojiContainer };
