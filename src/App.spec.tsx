import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import App from './App';
import logoImg from './logo.svg';

describe('App component', () => {
  let component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders App component', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders the header text', () => {
    const text = component.find('p').text();
    expect(text).toEqual('Edit src/App.tsx and save to reload.');
  });

  it('renders the "Learn React" link', () => {
    const link = component.find('.App-link');
    expect(link.text()).toEqual('Learn React');
    expect(link.prop('href')).toEqual('https://reactjs.org');
    expect(link.prop('target')).toEqual('_blank');
  });

  it('renders the logo image', () => {
    const logo = component.find('.App-logo');
    expect(logo.prop('src')).toEqual(logoImg);
    expect(logo.prop('alt')).toEqual('logo');
  });

  it('renders with the correct className', () => {
    expect(component.find('.App')).toHaveLength(1);
  });
});