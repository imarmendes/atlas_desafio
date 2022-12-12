import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import generalSlice from './mocks/generalSlice';

const customRender = (
  component,
  route,
) => {
  const history = createMemoryHistory({ initialEntries: [route] });
  const store = configureStore({
    reducer: {
      general: generalSlice,
    },
  });

  return ({ ...render(
    <BrowserRouter history={ history }>
      <Provider store={ store }>
        {component}
      </Provider>
    </BrowserRouter>,
  ),
  history,
  store,
  });
};

export default customRender;