import React from 'react';

// A minimal higher-order function is all it
// takes to create a component repeater. Here, we're
// returning a function that calls "predicate()".
// If this returns true, then the rendered
// "<Component>" is returned.
export default (Component, predicate) => {
  return (props) => {
    return  predicate() && <Component {...props} />; 
  }
} 

// More sugar: 
// export default (Component, predicate) => props =>
//   predicate() && <Component {...props} />; 