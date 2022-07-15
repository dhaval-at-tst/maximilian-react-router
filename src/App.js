import { Redirect, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
