$(document).ready(function(){ 
    $( ".image1" ).click(function() {
    $(".image1").hide();
    $(".design").show();
      
  });
  $( ".design" ).click(function() {
    $(".image1").show();
    $(".design").hide();

  });

  $( ".image2" ).click(function() {
    $(".image2").hide();
    $(".development").show();
      
  });
  $( ".development" ).click(function() {
    $(".image2").show();
    $(".development").hide();

  });

  $( ".image3" ).click(function() {
    $(".image3").hide();
    $(".product").show();
      
  });
  $( ".product" ).click(function() {
    $(".image3").show();
    $(".product").hide();

  });
});


$(document).ready(function(){ 

$("#work1").hover( function(){
  $(".hover1").show().offset($(this).offset());
}, function(){
  $(".hover1").hide();
});

$("#work2").hover( function(){
  $(".hover2").show().offset($(this).offset());
}, function(){
  $(".hover2").hide();
});

$("#work3").hover( function(){
  $(".hover3").show().offset($(this).offset());
}, function(){
  $(".hover3").hide();
});
$("#work4").hover( function(){
  $(".hover4").show().offset($(this).offset());
}, function(){
  $(".hover4").hide();
});
});
$("#work5").hover( function(){
  $(".hover5").show().offset($(this).offset());
}, function(){
  $(".hover5").hide();
});
$("#work6").hover( function(){
  $(".hover6").show().offset($(this).offset());
}, function(){
  $(".hover6").hide();
});
$("#work7").hover( function(){
  $(".hover7").show().offset($(this).offset());
}, function(){
  $(".hover7").hide();
});
$("#work8").hover( function(){
  $(".hover8").show().offset($(this).offset());
}, function(){
  $(".hover8").hide();
});

$(document).ready(function(){ 
  $( ".submit" ).click(function() {
    alert("Feedback received, Thanks for the Comments." );
    });
});

function get (id){
return $(id).val();

}
function output(){
let t = "Your name is:  + s + "  
$("#output").text(t);

}
$(document).ready(function(){ 
  $( ".submit" ).click(function() {
function get(id) {
  var name = $( "#name" ).val();
  var email = $( "#email" ).val() || [];
  // When using jQuery 3:
  // var multipleValues = $( "#multiple" ).val();
  $( "p" ).html( "<b>Name</b> " + name +
    " <b>Email</b> " + email.join( ", " ) );
}
$("#submit").text(get);
get();
});
});