import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBtn from "./MenuBtn";
const doc = require("../assets/docs.png")

export default function DocCard({ title, docsDesc, createdAt }: { title: string, docsDesc?: string, createdAt?: string }) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <CardMedia component="img" height="194" image={doc} alt="docs image" />
        <Typography
          sx={{
            textAlign: "left",
            mx: "8px",
            mt: "4px",
            textTransform: "capitalize",
            fontWeight: "medium",
          }}
          variant="body2"
        >
          {title}
        </Typography>
      </CardContent>

      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <AssignmentIcon color="primary" />

        <Typography sx={{ textAlign: "center" }} variant="caption">
          {createdAt}
        </Typography>
        <MenuBtn />
      </CardActions>
    </Card>
  );
}
