import { Box, Paper, Typography } from "@mui/material";
import Line from "../line/line";
import BasicTable from "./Table";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

function Row2() {
  return (
    <>
    <Grid item xs={12} sm={6} md={6}>
    <Link to={"/Line"}>
        <Paper sx={{ p: 2, minWidth: "200", maxWidth: "900px" }}>
          <Typography variant="h6" color="primary">
            Revenu Total
          </Typography>
          <Typography variant="body2">50000 TND</Typography>
          <Line isDashboard={true} />
        </Paper>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Box sx={{ minWidth: "100px", height: 350 }}>
          <BasicTable />
        </Box>
      </Grid>
      </>
  );
}

export default Row2;
