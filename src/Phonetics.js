import React from 'react';
import './Phonetics.css';


export default function Phonetics(props) {
    return (
        <div>
          <a
           className="sound"
           href={props.phonetic.audio}
           target="_blank"
           rel="noreferrer">
            Listen
            <i class="fa-solid fa-play"></i>
          </a>
          <p className="transcription">
            {props.phonetic.text}
          </p>
        </div>
    );
}