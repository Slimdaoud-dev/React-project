import * as React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import ApexChart from "../../components/barrr";

import { Box, Paper, Stack, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
function Card({ title, icon, desc, chart, desc2 }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box onClick={handleClickOpen}>
        <Paper
          sx={{
            minWidth: "333",
            p: 1.5,
            display: "flex",
            justifyContent: "space-between",
            flexGrow: 1,
            "&:hover": {
              backgroundColor: "#DCDCDC",
              cursor: "pointer",
            },
          }}
        >
          <Stack>
            {icon}
            <Typography variant="body2" sx={{ fontSize: 13 }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 13 }}>
              {desc}
            </Typography>
          </Stack>

          <Stack>
            {chart}
            <Typography variant="body2" sx={{ fontSize: 13 }}>
              {desc2}
            </Typography>
          </Stack>
        </Paper>
      </Box>
      <Dialog open={open} onClose={handleClose} style={{ height: "90vh" }}>
        <DialogContent>
          <ApexChart />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Card;
