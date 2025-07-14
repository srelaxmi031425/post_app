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
<div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <table className="table table-bordered table-striped table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th>User ID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>

            <tbody>
              {post.map(post => (
                <tr key={post.id}>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>











    </div>
  )
}

export default Viewpost