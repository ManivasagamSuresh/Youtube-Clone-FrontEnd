import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import "./Uploadvdo.css"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '../../firebase/firebase';
import axios from 'axios';
import { Config } from '../../Config';
import { useNavigate } from 'react-router-dom';

function Uploadvdo({setOpen}) {

const navigate = useNavigate()
const [Img,setImg] =useState(undefined);
const [imgPerc,setImgPerc] = useState(0)
const [vdoPerc,setvdoPerc] = useState(0)
const [Vdo,setVdo] =useState(undefined);
const [inputs,setInputs] =useState({});

const [tags,setTags] =useState([]);

let t = []
const handleTags = (e)=>{
  console.log(e.target.value.split(','));
  
  // t.push(e.)
  setTags(e.target.value.split(","));
}

// 

const handleChange = (e)=>{
setInputs((prev)=>{
  return {...prev , [e.target.name]: e.target.value}
})
}

const UploadFile = (file,urltype)=>{
  const storage = getStorage(app);
  const fileName = new Date().getTime() + file.name
  const storageRef = ref(storage,  fileName);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    urltype === "imgUrl" ? setImgPerc(Math.round(progress)) : setvdoPerc(Math.round(progress))
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default :
        break
    }
  }, 
  (error) => {},
  
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setInputs((prev)=>{
        return {...prev , [urltype] : downloadURL}
      })
    });
  }

  )


}


useEffect(()=>{
Vdo && UploadFile(Vdo,"videoUrl");
},[Vdo])

useEffect(()=>{
Img &&  UploadFile(Img,"imgUrl")
},[Img])



const handleUploadDb = async(e)=>{
 e.preventDefault();
 console.log({...inputs,tags})
try {
  const res = await axios.post(`${Config.api}/addvideo`,{...inputs,tags},{ "headers" :{
    "authorization":localStorage.getItem("accessToken")
  }})
setOpen(false);
console.log(res.data)
alert('Your Video has been Uploaded')
// window.location.reload();
navigate(`/video/${res.data.insertedId}`)

} catch (error) {
  
}
}

  return (
    <div className='Upload-Container'>
      <form >
        <div className='Upload-Wrapper'>
            <h2 className='Upload-Close' onClick={()=>setOpen(false)}>X</h2>
            <h1 className='Upload-Title'>Upload a new Video</h1>
            <label className='Upload-Lable'>Video :</label>
            {
              vdoPerc>0 ? ("Uploading :"+vdoPerc+ "%"): <input type={"file"} accept="video/*" className='Upload-Input' onChange={(e)=>setVdo(e.target.files[0])}/>
            }
            
            <input type={"text"} placeholder="Title" className='Upload-Input'  onChange={handleChange} name="title"/>
            <textarea rows="8" cols="" placeholder='Description' className='Upload-Input' onChange={handleChange} name="desc"></textarea>
            
            <input type={"text"} placeholder="Separate the tags with commas." className='Upload-Input' onChange={handleTags} name='tags'/>
            
            <label className='Upload-Lable'>Image :</label>
            {
              imgPerc ? ("Uploading :"+imgPerc + "%"):<input type={"file"} accept="image/*"  className='Upload-Input' onChange={(e)=>setImg(e.target.files[0])}/>
            }

            <button type='submit' className='Upload-Button' onClick={handleUploadDb}>Add Video</button>
        </div>
        </form> 
        </div>
  )
}

export default Uploadvdo