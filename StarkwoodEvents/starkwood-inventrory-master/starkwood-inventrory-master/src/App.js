import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Loading from './components/Loading';  // Import the Loading component

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate a loading time, and then display the Home component
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);  // 3 seconds loading time
  }, []);

  return (
    <Router>
      {loading ? (
        <Loading />  // Show Loading component while loading
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
