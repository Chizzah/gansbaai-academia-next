import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import LayoutTwo from "../../components/Shared/Layout/LayoutTwo";
import { client } from "../../utils/contentfulClient";

const { BLOCKS } = require("@contentful/rich-text-types");

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "news",
  });

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "news",
    "fields.slug": params.slug,
  });

  return {
    props: {
      article: data.items[0],
    },
    revalidate: 60,
  };
}

const Article = ({ article }) => {
  return (
    <LayoutTwo>
      <article className="container-fluid bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <Image
                src={"https:" + article.fields.featuredImage.fields.file.url}
                alt={article.fields.featuredImage.fields.file.title}
                layout="responsive"
                objectFit="cover"
                width={
                  article.fields.featuredImage.fields.file.details.image.width
                }
                height={
                  article.fields.featuredImage.fields.file.details.image.height
                }
              />
            </div>
          </div>
          <div className="row py-5">
            <div className="col">
              <p className="mb-0 text-muted text-uppercase">
                {article.fields.date}
              </p>
              <h1>{article.fields.title}</h1>
              <p>
                by{" "}
                <span className="text-muted fw-bold">
                  {article.fields.author.fields.name}
                </span>
              </p>
              <p style={{ maxWidth: "120ch" }}>{article.fields.summary}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {documentToReactComponents(article.fields.content, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: (node) => (
                    <Image
                      src={"https:" + node.data.target.fields.file.url}
                      width={node.data.target.fields.file.details.image.width}
                      height={node.data.target.fields.file.details.image.height}
                    />
                  ),
                },
              })}
            </div>
          </div>
        </div>
      </article>
    </LayoutTwo>
  );
};

export default Article;
