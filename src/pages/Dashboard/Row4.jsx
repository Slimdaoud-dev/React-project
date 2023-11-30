import { Grid, Paper } from "@mui/material";


import { Link } from "react-router-dom";
import MyResponsiveBump from "../Bump/Bump";

function Row4() {
  return (
    <>
      <Grid item xs={12} sm={6} md={12}>
        <Link to={"/Bump"}>
          <Paper sx={{ p: 2, minWidth: "200" }}>
            <MyResponsiveBump isDashboard={true} />
          </Paper>
        </Link>
      </Grid>
    </>
  );
}

export default Row4;
