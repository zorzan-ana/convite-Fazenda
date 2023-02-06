import MaquinaDeEscrever from '../component/MaquinaDeEscrever';
import Quest from '../component/Quest';
import '../style/index.css';


function Home() {
  return (
    <>
      <div className="textoApresentacao">
        <MaquinaDeEscrever text="Olá! Venho te convidar para a minha janta de formatura que será realizada no dia 11/03/2023" />
      </div>

    <div className='localizacao'>
      <p className='linkEndereco'>
      <a href="https://youtube.com/AnaZorzan" target="_blank"> Localização: Rua blábláblá </a>
      </p>
    </div>

    <div className='cardapio'>
      <p>Para comer, terá rodizio de pizza <br/> Traga o seu caneco para tomar um chopp giladuuu</p>
    </div>







      <div  className="questionario">
        <Quest/>
      </div>
    </>
  );
}

export default Home;