import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


const FeatureList = [
  {
    title: 'Guides',
    Svg: require('@site/static/img/instructions.svg').default,
    description: (
      <>
        Manuals for the pulsatrix CSMS and the pulsatrix charging points.
      </>
    ),
    link: 'docs/instructions',
  },
  {
    title: 'Controller',
    Svg: require('@site/static/img/controller.svg').default,
    description: (
      <>
        Documentation about the charging controller functionalities and APIs.
      </>
    ),
    link: '/docs/controller',
  },
  {
    title: 'Backend',
    Svg: require('@site/static/img/backend.svg').default,
    description: (
      <>
        Backend API documentation for the pulsatrix CSMS.
      </>
    ),
    link: '/docs/backend/backend-api',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="myBorder">
      <a href={link}>
          <div className="text--center">
          <Link to={link}>
            <Svg className={styles.featureSvg} role="img" />
          </Link>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
        </a>
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


