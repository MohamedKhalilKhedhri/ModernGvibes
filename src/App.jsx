import { lazy, Suspense } from 'react'
import './App.css'
import {Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';


const LazyHome = lazy(()=>import("./pages/Home"));
const LazyCouples = lazy(()=>import("./pages/Couples"));
const LazyCommercials = lazy(()=>import("./pages/Commercials"));
const LazyProducts = lazy(()=>import("./pages/Products"));
const LazyContact = lazy(()=>import("./pages/Contact"));
const LazyFashion = lazy(()=>import("./pages/Fashion"));

function App() {


  return (
    <>
            <Nav />
            <Routes>
                <Route path='firstDashboard/' element={<Suspense fallback={<div>loading...</div>}><LazyHome/>   </Suspense>} />
                <Route path='/firstDashboard/couples' element={<Suspense fallback={<div>loading...</div>}><LazyCouples/>   </Suspense>} />
                <Route path='/firstDashboard/fashion' element={<Suspense fallback={<div>loading...</div>}> <LazyFashion/>  </Suspense>} />
                <Route path='/firstDashboard/commercials' element={<Suspense fallback={<div>loading...</div>}> <LazyCommercials/>  </Suspense>} />
                <Route path='/firstDashboard/products' element={<Suspense fallback={<div>loading...</div>}><LazyProducts/>   </Suspense>} />
                <Route path='/firstDashboard/contact' element={<Suspense fallback={<div>loading...</div>}><LazyContact/>   </Suspense>} />
            </Routes>

     
    </>
  )
}

export default App
