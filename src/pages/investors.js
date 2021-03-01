import Layout from "../components/shared/Layout/Layout";

const Investors = () => {
  return (
    <Layout>
      <div>
        <h1>Investors</h1>
        <button onClick={() => alert("I was clicked!")}>click me!</button>
      </div>
    </Layout>
  );
};

export default Investors;
