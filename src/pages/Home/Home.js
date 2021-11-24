import Slider from '../../components/Slider/Slider';
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';
import Container from '../../components/Container/Container';

export default function Home() {
  return (
    <>
      <Slider 
        imageLink='https://compass-ssl.xbox.com/assets/83/30/8330a06f-273d-40f0-a975-3012bce29456.jpg?n=XGP_Multi-Feature-1084_Halo-Infinite_1080x950.jpg'
        alt='Halo Infinite'
        classificationNumber='14'
        classificationText='Violência,'
      />
      <Search />
      <Container title='Mais vendidos'>
        <Card 
          image='https://store-images.s-microsoft.com/image/apps.16688.14623339312210804.fdd15ab0-b386-461d-8741-7480ca673fec.9c0d1248-f61b-4cf9-8238-7d3d41e27860?q=90&w=177&h=265'
          title='Call of Duty®: Vanguard - Edição Definitiva'
          preco='439,00'
        />
      </Container>
      
    </>
  )
}