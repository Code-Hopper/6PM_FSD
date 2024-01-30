// importing dataset for emojies

const DisplayEmojies = (props) => {
    return (
        <div className="col-3">
            <div className="card p-2 border-0 shadow-lg">
                <h1 className="emoji">{props.element.emoji}</h1>
                <h3>{props.element.emojiName}</h3>
                <p className="about-emoji">{props.element.aboutEmoji}</p>
            </div>
        </div>
    );
};

let EmojiContainer = (props) => {

    console.log("this is emoji container page : ")
    console.log(props.emojiArray)

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row text-center py-5 px-2 gap-5 justify-content-center align-items-center">
                        {
                            props.emojiArray.map((emoji, index) => (
                                <DisplayEmojies key={index} element={emoji} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export { EmojiContainer };
