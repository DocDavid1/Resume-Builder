
import { collection, addDoc, getDoc } from "firebase/firestore"; 
import React, { useState } from "react"; 
import { db } from "../../config/firebaseConfig";
// import {UserContext} from "../../context/userContext"; 
import { useAuth } from "../Auth"; 
import "../Resume/Resume.css"
export default function Resume() {
  const { currentUser, username, login, logout } = useAuth();
  const [formData, setFormData] = useState({});
  // const {user, setUser} =   useContext(UserContext) 
 
  const handleSubmit = async (e) => {
    // פונקציה לטיפול בשליחת הטופס
    e.preventDefault(); // מניעת התנהגות ברירת מחדל של הטופס

    // בדיקה אם יש משתמש מחובר
    if (currentUser) {
      const userId = currentUser.uid; // קבלת זיהוי המשתמש הנוכחי
      console.log(currentUser.email);
      console.log(currentUser.uid);
      console.log(formData);
      alert("your resume is ready to use, please check at products pages");

      try {
        await addDoc(collection(db, "resumes"), {
          // ניסיון להוסיף תיעוד ל-Firestore
          userId: userId,

          ...formData,
        });

        console.log("Document added to Firestore"); 
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
     
      console.error("No user is authenticated."); 
    }
  };

  const handleChange = (e) => {
  
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData); 
  };
  return (
  <div>
    <div id="margin"></div>
    <div id="FormId">
      <form id="formInput" onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <textarea
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <textarea
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>User Name::</label>
          <textarea
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <textarea
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <textarea
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>mor info:</label>
          <textarea
            id="infoField"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Education:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Education:</label>
          <input
            type="date"
            name="date1"
            value={formData.date1}
            onChange={handleChange}
          />
          <textarea
            name="education1"
            value={formData.education1}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Work Experience:</label>
          <input
            type="date"
            name="date2"
            value={formData.date2}
            onChange={handleChange}
          />
          <textarea
            name="workExperience2"
            value={formData.workExperience2}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Work Experience:</label>
          <input
            type="date"
            name="date3"
            value={formData.date3}
            onChange={handleChange}
          />
          <textarea
            name="workExperience3"
            value={formData.workExperience3}
            onChange={handleChange}
          ></textarea>
        </div>{" "}
        <div>
          <label>Work Experience:</label>
          <input
            type="date"
            name="date"
            value={formData.date4}
            onChange={handleChange}
          />
          <textarea
            name="workExperience4"
            value={formData.workExperience4}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Skills:</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <button onSubmit={handleSubmit} type="submit">
            submit
          </button>
        </div>
      </form>

    </div></div>

  );
}
