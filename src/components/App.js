import React from 'react';
import '../css/App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <main className="page bg-white" id="petratings">
          <div className="container">
            <div className="row">
              <div className="col-md-12 bg-white">
                <div className="container">
                  <div>Add appointments</div>
                  <div>Search appointments</div>
                  <div>List appointments</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
