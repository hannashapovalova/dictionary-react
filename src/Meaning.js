import React from 'react';
import Synonyms from './Synonyms';

export default function Meaning(props) {
    return (
      <div>
        <h3>
          {props.meaning.partOfSpeech}  
        </h3>
        {props.meaning.definitions.map(function (definition, index)
        {
          return (
            <div key={index}>
              <h4>Definition:</h4>
              <p>
                {definition.definition}
              </p>
              <h4>Example:</h4>
              <p>
                <em>
                {definition.example}
                </em>
              </p>
              <p>
               <Synonyms synonyms={definition.synonyms} />
              </p>
            </div>
          );
        })}
      </div> 
    );
}