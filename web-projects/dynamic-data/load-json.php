<!DOCTYPE html>
<html>
<head>
<title>Mahua Sarkar</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  
  <link rel="stylesheet" href="load-json.css">
  
<script>
$(document).ready(function(){
  $.getJSON("demo_ajax_json.js", function(data){
		var countLocations = Object.keys(data).length;
		//console.log(countLocations);
		
		//console.log(Object.keys(data)[1]);//get the key form here
		//console.log(Object.values(data)[0].locationName);// get the value from here
		
		for(i=0;i<countLocations;i++){
		//console.log(Object.values(data)[i].locationName);
		var myNumData = Object.keys(data)[i];
			var allItem = '<div class="itemDiv ">'+
							'<img class="thumbnailImage" src="'+Object.values(data)[i].imageThumbnail+'">'+
							'<span class="thumbnailName text-center">'+Object.values(data)[i].locationName+'</span>'+
						'</div>'
			$("#allItem").append(allItem);
		}

		$("#headerDiv").html(Object.values(data)[0].locationName);
		$("#bannerImage").attr("src", Object.values(data)[0].imageBanner);
		$("#description").html(Object.values(data)[0].locationDescription);
		$("#allItem .itemDiv").first().addClass("active");
		
	}).fail(function(){
		console.log("An error has occurred.");
	});
	
	//to activate the required item
	$("body").delegate(".itemDiv", "click", function(){
		$( ".itemDiv" ).each(function( index ) {
		  if ($(this).hasClass('active')){
			$(this).removeClass('active');
		  }else{}
		});
			
		  var i = $(this).index();//setting current element
		  $.getJSON("demo_ajax_json.js", function(data){
			$("#headerDiv").html(Object.values(data)[i].locationName);
			$("#bannerImage").attr("src", Object.values(data)[i].imageBanner);
			$("#description").html(Object.values(data)[i].locationDescription);
		  }).fail(function(){
			console.log("An error has occurred.");
		  });
		$(this).addClass("active");
	});
	
	$( "#prevSlider" ).click(function() {
		goToItem("prevItem");
	});
	$( "#nextSlider" ).click(function() {
		goToItem("nextItem");
	});
	
	function goToItem(goToDirection){
		var curEle = $(".itemDiv.active").index();
		$.getJSON("demo_ajax_json.js", function(data){
			var countLocations = Object.keys(data).length;
			if(goToDirection==="prevItem"){
				if(curEle == 0) {
					curEle = countLocations - 1;
				}
				else {
					curEle = curEle - 1;
				}
			}
			else if(goToDirection==="nextItem"){
				if(curEle == countLocations - 1) {
					curEle = 0;
				}
				else {
					curEle = curEle + 1;
				}
				//console.log(curEle);
			}
			else{
			}
			$(".itemDiv")[curEle].click();
			
		  }).fail(function(){
			console.log("An error has occurred.");
		  });
	}
});

</script>
</head>
<body>
<div class="mainDiv">
	<div class="headerRow">
		<div class="container">
			<div class="row">
				<div id="headerDiv">
					
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<img id="bannerImage" src="">
			<p id="description">
			</p>
			<div class="centerOnweb">
				<div id="allItem">
				</div>
			</div>
			<div class="itemSliderDiv">
				<center>
					<img id="prevSlider" class="itemSlider" src="images/prevBtn.png">
					<img id="nextSlider" class="itemSlider" src="images/nextBtn.png">
				<center>
			</div>
		</div>
	</div>
	
</div>

</body>
</html>
