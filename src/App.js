import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { Provider } from './context';
import Wrapper from './components/layout/Wrapper';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Wrapper />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Index} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
