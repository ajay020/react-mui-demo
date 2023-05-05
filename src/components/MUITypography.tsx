import { Typography } from "@mui/material";

function MUITypography() {
  return (
    <div>
      <Typography variant="h1"> h1 heading</Typography>
      <Typography variant="h2"> h2 heading</Typography>
      <Typography variant="h3"> h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        {" "}
        h4 heading
      </Typography>
      <Typography variant="h5"> h5 heading</Typography>
      <Typography variant="h6"> h6 heading</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        magnam eligendi, inventore consequatur at obcaecati modi quia provident
        error ipsa voluptatem. Ullam reprehenderit cumque quo ea officiis
        mollitia ut soluta?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        magnam eligendi, inventore consequatur at obcaecati modi quia provident
        error ipsa voluptatem. Ullam reprehenderit cumque quo ea officiis
        mollitia ut soluta?
      </Typography>
    </div>
  );
}

export default MUITypography;
