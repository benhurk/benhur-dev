import TechStackList from './components/TechStackList';
import ServicesCards from './components/ServicesCards';
import ProjectsList from './components/ProjectsList';
import ContactForm from './components/ContactForm';

export default function loadComponents(activeSection) {
    if (activeSection === 'home' || !activeSection) {
        TechStackList();
        ServicesCards();
    }

    if (activeSection === 'projects') {
        ProjectsList();
    }

    if (activeSection === 'contact') {
        ContactForm();
    }
}
