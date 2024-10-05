import React from 'react'
import { useLoaderData,useParams} from 'react-router-dom'

const CareerDetails = () => {

    const {id} = useParams()
console.log(id)   // get the id from server

const jobData =useLoaderData()
console.log(jobData)
  return (
    <>
    <div>
        <hr></hr>
        <b><h1>{jobData.title}</h1></b>
        <h1 style={{ color: 'blue' }}>{jobData.salary}</h1>
        <h3>{jobData.location}</h3>
<hr></hr>

    </div>
    </>
  )
}
//Job details   fetch the job details from server 
export const jobDetailsLoader = async ({params}) => {    // destructure params
const {id} =params;
    const response = await fetch('http://localhost:8000/careers/'+id);
 
    if(!response.ok){
        throw new Error('Job post not found')
    }
    const jsonResponse =await response.json();
    return jsonResponse;
};

export default CareerDetails;
