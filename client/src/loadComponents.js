import TechStackList from './components/TechStackList';
import ServicesCards from './components/ServicesCards';
import ProjectsList from './components/ProjectsList';
import ContactForm from './components/ContactForm';

export default function loadComponents(page) {
    if (page === 'home') {
        TechStackList();
        ServicesCards();
    }

    if (page === 'projects') {
        ProjectsList();
    }

    if (page === 'contact') {
        ContactForm();
    }
}
