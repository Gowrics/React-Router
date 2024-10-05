import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CareerList from "../components/CareerList";

const Careers = () => {
  const careerData = useLoaderData(); //hook
  console.log(careerData);
  return (
    <>
      {careerData &&
        careerData.map((career) => {

          return(
          <Link className="link" to ={career.id.toString()} key ={career.id}>
            <CareerList title={career.title} location={career.location} />
          </Link>
          );
        })}
    </>
  );
};
// career loader
export const careerLoader = async () => {
  //career loader fuction return the fetched data
  const response = await fetch("http://localhost:8000/careers");
  if (!response.ok){
    throw new Error('Job Not Found')
  }
  const jsonResponse = await response.json();
  return jsonResponse;
};
export default Careers;
