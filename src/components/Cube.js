import './Cube.css';

export default function Cube({ num }) {
  const imgSrc = './images/cube' + num + '.png';
  return (
    <div className="Cube">
      <img
        src={imgSrc}
        className="Cube__image"
        alt="Cube"
      />
    </div>
  );
}
