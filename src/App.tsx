import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Counter from './components/Counter';
import UserDataForm from './components/UserDataForm';
import RichTextEditor from './components/RichTextEditor';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import DashboardPage from './pages/DashboardPage';

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<UserDataForm />} />
          <Route path="/editor" element={<RichTextEditor />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
