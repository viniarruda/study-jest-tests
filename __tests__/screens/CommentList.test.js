import React from 'react';
import {mount} from 'enzyme';
// import TestRenderer from 'react-test-renderer';

import CommentList from '../../src/screens/components/CommentList';
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

describe('CommentList component', () => {
  let wrapped;

  beforeEach(() => {
    const initialState = {
      comments: {list: ['Comment 1', 'Comment 2']},
    };

    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>,
    );
  });

  it('create comment item based in data', () => {
    //  console.log(wrapped.render().text()); // This return only the text, independ quantity render component

    expect(wrapped.find('[testID="comment-list-item-1"]').text()).toEqual(
      'Comment 2',
    );
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
  });
});
