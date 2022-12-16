import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["text", "message"];
  static classes = ["ok"];

  connect() {
    this.checkNearingLimit();
  }

  checkNearingLimit() {
    var charsLeft = this.textTarget.maxLength - this.textTarget.value.length;
    console.log(charsLeft);
    if (charsLeft < 50) {
      this.messageTarget.classList.remove(this.okClass);
      this.messageTarget.textContent = `${charsLeft} characters remaining!`;
    } else {
      this.messageTarget.classList.add(this.okClass);
      this.messageTarget.textContent = "";
    }
  }
}
