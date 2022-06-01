import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AssignmentIcon from "@mui/icons-material/Assignment";
import doc from "../docs.png"

export default function DocCard({ title, docsDesc }) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="194"
        image={doc}
        alt="docs image"
      />
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <AssignmentIcon color="primary" />

        <Typography>{title}</Typography>

        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      </CardActions>
      <Typography sx={{ textAlign: "center" }} mb={2}>
        {docsDesc}
      </Typography>
    </Card>
  );
}
