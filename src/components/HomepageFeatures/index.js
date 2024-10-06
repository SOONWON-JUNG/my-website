import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '쉽고 빠른 사이트 구축',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        몇 분 만에 사이트를 완성하고, 쉽고 간단한 관리로 유지보수 생산성 향상
      </>
    ),
  },
  {
    title: '효율적인 문서 관리',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      유연한 구조를 통해 <code>docs</code>를 체계적으로 정리하고, 검색과 업데이트를 손쉽게        
      </>
    ),
  },
  {
    title: '확장성과 퍼포먼스',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        빠른 로딩 속도와 확장 가능한 <br></br><code>SSG(Static Site Generator)</code>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
