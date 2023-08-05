class Card extends HTMLElement {
  rendered = false;

  /**
   *render
   */
  render() {
    const imgNode = document.createElement('img');
    const imgSrc = this.getAttribute('imgsrc') || '';
    imgNode.setAttribute('src', imgSrc);

    const headingNode = document.createElement('h3');
  }

  /**
   * observedAttributes
   */
  static get observedAttributes() {
    return ['imgsrc', 'heading', 'message'];
  }

  /**
   * connectCallback
   */
  connectCallback() {
    if (!this.rendered) {
      this.render();

      this.rendered = true;
    }
  }

  /**
   * attributeChangedCallback
   */
  attributeChangedCallback(_name, _oldValue, _newValue) {
    /**
     * We rerender when an attribute gets updated
     */
    this.render();
  }
}

customElements.define('card', Card);
