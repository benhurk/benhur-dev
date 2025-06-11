import './ServicesCards.css';
import services from '../../consts/services';

export default function ServicesCards() {
    const html = services
        .map(
            (service) => `
              <li class="service-item">
                  <div>
                      <a class="service-example" href="${service.exampleLink}" target="_blank">
                          <div class="example-overlay">
                              <i class="bi bi-box-arrow-up-right"></i>
                              Exemplo
                          </div>
                          <img src="${service.img}" />
                      </a>
                      <div class="service-body">
                          <h3 class="service-title">${service.title}</h3>
                          <p class="service-description">${service.description}</p>
                          <span class="service-highlight">${service.highlight}</span>
                      </div>
                  </div>
                  <div class="service-footer">
                      <button class="service-button">Tenho interesse</button>
                  </div>
              </li>
            `
        )
        .join('');

    document.getElementById('services-list').innerHTML = html;
}
