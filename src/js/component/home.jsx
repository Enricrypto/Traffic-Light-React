import React, { useState, useEffect } from "react";

const Home = () => {

	const [color, setColor] = useState({
		red: "",
		yellow: "",
		green: ""
	});


useEffect(() => {
	
	setColor({red: "shine"})
}, []); 


	return (
		<div>
			<div className="trafficLight">
				<div className="container">
					<div className={"circle red " + color.red} onClick={() => setColor({
						red: "shine",
						yellow: "",
						green: ""
					})}>
					</div>
					<div className={"circle yellow " + color.yellow} onClick={() => setColor({
						red: "",
						yellow: "shine",
						green: ""
					})}></div>
					<div className={"circle green " + color.green} onClick={() => setColor({
						red: "",
						yellow: "",
						green: "shine"
					})}>
					</div>
				</div>
				<div className="button">
				<button type="button" className="btn btn-secondary" >Cycle Color</button>
				</div>
				<div className="button">
				<button type="button" className="btn btn-secondary" >Add Color</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
