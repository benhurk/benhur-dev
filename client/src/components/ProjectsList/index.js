import { animate, inView } from 'motion';

import './ProjectsList.css';
import projects from '../../consts/projects';
import techStack from '../../consts/techStack';

export default function ProjectsList() {
    const html = projects
        .map((pr) => {
            const techs = Object.values(techStack)
                .flat()
                .filter((tech) => pr.stack.includes(tech.name));

            return `
              <li class="project hover-card">
                <a class="project-thumbnail" href="${pr.link}" target="_blank">
                  <div class="example-overlay">
                      <i class="bi bi-box-arrow-up-right"></i>
                      Ir ao site
                  </div>
                  <img class="project-img" src="${pr.thumbnail}" alt="${pr.name}" loading="lazy">
                </a>
                <div class="project-content">
                  <div class="project-header">
                    <h3 class="project-name">${pr.name}</h3>
                    <span class="project-tag">${pr.tag}</span>
                  </div>
                  <div class="project-text">
                    <p class="project-description">${pr.description}</p>
                    <a href="${pr.link}" target="_blank">Ir ao site <i class="bi bi-box-arrow-up-right"></i></a>
                  </div>
                  <div class="project-footer">
                    <ul class="project-stack">
                      ${techs
                          .map(
                              (tech) => `
                          <li class="project-tech">
                            <img class="hover-icon" src="${tech.logo}" alt="${tech.name}" loading="lazy">
                          </li>
                        `
                          )
                          .join('')}
                    </ul>
                  </div>
                </div>
              </li>
        `;
        })
        .join('');

    document.getElementById('projects-list').innerHTML = html;

    inView('.project', (element) => {
        animate(
            element,
            { opacity: 1, x: [-25, 0] },
            {
                duration: 0.5,
                easing: [0.17, 0.55, 0.55, 1],
            }
        );

        return () => animate(element, { opacity: 0, x: -25 });
    });
}
