import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import HomeLayout from "../layout/HomeLayout";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { DocCard, ModalBox } from "./index";

export default function Docs({ database }: { database: any }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // state to hold data
  const [title, setTitle] = useState("");

  // state to hold fetched data
  const [docsData, setDocsData] = useState<any[]>([]);

  // take the database that we got from the firebaseConfig.js
  //  and the name of the collection we want to use.
  const collectionRef = collection(database, "docsData");

  const addDocs = () => {
    addDoc(collectionRef, {
      title: title,
      docsDesc: "",
      createdAt: new Date(),
    })
      .then(() => {
        alert("Data added");
        <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
        handleClose();
      })
      .catch(() => {
        alert("cannot add data");
      });
  };

  const getDocs = () => {
    onSnapshot(collectionRef, (data) => {
      return setDocsData(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  };

  let navigate = useNavigate();
  const getId = (id: any) => {
    navigate(`/editDocs/${id}`);
  };
  // to prevent the  concurrent rendering react v18 use the useRef

  const isMounted = useRef<boolean | null>(null);
  useEffect(() => {
    if (isMounted.current) {
      return;
    }
    isMounted.current = true;
    getDocs();
  });
  return (
    <HomeLayout>
      <div className="docs-container">
        <Typography variant="h5" gutterBottom component="div">
          My Documents
        </Typography>

        <Box
          mt={4}
          sx={{
            display: "grid",
            gap: { xs: 2, sm: 4, md: 4 },
            gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            justifyContent: 'center'

          }}

        >
          <Box>
            <Tooltip title="Add a new Document" arrow>
              <Card
                sx={{ maxWidth: 250, height: 305, cursor: "pointer" }}
                onClick={handleOpen}
              >
                <CardContent
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <AddIcon
                    sx={{
                      fontSize: 130,
                      marginTop: 8,
                    }}
                    color="primary"
                  />
                </CardContent>
              </Card>
            </Tooltip>

            <ModalBox
              open={open}
              setOpen={setOpen}
              title={title}
              setTitle={setTitle}
              addDocs={addDocs}
            />
          </Box>
          {/* onClick={() => getId(doc.id)} */}
          {docsData.map((doc) => {
            return (
              <div key={doc.id}>
                <DocCard
                  title={doc.title}
                  // dangerouslySetInnerHTML={{ __html: doc.docsDesc }}
                  docsDesc={doc.docsDesc}
                // createdAt={doc.createdAt.doc.toDate()}
                />
              </div>
            );
          })}
        </Box>
      </div>
    </HomeLayout>
  );
}



// const Alert = () => {
 
// }