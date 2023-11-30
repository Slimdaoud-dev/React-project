
import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import Card from "./Card";
import Grid from "@mui/material/Grid";


import MyResponsivePie2 from "../../pages/Pie2/Pie2";


function Row1() {
  
  
  return (
    <>
    <Grid item xs={12} sm={6} md={3}>
    <Card title={"1425"} desc={"Emails Envoyés"} desc2={"+26%"} chart={<MyResponsivePie2/>} icon={<Email sx={{color:'#1e88e5'}}/>} />
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
  <Card title={"4200"} desc={"Ventes obtenues"} desc2={"+21%"} chart={"a1"} icon={<PointOfSale sx={{color:'#1e88e5'}}/>} />
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
  <Card title={"7"} desc={"Client Nouveaux"} desc2={"+5%"} chart={"a1"} icon={<PersonAdd sx={{color:'#1e88e5'}}/>} />
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
  <Card title={"1,333,254"} desc={"Trafic reçu"} desc2={"+43%"} chart={"a1"} icon={<Traffic sx={{color:'#1e88e5'}}/>} />
  </Grid>
  </>
  );
}

export default Row1;
