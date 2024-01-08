
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './pages/home/Home';

import Contact from './pages/contact/Contact';
import NotFound from './components/notFound/NotFound';
import Product_list from './pages/product_list/Product_list';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Product_list />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
