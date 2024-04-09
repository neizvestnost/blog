import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  sendData() {
    const formData = new FormData(this.element);
    console.log(formData);
    this.#gapiLoaded()

    

  }

  #gapiLoaded() {
    gapi.load('client', this.#initializeGapiClient);
  }

  #initializeGapiClient() {
    gapi.client.init({
      apiKey: 'AIzaSyBgKqvqv7ar-b0X0rzvqtZZU_IcW_pjfHI',
      clientId: '107708829761556820273',
      discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
      scope: "https://www.googleapis.com/auth/spreadsheets"
    }).then(() => console.log('xyi'))
  }
}
