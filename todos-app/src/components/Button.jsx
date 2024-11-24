export default function Button(props) {
  return (
    <button
      className={`btn btn-primary ${props.className}`}
      onClick={props.clickHandler}
    >
      {props.label}
    </button>
  );
}
