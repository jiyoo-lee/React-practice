import React from 'react';
import Containers from './Containers';
import Counter from './Counter';
import MyHeader from './MyHeader';

function App() {

  const countProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };

  return (
    <Containers>
      <div>
        <MyHeader />
        <Counter {...countProps} />
      </div>
    </Containers>
  );
}

export default App;
