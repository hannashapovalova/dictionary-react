import React from 'react';
import './Results.css';
import Meaning from './Meaning';

export default function Results(props) {
  if (props.results) {
    return (
        <div>
          <div className="word-block">
          <h2>
           {props.results.word}
          </h2>
          <button
           type="button" 
           className="btn btn-outline-info">
            Listen
          </button>
          <p>
            /ˈsʌnˌsɛt/
          </p>
        </div>

          <div className="noun-block">
            {props.results.meanings.map(function (meaning, index) {
              return (
                <p key={index}>
                  <Meaning meaning={meaning} />
                </p>
              )
            })}
          </div>

        <div className="gallery-block">
          <div className="row">
            <div className="col-sm">
             Photo
            </div>
            <div className="col-sm">
              Photo
            </div>
            <div className="col-sm">
              Photo
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              Photo
            </div>
            <div className="col-sm">
              Photo
            </div>
            <div className="col-sm">
              Photo
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              Photo
            </div>
            <div className="col-sm">
              Photo
            </div>
            <div className="col-sm">
              Photo
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
} 