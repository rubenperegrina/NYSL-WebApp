
var nyslApp = angular.module('nyslApp', ['ngRoute']);


nyslApp.config(function($routeProvider) {
    $routeProvider


        .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })


        .when('/about', {
        templateUrl : 'pages/about.html',
        controller  : 'aboutController'
    })

        .when('/events', {
        templateUrl : 'pages/events.html',
        controller  : 'mainController'
    })

        .when('/messages', {
        templateUrl : 'pages/messages.html',
        controller  : 'mainController'
    })

        .when('/registration', {
        templateUrl : 'pages/registration.html',
        controller  : 'mainController'
    })

        .when('/rules', {
        templateUrl : 'pages/rules.html',
        controller  : 'mainController'
    })

        .when('/teams', {
        templateUrl : 'pages/teams.html',
        controller  : 'mainController'
    })

        .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller  : 'contactController'
    });
});

// create the controller and inject Angular's $scope
nyslApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

// create the controller and inject Angular's $scope
nyslApp.controller('titleController', function($scope) {
    // create a message to display in our view
    $scope.pageTitle = "NYSL";

    $('nav li a').click(function() {
        $scope.pageTitle = $(this).text();
    });


});

nyslApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';

});

nyslApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';


    //////////////////


    // create the module and name it nyslApp
    var nyslApp = angular.module('nyslApp', []);

});

nyslApp.controller('teamsController', function($scope) {

    var teams = [
        {
            img:"http://lh4.ggpht.com/_gHhBxs3JECA/TO7HOi_Dr-I/AAAAAAAAALc/SYDcDtsjRYo/real.png",
            info:"Año fundación 1902 Presidente Florentino Pérez Rodríguez Jefe de prensa Marta Santisteban López E-mail: prensa@realmadrid.es Teléfono 0034 913 984 300 Fax 0034 913 984 386 E-mail mensajes@realmadrid.com Temporadas en LaLiga Santander 86 Temporadas en LaLiga 1|2|3 0 Núm de socios 91.846 Núm de abonados 63.094 Firma deportiva Adidas Estadio Estadio Santiago Bernabéu Dimensiones Estadio 105 x 68 Aforo 80.000",
            id:'1'
        },
        {
            img:"http://lh5.ggpht.com/_gHhBxs3JECA/TO7EX31LTqI/AAAAAAAAALc/yTBPh7NBaMY/barcelona.png",
            info:"Año fundación 1899 Presidente Josep M. Bartomeu Jefe de prensa José Manuel Lázaro E-mail: premsa@fcbarcelona.cat  Teléfono:  0034 934 963 754 Teléfono 0034 902 189 900 E-mail oab@fcbarcelona.cat Temporadas en LaLiga Santander 85 Temporadas en LaLiga 1|2|3 0 Núm de socios 153.458 Núm de abonados 80.500 Firma deportiva Nike Estadio Camp Nou Dimensiones Estadio 105 x 68 Aforo 99.354",
            id:'2'
        },
        {
            img:"http://lh4.ggpht.com/_gHhBxs3JECA/TO7EYIMtsnI/AAAAAAAAALc/Vjqt-2lN5QU/Bayern.png",
            info:"Año fundación 1902 Presidente Florentino Pérez Rodríguez Jefe de prensa Marta Santisteban López E-mail: prensa@realmadrid.es Teléfono 0034 913 984 300 Fax 0034 913 984 386 E-mail mensajes@realmadrid.com Temporadas en LaLiga Santander 86 Temporadas en LaLiga 1|2|3 0 Núm de socios 91.846 Núm de abonados 63.094 Firma deportiva Adidas Estadio Estadio Santiago Bernabéu Dimensiones Estadio 105 x 68 Aforo 80.000",
            id:'3'
        },
        {
            img:"http://lh4.ggpht.com/_gHhBxs3JECA/TO7EInnjZhI/AAAAAAAAALc/dhysgzqUE_I/Arsenal.png",
            info:"Año fundación 1902 Presidente Florentino Pérez Rodríguez Jefe de prensa Marta Santisteban López E-mail: prensa@realmadrid.es Teléfono 0034 913 984 300 Fax 0034 913 984 386 E-mail mensajes@realmadrid.com Temporadas en LaLiga Santander 86 Temporadas en LaLiga 1|2|3 0 Núm de socios 91.846 Núm de abonados 63.094 Firma deportiva Adidas Estadio Estadio Santiago Bernabéu Dimensiones Estadio 105 x 68 Aforo 80.000",
            id:'4'
        },
        {
            img:"http://lh5.ggpht.com/_gHhBxs3JECA/TO7E7H7SVLI/AAAAAAAAALc/92ScaBHSpv4/boca.png",
            info:"Año fundación 1902 Presidente Florentino Pérez Rodríguez Jefe de prensa Marta Santisteban López E-mail: prensa@realmadrid.es Teléfono 0034 913 984 300 Fax 0034 913 984 386 E-mail mensajes@realmadrid.com Temporadas en LaLiga Santander 86 Temporadas en LaLiga 1|2|3 0 Núm de socios 91.846 Núm de abonados 63.094 Firma deportiva Adidas Estadio Estadio Santiago Bernabéu Dimensiones Estadio 105 x 68 Aforo 80.000",
            id:'5'
        },
        {
            img:"http://lh5.ggpht.com/_gHhBxs3JECA/TO7GBhX82FI/AAAAAAAAALc/coiuhOpViP4/Juventus.png",
            info:"Año fundación 1902 Presidente Florentino Pérez Rodríguez Jefe de prensa Marta Santisteban López E-mail: prensa@realmadrid.es Teléfono 0034 913 984 300 Fax 0034 913 984 386 E-mail mensajes@realmadrid.com Temporadas en LaLiga Santander 86 Temporadas en LaLiga 1|2|3 0 Núm de socios 91.846 Núm de abonados 63.094 Firma deportiva Adidas Estadio Estadio Santiago Bernabéu Dimensiones Estadio 105 x 68 Aforo 80.000",
            id:'6'
        },
        {
            img:"http://lh3.ggpht.com/_gHhBxs3JECA/TO7GUUCLpII/AAAAAAAAALc/r3G7FCDrN7E/Manchester-City.png",
            info:"Año fundación 1902 Presidente Florentino Pérez Rodríguez Jefe de prensa Marta Santisteban López E-mail: prensa@realmadrid.es Teléfono 0034 913 984 300 Fax 0034 913 984 386 E-mail mensajes@realmadrid.com Temporadas en LaLiga Santander 86 Temporadas en LaLiga 1|2|3 0 Núm de socios 91.846 Núm de abonados 63.094 Firma deportiva Adidas Estadio Estadio Santiago Bernabéu Dimensiones Estadio 105 x 68 Aforo 80.000",
            id:'7'

        },
        {
            img:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/781px-SL_Benfica_logo.svg.png",
            info:"Año fundación 1902 Presidente Florentino Pérez Rodríguez Jefe de prensa Marta Santisteban López E-mail: prensa@realmadrid.es Teléfono 0034 913 984 300 Fax 0034 913 984 386 E-mail mensajes@realmadrid.com Temporadas en LaLiga Santander 86 Temporadas en LaLiga 1|2|3 0 Núm de socios 91.846 Núm de abonados 63.094 Firma deportiva Adidas Estadio Estadio Santiago Bernabéu Dimensiones Estadio 105 x 68 Aforo 80.000",
            id:'8'
        }
    ];

    $scope.teams = teams;

    $scope.pulsar = function (team){

        $("#"+team.id).toggle();
    }
});

