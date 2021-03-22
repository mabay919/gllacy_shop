let checkBox1 = document.getElementById('slide-1'),
checkBox2 = document.getElementById('slide-2'),
checkBox3 = document.getElementById('slide-3'),
body = document.querySelector('body'),
checkbox1Label = document.querySelector(".label_slide_1"),
checkbox2Label = document.querySelector(".label_slide_2"),
checkbox3Label = document.querySelector(".label_slide_3");

checkbox1Label.addEventListener('click', () => {
  body.style.backgroundColor = '#849d8f'
});
checkbox2Label.addEventListener('click', () => {
  body.style.backgroundColor = '#8996a6'
});
checkbox3Label.addEventListener('click', () => {
  body.style.backgroundColor = '#9d8b84'
});


let map;
function initMap() {
  // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
  map = new google.maps.Map(document.getElementById('map'), {
    // При создании объекта карты необходимо указать его свойства
    // center - определяем точку на которой карта будет центрироваться
    center: { lat: -34.397, lng: 150.644 },
    // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
    zoom: 8,
  });
}
