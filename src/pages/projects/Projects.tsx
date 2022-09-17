import style from './Projects.module.scss';

const mockup = [
  {
    name: 'StickyBall',
    urlName: 'Play Store',
    url: 'https://play.google.com/store/apps/details?id=com.threedcuber.stickyball',
    role: 'Development, Design & Sound Effects',
    description: '2D Survival Mobile game, made with Unity (C#)',
  },
  {
    name: 'Auction',
    urlName: 'Repo',
    url: 'https://github.com/TareqRafed/nest-auction-app',
    role: 'Development',
    description:
      'Web API made with NestJS & PostgreSQL allows users to place items for for Auctions, and bid on other users Items',
  },
  {
    name: 'MoGallery',
    urlName: 'Live',
    url: 'http://mogalleryjo.com',
    role: 'Development',
    description:
      'Modern Webapp Where users can reserve photo sessions, Created with ReactJS, Django and MySQL',
  },
  {
    name: 'LUV',
    urlName: 'Repo',
    url: 'https://github.com/TareqRafed/luv',
    role: 'Development',
    description: 'Version Control, similar to git',
  },
  {
    name: 'Winners',
    urlName: 'Unavailable',
    url: '#',
    role: 'Development',
    description:
      'cross-media platform & offers live sport events games, worked only at the frontend',
  },
  {
    name: 'Enigmai',
    urlName: 'Live',
    url: 'https://www.enigmai.com/',
    role: 'Development',
    description:
      'Workforce Management App, Designed for international companies with hundreds of Employees, Worked only on the webapp at the frontend',
  },
];

const Projects = () => {
  return (
    <div className={style.container}>
      {mockup.map((pro) => (
        <div className={style.card} key={pro.name}>
          <div>
            <h2>{pro.name}</h2>
            <p>{pro.description}</p>
          </div>
          <p>
            Links:{' '}
            <a href={pro.url} rel="noreferrer" target="_blank">
              {pro.urlName}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
