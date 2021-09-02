# Interactive-Web-Visualization
#14


In this assignment, an interactive dashboard that shows Demographic Info chart, bar chart, and bubble chart are built to explore the Belly Button Biodiversity dataset as seen below. It loads data, parse, manipulate by mapping and filter functions of JavaScript and plotted by using JavaScrip plotly. Data is displayed on web page.
![image](https://user-images.githubusercontent.com/67448948/131385184-5ca6ca03-4bfc-4c3f-8545-87ef7815610d.png)


1. Initial set up is created by creating directories and github.

    * init() function created in .js file. 
    * JSON data files loaded and parsed of Patient ID.
    * dropDown menu is created. 
    * id's appended into option and property value
2. Demographich box built from metaData. 
    * Demograpic info box is created and data is parsed to get information from metadata
    * parsed datas are created with key-value pairs and appendded
3. Bar and buble charts are built.
    * JSON data are loaded and parsed and filtered to associated patient ids
    * datas accessed for otu_ids and sample_values 
    * charts are plotted. 
4. Option change funciton creaded.
    * buildChar function is called on selected patientId
    * buildMetaData function is  called on selectedpatientId
5. init() funciton is called. 
6. Final result is shown above as a screenshot. 
