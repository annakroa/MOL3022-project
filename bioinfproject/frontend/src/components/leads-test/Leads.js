import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads } from '../../actions/leads';

export class Leads extends Component {
    //creates an object:
    static propTypes = {
        leads: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return (
            <Fragment>
                <h2> Ulike tilfeller av corona</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Sequence</th>
                            <th>Discovered</th>
                            <th>Country</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map(lead => ( //looper gjennom for å hente ut de ulike
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.sequence}</td>
                                <td>{lead.discovered}</td>
                                <td>{lead.country}</td>
                                <td><button className="btn btn-danger btn-sm"> Delete </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>

        );
    }
}

//creates a function
const mapStateToProps = state => ({
    leads: state.leads.leads //the first leads in the .leads.leads, is the reducer, the second is the lead definied in the "reducer lead"
});

export default connect(mapStateToProps, { getLeads })
    (Leads);
//pass in mapStateToProps