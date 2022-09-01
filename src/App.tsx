import './App.css';
import Header from './components/Header';

export default function App() {
  return (
    <div className="app">
      <h2
        style={{
          fontSize: '16px',
          marginBottom: '16px',
        }}
      >
        Mail App
      </h2>
      <Header />
    </div>
  );
}
