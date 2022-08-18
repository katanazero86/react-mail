import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Grid from './components/Flex/Grid';

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
      <Grid container gap={1}>
        <Grid item xs={12}>
          1
        </Grid>
        <Grid item xs={6}>
          2
        </Grid>
        <Grid item xs={6} sm={12}>
          3
        </Grid>
        <Grid item xs={1}>
          4
        </Grid>
      </Grid>
      <div className="row">
        <div className="col-12">1</div>
        <div className="col-6">2</div>
        <div className="col-6">3</div>
      </div>
    </div>
  );
}

export default App;
