import { render, screen } from '@testing-library/react';
import App from "./App";
import TestRenderer from 'react-test-renderer';


describe('snapshot testing', () => {
  test('snapshot for App component', () => {
    const renderedComponent = TestRenderer.create(<App/>).toJSON()
    expect(renderedComponent).toMatchSnapshot();

  })
})