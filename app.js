$(document).ready(function () {
    $('.demo').click(function () {
        $(this).hide(200);
    });
});
$('input').each(function (i, btnSubmit) {
function notify() { 
     alert( "Button clicked" );
      }
      $( "#btnSubmit" ).on( "click", notify );
     });
     
$( "input" )
     .keyup(function() {
       var value = $( this ).val();
       $( "p" ).text( value );
     })
 .keyup();
$(document).ready (function() {
    $("#btnSubmit").click(function() {
        var str =
    $("#textId").val();
        alert(str);
    });
});
/* enable when user types in input field, otherwise disable #7 */
$(function() {
    $(":text").keypress(check_submit).each(function() 
    {
        check_submit();
    });
});
function check_submit() {
    if ($(this).val().length ==0) {
        $(":submit").attr("disabled", true);
    } else {
        $(":submit").removeAttr("disabled");
    }
}
/* create div and append to body #8 */
let divCreate = $("body").append("div");
$(divCreate).attr("id", "divcr");
$(divCreate).attr("name", "divnm");

/* when user types in input field and click submit, append text in an h2 element to the div #9 */
$(document).ready(function() {
    $("#btnSubmit").click(function(){
        var addTxt=$("input[id=textId]").val();
        $(".divnm").append(".<h2></h2>");
    });
});
/* when user mouse over h2 element, assign a new background color and border radius #10 */
/* $( "h2" ).on( "mouseover", function() {
    $( this ).css( "color", "red" );
    $( this ).css( "border-radius", "10px");
  }); */
  /* create a list on mouseover #11 */
  $( "li" ).on( "mouseover", function() {
    $( this ).css( "color", "red" );
  });
/*  create unordered list and append it to the body */
var ul = $('<ul>');  
ul.appendTo('body')  
function append(li) {  
      ul.append('<li>' + text + '</li>');
 }      
$("body").append("<ul id='uoList'></ul>");
/* when the user submits the form, append the text as list item to the unordered list */
$("#btnSubmit").click(function() {
    ul.append('<li>' + text + '</li>');
});
/* when user clicks li, assign it a random color */
$(function(){
    // The list items
    var $listItems = $("#navigation li");
    // Classes we want to use
    var classes = "red yellow green blue black".split(" ");
    // Function to generate a random class
    function getRandomClass() {
        return classes[Math.floor(Math.random() * classes.length)]
    }
    
    $listItems.click(function(e){
        var $elm = $(this); 
        if (e.type === "mousedown") {
            // Generate new class, add it to dataset and class
            var randomClass = getRandomClass();
            $elm.data("class", randomClass).addClass(randomClass);
        } else {
            // Remove previous class, if any
            $elm.removeClass($elm.data("class"));
        }
    });
});
/* when user double clicks the list, remove the item that was clicked on */
$( "li" ).dblclick(function() {
    $( "li" ).remove();
  });
  
