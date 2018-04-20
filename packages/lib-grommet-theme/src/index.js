import deepFreeze from 'deep-freeze';

import global from './global';
import anchor from './Anchor';
import box from './Box';
import grommet from './Grommet';
import text from './Text';

export default deepFreeze({
  global,
  anchor,
  box,
  grommet,
  text,
});
