import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  active(event) {
    Array.from(document.getElementsByClassName('nav-hover')).forEach((el) => {
      el.classList.remove('nav-active');
    })
    event.target.parentElement.classList.add('nav-active');
  }
}
