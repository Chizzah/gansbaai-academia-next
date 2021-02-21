import Image from "next/image";

const TeacherList = ({ teachers }) => {
  const [{ subjects }] = teachers;
  return (
    <section className="container-fluid teacher g-0 py-5">
      {teachers.map((teacher) => {
        return (
          <div className="row d-flex g-0" key={teacher.id}>
            <div className="col-12 col-lg-6">
              <Image
                src="https://via.placeholder.com/980x540/f1f1f1.png%20C/O%20https://placeholder.com/"
                layout="responsive"
                width="980"
                height="540"
              />
            </div>
            <div className="col-12 p-3 col-lg-6">
              <h3>{teacher.fullName}</h3>
              <h4>{teacher.position}</h4>
              <p style={{ maxWidth: "60ch" }}>{teacher.about}</p>
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

export default TeacherList;
