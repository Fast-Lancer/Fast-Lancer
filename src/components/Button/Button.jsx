export default function Button({ handleClick, buttonText }) {
  return <button onClick={handleClick}>{buttonText}</button>
}
