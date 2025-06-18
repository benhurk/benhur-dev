import { animate, inView } from 'motion';

import './ServicesCards.css';
import services from '../../consts/services';

export default function ServicesCards() {
    const html = services
        .map(
            (service) => `
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
            `
        )
        .join('');

    document.getElementById('services-list').innerHTML = html;

    document.querySelectorAll('.service-button').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const service = services.filter(
                (s) => s.title === e.target.dataset.service
            )[0];

            document
                .querySelector('#nav-links a[data-section="contact"]')
                .click();

            document.querySelector('textarea[name="message"]').value =
                `Olá, tenho interesse em um ${service.title}, gostaria de saber mais sobre o serviço ...`;
        });
    });

    inView('.service-item', (element) => {
        animate(
            element,
            { opacity: 1, y: [10, 0] },
            {
                duration: 0.5,
                easing: [0.17, 0.55, 0.55, 1],
            }
        );

        return () => animate(element, { opacity: 0, y: 10 });
    });
}
