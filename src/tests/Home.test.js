import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import rootReducer from '../redux/reducers';
import Home from '../pages/Home';

const store = createStore(rootReducer);

it('renders correctly', () => {
  const home = renderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>,
    )
    .toJSON();
  expect(home).toMatchSnapshot();
});

it('renders main', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
});

it('renders banner', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const banner = screen.getByRole('banner');
  expect(banner).toBeInTheDocument();
});

it('renders heading', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});
