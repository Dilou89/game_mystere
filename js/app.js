$(document).ready(function(){
	var nbreMyst;
	var number;
	var jeu;
	var gain=[]

	$("#start").click(function(){


		nbreMyst=Math.floor (Math.random () * 10);
		var i = 0;
		console.log(nbreMyst);
		

		$("#essai").keypress(function(e){
			if(e.keyCode == 13){
				number=$('#essai').val();

				if (nbreMyst<number){ 
					$(".alert-grand").show();
				}

				if(nbreMyst>number){
					$(".alert-petit").show();
				}
				else if(nbreMyst==number)
				{
					jeu=true;

					$(".alert-success").show();

				}
				i++;

				if(i>=3){
					jeu=false;
					$(".alert-perdu").show();
					

				}




			}
		});
	});
});