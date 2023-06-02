import "../assets/css/button.css";

const ButtonSubmit = ({ content }) => {
  return (
    <button className="btn" type="submit">
      {content}
    </button>
  );
};

export default ButtonSubmit;
