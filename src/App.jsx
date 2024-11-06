import { lazy, Suspense, useContext } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'; // import useNavigate
import Nav from './components/Nav';

const LazyHome = lazy(() => import("./pages/Home"));
const LazyCouples = lazy(() => import("./pages/Couples"));
const LazyCommercials = lazy(() => import("./pages/Commercials"));
const LazyProducts = lazy(() => import("./pages/Products"));
const LazyContact = lazy(() => import("./pages/Contact"));
const LazyFashion = lazy(() => import("./pages/Fashion"));
const LazyLogin = lazy(() => import("./pages/Login"));
const LazyAdmin = lazy(() => import("./pages/Admin"));

function App() {

  

  const ProtectedRoute = ({ children }) => {
    if (localStorage.getItem("isLoggedIn")) {
      return children; 
    } else {
      window.location.href ='/ModernGvibes/';
      return null; 
    }
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path='/ModernGvibes/'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyHome />
            </Suspense>
          }
        />
        <Route
          path='/ModernGvibes/couples'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyCouples />
            </Suspense>
          }
        />
        <Route
          path='/ModernGvibes/fashion'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyFashion />
            </Suspense>
          }
        />
        <Route
          path='/ModernGvibes/commercials'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyCommercials />
            </Suspense>
          }
        />
        <Route
          path='/ModernGvibes/products'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyProducts />
            </Suspense>
          }
        />
        <Route
          path='/ModernGvibes/contact'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyContact />
            </Suspense>
          }
        />
        <Route
          path='/ModernGvibes/gvibesAdminPanelAuthentication'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyLogin />
            </Suspense>
          }
        />
        <Route
          path='/ModernGvibes/gvibesAdminPanel'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProtectedRoute>
                <LazyAdmin />
              </ProtectedRoute>
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
