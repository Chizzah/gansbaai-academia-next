import { client } from "../utils/contentfulClient";

import Layout from "../components/shared/Layout/Layout";
import NewsList from "../components/NewsList/NewsList";

export const getStaticProps = async function () {
  // CONTENTFUL
  const data = await client.getEntries({
    content_type: "news",
  });

  return {
    props: {
      articles: data.items,
    },
    revalidate: 60,
  };
};

const News = ({ articles }) => {
  return (
    <Layout>
      <section className="container-fluid bg-light">
        <NewsList articles={articles} />
      </section>
    </Layout>
  );
};

export default News;
