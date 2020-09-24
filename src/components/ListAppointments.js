import React from 'react';

class ListAppointments extends React.Component{
    render(){

        const appts = this.props.appointments.map(item => {
            return(
                <div>
                    <div>Pet: {item.petName}</div>
                    <div>Owner: {item.ownerName}</div>
                </div>
            )
        })

        return (<div>
            {appts}
        </div>)
    }
}

export default ListAppointments;