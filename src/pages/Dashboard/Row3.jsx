import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";

import Pie from "../Pie/Pie";
import ApexChartf from "../barf/barf";
import { Link } from "react-router-dom";

function Row3() {
  return (
    <>
      <Grid item xs={12} sm={6} md={6}>
        <Paper sx={{ p: 1, minWidth: "200", maxWidth: "900px", height: 480 }}>
          <Pie isDashboard={true} />
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        <Link to={"/Bar"}>
          <Paper sx={{ minWidth: "200", height: 480 }}>
            <ApexChartf isDashboard={true} />
          </Paper>
        </Link>
      </Grid>
    </>
  );
}

export default Row3;
