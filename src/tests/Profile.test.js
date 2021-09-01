import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
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
