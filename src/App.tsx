import './App.css';
import Mail from './components/Mail';
import MailMenu from './components/Mail/MailMenu';

export default function App() {
  return (
    <div className="app">
      <MailMenu />
      <Mail />
    </div>
  );
}
