import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const Viewpost = () => {
    const[post,changePost]=useState(

[])

const fetchData=()=>{

axios.get("https://jsonplaceholder.typicode.com/posts").then(

(response)=>{

changePost(response.data)




}







).catch()




}


useEffect(()=>{fetchData()},[])


  return (
    <div>
<NavigationBar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<div className="row g-3">
    {post.map(
        (value,index)=>{

return(

 <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">



<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>User ID</th>
      <th>ID</th>
      <th>Title</th>
      <th>Body</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{value.userId}</td>
      <td>{value.id}</td>
      <td>{value.title}</td>
      <td>{value.body}</td>
    </tr>
  </tbody>
</table>



    </div>



)



        }
    )}





   
</div>


        </div>
    </div>
</div>











    </div>
  )
}

export default Viewpost