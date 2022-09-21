import { Routes, Route, Navigate } from 'react-router-dom';
import MailPage from './pages/MailPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="mail/inbox" replace />} />
      <Route path="/mail">
        <Route path=":mailBox" element={<MailPage />} />
      </Route>
    </Routes>
  );
}
