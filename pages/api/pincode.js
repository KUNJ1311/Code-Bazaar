import pincodes from "@/pincodes.json";

export default function handler(req, res) {
	return res.status(200).json(pincodes);
}
