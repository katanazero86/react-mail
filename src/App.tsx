import { Routes, Route, Navigate } from 'react-router-dom';
import MailLayout from './pages/Mail/Layout';
import MailMainPage from './pages/Mail/Main';
import MailDetailPage from './pages/Mail/Detail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="mail/inbox" replace />} />
      <Route path="/mail" element={<MailLayout />}>
        <Route path=":mailBox" element={<MailMainPage />} />
        <Route path=":mailBox/:mailId" element={<MailDetailPage />} />
      </Route>
    </Routes>
  );
}
