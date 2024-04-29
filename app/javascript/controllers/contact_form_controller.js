import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  sendData() {
    const formData = new FormData(this.element);
    const button = document.getElementById('contact_form--button');
    button.disabled = false;
    button.children[0].classList.remove('hidden');
    button.classList.add('opacity-75');
    fetch('https://script.google.com/macros/s/AKfycbxbmMZEonqo2kjtN4aWXQTj0dfOxKsCJfJX-xMsP1WTU6CilSZl2HWjqWjtp5s8fb_-DQ/exec', { method: 'POST', body: formData })
      .then(function() {
        document.getElementById('contact_form_wrapper').classList.add('hidden')
        document.getElementById('contact_form_thanks').classList.remove('hidden')
      })
      .catch(function() {
        document.getElementById('contact_form_wrapper').classList.add('hidden')
        document.getElementById('contact_form_error').classList.remove('hidden')
      })
  }
}
