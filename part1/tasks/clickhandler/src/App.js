import React, { useState } from 'react';

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
      <>
        {left}
        <button onClick={() => setLeft(left + 1)}>
          left
        </button>
        <button onClick={() => setRight(right + 1)}>
          right
        </button>
        {right}
      </>
  );
}

export default App;