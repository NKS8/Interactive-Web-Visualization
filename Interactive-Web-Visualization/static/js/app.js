
// Define function that will run on page load
function init() {
    // Read json data  Parse and filter data to get sample names Add dropdown option for each sample Call functions below using the first sample to build metadata and initial plots 
    var dropDown = d3.select("#selDataset"); // d3 select id ="Dataset" from index.html
    d3.json("samples.json").then(data => {
        // parsing 
        var patientIds = data.names; //  Patient Ids = (obj.k1) gives array of [940, 941 ... ]
        patientIds.forEach(patientId => { // looping through array get each Ids 
            dropDown.append("option").text(patientId).property("value", patientId); // appending to sel option, put texts as a val 
        })
        buildCharts(patientIds[0])
        buildMetadata(patientIds[0]);
    })
}

// Define a function that will create metadata for given sample
function buildMetadata(selectedPatientId) {
    // Read the json data
    // Parse and filter the data to get the sample's metadata
    // Specify the location of the metadata and update it
    var infoBox = d3.select("#sample-metadata");
    infoBox.html("")
    d3.json("samples.json").then(data => {
        var metadata = data.metadata;
        var filteredMetadataValue = metadata.filter(patient => patient.id == selectedPatientId)[0]
        console.log(filteredMetadataValue);
        console.log(Object.entries(filteredMetadataValue));
        Object.entries(filteredMetadataValue).forEach(([demoKey, demoVal]) => {
            infoBox.append(`h6`).text(`${demoKey} : ${demoVal}`);
    

        })

    });
}

// Define a function that will create charts for given sample
function buildCharts(selectedPatientId) {
    // Read the json data
    // Parse and filter the data to get the sample's OTU data
    // Pay attention to what data is required for each chart
    // Create bar chart in correct location
    // Create bubble chart in correct location 
    d3.json("samples.json").then(data => {
        var sampleValues = data.samples;
        var filteredSampleValue = sampleValues.filter(patient => patient.id == selectedPatientId)[0]
        var data1 = [{
            x: filteredSampleValue.otu_ids,
            y: filteredSampleValue.sample_values,
            mode: 'markers',
            marker: {
                size: filteredSampleValue.sample_values,
                colorscale: "Earth",
                color: filteredSampleValue.otu_ids
            }
        }];

        var layout = {
            title: "OTU ID's vs Sample Values",
            showlegend: false,
            height: 600,
            width: 600
        };
        Plotly.newPlot('bubble', data1, layout);
        // bar chart 


        var data2 = [{
            x: filteredSampleValue.sample_values.slice(0, 10).reverse(),
            y: filteredSampleValue.otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),

            type: 'bar',
            orientation: "h"
        }];


        var layout = {
            title: 'Sample Values vs Otu-ids'
        };

        Plotly.newPlot('bar', data2, layout);
    })
}

function optionChanged(selectedPatientId) {
    // The parameter being passed in this function is new sample id from dropdown menu
    // Update metadata with newly selected sample
    // Update charts with newly selected sample
    console.log(selectedPatientId);
    buildCharts(selectedPatientId);
    ls
    buildMetadata(selectedPatientId);
}
// Initialize dashboard on page load
init();

