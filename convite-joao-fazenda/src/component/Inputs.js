import React from "react"
import { useEffect } from "react";
import { Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';



export default function Inputs(props) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const armazenaEscolha = () => {

  }

  useEffect(() => {
    setTimeout(() => armazenaEscolha(), props?.delay ?? 200);
  }, []);

  return (
    <>
      <Grid container style={{ padding: 25}}>
        <Grid item xs={12}>
        </Grid>
        <Grid item md={4} xs={12} sm={12}></Grid>
        <Grid item md={4} xs={12} sm={12} style={{ paddingTop: 100 }}>
          <div style={{backgroundColor: "white", borderRadius: 15, padding: 40 }}>
            <p style={{ marginBottom: 15, paddingTop: 10, textAlign: "center"}}>Por favor, insira seu nome e informe sua resposta! </p>
            <TextField style={{}}
              label="Nome"
              fullWidth={true}
              variant="standard"
              type="nome"

            />

            <div>
              <Grid item md={4} xs={12} sm={12} style={{ paddingTop: 20, paddingBottom: 10}}></Grid>
              <FormControlLabel style={{paddingLeft: 90}} control={<Checkbox/>} label="Vou" />
              <FormControlLabel control={<Checkbox />} label="Não vou" />
            </div>
            
            <div style={{ marginTop: 10, textAlign: "center", paddingTop: 15, marginTop: 20}}>
              <Button className="button"
                variant="contained"
                style={{ marginRight: 10 }}
              >Confirmar</Button>
            </div>
          </div>

        </Grid>

      </Grid>


    </>
  )
}

