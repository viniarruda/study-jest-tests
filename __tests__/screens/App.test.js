import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from '../../src/Root';
import App from '../../App';

describe('Integration | App', () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://api.github.com/users/viniarruda/repos', {
      status: 200,
      response: [
        {id: 1, name: 'Repo #1', owner: {avatar_url: ''}},
        {id: 2, name: 'Repo #2', owner: {avatar_url: ''}},
      ],
    });
  });

  afterEach(() => {});

  it('can fetch a list of repos and display them', () => {
    const wrapped = mount(
      <Root>
        <App />
      </Root>,
    );

    // .simulate work in reactJs

    // setTimeout or get loading props

    console.log(wrapped.debug());

    moxios.wait(() => {
      wrapped.update();

      done();

      wrapped.unmount();
    });
  });
});
