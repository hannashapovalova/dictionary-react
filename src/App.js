
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-block">
        <div className="slice-box">
          <span className="slice slice-top">Dictionary</span>
          <span className="slice slice-bottom">Dictionary</span>
        </div>
      </header>
      <main className="container information-block">
        <div className="search-form-block">
          <form>
            <div className="input-group mb-3">
              <input
                 type="text" 
                 className="form-control" 
                 placeholder="Search..." 
                 aria-label="Search" 
                 aria-describedby="basic-addon2">
              </input>
              <div className="input-group-append">
                <button
                 className="btn btn-outline-secondary" 
                 type="button">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
          
        <div className="word-block">
          <h2>
            Sunset
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
          <h3>
            noun
          </h3>
          <p>
            Quisque est diam, dapibus at varius quis, dignissim quis quam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam diam, blandit ac rhoncus sed, cursus eget sem. Aliquam elit ante, facilisis in accumsan non, maximus ac nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent et molestie mauris. Integer accumsan mauris a lectus pellentesque ultricies. Curabitur rutrum venenatis dui, in porttitor nibh volutpat et. Sed ultricies urna turpis, non maximus mi vehicula nec. Nam feugiat nulla in lacus viverra suscipit. Etiam sagittis facilisis iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce id commodo arcu, sit amet auctor felis. Curabitur aliquet vulputate velit sed tincidunt. Aliquam malesuada tincidunt nulla in interdum. Sed non magna nisi.
          </p>
        </div>

        <div className="verb-block">
          <h3>
            verb
          </h3>
          <p>
            Quisque est diam, dapibus at varius quis, dignissim quis quam.
          </p>
          <p>
            Cras eget ligula varius, aliquet nunc at, sagittis ligula. Nullam consequat vitae erat nec feugiat. Curabitur imperdiet, quam eu faucibus posuere, erat ipsum aliquet leo, nec efficitur lacus ipsum vel neque. In bibendum ante eros. 
          </p>
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
      </main>

      <footer className="footer-block">
        This project was coded by{" "}
        <a 
         className="link"
         href="https://www.linkedin.com/in/anna-shapovalova-63116b238/" 
         target="_blank" 
         rel="noreferrer">
          Anna Shapovalova
        </a> 
        {" "}and is open-sourced on{" "}
        <a
         className="link"
         href="https://github.com/hannashapovalova/dictionary-react" 
         target="_blank" 
         rel="noreferrer">GitHub</a> 
        {" "}and hosted on{" "}
        <a
         className="link"
         href="https://resilient-frangollo-ffa520.netlify.app" 
         target="_blank" 
         rel="noreferrer">Netlify</a>
        .
      </footer>
    </div>
  );
}

export default App;
