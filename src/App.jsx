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
<<<<<<< HEAD
                <Route path='/ModernGvibes/' element={<Suspense fallback={<div>loading...</div>}><LazyHome/>   </Suspense>} />
                <Route path='/ModernGvibes/couples' element={<Suspense fallback={<div>loading...</div>}><LazyCouples/>   </Suspense>} />
                <Route path='/ModernGvibes/fashion' element={<Suspense fallback={<div>loading...</div>}> <LazyFashion/>  </Suspense>} />
                <Route path='/ModernGvibes/commercials' element={<Suspense fallback={<div>loading...</div>}> <LazyCommercials/>  </Suspense>} />
                <Route path='/ModernGvibes/products' element={<Suspense fallback={<div>loading...</div>}><LazyProducts/>   </Suspense>} />
                <Route path='/ModernGvibes/contact' element={<Suspense fallback={<div>loading...</div>}><LazyContact/>   </Suspense>} />
=======
                <Route path='/home' element={<Suspense fallback={<div>loading...</div>}><LazyHome/>   </Suspense>} />
                <Route path='/couples' element={<Suspense fallback={<div>loading...</div>}><LazyCouples/>   </Suspense>} />
                <Route path='/fashion' element={<Suspense fallback={<div>loading...</div>}> <LazyFashion/>  </Suspense>} />
                <Route path='/commercials' element={<Suspense fallback={<div>loading...</div>}> <LazyCommercials/>  </Suspense>} />
                <Route path='/products' element={<Suspense fallback={<div>loading...</div>}><LazyProducts/>   </Suspense>} />
                <Route path='/contact' element={<Suspense fallback={<div>loading...</div>}><LazyContact/>   </Suspense>} />
>>>>>>> c6eaba12d539acc181550dad74ed6bf03b1b3438
            </Routes>

     
    </>
  )
}

export default App
