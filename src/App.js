import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'firstId', name: 'Gabriel', age: 33 },
      { id: 'secondId', name: 'Yas', age: 44 },
      { id: 'thirdId', name: 'Ali', age: 20 }
    ],
    someOtherState: 'OtherValue',
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
    // this.setState({
    //   persons: [
    //     { name: 'Yas', age: 44 },
    //     { name: event.target.value, age: 33 },
    //     { name: 'Ali', age: 20 }
    //   ]
    // });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      border: '2px solid blue'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>This is really Working!</p>
        <button onClick={this.togglePersonHandler} style={style}>
          Switch Me
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
