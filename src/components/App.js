import React from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';
class App extends React.Component{

  constructor(){
    super();
    this.state = {
      petName: 'Fluffy'
    }
  }

  render(){
    return (
      <div className="App">
        <main className="page bg-white" id="petratings">
          <div className="container">
            <div className="row">
              <div className="col-md-12 bg-white">
                <div className="container">
                  <AddAppointments />
                  <SearchAppointments />
                  <ListAppointments />
                  <div>{this.state.petName}</div>
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
