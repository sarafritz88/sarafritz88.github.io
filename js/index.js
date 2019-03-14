const key="IEn7dKTSdC2JO2oymhGr39WaHDyeMhrIot2nXy9A";

const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

const image = document.querySelector('.picofday');


fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {

        let apod = data.url;
        console.log(apod);
        document.getElementById('img1').src =apod;
    });


google.charts.load('visualization', '1', {
    'packages': ['geochart', 'table']
});
google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {

    /**
     * Array representation of data.
     *
     *  - Region            - The region name, as passed by the viz lib to the regionClick listener
     *  - State
     *  - Contact    - This is the data we're interested in visualizing
     *  - Region Code    changes the colors
     */
    let regionDataArray = [
        ['Region',
            'State',
            'Contact',
            'Region Code'],
        ['US-AL',
            'Alabama',
            '', 1],
        ['US-AK',
            'Alaska',
            '',  2],
        ['US-AZ',
            'Arizona',
            '', 3],
        ['US-AR',
            'Arkansas',
            '',  4],
        ['US-CA',
            'California',
            '', 5],
        ['US-CO',
            'Colorado',
            '',  6],
        ['US-CT',
            'Connecticut',
            '', 7],
        ['US-DE',
            'Delaware',
            '', 8],
        ['US-FL',
            'Florida',
            '', 9],
        ['US-GA',
            'Georgia',
            '', 10],
        ['US-HI',
            'Hawaii',
            '', 11],
        ['US-ID',
            'Idaho',
            '',  12],
        ['US-IA',
            'Iowa',
            '', 13],
        ['US-IL',
            'Illinois',
            '', 14],
        ['US-IN',
            'Indiana',
            '', 15],
        ['US-KS',
            'Kansas',
            '',  16],
        ['US-KY',
            'Kentucky',
            '', 17],
        ['US-LA',
            'Louisiana',
            '', 18],
        ['US-MD',
            'Maryland',
            '', 19],
        ['US-MA',
            'Massachusetts',
            '',  20],
        ['US-ME',
            'Maine',
            '', 21],
        ['US-MI',
            'Michigan',
            '', 22],
        ['US-MN',
            'Minnesota',
            '', 23],
        ['US-MS',
            'Mississippi',
            '', 24],
        ['US-MO',
            'Missouri',
            '',  25],
        ['US-MT',
            'Montana',
            '', 26],
        ['US-NE',
            'Nebraska',
            '', 27],
        ['US-NV',
            'Nevada',
            '', 28],
        ['US-NH',
            'New Hampshire',
            '', 29],
        ['US-NJ',
            'New Jersey',
            '', 30],
        ['US-NM',
            'New Mexico',
            '', 31],
        ['US-NY',
            'New York',
            '', 32],
        ['US-NC',
            'North Carolina',
            '', 33],
        ['US-ND',
            'North Dakota',
            '',34],
        ['US-OH',
            'Ohio',
            '', 35],
        ['US-OK',
            'Oklahoma',
            '', 36],
        ['US-OR',
            'Oregon',
            '', 37],
        ['US-PA',
            'Pennsylvania',
            '',38],
        ['US-RI',
            'Rhode Island',
            '',39],
        ['US-SC',
            'South Carolina',
            '', 40],
        ['US-SD',
            'South Dakota',
            '',
            41],
        ['US-TN',
            'Tennessee',
            '',
            42],
        ['US-TX',
            'Texas',
            '',
            43],
        ['US-UT',
            'Utah',
            '',
            44],
        ['US-VT',
            'Vermont',
            '',
            45],
        ['US-VA',
            'Virginia',
            '',
            46],
        ['US-WA',
            'Washington',
            '',
           47],
        ['US-WI',
            'Wisconsin',
            '',
            48],
        ['US-WV',
            'West Virginia',
           '',
            49],
        ['US-WY',
            'Wyoming',
            '',
            50],
    ];

    // Create a DataTable object based on our data
    let data = google.visualization.arrayToDataTable(regionDataArray);

    // Create a DataView object,
    let view = new google.visualization.DataView(data);
    view.setColumns([1, 0, 3]);

    let geoChart = new google.visualization.GeoChart(document.getElementById('chart'));

    let options = {
        region: 'US',
        resolution: 'provinces',
        width: 350,
        height: 400,
        backgroundColor: '#000000',
        legend: 'none',
        tooltip: {
            trigger: 'none'
        },
        colorAxis: {
            colors: ['#4544f0', '#fcf3f0']
        }
    };


    google.visualization.events.addListener(geoChart, 'regionClick', function (e) {
        $('#info').hide()
        // Query for which row(s) in our DataTable match this region
        let rowIdxs = data.getFilteredRows([{column: 0, value: e.region}]);

        if ((rowIdxs.length > 0)) {
            let i = rowIdxs[0];


            let stateName = data.getValue(i, 1);
            let region = data.getValue(i, 0);
            let dealer = data.getValue(i, 2);
            let regionCode = data.getValue(i, 3);

            //output for info box
            $('#info').html("<h2>"+stateName+"</h2>");
            $('#info').append("<span>"+dealer+"</span><br />");




            $('#info').fadeIn(500)
        } else {
            // no data for this region
        }

    });

    geoChart.draw(view, options);

};

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})



