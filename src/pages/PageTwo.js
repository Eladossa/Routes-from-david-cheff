import { useHistory } from "react-router";

const PageTwo = (props) => {
  const history = useHistory();

  return (
    <div>
      Page two Page 2
      <button onClick={() => history.push("/")}>BACK TO MAIN</button>
    </div>
  );
};

export default PageTwo;
