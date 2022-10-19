import React from 'react';
import './Results.css';
import Meaning from './Meaning';
import Phonetics from './Phonetics';


export default function Results(props) {
  if (props.results) {
    return (
        <div>
          <div className="word-block">
            <h2 className="word">
             {props.results.word}
            </h2>
            <div>
              <Phonetics phonetic={props.results.phonetics[0]} />
            </div>
          </div>

          <div className="meaning-block">
            {props.results.meanings.map(function (meaning, index) {
              return (
                <p key={index}>
                  <Meaning meaning={meaning} />
                </p>
              )
            })}
          </div>
       </div>
    );
  } else {
    return null;
  }
} 