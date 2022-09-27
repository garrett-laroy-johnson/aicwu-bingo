
let tes;
let drawn = [];
let pixRes;

function setup() {
  let seed = getItem("seed");
  createCanvas(window.innerWidth, window.innerHeight);
pixRes=width/5;
if (seed === null){
  seed = Math.floor(random(0,10000));
  storeItem("seed",seed);
}
  randomSeed(seed);

    background(220);
    makeTiles();
  }

function draw() {
}



function makeTiles(){
let tileKeys = Object.keys(tiles);
for (x=0;x<5;x++){
for (y = 0;y<5;y++){

  let rand = random(tileKeys);
  let t = Object.values(tiles[rand]);
  textSize(pixRes/7);
  square(x*pixRes,y*pixRes,pixRes);
  text(t, x*pixRes,y*pixRes,pixRes,pixRes)
}

}

}

const tiles = {
  one:{
    text:"MANDATORY PT FACULTY MEETINGS",
    link:""
  },
  two:{
    text:"THE UNION WILL FORCE YOU TO GO ON STRIKE",
    link:""
  },
  three:{
    text:"THE UNION JUST WANTS YOUR MONEY",
    link:""
  },
  four:{
    text:"YOU WILL LOSE WAGES AND BENEFITS",
    link:""
  },
  five:{
    text:"YOU CAN'T AFFORD THE UNION DUES",
    link:""
  },
  six:{
    text:"THE UNION WILL FORCE YOU TO GO ON STRIKE",
    link:""
  },
  seven:{
    text:"THE UNION WILL FORCE YOU TO GO ON STRIKE",
    link:""
  },
  eight:{
    text:"OUR COVID PRECAUTIONS KEEP EVERYONE SAFE",
    link:""
  },
  nine:{
    text:"A UNION WILL BECOME BETWEEN YOU AND MANAGEMENT",
    link:""
  },
  ten:{
    text:"WE CAN'T SUPPORT A UNION DUE TO THE FINANCIAL STRAINS OF COVID",
    link:""
  },
  eleven:{
    text:"OUR COVID PRECAUTIONS KEEP EVERYONE SAFE",
    link:""
  },
  twelve:{
    text:"UNION BOSSES MAKE TOO MUCH",
    link:""
  },
  thirteen:{
    text:"WE MAY HAVE TO CLOSE OR DOWNSIZE",
    link:""
  },
  fourteen:{
    text:"WE CAN'T SUPPORT A UNION DUE TO THE FINANCIAL STRAINS OF COVID",
    link:""
  },
  fifteen:{
    text:"THE UNION CANNOT GUARANTEE BETTER BENEFITS",
    link:""
  },
  sixteen:{
    text:"WHAT ABOUT THE EQUITY WORKING GROUPS?",
    link:""
  },
  seventeen:{
    text:"YOU WILL PAY DUES & MAY NEVER GET A CONTRACT",
    link:""
  },
  eighteen:{
    text:"MANAGERS BECOME VERY FRIENDLY",
    link:""
  },
  nineteen:{
    text:"IT'S HARD TO GET RID OF A UNION",
    link:""
  },
  twenty:{
    text:"YOU'RE LUCKY TO HAVE A JOB RIGHT NOW",
    link:""
  },
  twentyone:{
    text:"WE'RE A FAMILY. WE CAN WORK OUT OUR PROBLEMS",
    link:""
  },
  twentytwo:{
    text:"UNIONS PROTECT LAZY WORKERS",
    link:""
  },
  twentythree:{
    text:"THE PEOPLE & CULTURE TEAM WILL FIX THESE PROBLEMS",
    link:""
  },
  twentyfour:{
    text:"OFFERS OF PROMOTIONS OR RAISES",
    link:""
  },
  twentyfive:{
    text:"WE CAN'T BE FLEXIBLE ONCE YOU HAVE A UNION",
    link:""
  },
  twentysix:{
    text:"HIRE A UNION BUSTING LAW FIRM",
    link:""
  },
  twentyseven:{
    text:"WE ALREADY HAVE AN OPEN DOOR POLICY",
    link:""
  },
  twentyeight:{
    text:"I THOUGHT YOU BELIEVED IN OUR MISSION",
    link:""
  }
}
