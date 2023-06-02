import "../assets/css/button.css";

const Button = ({ href, content }) => {
  return (
    <a className="btn" href={href}>
      {content}
    </a>
  );
};

export default Button;
