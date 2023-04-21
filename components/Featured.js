import Image from "next/image";
import React from "react";

const Featured = () => {
	return (
		<section>
			<h2>Featured Products</h2>
			<p>New Morden Design</p>
			<div>
				<div>
					<Image src="" alt="" width={""} height={""} />
					<div>
						<h3>Hoodie</h3>
						<h5>Eat, Sleep, Code, Repeat - Hoodie</h5>
						<div></div>
						<h4>
							<del>₹986</del>
							<span>₹799</span>
						</h4>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;
