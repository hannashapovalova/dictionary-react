import React from 'react';

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
        <div>
          <h4>Synonyms:</h4>
          <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}> {synonym} </li>
            })}
          </ul>
        </div>
        );

    } else {
        return null;
    }
}