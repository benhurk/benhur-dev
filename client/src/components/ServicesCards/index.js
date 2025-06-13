import './ServicesCards.css';
import services from '../../consts/services';

export default function ServicesCards() {
    services.forEach((service) => {
        document.getElementById('services-list').innerHTML += `
              <li class="service-item hover-card">
                  <div>
                      <a class="service-example" href="${service.exampleLink}" target="_blank">
                          <div class="example-overlay">
                              <i class="bi bi-box-arrow-up-right"></i>
                              Exemplo
                          </div>
                          <img src="${service.img}" alt="${service.title} example" loading="lazy" />
                      </a>
                      <div class="service-body">
                          <h3 class="service-title">${service.title}</h3>
                          <p class="service-description">${service.description}</p>
                          <span class="service-highlight">${service.highlight}</span>
                      </div>
                  </div>
                  <div class="service-footer">
                      <button class="service-button" data-service="${service.title}">Tenho interesse</button>
                  </div>
              </li>
            `;
    });

    document.querySelectorAll('.service-button').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const service = services.filter(
                (s) => s.title === e.target.dataset.service
            )[0];

            document.querySelector('textarea[name="message"]').value =
                `Olá, tenho interesse em um ${service.title} ...`;

            document
                .querySelector('#nav-links a[data-section="contact"]')
                .click();
        });
    });
}
