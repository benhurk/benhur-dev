import './TechStackList.css';
import techStack from '../../consts/techStack';

export default function TechStackList() {
    const html = Object.values(techStack)
        .map(
            (stack) => `
            <div>
              ${stack
                  .map(
                      (tech) => `
                      <div class="tech hover-icon">
                          <span class="tech-name">${tech.name}</span>
                          <img src="${tech.logo}" alt="${tech.name}" />
                      </div>
                      `
                  )
                  .join('')}
            </div>`
        )
        .join('');

    document.getElementById('stack').innerHTML = html;
}
