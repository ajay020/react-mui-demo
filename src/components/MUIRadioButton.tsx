import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { useState } from "react";

function MUIRadioButton() {
  const [value, setValue] = useState("");

  console.log({ value });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Year of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          row
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            control={<Radio color="secondary" size="small" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-8" value="6-8" />
        </RadioGroup>
        <FormHelperText>Invalid selection </FormHelperText>
      </FormControl>
    </Box>
  );
}

export default MUIRadioButton;
