import React, { Component } from 'react';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';



class Person extends Component {
  render() {
    console.log('[Person.js] rendering... ');
    return (
      <Aux className={classes.Person}>
        {/* /<div className={classes.Person}> */}
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        {/* </div> */}
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);
