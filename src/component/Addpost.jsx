import React from 'react'
import NavigationBar from './NavigationBar'

const Addpost = () => {
  return (
    <div>
<NavigationBar/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


<div className="row">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <label htmlFor="" className="form-label">userId</label>
            <input type="text" className="form-control" />
        </div>
    </div>

    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">id</label>
        <input type="text" className="form-control" />
    </div>



    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">Title</label>
        <input type="text" className="form-control" />
    </div>


    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">Body</label>
        <input type="text" className="form-control" />
    </div>


    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <button className="btn btn-success">Submit</button>
    </div>
</div>






        </div>
    </div>
</div>











    </div>
  )
}

export default Addpost