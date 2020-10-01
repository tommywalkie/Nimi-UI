/*
 * Copyright 2020 Tom Bazarnik et al.
 * Licensed under the GNU General Public License v3
 * See LICENSE for details.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../dist';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
