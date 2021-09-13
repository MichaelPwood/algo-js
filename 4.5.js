function calcDistance(xA, yA, xB, yB) { 
	let xDiff = xA - xB; 
	let yDiff = yA - yB;

	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}