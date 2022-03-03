import React from 'react';
import { shallow, mount } from 'enzyme';
// import Routes, { Home, News, NoMatch } from './Routes';
import { MemoryRouter } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'components/Home';
import NoMatch from 'components/NotMatch';
import RoutesElements from 'components/RoutesElements';
import App from 'App';
import LoginPage from 'containers/SignInPage/SignInPage';

describe('routes using memory router', () => {

  it('should show Home component for / router (using memory router)', () => {
    const component = mount(<MemoryRouter initialentries="{['/']}">
        <App/>
     </MemoryRouter>
    );
    expect(component.find(Home)).toHaveLength(1);
  })

//   it('should show No match component for route not defined', () => {
//     const component = mount(<MemoryRouter initialEntries="{['/unknown']}">
//         <RoutesElements/>
//     </MemoryRouter>
//     );
//     expect(component.find(NoMatch)).toHaveLength(1);
//   })

})