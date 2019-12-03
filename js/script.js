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
    photo2: "images/motorbike-suzuki-2.jpeg",
    photo3: "images/motorbike-suzuki-3.jpg",
    fuelType: "Petrol 87",
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
    photo1: "images/large-toyota-1.jpg",
    photo2: "images/large-toyota-2.jpg",
    photo3: "images/large-toyota-3.jpg",
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
      " swivelling front seats, shower and toilet, refrigerator with freezer" +
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
    $('#fromButtonConfirm').text('Select ' + cityName);

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
    $('#toButtonConfirm').text('Select ' + cityName);

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
    initMap(cityFrom, cityTo);


  });
  var script = document.createElement('script');
  // script.src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDbpUzFX_ey574BjAKWiBA7VHN11-27IHc&callback=initMap';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDbpUzFX_ey574BjAKWiBA7VHN11-27IHc';
  document.getElementsByTagName('body')[0].appendChild(script);

  // Step 4


  // Step 5
  // $('#test').daterangepicker({
  //   // opens: 'left'
  //   singleDatePicker: true,
  //   autoUpdateInput: false,
  // }, function(start, end, label) {
  //   console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  // });
  var startDate;
  var endDate;
  var tripLengthDays;
  $('#tripLengthDatePicker').daterangepicker({
    // singleDatePicker: true,
    showDropdowns: true,
    opens: 'center',
    minDate: new Date(),
    // minYear: 1901,
    // maxYear: parseInt(moment().format('YYYY'),10)
  }, function (start, end, label) {
    // Convert moment.js objects to date objects
    startDate = start.toDate();
    endDate = end.toDate();

    // Use moment.js diff to calculate amount of days between dates
    tripLengthDays = end.diff(start, 'days');

    if (startDate && endDate) {
      $('#timeHeading').addClass('d-none');
      $('#timeButtonConfirm').removeClass('d-none');
    }
  });

  $('#timeButtonConfirm').click(function () {
    // Hide step 5
    $('#calendarScreen').addClass('d-none');

    // Show step 6
    $('#carScreen').removeClass('d-none');
  });


  // Step 6
  for (var i = 0; i < carsAvailable.length; i++) {
    var carObject = carsAvailable[i];
    var id = 'carCard' + i;

    $('#carContent').append('<div class="card card--car" id="' + id + '" data-toggle="modal" data-target="#exampleModalCenter"> ' +
      '<img src="' + carObject.photo1 + '" class="card-img-top">' +
      '<div class="card-body ">' +
      '<h5 class="card-title font-weight-bold">' + carObject.name + '</h5>' +
      '<div class="row">' +
      '<p class="card-text col-6">' + carObject.transmission + '</p>' +
      '<p class="card-text text-right col-6 font-weight-bold">$' + carObject.price + '/day</p>' +
      '</div>' +
      '</div>' +
      '</div>');

    $('#' + id).click(carObject, function (event) {
      var carObject = event.data;
      $('#carModalContent').html('<div id="carouselExampleControls" class="carousel slide carousel--car" data-ride="carousel">' +
        '      <div class="carousel-inner">' +
        '        <div class="carousel-item active">' +
        '          <img class="d-block w-100" src="' + carObject.photo1 + '">' +
        '        </div>' +
        '        <div class="carousel-item">' +
        '          <img class="d-block w-100" src="' + carObject.photo2 + '">' +
        '        </div>' +
        '        <div class="carousel-item">' +
        '          <img class="d-block w-100" src="' + carObject.photo3 + '">' +
        '        </div>' +
        '      </div>' +
        '      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">' +
        '        <span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
        '        <span class="sr-only">Previous</span>' +
        '      </a>' +
        '      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">' +
        '        <span class="carousel-control-next-icon" aria-hidden="true"></span>' +
        '        <span class="sr-only">Next</span>' +
        '      </a>' +
        '    </div>' +

        '    <div class="modal-header">' +
        '      <h5 class="modal-title font-weight-bold" id="modalCarName">' + carObject.name + '</h5>' +

        '      <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '        <span aria-hidden="true">&times;</span>' +
        '      </button>' +
        '    </div>' +

        '    <div class="modal-body">' +

        '     <div class="container">' + '<div class="row" id="modalCarFacts"</div>' +

        '       <p class="card-text col-6"><i class="fas fa-cog"></i> ' + carObject.transmission + '</p>' +
        '       <p class="card-text col-6 font-weight-bold"><i class="fas fa-dollar-sign"></i> ' + carObject.price + '/day</p>' +
        '     </div>' +

        '     <div class="row" id="modalCarFacts"</div>' + '<p class="card-text col-6"><i class="fas fa-car"></i> ' + carObject.manufacturedDate +
        '       </p>' + '<p class="card-text col-6"><i class="fas fa-gas-pump"></i> ' + carObject.fuelType + '</p>' + '</div>' +

        '     <div class="row" id="modalCarFacts"</div>' + '<p class="card-text col-6"><i class="fas fa-bolt"></i> ' + carObject.engine +
        '       </p>' + '<p class="card-text col-6"><i class="fas fa-tachometer-alt"></i> ' + carObject.fuelEfficency + '</p>' + '</div>' +

        '     <div class="row" id="modalCarFacts"</div>' +
        '       <p class="card-text col-6"><i class="far fa-calendar-alt"></i> ' + carObject.minDays + '-' + carObject.maxDays + ' days</p>' +
        '       <p class="card-text col-6"><i class="fas fa-user-friends"></i> ' + carObject.minPeople + ' -' + carObject.maxPeople + ' people</p>' +
        '     </div></div>' +

        '       <p>' + carObject.carDescription + '</p>' +

        '    </div>' +
        '    <div class="modal-footer">' +
        '      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
        '      <button type="button" class="btn btn-primary">Save changes</button>' +
        '    </div>')
    });
  }
});

