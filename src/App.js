
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Dictionary
        </h1>
      </header>
      <main>
        <div>
          <form>
            <div class="input-group mb-3">
              <input
                 type="text" 
                 class="form-control" 
                 placeholder="Search..." 
                 aria-label="Search" 
                 aria-describedby="basic-addon2">
              </input>
              <div class="input-group-append">
                <button
                 class="btn btn-outline-secondary" 
                 type="button">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
          
        <div>
          <h2>
            Sunset
          </h2>
          <button
           type="button" 
           class="btn btn-outline-info">
            Listen
          </button>
          <p>
            /ˈsʌnˌsɛt/
          </p>
        </div>
          <h3>
            noun
          </h3>
          <p>
            Quisque est diam, dapibus at varius quis, dignissim quis quam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam diam, blandit ac rhoncus sed, cursus eget sem. Aliquam elit ante, facilisis in accumsan non, maximus ac nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent et molestie mauris. Integer accumsan mauris a lectus pellentesque ultricies. Curabitur rutrum venenatis dui, in porttitor nibh volutpat et. Sed ultricies urna turpis, non maximus mi vehicula nec. Nam feugiat nulla in lacus viverra suscipit. Etiam sagittis facilisis iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce id commodo arcu, sit amet auctor felis. Curabitur aliquet vulputate velit sed tincidunt. Aliquam malesuada tincidunt nulla in interdum. Sed non magna nisi.
          </p>

        <div>
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

        <div class="container">
          <div class="row">
            <div class="col-sm">
             Photo
            </div>
            <div class="col-sm">
              Photo
            </div>
            <div class="col-sm">
              Photo
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              Photo
            </div>
            <div class="col-sm">
              Photo
            </div>
            <div class="col-sm">
              Photo
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              Photo
            </div>
            <div class="col-sm">
              Photo
            </div>
            <div class="col-sm">
              Photo
            </div>
          </div>
        </div>
        
      </main>
      <footer>
        <p>
          This project was coded by Anna Shapovalova and is open-sourced on GitHub and hosted on Netlify.
        </p>
      </footer>
    </div>
  );
}

export default App;
