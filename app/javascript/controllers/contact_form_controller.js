import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  sendData() {
    const formData = new FormData(this.element);
    fetch('https://script.google.com/macros/s/AKfycbxbmMZEonqo2kjtN4aWXQTj0dfOxKsCJfJX-xMsP1WTU6CilSZl2HWjqWjtp5s8fb_-DQ/exec', { method: 'POST', body: formData })
      .then(function(response) {
          console.log('Success!', response)
      })
      .catch(function(error) {
          console.error('Error!', error.message)
      })
  }
}
