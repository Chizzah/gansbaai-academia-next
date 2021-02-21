import Image from "next/image";

const ManagementList = ({ management }) => {
  const [{ subjects }] = management;

  return (
    <section className="container-fluid management g-0 py-5">
      {management.map((man) => {
        return (
          <div className="row d-flex g-0 management_inner" key={man.id}>
            <div className="col-12 col-lg-8">
              <Image
                src="https://via.placeholder.com/1440x800/f1f1f1.png%20C/O%20https://placeholder.com/"
                layout="responsive"
                width="1440"
                height="800"
              />
            </div>
            <div className="col-12 col-lg-4 p-5">
              <h3>{man.fullName}</h3>
              <h4>{man.position}</h4>
              <p style={{ maxWidth: "60ch" }}>{man.about}</p>
              {subjects.map((subject) => {
                return (
                  <ul key={subject.id}>
                    <li>
                      {subject.subject} ({subject.grades})
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ManagementList;
