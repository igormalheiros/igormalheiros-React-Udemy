import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDelete(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.prs.persons
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onPersonAdded: () =>  dispatch({type: "ADD"}),
        onPersonDelete: (id) => dispatch({type: "DELETE", personId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);