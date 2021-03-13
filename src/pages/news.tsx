import { client } from "../utils/contentfulClient";

import LayoutTwo from "../components/Shared/Layout/LayoutTwo";
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
    <LayoutTwo>
      <section className="container-fluid bg-light">
        <NewsList articles={articles} />
      </section>
    </LayoutTwo>
  );
};

export default News;
