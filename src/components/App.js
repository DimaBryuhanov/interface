import { without, findIndex } from 'lodash';
import React from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      appointments: [],
      formDisplay: false,
      orderBy: 'petName',
      orderDir: 'desc',
      seachText: '',
      lastIndex: 0,
      apptId: 0
    }
    this.addAppointment = this.addAppointment.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.changeDir = this.changeDir.bind(this);
    this.searchBy = this.searchBy.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
  }

  addAppointment(aptmnt) {
    const temApts = this.state.appointments;
    aptmnt.id = this.state.lastIndex;
    temApts.unshift(aptmnt);

    this.setState({
      appointments: temApts,
      lastIndex: this.state.lastIndex + 1
    })
  }

  deleteAppointment = (apt) => {
    let tempApt = this.state.appointments;
    tempApt = without(tempApt, apt);
    this.setState({
      appointments: tempApt
    })
  }

  toggleForm = () => {
    this.setState({
      formDisplay: !this.state.formDisplay
    })
  }

  changeOrder = (order) => {
    this.setState({
      orderBy: order
    })
  }

  changeDir = (direction) => {
    this.setState({
      orderDir: direction
    })
  }

  searchBy = (search) => {
    this.setState({
      seachText:search
    })
  }

  updateInfo = (name, value, id) => {
    let tempApts = this.state.appointments;
    let Index = findIndex(tempApts, {
      id: id
    });
    tempApts[Index][name] = value;
    this.setState({
      appointments: tempApts
    })
  }

  componentDidMount() {
    fetch('./data.json')
      .then(res => res.json())
      .then(res => {
        const aptmnts = res.map(item => {
          item.id = this.state.apptId;
          this.setState({ apptId: this.state.apptId + 1 });
          return item;
        });
        this.setState({
          appointments: aptmnts
        })
      });

  }

  render() {

    let order;
    let filteredApts = this.state.appointments;
    if (this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredApts = filteredApts.sort((a, b) => {
      if (
        a[this.state.orderBy].toLowerCase() <
        b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter(item => {
      return (
        item['petName']
          .toLowerCase()
          .includes(this.state.seachText.toLowerCase()) ||
        item['aptNotes']
          .toLowerCase()
          .includes(this.state.seachText.toLowerCase()) ||
        item['ownerName']
          .toLowerCase()
          .includes(this.state.seachText.toLowerCase())
      )
    });

    return (
      <div className="App">
        <main className="page bg-white" id="petratings">
          <div className="container">
            <div className="row">
              <div className="col-md-12 bg-white">
                <div className="container">
                  <AddAppointments
                    formDisplay={this.state.formDisplay}
                    toggleForm={this.toggleForm}
                    addAppointment={this.addAppointment}
                  />
                  <SearchAppointments
                    orderBy={this.state.orderBy}
                    orderDir={this.state.orderDir}
                    changeOrder={this.changeOrder}
                    changeDir={this.changeDir}
                    searchAppointments={this.searchBy}
                  />
                  <ListAppointments
                    appointments={filteredApts}
                    delete={this.deleteAppointment}
                    updateInfo={this.updateInfo}
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
