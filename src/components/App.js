import { without } from 'lodash';
import React from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';
class App extends React.Component{

  constructor(){
    super();
    this.state = {
      appointments: [],
      apptId: 0
    }
    this.deleteAppointment = this.deleteAppointment.bind(this);
  }

  deleteAppointment = (apt) => {
    let tempApt = this.state.appointments;
    tempApt = without(tempApt, apt);
    this.setState({
      appointments: tempApt
    })
  }

  componentDidMount(){
    fetch('./data.json')
    .then(res => res.json())
    .then(res => {
      const aptmnts = res.map(item => {
        item.id = this.state.apptId;
        this.setState({apptId: this.state.apptId + 1});
        return item;
      });
      this.setState({
        appointments:aptmnts
      })
    });

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
                  <ListAppointments 
                    appointments={this.state.appointments}
                    delete={this.deleteAppointment}
                  />
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
