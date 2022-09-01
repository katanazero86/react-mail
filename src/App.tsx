import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Row from './components/Grid/Row';
import RowItem from './components/Grid/RowItem';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Row rowGap={1} columnGap={1}>
        <RowItem xs gutter={1}>
          <p>zzz</p>
        </RowItem>
        <RowItem xs={6} gutter={1}>
          <p>zzz2</p>
        </RowItem>
      </Row>
    </div>
  );
}

export default App;
