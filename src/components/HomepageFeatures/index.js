import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


const FeatureList = [
  /*{
    title: 'Docs',
    Svg: require('@site/static/img/docs.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link: '/docs/intro',
  },*/
  {
    title: 'MQTT API',
    Svg: require('@site/static/img/mqtt-api.svg').default,
    description: (
      <>
        The MQTT API is a simple and lightweight messaging protocol that runs over TCP/IP sockets or WebSockets.
      </>
    ),
    link: 'docs/mqtt-api',
  },
  {
    title: 'REST & WebSocket API',
    Svg: require('@site/static/img/rest-api.svg').default,
    description: (
      <>
        The REST & WebSocket API is a simple and lightweight messaging protocol that runs over HTTP or WebSockets.
      </>
    ),
    link: '/docs/ws-rest-api',
  },
  {
    title: 'Solar Surplus Charging',
    Svg: require('@site/static/img/surplus_charging.svg').default,
    description: (
      <>
        The Solar Surplus Charging feature allows you to charge your electric vehicle with surplus solar energy.
      </>
    ),
    link: '/docs/surplus-charging',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={link}>
          <Svg className={styles.featureSvg} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link to={link} className="button button--secondary myButton">Learn More</Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