nyslApp.controller('matchesController', function($scope) {
    $scope.message = 'Look! I am an about page.';



    var matches = [
        {
            date:"25 de Noviembre",
            local: "Equipo 1",
            logolocal:"http://lh4.ggpht.com/_gHhBxs3JECA/TO7HOi_Dr-I/AAAAAAAAALc/SYDcDtsjRYo/real.png",
            visitant: "Equipo 2",
            logovisitant:"http://lh5.ggpht.com/_gHhBxs3JECA/TO7EX31LTqI/AAAAAAAAALc/yTBPh7NBaMY/barcelona.png",
            info:"C/Sin Nombre Nombre 123 18:00",
            map:"https://www.google.com/maps/d/embed?mid=1x691Qo-47hH5NpPE0tYyQ_qqAIQ",
            id: 'E1vsE2'
        },
        {
            date: "26 de Noviembre",
            local: "Equipo 3",
            logolocal:"http://lh4.ggpht.com/_gHhBxs3JECA/TO7EYIMtsnI/AAAAAAAAALc/Vjqt-2lN5QU/Bayern.png",
            visitant: "Equipo 4",
            logovisitant:"http://lh4.ggpht.com/_gHhBxs3JECA/TO7EInnjZhI/AAAAAAAAALc/dhysgzqUE_I/Arsenal.png",
            info:"C/Sin Nombre Nombre 456 16:00",
            id: 'E3vsE4'
        },
        {
            date: "4 de Diciembre",
            local: "Equipo 5",
            logolocal:"http://lh5.ggpht.com/_gHhBxs3JECA/TO7E7H7SVLI/AAAAAAAAALc/92ScaBHSpv4/boca.png",
            visitant: "Equipo 6",
            logovisitant:"http://lh5.ggpht.com/_gHhBxs3JECA/TO7GBhX82FI/AAAAAAAAALc/coiuhOpViP4/Juventus.png",
            info:"C/Sin Nombre Nombre 789 12:00",
            id: 'E5vsE6'            
        },
        {
            date: "10 de Diciembre",
            local: "Equipo 7",
            logolocal:"http://lh3.ggpht.com/_gHhBxs3JECA/TO7GUUCLpII/AAAAAAAAALc/r3G7FCDrN7E/Manchester-City.png",
            visitant: "Equipo 8",
            logovisitant:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/781px-SL_Benfica_logo.svg.png",
            info:"C/Sin Nombre Nombre 012 10:00",
            id: 'E7vsE8'            
        }

    ];

    $scope.matches = matches;

    $scope.pulsar = function (match){
//        $("#"+match.id).removeClass("match-info");
        $("#"+match.id).toggle();
        
        
    }

});