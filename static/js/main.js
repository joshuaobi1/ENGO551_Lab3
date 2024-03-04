document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('mapid').setView([51.0447, -114.0719], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    var markers = L.markerClusterGroup();

    $('#date-range').daterangepicker({
        locale: { format: 'YYYY-MM-DD' },
        autoApply: true,
    });

    $('#search-form').on('submit', function(e) {
        e.preventDefault();
        var dates = $('#date-range').val().split(' - ');
        var start = dates[0];
        var end = dates[1];
        var url = `https://data.calgary.ca/resource/c2es-76ed.geojson?$where=issueddate between '${start}' and '${end}'`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                markers.clearLayers();
                L.geoJSON(data, {
                    onEachFeature: function (feature, layer) {
                        layer.bindPopup(`
                            <strong>Date Issued:</strong> ${feature.properties.issueddate}<br>
                            <strong>Work Class Group:</strong> ${feature.properties.workclassgroup}<br>
                            <strong>Contractor Name:</strong> ${feature.properties.contractorname || 'N/A'}<br>
                            <strong>Community Name:</strong> ${feature.properties.communityname}<br>
                            <strong>Original Address:</strong> ${feature.properties.originaladdress}<br>
                            
                        `);
                    }
                }).addTo(markers);
                map.addLayer(markers);
            }).catch(error => console.error('Error fetching data:', error));
    });
});
