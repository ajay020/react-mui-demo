import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

function MUISelect() {
  //   const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);

  console.log({ countries });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCountries(typeof val == "string" ? val.split(",") : val);
    console.log({ val });
  };

  return (
    <Box width={"250px"}>
      <TextField
        select
        label="Select countary"
        value={countries}
        onChange={handleChange}
        fullWidth
        error
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
}

export default MUISelect;
