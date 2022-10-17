import React from 'react';

export default function Phonetics(props) {
    return (
        <div>
          <a
           href={props.phonetic.audio}
           target="_blank"
           rel="noreferrer">
            Listen
          </a>
          <p>
            {props.phonetic.text}
          </p>
        </div>

    );
}