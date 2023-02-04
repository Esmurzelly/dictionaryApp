import React, { useState } from 'react';

const ListDetails = ({word, phonetics, meanings, updateData}) => {
    // const {word, phonetics, meanings} = result;
    const [wordToSeacrh, setWordToSearch] = useState('');
    

    function playAudio() {
        try {
            let audio = new Audio(phonetics[0].audio);
            audio.play();
        } catch (e) {
            console.log(e)
        }
    }

    return ( 
        <div className='card mt-20'>
            <div className="p-20">
                <h3>Word</h3>
                <div className="flex">
                    <p>{word}</p>

                    <p className="pl-20">{meanings[0].partOfSpeech}</p>
                    <p className="pl-20">{phonetics[0].text}</p>
                    <div className="pl-20">
                        <p className="audio" onClick={playAudio}>
                            Play audio
                        </p>
                    </div>
                </div>

                <div>
                    <h3>Meaning: </h3>
                    <p>{meanings[0].definitions[0].definition}</p>
                </div>

                {meanings[0].definitions[0].example && (
                    <div>
                        <h3>Example: </h3>
                        <p>{meanings[0].definitions[0].example}</p>
                    </div>
                )}
                


                <div>
                    {meanings[0].synonyms.length > 0 && (
                        <>
                        <h2>Synonyms: </h2>
                        <p>
                            {meanings[0].synonyms.map((item, index) => {
                                return <p 
                                    onClick={() => updateData(item)} 
                                    key={index}
                                    style={{cursor:'pointer'}}
                                    >
                                        {item}
                                    </p>
                            })}
                        </p>
                        </>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default ListDetails;