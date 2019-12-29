// Storing the cars as objects, so they can be made into cards and modals
// and there information can be searched by arrays for final screen calculations
var carsAvailable = [
  {
    name: "BMW F700 GS",
    type: "Motorbike",
    photo1: "images/motorbike-bmw-1.jpg",
    photo2: "images/motorbike-bmw-2.jpg",
    photo3: "images/motorbike-bmw-3.jpg",
    fuelType: "Petrol 95",
    fuelEfficiency: 3.71,
    transmission: "Manual",
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 5,
    price: 109,
    manufacturedDate: "2016",
    engine: "798cc",
    carDescription: "The ride with BMW F 700 GS is not just safer but also " +
      "offers especially high comfort – low weight, reduced seat height and " +
      "a lowering option. Due to its low weight and many different seat " +
      "variants from high to low-slung, it is also particularly suited to " +
      "female riders and beginners as an ideal all-round endro machine."
  },
  {
    name: "Suzuki SV650",
    type: "Motorbike",
    photo1: "images/motorbike-suzuki-1.jpg",
    photo2: "images/motorbike-suzuki-2.jpeg",
    photo3: "images/motorbike-suzuki-3.jpg",
    fuelType: "Petrol 87",
    fuelEfficiency: 3.71,
    transmission: "Manual",
    minPeople: 1,
    maxPeople: 1,
    minDays: 1,
    maxDays: 5,
    price: 109,
    manufacturedDate: "2017",
    engine: "645cc",
    carDescription: "The Suzuki SV 650 is available as a full power or LAMS " +
      "(learner approved) bike.The 2017 Suzuki SV 650 introduces a new " +
      "version of an iconic motorcycle that embodies the sporty personality " +
      "that only a lively, mid-sized V-twin roadster can deliver. " +
      "Its polished powerplant provides increased performance with low " +
      "emissions and outstanding fuel economy, mated to refined trim and " +
      "lightweight chassis that delivers a sporty, exciting ride."
  },
  {
    name: "Corolla Hatch GX",
    type: "Small Car",
    photo1: "images/small-corolla-1.jpg",
    photo2: "images/small-corolla-2.jpg",
    photo3: "images/small-corolla-3.jpg",
    fuelType: "Petrol",
    fuelEfficiency: 8.5,
    transmission: 'Automatic',
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 10,
    price: 129,
    manufacturedDate: "2018",
    engine: "2000cc",
    carDescription: "The Corolla GX hatch rides on stylish 16” alloy wheels " +
      "which, combined with Toyota’s strenuous efforts to mitigate unwanted " +
      "road noise, provide for a very comfortable driving experience. " +
      "You will also note just how peaceful it is inside the " +
      "Corolla hatch’s cabin; Toyota has worked hard to improve on " +
      "silencing material used in the model’s interior panels to ensure " +
      "the quietest possible ride, regardless of the road surface you are " +
      "travelling on."
  },
  {
    name: "Yaris GX",
    type: "Small Car",
    photo1: "images/small-yaris-1.jpg",
    photo2: "images/small-yaris-2.jpg",
    photo3: "images/small-yaris-3.jpg",
    fuelType: "Petrol",
    fuelEfficiency: 8.5,
    transmission: "Manual",
    minPeople: 1,
    maxPeople: 2,
    minDays: 1,
    maxDays: 10,
    price: 129,
    manufacturedDate: "2017",
    engine: "1300cc",
    carDescription: "Yaris Hatch is bursting with funky features and cool " +
      "technologies. It’s not only a fun way to get around, but safe and " +
      "stylish too. The 5-star ANCAP rated Yaris range gives you peace " +
      "of mind while you’re out and about. Look around the cabin and not " +
      "only will you be impressed with the quality materials on offer, " +
      "you’ll also note that this is one compact car with comfortable " +
      "dimensions."
  },
  {
    name: "Toyota Rav4",
    type: "Large Car",
    photo1: "images/large-toyota-1.jpg",
    photo2: "images/large-toyota-2.jpg",
    photo3: "images/large-toyota-3.jpg",
    fuelType: "Petrol",
    fuelEfficiency: 9.7,
    transmission: "Automatic",
    minPeople: 1,
    maxPeople: 5,
    minDays: 3,
    maxDays: 10,
    price: 144,
    manufacturedDate: "2018",
    engine: "2500cc",
    carDescription: "Next-Gen RAV4 is a No Compromise SUV designed to " +
      "meet the needs of active, adventurous and sustainably-conscious " +
      "New Zealand vistors who are both young and young at heart. The " +
      "Next-Gen RAV4 SUV provides high levels of safety, fuel-efficiency, " +
      "occupant comfort, luggage capacity, towing capability, and " +
      "user-friendly design and technology."
  },
  {
    name: "Corolla Wagon GX",
    type: "Large Car",
    photo1: "images/large-wagon-1.jpg",
    photo2: "images/large-wagon-2.jpg",
    photo3: "images/large-wagon-3.jpg",
    fuelType: "Petrol",
    fuelEfficiency: 9.7,
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
    photo2: "images/home-ford-2.jpeg",
    photo3: "images/home-ford-3.jpg",
    fuelType: "Diesel",
    fuelEfficiency: 17,
    transmission: "Manual",
    minPeople: 2,
    maxPeople: 6,
    minDays: 2,
    maxDays: 15,
    price: 200,
    manufacturedDate: "2011",
    engine: "198hp",
    carDescription: "With all the comforts of home, this offers the ultimate motorhome experience for a family of up to" +
      " 6 people.<br> Large and spacious inside, two separate sleeping/living areas provide real flexibility. All extras " +
      "are taken care of with a generous kitchen, spacious bathroom, extra-large beds, open-plan living, and many more " +
      "features to make your holiday a pleasure.<br>"
  },
  {
    name: "Britz Explorer 4 Berth Campervan",
    type: "Motorhome",
    photo1: "images/home-britz-1.jpg",
    photo2: "images/home-britz-2.jpg",
    photo3: "images/home-britz-3.jpg",
    fuelType: "Diesel",
    fuelEfficiency: 17,
    transmission: "Automatic",
    minPeople: 2,
    maxPeople: 6,
    minDays: 2,
    maxDays: 15,
    price: 200,
    manufacturedDate: "2016",
    engine: "198hp",
    carDescription: "The Explorer 4 Berth campervan is perfect for a spacious trip away and ideal for a family of four or group of friends.<br>" +
      " All 4 passengers sit up front together while travelling New Zealand, with two purpose built seats behind the driver. " +
      "At day’s end just swivel the front seats around to create a lounge area for enjoying a drink, playing games or viewing your favourite DVD." +
      "<br> Internal access between the driver’s cab and the rear living area," +
      " swivelling front seats, shower and toilet, refrigerator with freezer" +
      ", microwave, excellent kitchen facilities , LCD screen & DVD player and a filtered water system are just some of the features. Everything " +
      "you need for your New Zealand campervan holiday experience."
  }
];

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
  }
];



