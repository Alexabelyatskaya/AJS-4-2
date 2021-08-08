import health from '../health';

test('sorting', () => {

	let sours = [
	  {name: 'мечник', health: 10},
	  {name: 'маг', health: 100},
	  {name: 'лучник', health: 80}
	];

	let result = [
	  {name: 'маг', health: 100},
	  {name: 'лучник', health: 80},
	  {name: 'мечник', health: 10}
]	;

	expect(health(sours)).toEqual(result);
});
