	var isEmulator = false;

	if( isEmulator ) {
		// add some values for faster testing
		$("#currentSalary").val(4000);
		$("#expectedSalary").val(6000);
	}

	$("#currentSalary").keyup(function(e) {
		calculateAllValues();
	});


	$("#expectedSalary").keyup(function(e) {
		// TODO: if expected CTC is less than
		// current CTC, show a message
		calculateAllValues();
	});

	function calculateAllValues() {
		var currentSalary = $("#currentSalary").val();
		var expectedSalary = $("#expectedSalary").val();

		if( currentSalary == '' || currentSalary == null || currentSalary == undefined ) {
			alert('Please enter current CTC');
			return;
		}

		if( expectedSalary == '' || expectedSalary == null || expectedSalary == undefined ) {
			alert('Please enter expected CTC');
			return;
		}

		var hike = expectedSalary - currentSalary;
		var percentHike = ( hike / currentSalary) * 100;
		var takeHome = expectedSalary / 12;

		if( hike >= 0 )
			$("#hike").text(hike);
		else
			$("#hike").text('');

		if( percentHike >= 0 )
			$("#percentHike").text(percentHike);
		else
			$("#percentHike").text('');

		if( takeHome >= 0 )
			$("#takeHome").val(takeHome);
		else
			$("#takeHome").text('');
	}

	$('#takeHome').keyup(function() {
		var takeHome = $(this).val();
		$("#expectedSalary").val( takeHome * 12 );
	});