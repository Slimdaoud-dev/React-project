

import Row2 from "./Row2";
import Grid from "@mui/material/Grid";
import Row3 from "./Row3";

import Row1 from "./Row1";
import Row4 from "./Row4";





const Dashboard = () => {
  return (
    <Grid container spacing={2} mt={0}>
      <Row1 />
       
       <Row3/>
       <Row2/>
       <Row4/>
       
    </Grid>
  );
};

export default Dashboard;
