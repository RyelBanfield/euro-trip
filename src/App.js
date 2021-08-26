import { Suspense, lazy } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// eslint-disable-next-line no-unused-vars
import ProtectedRoute from './auth0/ProtectedRoute';
import rootReducer from './redux/reducers';
import Loading from './components/Loading';
import NavBar from './components/NavBar';

const store = createStore(rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Home = lazy(() => import('./pages/Home'));
const Country = lazy(() => import('./pages/Country'));
const Profile = lazy(() => import('./pages/Profile'));

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/euro-trip" component={Home} />
            <Route exact path="/countries/:id" component={Country} />
            <ProtectedRoute exact path="/profile" component={Profile} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
