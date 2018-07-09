$(function(){

	var example = ['design', 'ui / ux', 'identity', 'illustration'];

  textSequence(0);

  function textSequence(i) {

    if (example.length > i) {
        setTimeout(function() {
            document.getElementById("services").innerHTML = example[i];
            textSequence(++i);
        }, 2500); // 1 second (in milliseconds)

    } else if (example.length == i) { // Loop
        textSequence(0);
    }

  }

});