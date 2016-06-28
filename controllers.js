function AlumnosController($scope){
	$scope.alumnos=[  // 
			{nombre:"Juan Negro", telefono: "3121120450", curso:"5º G"},
			{nombre:"Alexis Maldonado", telefono: "3143393", curso:"7º G"},
			{nombre:"Christian Ramos", telefono: "31204933", curso:"3º G"},
			{nombre:"Jose Tlanco", telefono: "4953343", curso:"2º G"},
			{nombre:"Mary", telefono: "43343", curso:"4º B"}
	];

	$scope.Save=function(){
		$scope.alumnos.push({
			nombre:$scope.nuevoAlumno.nombre, 
			telefono:$scope.nuevoAlumno.telefono, 
			curso:$scope.nuevoAlumno.curso
		});

		$scope.nuevoAlumno.nombre='';   
		$scope.nuevoAlumno.telefono='';   
		$scope.nuevoAlumno.curso='';   
	};
	
	$scope.getTotal=function(){
		return $scope.alumnos.length;
	}
}
/*
angular.module('myApp',[])
	.controller('AlumnosController',['$scope',function($scope){
		$scope.alumnos=[  // 
			{nombre:"Juan Negro", telefono: "3121120450", curso:"5º G"},
			{nombre:"Alexis Maldonado", telefono: "3143393", curso:"7º G"},
			{nombre:"Christian Ramos", telefono: "31204933", curso:"3º G"},
			{nombre:"Jose Tlanco", telefono: "4953343", curso:"2º G"}
		];		
	}])
*/