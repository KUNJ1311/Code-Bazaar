import Products from "@/components/Shop/Products";
import ProductCarousel from "@/components/Shop/ProductCarousel";
import Head from "next/head";

const index = () => {
	const products = {
		"Code Mastermind Test": {
			title: "Code Mastermind Test",
			slug: "code-mastermind-t",
			img: "/assets/t1.jpg",
			category: "tshirt",
			price: 59999,
			rating: 4.3,
		},
		"Code Mastermind": {
			title: "Code Mastermind",
			slug: "code-mastermind-blue",
			img: "/assets/t2.jpg",
			category: "tshirt",
			price: 649,
			rating: 5,
		},
		"Algorithm Artistry": {
			title: "Algorithm Artistry",
			slug: "algorithm-artistry-blue",
			img: "/assets/t3.jpg",
			category: "tshirt",
			price: 699,
			rating: 5,
		},
		"Coding Wizardry": {
			title: "Coding Wizardry",
			slug: "coding-wizardry-orange",
			img: "/assets/t4.jpg",
			category: "tshirt",
			price: 649,
			rating: 5,
		},
		"Code Ninja": {
			title: "Code Ninja",
			slug: "code-ninja",
			img: "/assets/t5.jpg",
			category: "tshirt",
			price: 749,
			rating: 5,
		},
		"Code Mastermind bada bada title dala he check karne ke liye ki work karta he ya nahi tume kya lagta he?? hoga?": {
			title: "Code Mastermind bada bada title dala he check karne ke liye ki work karta he ya nahi tume kya lagta he?? hoga?",
			slug: "code-mastermind-s-test",
			img: "/assets/t6.jpg",
			category: "tshirt",
			price: 599,
			rating: 5,
		},
		"Recursive Mug": {
			title: "Recursive Mug",
			slug: "recursive-mug",
			img: "/assets/m2.jpg",
			category: "mug",
			price: 349,
			rating: 5,
		},
		"Code Mastermind Mug": {
			title: "Code Mastermind Mug",
			slug: "code-mastermind-mug-blue-s",
			img: "/assets/m1.jpg",
			category: "mug",
			price: 199,
			rating: 5,
		},
		"Code Mastermind Mug new": {
			title: "Code Mastermind Mug new",
			slug: "code-mastermind-mug-blue-s-new",
			img: "/assets/m4.jpg",
			category: "mug",
			price: 199,
			rating: 5,
		},
		"Binary Brew Mug": {
			title: "Binary Brew Mug",
			slug: "binary-brew-mug-black",
			img: "/assets/m3.jpg",
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
