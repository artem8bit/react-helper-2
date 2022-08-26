import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>
        This is demo.Go <Link to="/">home</Link>
      </p>
    </div>
  );
};

export { About };
