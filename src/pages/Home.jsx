import React, { useEffect, useState } from "react";
import { useAuth } from "../pages/Auth";
import { db } from "../config/firebaseConfig";
import '../components/css/home.css';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Button from '@mui/material/Button';
import AlarmIcon from '@mui/icons-material/Alarm';
import { styled } from '@mui/material/styles';



export default function Home() {
  const { currentUser, logout } = useAuth();
  const [userDocuments, setUserDocuments] = useState([]);



  const [loader,setLoader] = useState(false);
  // console.log(loader);
  const downloadPDF = () =>{
    const capture = document.querySelector('#formPDFD') //אולי נקודה
  console.log('hello');
    setLoader(true);
  console.log(setLoader);
  html2canvas(capture).then((canvas)=>{
 
    const imgData = canvas.toDataURL('img/png');
    console.log(imgData);
    const doc = new jsPDF('p','mm','a4');
    const componentwidth = doc.internal.pageSize.getWidth();
    const componentheight = doc.internal.pageSize.getHeight();
    doc.addImage(imgData, 'PNG', 0, 0, componentwidth, componentheight);
    setLoader(false);
    doc.save('Resume.pdf');
    console.log(doc);
  })
  }
 
 
 
 
  useEffect(() => {
    if (currentUser && currentUser.uid) {
      const q = query(
        collection(db, "resumes"), 
        where("userId", "==", currentUser.uid)
      );
      //להבין את העסק פה לעומק

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const documents = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUserDocuments(documents);
      });

      return unsubscribe; 
    }
  }, [currentUser]);

  if (!currentUser) {
    return <div>Loading...</div>;
  }
  const MyStyledButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  
  });

  return (
    <div id="formPDFD">
      <h1>Welcome, {currentUser.email}</h1>
      <AlarmIcon />;
    



      <div>
        {userDocuments.map(doc => (
          <div key={doc.id} className="document">
            <h2>First Name: <span>{doc.firstName}</span></h2>
            <h2>Last Name: <span>{doc.lastName}</span></h2>
            <h2>Email: <span>{doc.email}</span></h2>
            <h2>Phone: <span>{doc.phone}</span></h2>
            <h2>More Info: <span>{doc.message}</span></h2>
            <h2>Address: <span>{doc.address}</span></h2>
            <h2>Education: <span>{doc.education}</span></h2>
        
          </div>
        ))}
      </div>

      <Button variant="contained" color="primary" onClick={logout}>Logout</Button>
      <Button variant="contained" color="primary" onClick={downloadPDF}  disabled = {!(loader===false)}>{loader?(
        <span>downloading</span>
      )
      :
      (<span>download</span>)
      }
     
    </Button>
    </div>
  );
}
