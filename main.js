// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.

function tvToSell(){
  let tvStock = 0;
  let tvSold = 0
  for (let i = 0; i < inventory.length; i++) {
    tvStock += inventory[i].originalStock;
    tvSold += inventory[i].sold;
  }
  return (tvStock - tvSold);
}
const tvsInStock = tvToSell()

//Opdracht 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina

//Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.
const tvType = inventory.map((television) => {
  return television.type;
});
console.log(tvType)

//Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen
//(de hele objecten) die volledig uitverkocht zijn.
const soldOutTvs = inventory.filter((television) => {
  return television.originalStock === television.sold
});
console.log(soldOutTvs)

//Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten)
// die over AmbiLight beschikken.
const ambiLightTvs = inventory.filter((television) => {
  return television.options.ambiLight;
});
console.log(ambiLightTvs)

// Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
const tvPriceSorted = inventory.sort((a, b) => {
  return a.price - b.price;
});
console.log(tvPriceSorted)

//Opdracht 3a: Wat is onze doel-opbrengst? Bereken wat de totale opbrengst is,
//als we alle exemplaren van ieder type zouden verkopen. Geef dit in het blauw weer op de pagina.

function totalRevenue() {
  let count = 0;
  for (let i = 0; i < inventory.length; i++) {
    count += inventory[i].price * inventory[i].originalStock;
  }
  return `€ ${count}`;
}
const revenue = totalRevenue()
console.log(revenue)

//Opdracht 3b: Hoeveel hebben we tot nu toe verdient?
// Bereken hoeveel we tot nu toe verdient hebben met het aantal verkochte tv's. Geef dit weer in het groen weer op de pagina

function soldSoFar () {
  let count = 0;
  for (let i = 0; i < inventory.length; i++) {
    count += (inventory[i].sold * inventory[i].price);
  }
  return `€ ${count}`;
}
const soldTvs = soldSoFar()
console.log(soldTvs)

//DOM CODE T/M OPDRACHT 3
const tvsToSell = document.getElementById("numberToSell");
tvsToSell.textContent = tvsInStock;
const targetOfRevenue = document.getElementById("revenue");
targetOfRevenue.textContent = revenue;
const sold = document.getElementById("sold");
sold.textContent = soldTvs


//opdracht 4: Geef de type-namen van twee tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit.
//Voor nu betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg!

const tv1 = inventory.find((tv) =>{
  return tv.type === '55PUS7805';
})
console.log(tv1)

const tv2 = inventory.find((tv) =>{
  return tv.type === '43HAK6152';
})
console.log(tv2)

//DOM BIJ OPDRACHT 4
const listOfTv = document.getElementById('list');
const firstTv = document.createElement('li');
firstTv.setAttribute('class', 'tv-item');
firstTv.textContent = tv1.type;
const secTv = document.createElement('li');
secTv.setAttribute('class', 'tv-item');
secTv.textContent = tv2.type;
listOfTv.appendChild(firstTv)
listOfTv.appendChild(secTv)


