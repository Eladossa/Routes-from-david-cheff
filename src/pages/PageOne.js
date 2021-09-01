import { useHistory } from "react-router";

const PageOne = (props) => {
  const history = useHistory();

  return (
    <div>
      Page one Page 1
      <button onClick={() => history.push("/")}>BACK TO MAIN</button>
    </div>
  );
};

export default PageOne;
