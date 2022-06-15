import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import AllWeeks from "../components/booking/AllWeeksAdmin";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import firebase from "../components/firebase/firebase";
import { auth, database } from "../components/firebase/firebase";
import { Data } from "../components/booking/data";
import Layout from "../components/layout";

function Index() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [logedIn, setlogedIn] = useState(null);
  const [userEmail, setUserEmail] = useState("User");
  const dbInstance = collection(database, "Charter");
  const dbInstance4 = collection(database, "Charter3");
  const dbInstance2 = collection(database, "Charter");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // props.setCurrentUser(user);
        setlogedIn(true);

        console.log("OnAuthStateChanged: Logged in");
      } else {
        console.log("OnAuthStateChanged: Logged out");
        setlogedIn(false);
        router.push("/");
      }
    });
  }, [logedIn]);

  // const docRef = doc(dbInstance2, "8YzH6hSmMNqszVnzR8Nc");
  // getDoc(docRef).then((doc) => console.log(doc));

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      setUserEmail(user.email);
    }
  }, [logedIn]);

  const handleLogOut = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("odlogiralo");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    let podaci = [];
    const getNotes = () => {
      getDocs(dbInstance4).then((data) => {
        podaci = data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        });
        setData(podaci);
      });
    };

    getNotes();
  }, []);

  return (
    <>
      {/* <div style={{ color: "black" }}>Booking page</div>
      <div style={{ color: "black" }}>
        Logged in: {logedIn ? "true" : "False"}
      </div> */}
      {/* <button onClick={handleLogOut}>Log out {userEmail}</button> */}
      <AllWeeks data={data} handleLogOut={handleLogOut} userEmail={userEmail} />
    </>
  );
}

export default Index;
