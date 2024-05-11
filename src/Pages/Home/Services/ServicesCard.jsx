
const ServicesCard = ({ service }) => {
    const {img,price,title} = service;

    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Services" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-extrabold">{title}</h2>
          <p className="text-2xl text-red-500 font-bold">${price}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-red-500 text-white ">More Details</button>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;