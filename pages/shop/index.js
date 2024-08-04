import Products from "@/components/Shop/Products";
import ProductCarousel from "@/components/Shop/ProductCarousel";
import Head from "next/head";

const index = () => {
	const products = {
		"Code Mastermind Test": {
			title: "Code Mastermind Test",
			slug: "code-mastermind-t",
			Image: "/assets/t1.jpg",
			category: "tshirt",
			price: 59999,
			rating: 4.3,
		},
		"Code Mastermind": {
			title: "Code Mastermind",
			slug: "code-mastermind-blue",
			Image: "/assets/t2.jpg",
			category: "tshirt",
			price: 649,
			rating: 5,
		},
		"Algorithm Artistry": {
			title: "Algorithm Artistry",
			slug: "algorithm-artistry-blue",
			Image: "/assets/t3.jpg",
			category: "tshirt",
			price: 699,
			rating: 5,
		},
		"Coding Wizardry": {
			title: "Coding Wizardry",
			slug: "coding-wizardry-orange",
			Image: "/assets/t4.jpg",
			category: "tshirt",
			price: 649,
			rating: 5,
		},
		"Code Ninja": {
			title: "Code Ninja",
			slug: "code-ninja",
			Image: "/assets/t5.jpg",
			category: "tshirt",
			price: 749,
			rating: 5,
		},
		"Code Mastermind bada bada title dala he check karne ke liye ki work karta he ya nahi tume kya lagta he?? hoga?": {
			title: "Code Mastermind bada bada title dala he check karne ke liye ki work karta he ya nahi tume kya lagta he?? hoga?",
			slug: "code-mastermind-s-test",
			Image: "/assets/t6.jpg",
			category: "tshirt",
			price: 599,
			rating: 5,
		},
		"Recursive Mug": {
			title: "Recursive Mug",
			slug: "recursive-mug",
			Image: "/assets/m2.jpg",
			category: "mug",
			price: 349,
			rating: 5,
		},
		"Code Mastermind Mug": {
			title: "Code Mastermind Mug",
			slug: "code-mastermind-mug-blue-s",
			Image: "/assets/m1.jpg",
			category: "mug",
			price: 199,
			rating: 5,
		},
		"Code Mastermind Mug new": {
			title: "Code Mastermind Mug new",
			slug: "code-mastermind-mug-blue-s-new",
			Image: "/assets/m4.jpg",
			category: "mug",
			price: 199,
			rating: 5,
		},
		"Binary Brew Mug": {
			title: "Binary Brew Mug",
			slug: "binary-brew-mug-black",
			Image: "/assets/m3.jpg",
			category: "mug",
			price: 349,
			rating: 5,
		},
	};
	return (
		<>
			<Head>
				<title>Shop - CodeBazaar</title>
			</Head>
			<ProductCarousel />
			<Products title={"Popular Products"} products={products} />
		</>
	);
};

export default index;
