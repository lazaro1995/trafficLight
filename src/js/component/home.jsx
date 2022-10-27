import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="row mt-4">
				<div className="col-6"></div>
				<div className="trafficTop bg-dark col-1">
					<div className="redLight text-center mt-2">
					<button type="button" className="btn btn-danger btn-circle btn-xl box-1"> </button>
					</div><br />
					<div className="yellowLight text-center">
						<button type="button" className="btn btn-warning btn-circle btn-xl box-1"></button>
					</div><br />
					<div className="greenLight text-center mb-2">
						<button type="button" className="btn btn-success btn-circle btn-xl box-1"> </button>
					</div>
				</div>
				<div className="col-5"></div>
			</div>
			
			
		</div>
	);
};

export default Home;
