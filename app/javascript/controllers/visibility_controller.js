import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const options = { threshold: [0.5] };
    const observer = new IntersectionObserver((entry) => {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.classList.remove('invisible');
          change.target.classList.add('visible');
          change.target.classList.add('animate__fadeInUp');
        }
      });    
    }, options);
    const elements = document.querySelectorAll('.animate__animated');
    for (let elm of elements) {
      observer.observe(elm);
    }
  }
}
