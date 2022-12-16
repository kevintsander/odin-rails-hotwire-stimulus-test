import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["showHideElement", "highlightElement"];
  static classes = ["hidden", "highlight"];

  showHide() {
    this.showHideElementTargets.forEach((elementTarget) => {
      elementTarget.classList.toggle(this.hiddenClass);
    });
  }

  highlight() {
    this.highlightElementTargets.forEach((elementTarget) => {
      elementTarget.classList.toggle(this.highlightClass);
    });
  }
}
