import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import rootReducer from '../redux/reducers';
import Profile from '../pages/Profile';

const store = createStore(rootReducer);

it('renders correctly', () => {
  const profile = renderer
    .create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    )
    .toJSON();
  expect(profile).toMatchSnapshot();
});

it('renders main', () => {
  render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
});

it('renders heading', () => {
  render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});
