import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
export default function AddCard() {
  return (
    <Card sx={{ maxWidth: 250 , cursor:'pointer'}}>
      <CardContent
        sx={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap" }}
      >
        <AddIcon
          sx={{
            fontSize: 130,
            marginTop:8
          }}
          color="primary"
        />
      </CardContent>
    </Card>
  );
}
