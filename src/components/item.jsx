import '../styles/Card.css'
import {item} from '../assets/item'

function Item() {

    return (
      <>
      {item.map((item, index) => (
        <div key={index} className="item">
        <img id="imagen" src={item.imagen}/>
        <div className='select'>
            <h3>{item.titulo}</h3>
            <div className='detalles'>
                <span id="detalles">{item.detalles}</span>
            </div>
        
        </div>
            <img id="atras" src={item.atras}/>
        </div>
      ))}
      </>
    )
  }
  
  export default Item;