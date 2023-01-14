import MaquinaDeEscrever from '../component/MaquinaDeEscrever';
import Inputs from '../component/Inputs';
import '../style/index.css';
import { Grid } from '@mui/material';


function Home() {
  return (
    <>
      <Grid item md={2} xs={12} sm={12} style={{ paddingTop: 40 }}></Grid>
      <div className="bg-[#080713] flex justify-center items-center h-screen w-full text-2xl">
        <h1 className="font-bold">
          <span className="text-3xl">

            <MaquinaDeEscrever style={{ display: "fixed" }} text="Olá! Venho te convidar para a minha janta de formatura que será realizada no dia 05/03aaaaaaaaaaaaaaaaaa" delay={1300} />
          </span>
        </h1>
        <Inputs delay={1400} />
      </div>
    </>
  );
}

export default Home;