import Link from "next/link";
import Image from "next/image";

const NewsList = ({ articles }) => {
  return (
    <section className="mb-5 container-fluid">
      <div className="container py-5">
        <h2 className="py-lg-5">Latest News</h2>
        <div className="row">
          {articles
            .sort((a, b) => (b.fields.date > a.fields.date ? 1 : -1))
            .map((article) => {
              return (
                <div className="col-12 col-lg-4" key={article.sys.id}>
                  <div className="my-5 card">
                    <Image
                      className="card-img-top"
                      src={
                        "https:" + article.fields.featuredImage.fields.file.url
                      }
                      alt={article.fields.featuredImage.fields.file.title}
                      layout="responsive"
                      objectFit="cover"
                      width={
                        article.fields.featuredImage.fields.file.details.image
                          .width
                      }
                      height={
                        article.fields.featuredImage.fields.file.details.image
                          .height
                      }
                    />
                    <div
                      className="card-body d-flex flex-column justify-content-between align-items-start"
                      style={{ minHeight: 300 }}
                    >
                      <div>
                        <p className="mb-2 text-muted">{article.fields.date}</p>
                        <h5 className="card-title">{article.fields.title}</h5>
                        <h6 className="card-subtitle mb-2">
                          by{" "}
                          <span className="text-muted">
                            {article.fields.author.fields.name}
                          </span>
                        </h6>
                        <p className="card-text">{article.fields.summary}</p>
                      </div>
                      <div>
                        <Link href={`/articles/${article.fields.slug}`}>
                          <a>Continue Reading...</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default NewsList;
