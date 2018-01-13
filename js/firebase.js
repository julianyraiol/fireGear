var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

firebase.initializeApp(config);

var database = firebase.database();

function send_db(x, y, z){
	console.log(x + " " + y + " " + z);
	firebase.database().ref('moviment').push().set({
	    x: x,
	    y: y,
	    z: z
	});	
}