import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["showHideElement", "highlightElement"];
  static classes = ["hidden", "highlight"];

  connect() {
    // this.element.textContent = "Hello World!"
  }

  showHide() {
    this.showHideElementTargets.forEach((elementTarget) => {
      elementTarget.classList.toggle(this.hiddenClass);
    });
  }

  highlight() {
    console.log("yello");
    this.highlightElementTargets.forEach((elementTarget) => {
      elementTarget.classList.toggle(this.highlightClass);
    });
  }
}
