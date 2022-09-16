import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Projects from '../pages/projects/Projects';

const routes = () => [
  {
    path: '/',
    element: Home,
  },
  {
    path: 'projects',
    element: Projects,
  },
  {
    path: 'contact',
    element: Contact,
  },
];

export default routes;
