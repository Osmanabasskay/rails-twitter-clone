import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hello"
export default class extends Controller {
  static targets = ["name"]

  connect() {
    this.nameTarget.textContent = "Hello Stimulus!"
  }
}
