import React from 'react';

class SearchAppointments extends React.Component {
    render() {
        return (
            <div className="search-appointments row justify-content-center my-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                            id="SearchApts"
                            type="text"
                            className="form-control"
                            aria-label="Search Appointments"
                        />
                        <div className="input-group-append">
                            <button
                                type="button"
                                className="btn btn-primary dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Sort by: <span className="caret" />
                            </button>

                            <div className="sort-menu dropdown-menu dropdown-menu-right">
                                <button className={
                                    "sort-by dropdown-item " + 
                                    (this.props.orderBy === 'petName' ? 'active' : '')
                                } 
                                onClick={e => this.props.changeOrder('petName')}
                                href="#">
                                    Pet Name</button>
                                <button className={
                                    "sort-by dropdown-item " + 
                                    (this.props.orderBy === 'date' ? 'active' : '')
                                } 
                                onClick={e => this.props.changeOrder('aptDate')}
                                href="#">
                                    Date</button>
                                <button className={
                                    "sort-by dropdown-item " + 
                                    (this.props.orderBy === 'ownerName' ? 'active' : '')
                                }
                                onClick={e => this.props.changeOrder('ownerName')} 
                                href="#">
                                    Owner</button>
                                <div role="separator" className="dropdown-divider" />
                                <button className={
                                    "sort-by dropdown-item " + 
                                    (this.props.orderDir === 'asc' ? 'active' : '')
                                } 
                                onClick={e => this.props.changeDir('asc')}
                                href="#">
                                    Asc</button>
                                <button className={
                                    "sort-by dropdown-item " + 
                                    (this.props.orderDir === 'desc' ? 'active' : '')
                                } 
                                onClick={e => this.props.changeDir('desc')}
                                href="#">
                                    Desc</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchAppointments;