// HTML CSS JS Result Skip Results Iframe
let nav = document.getElementById('navigation');
function toggleMenu() {
  nav.classList.toggle('navigation--visible');
}


// Resources

function addblog(){
  window.location = 'addblog.html'
}
window.addblog = addblog


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {
  doc,
  deleteDoc,
  getDoc,
  collection,
   getFirestore,
    addDoc,
    updateDoc,
     onSnapshot,
     arrayUnion,
     arrayRemove,
     getDocs 
   } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
   import{
    getAuth,
    onAuthStateChanged,
  // deleteDoc,
    
   }from"https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
   import {
     getStorage, 
    ref,
    uploadBytesResumable, 
    getDownloadURL,
  } 
   from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";



const firebaseConfig = {
  apiKey: "AIzaSyArk6oUbCzBXEM-whlJpKjfL5EGkIKzKp0",
  authDomain: "blog-web-7c327.firebaseapp.com",
  projectId: "blog-web-7c327",
  storageBucket: "blog-web-7c327.appspot.com",
  messagingSenderId: "1066983402593",
  appId: "1:1066983402593:web:faabad48095a9e2472ce20",
  measurementId: "G-ZZJKJLLJZH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

console.log(app);

const querySnapshot = await getDocs(collection(db, "data"));
let blog_post = document.getElementById('card-parent');
blog_post.innerHTML = ""
querySnapshot.forEach((doc) => {

  blog_post.innerHTML += 
  
  `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${doc.data().image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${doc.data().title}</h5>
    <p class="card-text">${doc.data().desc}</p>
    <a href="#" class="btn btn-primary">read more</a>
  </div>
</div>
</div>  
  `
  console.log(doc.id, " => ", doc.data());
});


