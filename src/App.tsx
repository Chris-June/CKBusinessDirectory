import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/layout/Header';
import Home from './pages/home/Home';
import BusinessList from './pages/businesses/BusinessList';
import BusinessDetail from './pages/businesses/BusinessDetail';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/businesses"
                element={<BusinessList />}
              />
              <Route
                path="/businesses/:id"
                element={<BusinessDetail />}
              />
              <Route
                path="/dashboard"
                element={<div>Dashboard Coming Soon</div>}
              />
              <Route path="/login" element={<div>Login Page Coming Soon</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );

}
export default App;
