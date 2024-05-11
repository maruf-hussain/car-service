import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=> {
fetch('services.json')
.then(res => res.json())
.then(data => setServices(data))
    }, [])

    return (
        <div>
           <div className="text-center my-6">
            <h1 className="font-extrabold text-3xl text-red-500">Services</h1>
            <h2 className="text-4xl font-bold">Our Services Area</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words <br /> which do not look even slightly believable. </p>
            </div> 

           <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
               {

                services.map(service => <ServicesCard
                key={service._id}
                service={service}
                ></ServicesCard>)

               }
            </div>
        </div>
    );
};

export default Services;