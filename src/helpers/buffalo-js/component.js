import { throwError } from '../../utils';

export class Component {
  static [Symbol('ERROR_TYPES')] = {
    ComponentInstantiationError: 'ComponentInstantiationError🚨',
  };

  constructor() {
    if (typeof this.render != 'function') {
      throwError(
        this.ERROR_TYPES.ComponentInstantiationError,
        'you seem to have forgotten to declare a render method',
        arguments?.callee
      );
    } else {
      const parentNode = document.getElementById('root');
      const childNode = this.render();

      parentNode.innerHTML = childNode;
    }
  }
}
