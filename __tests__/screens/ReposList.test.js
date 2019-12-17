import React from 'react';
import {mount} from 'enzyme';
// import TestRenderer from 'react-test-renderer';

import ReposList from '../../src/screens/Home/components/ReposList';
import Root from '../../src/Root';

// function findById(tree, testID) {
//   if (tree.props && tree.props.testID === testID) {
//     return tree;
//   }
//   if (tree.children && tree.children.length > 0) {
//     let childs = tree.children;
//     for (let i = 0; i < childs.length; i++) {
//       let item = findById(childs[i], testID);
//       if (typeof item !== 'undefined') {
//         return item;
//       }
//     }
//   }
// }

describe('ReposList component', () => {
  let wrapped;

  beforeEach(() => {
    const initialState = {
      repos: {
        list: [
          {
            id: 1,
            name: 'repo 1',
            owner: {
              avatar_url:
                'https://avatars0.githubusercontent.com/u/19275982?v=4',
            },
          },
          {
            id: 2,
            name: 'repo 2',
            owner: {
              avatar_url:
                'https://avatars0.githubusercontent.com/u/19275982?v=4',
            },
          },
        ],
        loading: false,
        error: null,
      },
    };

    wrapped = mount(
      <Root initialState={initialState}>
        <ReposList />
      </Root>,
    );
  });

  it('create repo item based in data', () => {
    //  console.log(wrapped.render().text()); // This return only the text, independ quantity render component

    expect(
      wrapped
        .find('[testID="repos-list-item-1"]')
        .at(0)
        .text(),
    ).toEqual('repo 1');
    expect(wrapped.render().text()).toContain('repo 1');
    expect(wrapped.render().text()).toContain('repo 2');
  });
});
