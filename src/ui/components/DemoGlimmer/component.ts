import Component, { tracked } from '@glimmer/component';

export default class DemoGlimmer extends Component {
  @tracked
  title: any;

  constructor(options) {
    super(options);
    this.fetchData();
  }

  async fetchData() {
    await fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(request => request.json())
      .then(({ title }) => this.title = title);
  }
}
