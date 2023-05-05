import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import { useState } from "react";

function MUIButton() {
  const [formats, setFormats] = useState<string | null>(null);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
    console.log(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outline</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
      </Stack>
      <Stack display={"block"} direction={"row"} spacing={2}>
        <Button size="small" variant="contained">
          {" "}
          small
        </Button>
        <Button size="medium" variant="contained">
          {" "}
          medium
        </Button>
        <Button size="large" variant="contained">
          {" "}
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("clicked")}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton color="success" size="small" aria-label="send">
          <SendIcon />
        </IconButton>
      </Stack>
      {/* button group  */}
      <Stack direction={"row"}>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-aria-label="alognment button group"
        >
          <Button onClick={() => alert("left")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      {/* Toggle button  */}
      <Stack direction={"row"}>
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value={"bold"} aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value={"italic"} aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value={"underlined"} aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MUIButton;
