console.log('Please');



// Storing the cars as objects, so they can be made into cards and modals
// and there information can be searched by arrays for final screen calculations
var carsAvailable = [
    {
        name: "BMW F700 GS",
        type: "Motorbike",
        photo1: "images/motorbike-bmw-1.jpg",
        photo2: "images/motorbike-bmw-2.jpg",
        photo3: "images/motorbike-bmw-3.jpg",
        fuelType: "Premium Unleaded 95",
        fuelEfficency: 3.71,
        transmission: "Manual",
        minPeople: 1,
        maxPeople: 1,
        minDays: 1,
        maxDays: 5,
        price: 109,
        manufacturedDate: "2016",
        engine: "798cc",
        carDescription: "The ride with BMW F 700 GS is not just safer but also offers especially high comfort – low weight, reduced seat height and a " +
        "lowering option. Ready for carefree, fun and comfortable motorcycling? Especially the BMW F 700 GS’ 75bhp engine and its outstanding handling" + 
        " riding becomes child’s play. Due to its low weight and many different seat variants from high to low-slung, it is also particularly suited to " + 
        "female riders and beginners as an ideal all-round endro machine."


    },
    {
        name: "Suzuki SV650",
        type: "Motorbike",
        photo1: "images/motorbike-suzuki-1.jpg",
        photo2: "images/motorbike-suzuki-2.jpg",
        photo3: "images/motorbike-suzuki-3.jpg",
        fuelType: "Low Octane Petrol 87",
        fuelEfficency: 3.71,
        transmission: "Manual",
        minPeople: 1,
        maxPeople: 1, 
        minDays: 1,
        maxDays: 5,
        price: 109,
        manufacturedDate: "2017",
        engine: "645cc",
        carDescription: "The Suzuki SV 650 is available as a full power or LAMS (learner approved) bike.The 2017 Suzuki SV 650 introduces a new version" +
        " of an iconic motorcycle that embodies the sporty personality that only a lively, mid-sized V-twin roadster can deliver. Its polished powerplant " +
        "provides increased performance with low emissions and outstanding fuel economy, mated to refined trim and lightweight chassis that delivers a" +
        "sporty, exciting ride."
        



    },
    {
        name: "Corolla Hatch GX",
        type: "Small Car",
        photo1: "images/small-corolla-1.jpg",
        photo2: "images/small-corolla-2.jpg",
        photo3: "images/small-corolla-3.jpg",
        fuelType: "Petrol",
        fuelEfficency: 8.5,
        transmission: 'Automatic',
        minPeople: 1, 
        maxPeople: 2,   
        minDays: 1,
        maxDays: 10,
        price: 129,
        manufacturedDate: "2018",
        engine: "2000cc",
        carDescription: "The 2019 Corolla hatch continues to present the practicality and efficiency it has delivered to generations of New Zealanders, " +
        "with added technology and contemporary style. The Corolla GX hatch rides on stylish 16” alloy wheels which, combined with Toyota’s strenuous " +
        "efforts to mitigate unwanted road noise, provide for a very comfortable driving experience.You will also note just how peaceful it is inside the " +
        "Corolla hatch’s cabin; Toyota has worked hard to improve on silencing material used in the model’s interior panels to ensure the quietest possible " +
        "ride, regardless of the road surface you are travelling on."
       



    },
    {
        name: "Yaris GX",
        type: "Small Car",
        photo1: "images/small-yaris-1.jpg",
        photo2: "images/small-yaris-2.jpg",
        photo3: "images/small-yaris-3.jpg",
        fuelType: "Petrol",
        fuelEfficency: 8.5,
        transmission: "Manual",
        minPeople: 1,
        maxPeople: 2,
        minDays: 1,
        maxDays: 10,
        price: 129,
        manufacturedDate: "2017",
        engine: "1300cc",
        carDescription: "Yaris Hatch is bursting with funky features and cool technologies. Great looking and with a bubbly personality to match, " +
        "it’s not only a fun way to get around, but safe and stylish too. The 5-star ANCAP rated Yaris range gives you peace of mind while you’re " +
        "out and about getting on with your day. Its standard levels of safety technology have to be seen to be believed. Hop in; it’s easy. And " +
        "you simply won’t believe you’re sitting in Toyota’s most compact hatchback. Look around the cabin and not only will you be impressed with " +
        "the quality materials on offer, you’ll also note that this is one compact car with comfortable dimensions."



    },
    {
        name: "Toyota Rav4",
        type: "Large Car",
        photo1: "images/largeToyota1.jpg",
        photo2: "images/largeToyota2.jpg",
        photo3: "images/largeToyota3.jpg",
        fuelType: "Petrol",
        fuelEfficency: 9.7,
        transmission: "Automatic",
        minPeople: 1,
        maxPeople: 5,
        minDays: 3,
        maxDays: 10,
        price: 144,
        manufacturedDate: "2018",
        engine: "2500cc",
        carDescription: "Next-Gen RAV4 is a No Compromise SUV designed to meet the needs of active, adventurous and sustainably-conscious New Zealand " +
        "vistors who are both young and young at heart. The Next-Gen RAV4 SUV provides high levels of safety, fuel-efficiency, occupant comfort, " +
        "luggage capacity, towing capability, and user-friendly design and technology."



    },
    {
        name: "Corolla Wagon GX",
        type: "Large Car",
        photo1: "images/large-wagon-1.jpg",
        photo2: "images/large-wagon-2.jpg",
        photo3: "images/large-wagon-3.jpg",
        fuelType: "Petrol",
        fuelEfficency: 9.7,
        transmission: "Automatic",
        minPeople: 1,
        maxPeople: 5,
        minDays: 3,
        maxDays: 10,
        price: 144,
        manufacturedDate: "2017",
        engine: "1800cc",
        carDescription: "The all new Corolla Wagon GX is spacious, luxurious and sporty making it the most agile Corolla Wagon yet." +
        "Equipped with Smart Key Entry and Push Button Start. A reversing camera with dynamic guide lines add to the convenient " +
        "safety features of the all-new Corolla Wagon. The Wagon features a low roof height making easy work of loading anything " +
        "from sports gear to holiday luggage to a surfboard on the roof."



    },
    {
        name: "Ford Coachmen Freelancer",
        type: "Motorhome",
        photo1: "images/home-ford-1.jpg",
        photo2: "images/home-ford-2.jpg",
        photo3: "images/home-ford-3.jpg",
        fuelType: "Diesel",
        fuelEfficency: 17,
        transmission: "Manual",
        minPeople: 2,
        maxPeople: 6,
        minDays: 2,
        maxDays: 15,
        price: 200,
        manufacturedDate: "2011",
        engine: "198hp",
        carDescription: "With all the comforts of home, this offers the ultimate motorhome experience for a family of up to" +
        " 6 people. Large and spacious inside, two separate sleeping/living areas provide real flexibility. On a lazy day " +
        "you can leave the bed made up, passenger seating directly behind the driver means you can keep an eye on the kids" +
        " with belted seating for 4! All extras are taken care of with a generous kitchen, spacious bathroom, extra-large beds," +
        " open-plan living, and many more features to make your holiday a pleasure. Your very own home away from home!" +
        "Equipped with Smart Key Entry and Push Button Start. A reversing camera with dynamic guide lines add to the convenient " +
        "safety features of the all-new Corolla Wagon. The Wagon features a low roof height making easy work of loading anything " +
        "from sports gear to holiday luggage to a surfboard on the roof."



    },
    {
        name: "Britz Explorer 4 Berth Campervan",
        type: "Motorhome",
        photo1: "images/home-britz-1.jpg",
        photo2: "images/home-britz-2.jpg",
        photo3: "images/home-britz-3.jpg",
        fuelType: "Diesel",
        fuelEfficency: 17,
        transmission: "Automatic",
        minPeople: 2,
        maxPeople: 6,
        minDays: 2,
        maxDays: 15,
        price: 200,
        manufacturedDate: "2016",
        engine: "198hp",
        carDescription: "The Explorer 4 Berth campervan is perfect for a spacious trip away and ideal for a family of four or group of friends." +
        "The Britz Explorer 4 Berth Motorhome includes many of our own innovative features. All 4 passengers sit up front together while travelling" +
        " New Zealand, with two purpose built seats behind the driver. At day’s end just swivel the front seats around to create a lounge area for " +
        "enjoying a drink, playing games or viewing your favourite DVD. Internal access between the driver’s cab and the rear living area," +
        "Internal access between the driver’s cab and the rear living area, swivelling front seats, shower and toilet, refrigerator with freezer" + 
        ", microwave, excellent kitchen facilities , LCD screen & DVD player and a filtered water system are just some of the features. Everything " +
        "you need for your New Zealand campervan holiday experience."



    },
    
]

var locations = [
    {
        name: "Auckland",
        lat: -37.0082476,
        lng: 174.7828471
    },
    {
        name: "Wellington",
        lat: -41.3275941,
        lng: 174.8054097
    },
    {
        name: "Christchurch",
        lat: -43.4863981,
        lng: 172.5346818
    },
    {
        name: "Dunedin",
        lat: -45.9258615,
        lng: 170.1999794
    },
    
]