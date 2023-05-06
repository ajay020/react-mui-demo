import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

function MUITextField() {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="small secondary"
          variant="outlined"
          size="small"
          color="secondary"
        />
        <TextField label="Form input" variant="outlined" required />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Form input" variant="outlined" required />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          required
          error={!value}
          onChange={(e) => setValue(e.target.value)}
          helperText={
            !value ? "Required" : "Don not share your password with anyone"
          }
        />
        <TextField label="Disabled" variant="outlined" disabled />
        <TextField label="Read only" inputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MUITextField;
