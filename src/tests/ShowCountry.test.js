import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from '../redux/reducers';
import CountryPage from '../pages/ShowCountry';

const store = createStore(rootReducer);

it('renders correctly', () => {
  const showCountry = renderer
    .create(
      <Provider store={store}>
        <Router>
          <CountryPage />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(showCountry).toMatchSnapshot();
});
