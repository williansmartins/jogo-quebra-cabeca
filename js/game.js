$(document).ready(function () {
  // function reorient(e) {
  //   var portrait = (window.orientation % 180 == 0);
  //   $("body > div").css("-webkit-transform", !portrait ? "rotate(-90deg)" : "");
  // }
  // window.onorientationchange = reorient;
  // window.setTimeout(reorient, 0);
});


$(function () {
	var sound1 = new Audio("sons/Pop-PhoenixJ-8164_hifi.mp3"); 
	sound1.msAudioCategory = "SoundEffect";
	sound1.load(); //For pre-loading media


    $(".square").draggable({
        snap: ".squaredotted",
        snapMode: "inner"
    });

    $(".peca").draggable({
        snap: ".buraco",
        snapMode: "inner"
    });

    $(".origem1, .origem2").draggable({
        // snap: ".destino",
        // snapMode: "inner",
        // snapTolerance: 50,
        revert: "invalid",
        // revertDuration: 200,
        opacity: .6,
        cursor: "move",
    });

    $(".destino1").droppable({
    	tolerance: "pointer",
        drop: function(event, ui) {
        	$( ".origem1" ).draggable( "destroy" );

            var $this = $(this);
            $this.append(ui.draggable);  

            var width = $this.width();
            var height = $this.height();
            var cntrLeft = (width / 2) - (ui.draggable.width() / 2);
            var cntrTop = (height / 2) - (ui.draggable.height() / 2);
            
            ui.draggable.css({
                left: cntrLeft + "px",
                top: cntrTop + "px"
            });

            //som
            sound1.play();
        },
    });
    $(".destino2").droppable({
        tolerance: "pointer",
        drop: function(event, ui) {
            $( ".origem2" ).draggable( "destroy" );

            var $this = $(this);
            $this.append(ui.draggable);  

            var width = $this.width();
            var height = $this.height();
            var cntrLeft = (width / 2) - (ui.draggable.width() / 2);
            var cntrTop = (height / 2) - (ui.draggable.height() / 2);
            
            ui.draggable.css({
                left: cntrLeft + "px",
                top: cntrTop + "px"
            });

            //som
            sound1.play();
        },
    });
});