#!/usr/bin/node

const selectedAmenites = {};

$('.amenity-checkbox').change(function () {
	const amenityId = $(this).data('id');
	const amenityName = $(this).data('name');

	if ($(this).is(':checked')) {
		selectedAmenites[amenityId] = amenityName;
	} else {
		delete selectedAmenites[amenityId];
	}
	console.log(selectedAmenites);
	
	// Update the h4 tag with the list of selected amenities
	const amenitiesList = Object.values(selectedAmenities).join(', ');
	$('.Amenities h4').text('Amenities: ' + amenitiesList);
	
});
