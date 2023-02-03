import { Close, Search } from "@mui/icons-material";
import { Grid, InputAdornment, Typography } from "@mui/material";

import { TextBox } from "@web/components/shared";

export default function TextBoxUI() {
  return (
    <Grid container spacing={2} padding={2}>
      <Grid xs={12} item>
        <Typography align="center" fontWeight="bold" variant="h4">Text Box</Typography>
      </Grid>
      <Grid md={2} xs={6} item>
        <TextBox label="Default" />
      </Grid>
      <Grid md={2} xs={6} item>
        <TextBox label="Password" type="password" />
      </Grid>
      <Grid md={2} xs={6} item>
        <TextBox error label="Name" defaultValue="Error" />
      </Grid>
      <Grid md={2} xs={6} item>
        <TextBox
          placeholder="Search"
          InputProps={{
            style: { borderRadius: "40px" },
            endAdornment: (
              <InputAdornment position="end">
                <Search style={{ transform: "scaleX(-1)" }} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid md={2} xs={6} item>
        <TextBox
          placeholder="Search"
          InputProps={{
            style: { borderRadius: "40px" },
            endAdornment: (
              <InputAdornment position="end">
                <Close />
              </InputAdornment>
            ),
            startAdornment: (
              <InputAdornment position="start">
                <Search style={{ transform: "scaleX(-1)" }} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid md={2} xs={6} item>
        <TextBox
          placeholder="Search"
          defaultValue="Error"
          error
          InputProps={{
            style: { borderRadius: "40px" },
            endAdornment: (
              <InputAdornment position="end">
                <Close />
              </InputAdornment>
            ),
            startAdornment: (
              <InputAdornment position="start">
                <Search style={{ transform: "scaleX(-1)" }} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
}
