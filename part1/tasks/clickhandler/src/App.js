import React, { useState } from 'react';

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setClicks({...clicks, left: clicks.left + 1})
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setClicks({...clicks, right: clicks.right + 1})
  }

  return (
      <>
        {clicks.left}
        <button onClick={handleLeftClick}>
          left
        </button>
        <button onClick={handleRightClick}>
          right
        </button>
        {clicks.right}
        <p>{allClicks.join(' ')}</p>
      </>
  );
}

export default App;