import LayoutTwo from "../components/Shared/Layout/LayoutTwo";

const Investors = () => {
  return (
    <LayoutTwo>
      <div>
        <h1>Investors</h1>
        <button onClick={() => alert("I was clicked!")}>click me!</button>
      </div>
    </LayoutTwo>
  );
};

export default Investors;
