$('document').ready(function () {
  let checkedAmenities = [];

  $(".popover input[type='checkbox']").change(function () {
    if (this.checked) {
      checkedAmenities.push($(this).attr('data-id'));
    } else {
      const index = checkedAmenities.indexOf($(this).attr('data-id'));
      if (index > -1) { // only splice array when item is found
        checkedAmenities.splice(index, 1); // 2nd parameter means remove one item only
      }
    }

    $('.amenities h4').text('');
    checkedAmenities.forEach(amenity => {
      $('.amenities h4').text($('.amenities h4').text() + ', ' + $(`input[data-id=${amenity}]`).attr('data-name'))
    })
  });
});
