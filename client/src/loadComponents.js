import TechStackList from './components/TechStackList';
import ServicesCards from './components/ServicesCards';
import ProjectsList from './components/ProjectsList';
import ContactForm from './components/ContactForm';

export default function loadComponents(activeSection) {
    TechStackList();

    if (activeSection === 'home' || !activeSection) {
        ServicesCards();
    }

    if (activeSection === 'projects') {
        ProjectsList();
    }

    if (activeSection === 'contact') {
        ContactForm();
    }
}
