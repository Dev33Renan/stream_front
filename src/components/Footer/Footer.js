import './Footer.css';
import { FaXbox } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='social'>
        <FaXbox />
        
      </div>
      <span>Todos os Direitos reservados a Stream</span>
      <span>Microsoft Brasil 2021</span>
    </div>
  )
}