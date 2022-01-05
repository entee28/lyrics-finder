import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Index} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
