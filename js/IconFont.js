/**
 * IconFont icon set component.
 * Usage: <IconFont name="icon-name" size={20} color="#4F8EF7" />
 */

import { createIconSet } from 'react-native-vector-icons';
const glyphMap = {
  "check": 58892,
  "back": 58880,
  "myfill": 58881,
  "my": 58882,
  "right": 58883,
  "refund": 58891,
  "home": 58884,
  "homefill": 58885,
  "lock": 58893,
  "selection": 58889,
  "add": 58895,
  "vipcard": 58890,
  "searchlist": 58886,
  "creative": 58887,
  "people": 58894,
  "sponsor": 58888
};

let IconFont = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

module.exports = IconFont;
module.exports.glyphMap = glyphMap;
