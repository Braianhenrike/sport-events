import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Views/Home';
import Calendar from './components/Views/Calendar';
import Ebook from './components/Views/Ebook';
import Registration from './components/Views/Registration';
import './app/globals.css';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div>
      <h2>Something went wrong:</h2>
      <p>{error.message}</p>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/Ebook" element={<Ebook/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>

  );
}

export default App;