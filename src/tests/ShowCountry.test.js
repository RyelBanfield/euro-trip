import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
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

it('renders main', () => {
  render(
    <Provider store={store}>
      <Router>
        <CountryPage />
      </Router>
    </Provider>,
  );
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
});
