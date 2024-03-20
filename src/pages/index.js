import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header class="px-header-container px-header-background">
    <div class="container">
        <div class="row">
            <div class="col col--12">
                <div class="row" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <div class="col col--8">
                        <h1 class="px-header">pulsatrix e-mobility</h1>
                        <h2 class="px-subheader">Documentation for the pulsatrix e-mobility components</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="pulsatrix e-mobility documentation site">
      <HomepageHeader />
      <main>
      <div class="seperator"></div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
