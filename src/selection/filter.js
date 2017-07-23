import Selection from '../Selection';
import { search } from '../utils/utils';

export default function filter(fun) {
  const subgroups = [];

  var subgroup;
  var group;
  var node;

  if (typeof fun !== 'function') {
    fun = selectionFilter(fun);
  }

  for (var j = 0, m = this.length; j < m; j++) {
    subgroups.push(subgroup = []);
    subgroup.parentNode = (group = this[j]).parentNode;

    for (var i = 0, n = group.length; i < n; i++) {
      if ((node = group[i]) && fun.call(node, node.__data__, i, j)) {
        subgroup.push(node);
      }
    }
  }
  return Selection.from(subgroups);
}

function selectionFilter(selector) {
  return function filterSelection() {
    return search(this, selector, true);
  };
}

