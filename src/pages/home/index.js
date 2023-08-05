import { BuffaloJs } from '../../helpers';

export default class Home extends BuffaloJs.Component {
  render() {
    return `<div>
      <p>Welcome to Home, this is an experimental project</p>
      <a href="/contact">Go to Contact</a>
    </div> `;
  }
}
