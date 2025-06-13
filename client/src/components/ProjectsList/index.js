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
                  <div class="project-text">
                    <a href="${pr.link}" target="_blank" class="project-name">${pr.name}</a>
                    <p class="project-description">${pr.description}</p>
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
                    <span class="project-tag">${pr.tag}</span>
                  </div>
                </div>
              </li>
        `;
        })
        .join('');

    document.getElementById('projects-list').innerHTML = html;
}
