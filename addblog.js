 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getFirestore,
  collection,
    addDoc,
    updateDoc,
    doc
  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
 import {
  getStorage, 
  ref,
  uploadBytesResumable, 
  getDownloadURL
 } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


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
 const db = getFirestore(app);
// const firebaseApp = getApp();
const storage = getStorage();

// const uploadFile=(file1)=>{
  // return new Promise((resolve,reject)=>{
  //   const mountainsRef = ref(storage, `images/${file1.name}`);
  //   const uploadTask = uploadBytesResumable(mountainsRef, file1);
  //   uploadTask.on('state_changed', 
  //     (snapshot) => {
  //       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log('Upload is ' + progress + '% done');
  //       switch (snapshot.state) {
  //         case 'paused':
  //           console.log('Upload is paused');
  //           break;
  //         case 'running':
  //           console.log('Upload is running');
  //           break;
  //       }
  //     }, 
  //     (error) => {
  //       reject(error)
  //     }, 
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
  //       resolve(downloadURL) 

  // const washingtonRef = doc(db, "data", docRef.id);
  // await updateDoc(washingtonRef, {
  //   image : url
  // });
  
  //  });

       
  //      });
    
  // })
  // }
 
 var pst = document.getElementById('publish');
 pst.addEventListener('click',async ()=>{
   event.preventDefault();
   

   let Title = document.getElementById('title');
   let descr = document.getElementById('desc');
   let file1 = document.getElementById('file');

   let Data={
    title : Title.value,
    desc: descr.value,
    // post : res
  }  
  try {
    const docRef = await addDoc(collection(db, "data"), {
      ...Data
    });
    console.log("Document written with ID: ", docRef.id);
    swal({
      title: "Good!",
      text: "Blog Uploaded",
      icon: "success",
      buttons: `Back`,
        // buttons: true,
        // dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            window.location = "index.html";
        }
    });
    console.log(docRef.id);

    const mountainsRef = ref(storage, `images/${file1.files[0].name}`);
    const uploadTask = uploadBytesResumable(mountainsRef, file1.files[0]);
    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
console.log(error);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          // console.log('File available at', downloadURL);
          let url =  downloadURL
          // console.log(url);
          const washingtonRef = doc(db, "data", docRef.id);
          await updateDoc(washingtonRef, {
            image : url 
          });
  
   });

       
       });

//  uploadFile(file1.files[0])
// .then((res => console.log("res--",res)))
// .catch((rej)=> console.log("Rej--->",rej))

  } catch (e) {
    console.error("Error adding document: ", e);
  
  }
// let post = res;
// console.log(post);
// if(res){
  // var Data={
  //   title : Title.value,
  //   desc: descr.value,
  //   post : res
  // }  
// }



})

