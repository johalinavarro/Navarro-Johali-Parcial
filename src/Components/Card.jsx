import './Card.css'

function Card({ formulary }) {
  return (
    <div className='valid'>
      <div>
        <span>RUT: {formulary.rut}</span>
      </div>
      <div>
        <span>PATENTE: {formulary.patente}</span>
      </div>
    </div>
  );
}

export default Card;
