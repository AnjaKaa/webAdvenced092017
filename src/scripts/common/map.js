function initMap() {
    
                // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
                map = new google.maps.Map(document.getElementById('map'), {
                    // При создании объекта карты необходимо указать его свойства
                    // center - определяем точку на которой карта будет центрироваться
                    center: {lat: -34.397, lng: 150.644},
                    // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
                    zoom: 8
                });

module.exports = initMap;              