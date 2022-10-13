import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    });
    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getMemeImg() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top text"
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Bottom text"
                />
                <button className="form--button" onClick={getMemeImg}>
                    Get a new image
                </button>
            </div>
            <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top"> One does not simply</h2>
            <h2 className="meme--text bottom"> Walk into Mordor</h2>
            </div>
        </main>
    );
}
