export default function health(data) {
	let f = (a, b) => {
		if (a.health < b.health) return 1;
	  	if (a.health == b.health) return 0;
	  	if (a.health > b.health) return -1;
	};
	data.sort(f);

	return data;
}