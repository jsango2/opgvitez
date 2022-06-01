import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import AllWeeks from "../components/booking/AllWeeksAdmin";
// import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import firebase from "../components/firebase/firebase";
import { auth, database } from "../components/firebase/firebase";
import { Data } from "../components/booking/data";
import Layout from "../components/layout";

function Index() {
  const [data, setData] = useState([]);
  const [logedIn, setlogedIn] = useState(null);
  const dbInstance = collection(database, "Charter");
  const dbInstance2 = collection(database, "Charter");
  auth.onAuthStateChanged((user) => {
    if (user) {
      // props.setCurrentUser(user);
      setlogedIn(true);

      console.log("OnAuthStateChanged: Logged in");
    } else {
      console.log("OnAuthStateChanged: Logged out");
      setlogedIn(false);
    }
  });

  const docRef = doc(dbInstance2, "8YzH6hSmMNqszVnzR8Nc");
  // getDoc(docRef).then((doc) => console.log(doc));

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

    // if (logedIn === false) {
    // 	return <Redirect to='/' />;
    // }
  };

  // useEffect(() => {
  //   const saveNote = () => {
  //     Data.map((week) =>
  //       addDoc(dbInstance2, {
  //         cijena: week.cijena,
  //         datum: week.datum,
  //         free: week.free,
  //         occupied: week.occupied,
  //         selected: week.selected,
  //       })
  //     );
  //   };
  //   saveNote();
  // }, []);

  useEffect(() => {
    let podaci = [];
    const getNotes = () => {
      getDocs(dbInstance).then((data) => {
        podaci = data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        });
        setData(podaci);
      });
    };

    getNotes();
  }, []);

  return (
    <Layout>
      <div style={{ color: "black" }}>Booking page</div>
      <div style={{ color: "black" }}>
        Logged in: {logedIn ? "true" : "False"}
      </div>
      <button onClick={handleLogOut}>Log out</button>
      <AllWeeks data={data} />
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const json = await res.json();

//   return {
//     props: {
//       stars: json.stargazers_count,
//     },
//   };
// }

export default Index;
