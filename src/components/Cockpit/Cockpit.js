import React, { useEffect } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('Saved data to cloud');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] Cleanup work in useEffect ');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
  });

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really Working!</p>
      <button onClick={props.clicked} className={btnClass}>
        Switch Me
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