// Wait until page is finished loading
$(document).ready(function () {
  // Step 1
  $('#startButton').click(function () {
    // Hide step 1
    $('#startScreen').addClass('d-none');

    // Show step 2
    $('#travelingFromScreen').removeClass('d-none');
  });

  var cityFrom, cityTo;

  // Step 2
  var oldFromSelection;

  // Common code for map markers
  function step2Logic(newSelection, cityName) {
    // Turn off the location that is currently selected
    $('#' + oldFromSelection + 'StartMarker').removeClass('is-selected');
    $('#' + oldFromSelection + 'EndMarker').removeClass('d-none');

    // Turn on the newly selected location
    $('#' + newSelection + 'StartMarker').addClass('is-selected');
    $('#' + newSelection + 'EndMarker').addClass('d-none');

    // Hide the heading and show the button
    $('#journeyStartHeading').addClass('d-none');
    $('#fromButtonConfirm').removeClass('d-none');
    $('#fromButtonConfirm').text('Confirm ' + cityName);

    // Hide the 'from' kiwi and show the 'okay' kiwi
    $('#kiwiFrom').addClass('d-none');
    $('#kiwiFromOk').removeClass('d-none');

    // Store which place was clicked
    oldFromSelection = newSelection;

    console.log(cityName);
    cityFrom = cityName;

  }

  // Click handlers for map markers
  $('#aucklandStartMarker').click(function () {
    step2Logic('auckland', "Auckland");
  });
  $('#wellingtonStartMarker').click(function () {
    step2Logic('wellington', "Wellington");
  });
  $('#christchurchStartMarker').click(function () {
    step2Logic('christchurch', "Christchurch");
  });
  $('#dunedinStartMarker').click(function () {
    step2Logic('dunedin', "Dunedin");
  });

  // Click handler for confirm button
  $('#fromButtonConfirm').click(function () {
    // Hide step 2
    $('#travelingFromScreen').addClass('d-none');

    // Show step 3
    $('#travelingToScreen').removeClass('d-none');
  });



  // Step 3
  var oldToSelection;

  // Common code for map markers
  function step3Logic(newSelection, cityName) {
    // Turn off the location that is currently selected
    $('#' + oldToSelection).removeClass('is-selected');

    // Turn on the newly selected location
    $('#' + newSelection).addClass('is-selected');

    // Hide the heading and show the button
    $('#journeyEndHeading').addClass('d-none');
    $('#toButtonConfirm').removeClass('d-none');
    $('#toButtonConfirm').text('Confirm ' + cityName);

    // Hide the 'to' kiwi and show the 'okay' kiwi
    $('#kiwiTo').addClass('d-none');
    $('#kiwiToOk').removeClass('d-none');

    // Store which place was clicked
    oldToSelection = newSelection;
    console.log(cityName);
    cityTo = cityName;
  }

  // Click handlers for map markers
  $('#aucklandEndMarker').click(function () {
    step3Logic('aucklandEndMarker', "Auckland");
  });
  $('#wellingtonEndMarker').click(function () {
    step3Logic('wellingtonEndMarker', "Wellington");
  });
  $('#christchurchEndMarker').click(function () {
    step3Logic('christchurchEndMarker', "Christchurch");
  });
  $('#dunedinEndMarker').click(function () {
    step3Logic('dunedinEndMarker', "Dunedin");
  });

  // Click handler for confirm button
  $('#toButtonConfirm').click(function () {
    // Hide step 3
    $('#travelingToScreen').addClass('d-none');

    // Show step 4
    $('#numberOfPeopleScreen').removeClass('d-none');
    console.log(cityFrom, cityTo);
  });

  // Step 4 number of people selection
  var numberOfPeople;

  // Filter the cars available based on number of people selected
  var carPeopleRequirements;

  function clickPerson(personIndex) {
    for (var i = 1; i <= 6; i++) {
      if (i <= personIndex) {
        $('#person' + i).addClass('is-selected');
      } else {
        $('#person' + i).removeClass('is-selected');
      }

    }
    numberOfPeople = personIndex;


    // Hide the heading and show the button
    $('#peopleHeading').addClass('d-none');
    $('#peopleButtonConfirm').removeClass('d-none');

    if (numberOfPeople === 1) {
      $('#peopleButtonConfirm').text('Select ' + numberOfPeople + ' person');
    } else {
      $('#peopleButtonConfirm').text('Select ' + numberOfPeople + ' people');
    }

    // Filter the cars available based on number of people selected
    carPeopleRequirements = carsAvailable.filter(function (carObject) {
      return numberOfPeople >= carObject.minPeople &&
        numberOfPeople <= carObject.maxPeople;
    });

  }
  $('#person1').click(function () {
    clickPerson(1);
  });
  $('#person2').click(function () {
    clickPerson(2);
  });
  $('#person3').click(function () {
    clickPerson(3);
  });
  $('#person4').click(function () {
    clickPerson(4);
  });
  $('#person5').click(function () {
    clickPerson(5);
  });
  $('#person6').click(function () {
    clickPerson(6);
  });

  // Click handler for confirm number of people button
  $('#peopleButtonConfirm').click(function () {
    // Hide step 4
    $('#numberOfPeopleScreen').addClass('d-none');

    // Show step 5
    $('#calendarScreen').removeClass('d-none');
  });


  // Step 5 datepicker for length of trip


  var tripLengthDays;
  $('#tripLengthDatePicker').daterangepicker({
    showDropdowns: true,
    opens: 'center',
    minDate: new Date(),
  }, function (start, end, label) {


    // Use moment.js diff to calculate amount of days between dates
    tripLengthDays = end.diff(start, 'days');

    // find valid ranges for chosen dates, to ensure input will
    // result in car options
    var smallestMinDays = carPeopleRequirements[0].minDays;
    var largestMaxDays = carPeopleRequirements[0].maxDays;
    for (var i = 0; i < carPeopleRequirements.length; i++) {
      var carObject = carPeopleRequirements[i];

      if (carObject.minDays < smallestMinDays) {
        smallestMinDays = carObject.minDays;
      }

      if (carObject.maxDays > largestMaxDays) {
        largestMaxDays = carObject.maxDays;
      }


    }
    // If the date range is too big or too small show error
    if (tripLengthDays < smallestMinDays || tripLengthDays > largestMaxDays) {
      // Show error box and set text
      $('#invalidDateError').removeClass('d-none');
      $('#invalidDateError').text("Please choose a date range between " +
        smallestMinDays + " days and " +
        largestMaxDays + " days");
    } else {
      // Make sure error is hidden unless activated
      $('#invalidDateError').addClass('d-none');

      // Show date confirm button
      $('#timeHeading').addClass('d-none');
      $('#timeButtonConfirm').removeClass('d-none');

    }
  });

  $('#timeButtonConfirm').click(function () {
    // Hide step 5
    $('#calendarScreen').addClass('d-none');

    // Show step 6
    populateCards();
    $('#carScreen').removeClass('d-none');
  });


  // Step 6 Car options
  var selectedCar;
  function populateCards() {
    for (var i = 0; i < carPeopleRequirements.length; i++) {
      var carObject = carPeopleRequirements[i];
      var id = 'carCard' + i;

      var isElligible = tripLengthDays >= carObject.minDays &&
        tripLengthDays <= carObject.maxDays;

      if (isElligible) {

        $('#carContent').append('<div class="card card--car" id="' + id +
          '" data-toggle="modal" data-target="#exampleModalCenter"> ' +
          '<img src="' + carObject.photo1 + '" class="card-img-top">' +
          '<div class="card-body ">' +
          '<h5 class="card-title font-weight-bold">' + carObject.name +
          '</h5>' + '<div class="row">' +
          '<p class="card-text col-6">' + carObject.transmission + '</p>' +
          '<p class="card-text text-right col-6 font-weight-bold">$' +
          carObject.price + '/day</p>' +
          '</div>' +
          '</div>' +
          '</div>');

        $('#' + id).click(carObject, onClickCarCard);
      }
    }
  }

  // Step 7 View map
  $('#confirmBookingButton').click(function () {
    // Hide step 7 to create loop back to start
    $('#confirmScreen').addClass('d-none');

    // Show step 1
    $('#startScreen').removeClass('d-none');
  });

  function initMap(origin, destination) {
    console.log(origin, destination);

    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();

    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -41.0058221, lng: 169.8669203 },
      zoom: 5
    });


    directionsRenderer.setMap(map);


    directionsService.route({
      origin: origin,
      destination: destination,
      // waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, function (response, status) {
      if (status === 'OK') {

        console.log(response);

        directionsRenderer.setDirections(response);
        var route = response.routes[0];
        var firstRouteLeg = route.legs[0];

        // Calculations about the trip
        var distanceTravelled = firstRouteLeg.distance.text;
        var timeTaken = firstRouteLeg.duration.text;
        var litresUsed = selectedCar.fuelEfficiency * (
          firstRouteLeg.distance.value / 100000
        );
        // Made-up constant for the price of fuel
        var fuelCostPerLitre = 2.35;
        var fuelCostTotal = Math.round(litresUsed * fuelCostPerLitre);
        var carHireCostTotal = selectedCar.price * tripLengthDays;

        // Insert summaries into the page
        $('#directionsPanel').html('<h3>Details of your trip:</h3>' +
          '<div class="row">' +
          '<div class="col-6">Distance</div>' +
          '<div class="col-6 text-right">' + distanceTravelled + '</div>' +
          '</div>' +
          '<div class="row">' +
          '<div class="col-6">Time estimate</div>' +
          '<div class="col-6 text-right">' + timeTaken + '</div>' +
          '</div>' +
          '<div class="row">' +
          '<div class="col-6">Total fuel (estimate)</div>' +
          '<div class="col-6 text-right">' + Math.round(litresUsed) + 'L' +
          '</div></div>' +
          '<div class="row">' +
          '<div class="col-6">Fuel cost</div>' +
          '<div class="col-6 text-right">$' + Math.round(fuelCostTotal) +
          '</div></div>' +
          '<div class="row">' +
          '<div class="col-6">Car hire cost</div>' +
          '<div class="col-6 text-right">$' + Math.round(carHireCostTotal) +
          ' (total)</div>' +
          '</div>'
        );
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  function onClickCarCard(event) {
    var carObject = event.data;
    $('#carModalContent').html('<div id="carouselExampleControls" ' +
      'class="carousel slide carousel--car" data-ride="carousel">' +
      '      <div class="carousel-inner">' +
      '        <div class="carousel-item active">' +
      '          <img class="d-block w-100" src="' +
      carObject.photo1 + '">' +
      '        </div>' +
      '        <div class="carousel-item">' +
      '          <img class="d-block w-100" src="' +
      carObject.photo2 + '">' +
      '        </div>' +
      '        <div class="carousel-item">' +
      '          <img class="d-block w-100" src="' +
      carObject.photo3 + '">' +
      '        </div>' +
      '      </div>' +
      '      <a class="carousel-control-prev" ' +
      'href="#carouselExampleControls" role="button" ' +
      'data-slide="prev">' +
      '        <span class="carousel-control-prev-icon" ' +
      'aria-hidden="true"></span>' +
      '        <span class="sr-only">Previous</span>' +
      '      </a>' +
      '      <a class="carousel-control-next" ' +
      'href="#carouselExampleControls" role="button" ' +
      'data-slide="next">' +
      '        <span class="carousel-control-next-icon" ' +
      'aria-hidden="true"></span>' +
      '        <span class="sr-only">Next</span>' +
      '      </a>' +
      '    </div>' +

      '    <div class="modal-header">' +
      '      <h5 class="modal-title font-weight-bold" ' +
      'id="modalCarName">' + carObject.name + '</h5>' +

      '      <button type="button" class="close" data-dismiss="modal" ' +
      'aria-label="Close">' +
      '        <span aria-hidden="true">&times;</span>' +
      '      </button>' +
      '    </div>' +

      '    <div class="modal-body">' +

      '     <div class="container">' + '<div class="row" ' +
      'id="modalCarFacts"</div>' +

      '       <p class="card-text col-6"><i class="fas fa-cog"></i> ' +
      carObject.transmission + '</p>' +
      '       <p class="card-text col-6 font-weight-bold">' +
      '<i class="fas fa-dollar-sign"></i> ' + carObject.price + '/day' +
      '</p>' + '</div>' +

      '     <div class="row" id="modalCarFacts"</div>' +
      '<p class="card-text col-6"><i class="fas fa-car"></i> ' +
      carObject.manufacturedDate + '       </p>' +
      '<p class="card-text col-6"><i class="fas fa-gas-pump"></i> ' +
      carObject.fuelType + '</p>' + '</div>' +

      '     <div class="row" id="modalCarFacts"</div>' +
      '<p class="card-text col-6"><i class="fas fa-bolt"></i> ' +
      carObject.engine + '</p><p class="card-text col-6">' +
      '<i class="fas fa-tachometer-alt"></i> ' +
      carObject.fuelEfficiency + '</p>' + '</div>' +

      '     <div class="row" id="modalCarFacts"</div>' +
      '       <p class="card-text col-6">' +
      '<i class="far fa-calendar-alt"></i> ' +
      carObject.minDays + '-' + carObject.maxDays + ' days</p>' +
      '       <p class="card-text col-6">' +
      '<i class="fas fa-user-friends"></i> ' + carObject.minPeople +
      ' -' + carObject.maxPeople + ' people</p>' +
      '     </div></div>' +

      '       <p>' + carObject.carDescription + '</p>' +

      '    </div>' +
      '    <div class="modal-footer">' +
      '<button id="selectCarButton" type="button" data-dismiss="modal"' +
      'class="btn btn-primary">Select this car</button>' + '    </div>');
    $('#selectCarButton').click(function () {
      // Store selected car
      selectedCar = carObject;
      // Hide step 6
      $('#carScreen').addClass('d-none');

      // Show step 7
      $('#confirmScreen').removeClass('d-none');
      initMap(cityFrom, cityTo);
    });
  }
});



// Load google maps script
var script = document.createElement('script');
var myKey = JSON.parse(apiKey); //convert JSON data into js object
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + myKey[0].key;
document.getElementsByTagName('body')[0].appendChild(script);