function initMap(origin, destination) {
  console.log(origin, destination);
  if (origin === "Wellington") {
    origin = "Wellington, New Zealand";
  }
  if (destination === "Auckland") {
    origin = "Auckland, New Zealand";
  }

  var auckland = { lat: -36.8485, lng: 174.9120 };
  var wellington = { lat: -41.2865, lng: 174.7762 };
  var christchurch = { lat: -43.5321, lng: 172.6362 };
  var dunedin = { lat: -45.9258577, lng: 170.1999741 };

  var directionsService = new google.maps.DirectionsService;
  var directionsRenderer = new google.maps.DirectionsRenderer;

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -41.0058221, lng: 169.8669203 },
    zoom: 5
  });

  var marker1 = new google.maps.Marker({ position: auckland, map: map });
  var marker2 = new google.maps.Marker({ position: wellington, map: map });
  var marker3 = new google.maps.Marker({ position: christchurch, map: map });
  var marker4 = new google.maps.Marker({ position: dunedin, map: map });










  directionsRenderer.setMap(map);

  document.getElementById('toButtonConfirm').addEventListener('click', function () {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });


  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    var waypts = [];
    var checkboxArray = document.getElementById('waypoints');
    for (var i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray.options[i].selected) {
        waypts.push({
          location: checkboxArray[i].value,
          stopover: true
        });
      }
    }

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
        //    var summaryPanel = document.getElementById('directions-panel');
        //    summaryPanel.innerHTML = '';
        //    // For each route, display summary information.
        //    for (var i = 0; i < route.legs.length; i++) {
        //      var routeSegment = i + 1;
        //      summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
        //          '</b><br>';
        //      summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        //      summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        //      summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
        //      summaryPanel.innerHTML += route.legs[i].duration.text + '<br><br>';
        //      var distance = route.legs[i].distance.text;
<<<<<<< HEAD
             
    }
} else {
  window.alert('Directions request failed due to ' + status);
}
});
=======

      } else {
        window.alert('Directions request failed due to ' + status);
      }
    })
  }
>>>>>>> 1a57341a4ed300eaba0b1e3621d6ea411b361be4
}








