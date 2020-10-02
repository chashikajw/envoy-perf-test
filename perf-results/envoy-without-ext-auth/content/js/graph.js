/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 133.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 2.0], [3.0, 2.0], [3.1, 2.0], [3.2, 2.0], [3.3, 2.0], [3.4, 2.0], [3.5, 2.0], [3.6, 2.0], [3.7, 2.0], [3.8, 2.0], [3.9, 2.0], [4.0, 2.0], [4.1, 2.0], [4.2, 2.0], [4.3, 2.0], [4.4, 2.0], [4.5, 2.0], [4.6, 2.0], [4.7, 2.0], [4.8, 2.0], [4.9, 2.0], [5.0, 2.0], [5.1, 2.0], [5.2, 2.0], [5.3, 2.0], [5.4, 2.0], [5.5, 2.0], [5.6, 2.0], [5.7, 2.0], [5.8, 2.0], [5.9, 2.0], [6.0, 2.0], [6.1, 2.0], [6.2, 2.0], [6.3, 2.0], [6.4, 2.0], [6.5, 2.0], [6.6, 2.0], [6.7, 2.0], [6.8, 2.0], [6.9, 2.0], [7.0, 2.0], [7.1, 2.0], [7.2, 2.0], [7.3, 2.0], [7.4, 2.0], [7.5, 2.0], [7.6, 2.0], [7.7, 2.0], [7.8, 2.0], [7.9, 2.0], [8.0, 2.0], [8.1, 2.0], [8.2, 2.0], [8.3, 2.0], [8.4, 2.0], [8.5, 2.0], [8.6, 2.0], [8.7, 2.0], [8.8, 2.0], [8.9, 2.0], [9.0, 2.0], [9.1, 2.0], [9.2, 2.0], [9.3, 2.0], [9.4, 2.0], [9.5, 2.0], [9.6, 2.0], [9.7, 2.0], [9.8, 2.0], [9.9, 2.0], [10.0, 2.0], [10.1, 2.0], [10.2, 2.0], [10.3, 2.0], [10.4, 2.0], [10.5, 2.0], [10.6, 2.0], [10.7, 2.0], [10.8, 2.0], [10.9, 2.0], [11.0, 2.0], [11.1, 2.0], [11.2, 2.0], [11.3, 2.0], [11.4, 2.0], [11.5, 2.0], [11.6, 2.0], [11.7, 2.0], [11.8, 2.0], [11.9, 2.0], [12.0, 2.0], [12.1, 2.0], [12.2, 2.0], [12.3, 2.0], [12.4, 2.0], [12.5, 2.0], [12.6, 2.0], [12.7, 2.0], [12.8, 2.0], [12.9, 2.0], [13.0, 2.0], [13.1, 2.0], [13.2, 2.0], [13.3, 2.0], [13.4, 2.0], [13.5, 2.0], [13.6, 2.0], [13.7, 2.0], [13.8, 2.0], [13.9, 2.0], [14.0, 2.0], [14.1, 2.0], [14.2, 2.0], [14.3, 2.0], [14.4, 2.0], [14.5, 2.0], [14.6, 2.0], [14.7, 2.0], [14.8, 2.0], [14.9, 2.0], [15.0, 2.0], [15.1, 2.0], [15.2, 2.0], [15.3, 2.0], [15.4, 2.0], [15.5, 2.0], [15.6, 2.0], [15.7, 2.0], [15.8, 2.0], [15.9, 2.0], [16.0, 2.0], [16.1, 2.0], [16.2, 2.0], [16.3, 2.0], [16.4, 2.0], [16.5, 2.0], [16.6, 2.0], [16.7, 2.0], [16.8, 2.0], [16.9, 3.0], [17.0, 3.0], [17.1, 3.0], [17.2, 3.0], [17.3, 3.0], [17.4, 3.0], [17.5, 3.0], [17.6, 3.0], [17.7, 3.0], [17.8, 3.0], [17.9, 3.0], [18.0, 3.0], [18.1, 3.0], [18.2, 3.0], [18.3, 3.0], [18.4, 3.0], [18.5, 3.0], [18.6, 3.0], [18.7, 3.0], [18.8, 3.0], [18.9, 3.0], [19.0, 3.0], [19.1, 3.0], [19.2, 3.0], [19.3, 3.0], [19.4, 3.0], [19.5, 3.0], [19.6, 3.0], [19.7, 3.0], [19.8, 3.0], [19.9, 3.0], [20.0, 3.0], [20.1, 3.0], [20.2, 3.0], [20.3, 3.0], [20.4, 3.0], [20.5, 3.0], [20.6, 3.0], [20.7, 3.0], [20.8, 3.0], [20.9, 3.0], [21.0, 3.0], [21.1, 3.0], [21.2, 3.0], [21.3, 3.0], [21.4, 3.0], [21.5, 3.0], [21.6, 3.0], [21.7, 3.0], [21.8, 3.0], [21.9, 3.0], [22.0, 3.0], [22.1, 3.0], [22.2, 3.0], [22.3, 3.0], [22.4, 3.0], [22.5, 3.0], [22.6, 3.0], [22.7, 3.0], [22.8, 3.0], [22.9, 3.0], [23.0, 3.0], [23.1, 3.0], [23.2, 3.0], [23.3, 3.0], [23.4, 3.0], [23.5, 3.0], [23.6, 3.0], [23.7, 3.0], [23.8, 3.0], [23.9, 3.0], [24.0, 3.0], [24.1, 3.0], [24.2, 3.0], [24.3, 3.0], [24.4, 3.0], [24.5, 3.0], [24.6, 3.0], [24.7, 3.0], [24.8, 3.0], [24.9, 3.0], [25.0, 3.0], [25.1, 3.0], [25.2, 3.0], [25.3, 3.0], [25.4, 3.0], [25.5, 3.0], [25.6, 3.0], [25.7, 3.0], [25.8, 3.0], [25.9, 3.0], [26.0, 3.0], [26.1, 3.0], [26.2, 3.0], [26.3, 3.0], [26.4, 3.0], [26.5, 3.0], [26.6, 3.0], [26.7, 3.0], [26.8, 3.0], [26.9, 3.0], [27.0, 3.0], [27.1, 3.0], [27.2, 3.0], [27.3, 3.0], [27.4, 3.0], [27.5, 3.0], [27.6, 3.0], [27.7, 3.0], [27.8, 3.0], [27.9, 3.0], [28.0, 3.0], [28.1, 3.0], [28.2, 3.0], [28.3, 3.0], [28.4, 3.0], [28.5, 3.0], [28.6, 3.0], [28.7, 3.0], [28.8, 3.0], [28.9, 3.0], [29.0, 3.0], [29.1, 3.0], [29.2, 3.0], [29.3, 3.0], [29.4, 3.0], [29.5, 3.0], [29.6, 3.0], [29.7, 3.0], [29.8, 3.0], [29.9, 3.0], [30.0, 3.0], [30.1, 3.0], [30.2, 3.0], [30.3, 3.0], [30.4, 3.0], [30.5, 3.0], [30.6, 3.0], [30.7, 3.0], [30.8, 3.0], [30.9, 3.0], [31.0, 3.0], [31.1, 3.0], [31.2, 3.0], [31.3, 3.0], [31.4, 3.0], [31.5, 3.0], [31.6, 3.0], [31.7, 3.0], [31.8, 3.0], [31.9, 3.0], [32.0, 3.0], [32.1, 3.0], [32.2, 3.0], [32.3, 3.0], [32.4, 3.0], [32.5, 3.0], [32.6, 3.0], [32.7, 3.0], [32.8, 3.0], [32.9, 3.0], [33.0, 3.0], [33.1, 3.0], [33.2, 3.0], [33.3, 3.0], [33.4, 3.0], [33.5, 3.0], [33.6, 3.0], [33.7, 3.0], [33.8, 3.0], [33.9, 3.0], [34.0, 3.0], [34.1, 3.0], [34.2, 3.0], [34.3, 3.0], [34.4, 3.0], [34.5, 3.0], [34.6, 3.0], [34.7, 3.0], [34.8, 3.0], [34.9, 3.0], [35.0, 3.0], [35.1, 3.0], [35.2, 3.0], [35.3, 3.0], [35.4, 3.0], [35.5, 3.0], [35.6, 3.0], [35.7, 3.0], [35.8, 3.0], [35.9, 3.0], [36.0, 3.0], [36.1, 3.0], [36.2, 3.0], [36.3, 3.0], [36.4, 3.0], [36.5, 3.0], [36.6, 3.0], [36.7, 3.0], [36.8, 3.0], [36.9, 3.0], [37.0, 3.0], [37.1, 3.0], [37.2, 3.0], [37.3, 3.0], [37.4, 3.0], [37.5, 3.0], [37.6, 3.0], [37.7, 3.0], [37.8, 3.0], [37.9, 3.0], [38.0, 3.0], [38.1, 3.0], [38.2, 3.0], [38.3, 3.0], [38.4, 3.0], [38.5, 3.0], [38.6, 3.0], [38.7, 3.0], [38.8, 3.0], [38.9, 3.0], [39.0, 3.0], [39.1, 3.0], [39.2, 3.0], [39.3, 3.0], [39.4, 3.0], [39.5, 3.0], [39.6, 3.0], [39.7, 3.0], [39.8, 3.0], [39.9, 3.0], [40.0, 3.0], [40.1, 3.0], [40.2, 3.0], [40.3, 3.0], [40.4, 3.0], [40.5, 3.0], [40.6, 3.0], [40.7, 3.0], [40.8, 3.0], [40.9, 3.0], [41.0, 3.0], [41.1, 3.0], [41.2, 3.0], [41.3, 3.0], [41.4, 4.0], [41.5, 4.0], [41.6, 4.0], [41.7, 4.0], [41.8, 4.0], [41.9, 4.0], [42.0, 4.0], [42.1, 4.0], [42.2, 4.0], [42.3, 4.0], [42.4, 4.0], [42.5, 4.0], [42.6, 4.0], [42.7, 4.0], [42.8, 4.0], [42.9, 4.0], [43.0, 4.0], [43.1, 4.0], [43.2, 4.0], [43.3, 4.0], [43.4, 4.0], [43.5, 4.0], [43.6, 4.0], [43.7, 4.0], [43.8, 4.0], [43.9, 4.0], [44.0, 4.0], [44.1, 4.0], [44.2, 4.0], [44.3, 4.0], [44.4, 4.0], [44.5, 4.0], [44.6, 4.0], [44.7, 4.0], [44.8, 4.0], [44.9, 4.0], [45.0, 4.0], [45.1, 4.0], [45.2, 4.0], [45.3, 4.0], [45.4, 4.0], [45.5, 4.0], [45.6, 4.0], [45.7, 4.0], [45.8, 4.0], [45.9, 4.0], [46.0, 4.0], [46.1, 4.0], [46.2, 4.0], [46.3, 4.0], [46.4, 4.0], [46.5, 4.0], [46.6, 4.0], [46.7, 4.0], [46.8, 4.0], [46.9, 4.0], [47.0, 4.0], [47.1, 4.0], [47.2, 4.0], [47.3, 4.0], [47.4, 4.0], [47.5, 4.0], [47.6, 4.0], [47.7, 4.0], [47.8, 4.0], [47.9, 4.0], [48.0, 4.0], [48.1, 4.0], [48.2, 4.0], [48.3, 4.0], [48.4, 4.0], [48.5, 4.0], [48.6, 4.0], [48.7, 4.0], [48.8, 4.0], [48.9, 4.0], [49.0, 4.0], [49.1, 4.0], [49.2, 4.0], [49.3, 4.0], [49.4, 4.0], [49.5, 4.0], [49.6, 4.0], [49.7, 4.0], [49.8, 4.0], [49.9, 4.0], [50.0, 4.0], [50.1, 4.0], [50.2, 4.0], [50.3, 4.0], [50.4, 4.0], [50.5, 4.0], [50.6, 4.0], [50.7, 4.0], [50.8, 4.0], [50.9, 4.0], [51.0, 4.0], [51.1, 4.0], [51.2, 4.0], [51.3, 4.0], [51.4, 4.0], [51.5, 4.0], [51.6, 4.0], [51.7, 4.0], [51.8, 4.0], [51.9, 4.0], [52.0, 4.0], [52.1, 4.0], [52.2, 4.0], [52.3, 4.0], [52.4, 4.0], [52.5, 4.0], [52.6, 4.0], [52.7, 4.0], [52.8, 4.0], [52.9, 4.0], [53.0, 4.0], [53.1, 4.0], [53.2, 4.0], [53.3, 4.0], [53.4, 4.0], [53.5, 4.0], [53.6, 4.0], [53.7, 4.0], [53.8, 4.0], [53.9, 4.0], [54.0, 4.0], [54.1, 4.0], [54.2, 4.0], [54.3, 4.0], [54.4, 4.0], [54.5, 4.0], [54.6, 4.0], [54.7, 4.0], [54.8, 4.0], [54.9, 4.0], [55.0, 4.0], [55.1, 4.0], [55.2, 4.0], [55.3, 4.0], [55.4, 4.0], [55.5, 4.0], [55.6, 4.0], [55.7, 4.0], [55.8, 4.0], [55.9, 4.0], [56.0, 4.0], [56.1, 4.0], [56.2, 4.0], [56.3, 4.0], [56.4, 4.0], [56.5, 4.0], [56.6, 4.0], [56.7, 4.0], [56.8, 4.0], [56.9, 4.0], [57.0, 4.0], [57.1, 4.0], [57.2, 4.0], [57.3, 4.0], [57.4, 4.0], [57.5, 4.0], [57.6, 4.0], [57.7, 4.0], [57.8, 4.0], [57.9, 4.0], [58.0, 4.0], [58.1, 4.0], [58.2, 4.0], [58.3, 4.0], [58.4, 4.0], [58.5, 4.0], [58.6, 4.0], [58.7, 4.0], [58.8, 4.0], [58.9, 4.0], [59.0, 4.0], [59.1, 4.0], [59.2, 4.0], [59.3, 4.0], [59.4, 4.0], [59.5, 4.0], [59.6, 4.0], [59.7, 4.0], [59.8, 4.0], [59.9, 4.0], [60.0, 4.0], [60.1, 4.0], [60.2, 4.0], [60.3, 4.0], [60.4, 4.0], [60.5, 4.0], [60.6, 4.0], [60.7, 4.0], [60.8, 4.0], [60.9, 4.0], [61.0, 4.0], [61.1, 4.0], [61.2, 4.0], [61.3, 4.0], [61.4, 4.0], [61.5, 4.0], [61.6, 4.0], [61.7, 4.0], [61.8, 4.0], [61.9, 4.0], [62.0, 4.0], [62.1, 4.0], [62.2, 4.0], [62.3, 4.0], [62.4, 4.0], [62.5, 4.0], [62.6, 4.0], [62.7, 4.0], [62.8, 4.0], [62.9, 4.0], [63.0, 4.0], [63.1, 4.0], [63.2, 4.0], [63.3, 4.0], [63.4, 4.0], [63.5, 4.0], [63.6, 5.0], [63.7, 5.0], [63.8, 5.0], [63.9, 5.0], [64.0, 5.0], [64.1, 5.0], [64.2, 5.0], [64.3, 5.0], [64.4, 5.0], [64.5, 5.0], [64.6, 5.0], [64.7, 5.0], [64.8, 5.0], [64.9, 5.0], [65.0, 5.0], [65.1, 5.0], [65.2, 5.0], [65.3, 5.0], [65.4, 5.0], [65.5, 5.0], [65.6, 5.0], [65.7, 5.0], [65.8, 5.0], [65.9, 5.0], [66.0, 5.0], [66.1, 5.0], [66.2, 5.0], [66.3, 5.0], [66.4, 5.0], [66.5, 5.0], [66.6, 5.0], [66.7, 5.0], [66.8, 5.0], [66.9, 5.0], [67.0, 5.0], [67.1, 5.0], [67.2, 5.0], [67.3, 5.0], [67.4, 5.0], [67.5, 5.0], [67.6, 5.0], [67.7, 5.0], [67.8, 5.0], [67.9, 5.0], [68.0, 5.0], [68.1, 5.0], [68.2, 5.0], [68.3, 5.0], [68.4, 5.0], [68.5, 5.0], [68.6, 5.0], [68.7, 5.0], [68.8, 5.0], [68.9, 5.0], [69.0, 5.0], [69.1, 5.0], [69.2, 5.0], [69.3, 5.0], [69.4, 5.0], [69.5, 5.0], [69.6, 5.0], [69.7, 5.0], [69.8, 5.0], [69.9, 5.0], [70.0, 5.0], [70.1, 5.0], [70.2, 5.0], [70.3, 5.0], [70.4, 5.0], [70.5, 5.0], [70.6, 5.0], [70.7, 5.0], [70.8, 5.0], [70.9, 5.0], [71.0, 5.0], [71.1, 5.0], [71.2, 5.0], [71.3, 5.0], [71.4, 5.0], [71.5, 5.0], [71.6, 5.0], [71.7, 5.0], [71.8, 5.0], [71.9, 5.0], [72.0, 5.0], [72.1, 5.0], [72.2, 5.0], [72.3, 5.0], [72.4, 5.0], [72.5, 5.0], [72.6, 5.0], [72.7, 5.0], [72.8, 5.0], [72.9, 5.0], [73.0, 5.0], [73.1, 5.0], [73.2, 5.0], [73.3, 5.0], [73.4, 5.0], [73.5, 5.0], [73.6, 5.0], [73.7, 5.0], [73.8, 5.0], [73.9, 5.0], [74.0, 5.0], [74.1, 5.0], [74.2, 5.0], [74.3, 5.0], [74.4, 5.0], [74.5, 5.0], [74.6, 5.0], [74.7, 5.0], [74.8, 5.0], [74.9, 5.0], [75.0, 5.0], [75.1, 5.0], [75.2, 5.0], [75.3, 5.0], [75.4, 5.0], [75.5, 5.0], [75.6, 5.0], [75.7, 5.0], [75.8, 5.0], [75.9, 5.0], [76.0, 5.0], [76.1, 5.0], [76.2, 5.0], [76.3, 5.0], [76.4, 5.0], [76.5, 5.0], [76.6, 5.0], [76.7, 5.0], [76.8, 5.0], [76.9, 5.0], [77.0, 5.0], [77.1, 5.0], [77.2, 5.0], [77.3, 5.0], [77.4, 5.0], [77.5, 5.0], [77.6, 5.0], [77.7, 5.0], [77.8, 6.0], [77.9, 6.0], [78.0, 6.0], [78.1, 6.0], [78.2, 6.0], [78.3, 6.0], [78.4, 6.0], [78.5, 6.0], [78.6, 6.0], [78.7, 6.0], [78.8, 6.0], [78.9, 6.0], [79.0, 6.0], [79.1, 6.0], [79.2, 6.0], [79.3, 6.0], [79.4, 6.0], [79.5, 6.0], [79.6, 6.0], [79.7, 6.0], [79.8, 6.0], [79.9, 6.0], [80.0, 6.0], [80.1, 6.0], [80.2, 6.0], [80.3, 6.0], [80.4, 6.0], [80.5, 6.0], [80.6, 6.0], [80.7, 6.0], [80.8, 6.0], [80.9, 6.0], [81.0, 6.0], [81.1, 6.0], [81.2, 6.0], [81.3, 6.0], [81.4, 6.0], [81.5, 6.0], [81.6, 6.0], [81.7, 6.0], [81.8, 6.0], [81.9, 6.0], [82.0, 6.0], [82.1, 6.0], [82.2, 6.0], [82.3, 6.0], [82.4, 6.0], [82.5, 6.0], [82.6, 6.0], [82.7, 6.0], [82.8, 6.0], [82.9, 6.0], [83.0, 6.0], [83.1, 6.0], [83.2, 6.0], [83.3, 6.0], [83.4, 6.0], [83.5, 6.0], [83.6, 6.0], [83.7, 6.0], [83.8, 6.0], [83.9, 6.0], [84.0, 6.0], [84.1, 6.0], [84.2, 6.0], [84.3, 6.0], [84.4, 6.0], [84.5, 6.0], [84.6, 6.0], [84.7, 6.0], [84.8, 6.0], [84.9, 6.0], [85.0, 6.0], [85.1, 6.0], [85.2, 6.0], [85.3, 6.0], [85.4, 6.0], [85.5, 6.0], [85.6, 7.0], [85.7, 7.0], [85.8, 7.0], [85.9, 7.0], [86.0, 7.0], [86.1, 7.0], [86.2, 7.0], [86.3, 7.0], [86.4, 7.0], [86.5, 7.0], [86.6, 7.0], [86.7, 7.0], [86.8, 7.0], [86.9, 7.0], [87.0, 7.0], [87.1, 7.0], [87.2, 7.0], [87.3, 7.0], [87.4, 7.0], [87.5, 7.0], [87.6, 7.0], [87.7, 7.0], [87.8, 7.0], [87.9, 7.0], [88.0, 7.0], [88.1, 7.0], [88.2, 7.0], [88.3, 7.0], [88.4, 7.0], [88.5, 7.0], [88.6, 7.0], [88.7, 7.0], [88.8, 7.0], [88.9, 7.0], [89.0, 7.0], [89.1, 7.0], [89.2, 7.0], [89.3, 7.0], [89.4, 7.0], [89.5, 7.0], [89.6, 7.0], [89.7, 7.0], [89.8, 8.0], [89.9, 8.0], [90.0, 8.0], [90.1, 8.0], [90.2, 8.0], [90.3, 8.0], [90.4, 8.0], [90.5, 8.0], [90.6, 8.0], [90.7, 8.0], [90.8, 8.0], [90.9, 8.0], [91.0, 8.0], [91.1, 8.0], [91.2, 8.0], [91.3, 8.0], [91.4, 8.0], [91.5, 8.0], [91.6, 8.0], [91.7, 8.0], [91.8, 8.0], [91.9, 8.0], [92.0, 9.0], [92.1, 9.0], [92.2, 9.0], [92.3, 9.0], [92.4, 9.0], [92.5, 9.0], [92.6, 9.0], [92.7, 9.0], [92.8, 9.0], [92.9, 9.0], [93.0, 9.0], [93.1, 9.0], [93.2, 10.0], [93.3, 10.0], [93.4, 10.0], [93.5, 10.0], [93.6, 10.0], [93.7, 10.0], [93.8, 10.0], [93.9, 11.0], [94.0, 11.0], [94.1, 11.0], [94.2, 11.0], [94.3, 11.0], [94.4, 12.0], [94.5, 12.0], [94.6, 12.0], [94.7, 13.0], [94.8, 13.0], [94.9, 14.0], [95.0, 14.0], [95.1, 15.0], [95.2, 15.0], [95.3, 16.0], [95.4, 16.0], [95.5, 17.0], [95.6, 17.0], [95.7, 18.0], [95.8, 18.0], [95.9, 18.0], [96.0, 19.0], [96.1, 19.0], [96.2, 19.0], [96.3, 20.0], [96.4, 20.0], [96.5, 20.0], [96.6, 20.0], [96.7, 21.0], [96.8, 21.0], [96.9, 21.0], [97.0, 21.0], [97.1, 22.0], [97.2, 22.0], [97.3, 22.0], [97.4, 22.0], [97.5, 23.0], [97.6, 23.0], [97.7, 23.0], [97.8, 23.0], [97.9, 23.0], [98.0, 24.0], [98.1, 24.0], [98.2, 24.0], [98.3, 24.0], [98.4, 25.0], [98.5, 25.0], [98.6, 25.0], [98.7, 25.0], [98.8, 26.0], [98.9, 26.0], [99.0, 26.0], [99.1, 27.0], [99.2, 27.0], [99.3, 28.0], [99.4, 28.0], [99.5, 29.0], [99.6, 29.0], [99.7, 30.0], [99.8, 31.0], [99.9, 33.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 29.0, "minX": 0.0, "maxY": 8498120.0, "series": [{"data": [[0.0, 8498120.0], [100.0, 29.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 8498149.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 8498149.0, "series": [{"data": [[0.0, 8498149.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 6.154250770865191, "minX": 1.60139016E12, "maxY": 50.0, "series": [{"data": [[1.60139058E12, 50.0], [1.60139088E12, 50.0], [1.60139094E12, 50.0], [1.60139028E12, 50.0], [1.60139034E12, 50.0], [1.60139064E12, 50.0], [1.6013907E12, 50.0], [1.601391E12, 50.0], [1.60139106E12, 49.995350433751526], [1.6013904E12, 50.0], [1.60139046E12, 50.0], [1.60139076E12, 50.0], [1.60139082E12, 50.0], [1.60139016E12, 6.154250770865191], [1.60139022E12, 34.40815183264371], [1.60139052E12, 50.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60139106E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 0.9886327754973162, "minX": 1.0, "maxY": 5.145705359267686, "series": [{"data": [[2.0, 1.124857468643102], [3.0, 0.9886327754973162], [4.0, 1.0201424711373106], [5.0, 1.1924468566259634], [6.0, 1.2548067585939031], [7.0, 1.1688351920693958], [8.0, 1.268055555555551], [9.0, 1.315838058815773], [10.0, 1.409191720059137], [11.0, 1.4988718679491742], [12.0, 1.5333185250999584], [13.0, 1.582927345901292], [14.0, 1.6705723766072205], [15.0, 1.7608255766896013], [16.0, 1.8064799453498563], [17.0, 1.929680632874305], [18.0, 1.9941031006277377], [19.0, 2.1577868852459], [20.0, 2.3405323957810262], [21.0, 2.422063775004944], [22.0, 2.593335359060056], [23.0, 2.595655968195473], [24.0, 2.716594097726176], [25.0, 2.701929290132004], [26.0, 2.7796455326146496], [27.0, 2.8217592592592493], [28.0, 2.8724949680581258], [29.0, 2.978260869565215], [30.0, 3.0594514841173415], [31.0, 3.158739749676314], [32.0, 3.3889835830268384], [33.0, 3.5955753031565374], [34.0, 3.5428003254090044], [35.0, 3.606171868170288], [36.0, 3.8915431081823226], [37.0, 3.9221632322505258], [38.0, 3.9564717331681942], [39.0, 3.874133558748945], [40.0, 4.328925619834695], [41.0, 4.335032644665065], [42.0, 4.418302976454885], [43.0, 4.569920844327178], [44.0, 4.407325758860419], [45.0, 4.9013291489754485], [46.0, 4.668324899219462], [47.0, 4.693462673977252], [48.0, 4.6286806572311825], [49.0, 4.708893994092583], [50.0, 5.145705359267686], [1.0, 1.3554119547657506]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[48.7984258689715, 5.0295807945940965]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 133145.91666666666, "minX": 1.60139016E12, "maxY": 1.2063688933333334E7, "series": [{"data": [[1.60139058E12, 2004398.9833333334], [1.60139088E12, 1969666.8], [1.60139094E12, 1960833.8666666667], [1.60139028E12, 1999177.6833333333], [1.60139034E12, 1978834.8833333333], [1.60139064E12, 1984897.8333333333], [1.6013907E12, 1976819.15], [1.601391E12, 1980022.9], [1.60139106E12, 1658580.1], [1.6013904E12, 1979689.4], [1.60139046E12, 1969795.85], [1.60139076E12, 1927204.2], [1.60139082E12, 1935345.2833333334], [1.60139016E12, 133145.91666666666], [1.60139022E12, 1884630.5833333333], [1.60139052E12, 1979035.6166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60139058E12, 1.2063688933333334E7], [1.60139088E12, 1.18545686E7], [1.60139094E12, 1.1801385166666666E7], [1.60139028E12, 1.2032268966666667E7], [1.60139034E12, 1.1909807933333334E7], [1.60139064E12, 1.19463365E7], [1.6013907E12, 1.18976802E7], [1.601391E12, 1.19169309E7], [1.60139106E12, 9982329.0], [1.6013904E12, 1.1914916533333333E7], [1.60139046E12, 1.1855420033333333E7], [1.60139076E12, 1.1598993233333332E7], [1.60139082E12, 1.1648023333333334E7], [1.60139016E12, 801447.9666666667], [1.60139022E12, 1.1343438633333333E7], [1.60139052E12, 1.1910991633333333E7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60139106E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1.1904490451636227, "minX": 1.60139016E12, "maxY": 5.273617419732686, "series": [{"data": [[1.60139058E12, 5.07356140991137], [1.60139088E12, 5.164261464563122], [1.60139094E12, 5.178014552557123], [1.60139028E12, 5.093587710108525], [1.60139034E12, 5.14125222752683], [1.60139064E12, 5.1147992664250275], [1.6013907E12, 5.144501345733011], [1.601391E12, 5.124457827756187], [1.60139106E12, 5.061584389107335], [1.6013904E12, 5.143755490177052], [1.60139046E12, 5.165241107259394], [1.60139076E12, 5.273617419732686], [1.60139082E12, 5.246297022642255], [1.60139016E12, 1.1904490451636227], [1.60139022E12, 3.58894830594266], [1.60139052E12, 5.137090432960297]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60139106E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1.1826237918793578, "minX": 1.60139016E12, "maxY": 5.268797702577701, "series": [{"data": [[1.60139058E12, 5.06923376185192], [1.60139088E12, 5.1597366014653705], [1.60139094E12, 5.173393631716386], [1.60139028E12, 5.089098606669276], [1.60139034E12, 5.136464134638676], [1.60139064E12, 5.110104039008331], [1.6013907E12, 5.139998114926593], [1.601391E12, 5.119993238639441], [1.60139106E12, 5.057136616114292], [1.6013904E12, 5.138843960456778], [1.60139046E12, 5.160532644814148], [1.60139076E12, 5.268797702577701], [1.60139082E12, 5.241545730076659], [1.60139016E12, 1.1826237918793578], [1.60139022E12, 3.584695542012378], [1.60139052E12, 5.132557365102007]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60139106E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 5.0535942382054136E-5, "minX": 1.60139016E12, "maxY": 0.001528774648252267, "series": [{"data": [[1.60139058E12, 6.197109392752313E-5], [1.60139088E12, 8.758929728858534E-5], [1.60139094E12, 7.038721768127035E-5], [1.60139028E12, 7.248840616979955E-5], [1.60139034E12, 7.846474143252325E-5], [1.60139064E12, 6.43181837935553E-5], [1.6013907E12, 5.934490209836823E-5], [1.601391E12, 5.0535942382054136E-5], [1.60139106E12, 6.865131373650363E-5], [1.6013904E12, 9.237440566655808E-5], [1.60139046E12, 1.0159628788184088E-4], [1.60139076E12, 6.44538698282484E-5], [1.60139082E12, 7.844535567837381E-5], [1.60139016E12, 0.001528774648252267], [1.60139022E12, 5.126017651808E-5], [1.60139052E12, 6.625253023643365E-5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60139106E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.60139016E12, "maxY": 133.0, "series": [{"data": [[1.60139058E12, 50.0], [1.60139088E12, 133.0], [1.60139094E12, 53.0], [1.60139028E12, 44.0], [1.60139034E12, 46.0], [1.60139064E12, 62.0], [1.6013907E12, 46.0], [1.601391E12, 59.0], [1.60139106E12, 46.0], [1.6013904E12, 50.0], [1.60139046E12, 99.0], [1.60139076E12, 45.0], [1.60139082E12, 60.0], [1.60139016E12, 75.0], [1.60139022E12, 36.0], [1.60139052E12, 48.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60139058E12, 1.0], [1.60139088E12, 1.0], [1.60139094E12, 1.0], [1.60139028E12, 1.0], [1.60139034E12, 1.0], [1.60139064E12, 1.0], [1.6013907E12, 1.0], [1.601391E12, 1.0], [1.60139106E12, 1.0], [1.6013904E12, 1.0], [1.60139046E12, 1.0], [1.60139076E12, 1.0], [1.60139082E12, 1.0], [1.60139016E12, 0.0], [1.60139022E12, 1.0], [1.60139052E12, 1.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60139058E12, 1.0], [1.60139088E12, 1.0], [1.60139094E12, 1.0], [1.60139028E12, 1.0], [1.60139034E12, 1.0], [1.60139064E12, 1.0], [1.6013907E12, 1.0], [1.601391E12, 1.0], [1.60139106E12, 1.0], [1.6013904E12, 1.0], [1.60139046E12, 1.0], [1.60139076E12, 1.0], [1.60139082E12, 1.0], [1.60139016E12, 0.0], [1.60139022E12, 1.0], [1.60139052E12, 1.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60139058E12, 1.0], [1.60139088E12, 1.0], [1.60139094E12, 1.0], [1.60139028E12, 1.0], [1.60139034E12, 1.0], [1.60139064E12, 1.0], [1.6013907E12, 1.0], [1.601391E12, 1.0], [1.60139106E12, 1.0], [1.6013904E12, 1.0], [1.60139046E12, 1.0], [1.60139076E12, 1.0], [1.60139082E12, 1.0], [1.60139016E12, 0.0], [1.60139022E12, 1.0], [1.60139052E12, 1.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60139058E12, 0.0], [1.60139088E12, 0.0], [1.60139094E12, 0.0], [1.60139028E12, 0.0], [1.60139034E12, 0.0], [1.60139064E12, 0.0], [1.6013907E12, 0.0], [1.601391E12, 0.0], [1.60139106E12, 0.0], [1.6013904E12, 0.0], [1.60139046E12, 0.0], [1.60139076E12, 0.0], [1.60139082E12, 0.0], [1.60139016E12, 0.0], [1.60139022E12, 0.0], [1.60139052E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60139058E12, 4.0], [1.60139088E12, 4.0], [1.60139094E12, 4.0], [1.60139028E12, 4.0], [1.60139034E12, 4.0], [1.60139064E12, 4.0], [1.6013907E12, 4.0], [1.601391E12, 4.0], [1.60139106E12, 4.0], [1.6013904E12, 4.0], [1.60139046E12, 4.0], [1.60139076E12, 4.0], [1.60139082E12, 4.0], [1.60139016E12, 1.0], [1.60139022E12, 4.0], [1.60139052E12, 4.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60139106E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1.0, "minX": 145.0, "maxY": 5.0, "series": [{"data": [[8601.0, 2.0], [8281.0, 4.0], [8625.0, 4.0], [8385.0, 4.0], [8529.0, 4.0], [9121.0, 4.0], [8993.0, 4.0], [9169.0, 4.0], [8969.0, 4.0], [9145.0, 4.0], [9113.0, 4.0], [9097.0, 4.0], [8817.0, 4.0], [8769.0, 4.0], [8777.0, 4.0], [8825.0, 4.0], [9089.0, 4.0], [8753.0, 4.0], [8721.0, 4.0], [8881.0, 4.0], [8929.0, 4.0], [8713.0, 4.0], [9073.0, 4.0], [9065.0, 4.0], [9041.0, 4.0], [9489.0, 3.0], [9657.0, 4.0], [9641.0, 4.0], [9649.0, 4.0], [9633.0, 4.0], [9705.0, 4.0], [9689.0, 4.0], [9473.0, 4.0], [9681.0, 4.0], [9673.0, 4.0], [9665.0, 4.0], [9505.0, 4.0], [9497.0, 4.0], [9593.0, 4.0], [9513.0, 4.0], [9537.0, 4.0], [9553.0, 4.0], [9345.0, 4.0], [9361.0, 4.0], [9377.0, 4.0], [9393.0, 4.0], [9313.0, 3.0], [9625.0, 4.0], [9337.0, 4.0], [9601.0, 4.0], [9609.0, 4.0], [9433.0, 4.0], [9273.0, 4.0], [9305.0, 4.0], [9417.0, 4.0], [9425.0, 4.0], [9849.0, 4.0], [9761.0, 4.0], [9977.0, 4.0], [9737.0, 4.0], [9729.0, 4.0], [9745.0, 4.0], [9801.0, 4.0], [9777.0, 4.0], [9769.0, 4.0], [9825.0, 4.0], [9809.0, 4.0], [9857.0, 4.0], [9881.0, 4.0], [9889.0, 4.0], [10129.0, 4.0], [10193.0, 4.0], [10225.0, 4.0], [10097.0, 4.0], [10057.0, 4.0], [10017.0, 4.0], [9993.0, 4.0], [9929.0, 4.0], [9921.0, 4.0], [9905.0, 4.0], [9897.0, 4.0], [10281.0, 4.0], [145.0, 1.0], [825.0, 1.0], [1554.0, 1.0], [3270.0, 1.0], [3682.0, 1.0], [7012.0, 1.0], [7828.0, 1.0], [8120.0, 2.0], [8560.0, 2.0], [9160.0, 4.0], [8984.0, 2.0], [9008.0, 4.0], [9040.0, 4.0], [9024.0, 4.0], [8976.0, 4.0], [9184.0, 4.0], [8968.0, 4.0], [8920.0, 4.0], [8904.0, 4.0], [8704.0, 4.0], [8736.0, 4.0], [9096.0, 4.0], [9136.0, 4.0], [9112.0, 4.0], [8800.0, 4.0], [9088.0, 4.0], [8776.0, 4.0], [8752.0, 4.0], [8880.0, 4.0], [8872.0, 4.0], [9664.0, 4.0], [9280.0, 4.0], [9648.0, 4.0], [9656.0, 4.0], [9248.0, 4.0], [9256.0, 4.0], [9232.0, 4.0], [9536.0, 4.0], [9552.0, 4.0], [9544.0, 4.0], [9576.0, 4.0], [9568.0, 4.0], [9592.0, 4.0], [9584.0, 4.0], [9408.0, 4.0], [9464.0, 4.0], [9224.0, 4.0], [9432.0, 4.0], [9400.0, 4.0], [9384.0, 4.0], [9376.0, 4.0], [9352.0, 4.0], [9344.0, 4.0], [9360.0, 4.0], [9392.0, 4.0], [9688.0, 4.0], [9720.0, 4.0], [9696.0, 4.0], [9488.0, 4.0], [9504.0, 4.0], [9528.0, 4.0], [9480.0, 4.0], [9672.0, 4.0], [9600.0, 4.0], [9608.0, 4.0], [9616.0, 4.0], [9632.0, 4.0], [9336.0, 4.0], [9288.0, 4.0], [9960.0, 4.0], [9784.0, 4.0], [9792.0, 4.0], [9744.0, 4.0], [9736.0, 4.0], [9968.0, 4.0], [9976.0, 4.0], [9760.0, 4.0], [9904.0, 4.0], [9936.0, 4.0], [9928.0, 4.0], [9864.0, 4.0], [9880.0, 4.0], [9856.0, 4.0], [9800.0, 4.0], [10104.0, 4.0], [10056.0, 4.0], [10000.0, 4.0], [10136.0, 4.0], [10152.0, 4.0], [9984.0, 4.0], [9992.0, 4.0], [9832.0, 4.0], [9944.0, 4.0], [10456.0, 4.0], [10336.0, 4.0], [8403.0, 2.0], [8627.0, 4.0], [8667.0, 4.0], [9091.0, 4.0], [8715.0, 2.0], [8883.0, 4.0], [8931.0, 4.0], [8939.0, 4.0], [9075.0, 4.0], [9035.0, 4.0], [9027.0, 4.0], [8763.0, 4.0], [8971.0, 4.0], [9187.0, 4.0], [9195.0, 4.0], [9123.0, 4.0], [9139.0, 4.0], [8859.0, 4.0], [8867.0, 4.0], [8843.0, 4.0], [8875.0, 4.0], [9659.0, 4.0], [9339.0, 4.0], [9611.0, 4.0], [9603.0, 4.0], [9707.0, 4.0], [9619.0, 3.0], [9691.0, 4.0], [9651.0, 4.0], [9667.0, 4.0], [9683.0, 4.0], [9643.0, 4.0], [9627.0, 4.0], [9699.0, 4.0], [9723.0, 4.0], [9483.0, 4.0], [9539.0, 3.0], [9531.0, 4.0], [9595.0, 3.0], [9571.0, 4.0], [9563.0, 4.0], [9547.0, 4.0], [9363.0, 4.0], [9355.0, 4.0], [9427.0, 4.0], [9419.0, 4.0], [9467.0, 4.0], [9435.0, 4.0], [9411.0, 4.0], [9403.0, 4.0], [9379.0, 4.0], [9395.0, 4.0], [9307.0, 4.0], [9315.0, 4.0], [9323.0, 4.0], [9251.0, 3.0], [9291.0, 4.0], [9259.0, 4.0], [9235.0, 4.0], [9227.0, 4.0], [9819.0, 4.0], [9971.0, 4.0], [9843.0, 4.0], [10131.0, 4.0], [10139.0, 4.0], [9779.0, 4.0], [9795.0, 4.0], [9811.0, 4.0], [9859.0, 4.0], [9883.0, 4.0], [9891.0, 4.0], [9915.0, 4.0], [9931.0, 4.0], [10211.0, 4.0], [10155.0, 4.0], [10019.0, 4.0], [10011.0, 4.0], [10059.0, 4.0], [10099.0, 4.0], [10083.0, 4.0], [10075.0, 4.0], [10339.0, 4.0], [10291.0, 4.0], [10283.0, 4.0], [10243.0, 4.0], [4585.0, 1.0], [5545.0, 4.0], [5693.0, 1.0], [6277.0, 1.0], [7097.0, 1.0], [7549.0, 1.0], [7909.0, 4.0], [8698.0, 2.0], [8642.0, 2.0], [9194.0, 4.0], [8986.0, 3.0], [9210.0, 4.0], [8722.0, 4.0], [8794.0, 4.0], [9018.0, 4.0], [9066.0, 4.0], [9170.0, 4.0], [9106.0, 4.0], [9002.0, 4.0], [8770.0, 4.0], [9642.0, 4.0], [9458.0, 3.0], [9482.0, 3.0], [9474.0, 4.0], [9498.0, 4.0], [9522.0, 4.0], [9538.0, 4.0], [9506.0, 4.0], [9514.0, 4.0], [9578.0, 4.0], [9570.0, 4.0], [9586.0, 4.0], [9562.0, 4.0], [9450.0, 4.0], [9442.0, 4.0], [9242.0, 4.0], [9258.0, 4.0], [9266.0, 4.0], [9282.0, 4.0], [9218.0, 4.0], [9354.0, 4.0], [9362.0, 4.0], [9426.0, 4.0], [9370.0, 4.0], [9394.0, 4.0], [9650.0, 4.0], [9610.0, 4.0], [9602.0, 4.0], [9618.0, 4.0], [9682.0, 4.0], [9714.0, 4.0], [9722.0, 4.0], [9706.0, 4.0], [9690.0, 4.0], [9322.0, 4.0], [9946.0, 4.0], [9746.0, 4.0], [9754.0, 4.0], [9770.0, 4.0], [9938.0, 4.0], [9786.0, 4.0], [9842.0, 4.0], [9834.0, 4.0], [9794.0, 4.0], [9922.0, 4.0], [9874.0, 4.0], [9890.0, 4.0], [9906.0, 4.0], [9914.0, 4.0], [10082.0, 4.0], [10226.0, 4.0], [9994.0, 4.0], [10018.0, 4.0], [10482.0, 4.0], [10250.0, 4.0], [10370.0, 4.0], [10266.0, 4.0], [8693.0, 2.0], [8565.0, 4.0], [9117.0, 4.0], [9149.0, 2.0], [9133.0, 4.0], [9197.0, 4.0], [9181.0, 4.0], [8973.0, 3.0], [9213.0, 4.0], [8965.0, 4.0], [8837.0, 2.0], [8853.0, 4.0], [8741.0, 4.0], [8941.0, 4.0], [8957.0, 4.0], [9101.0, 4.0], [8917.0, 4.0], [8861.0, 4.0], [9077.0, 4.0], [9005.0, 4.0], [8981.0, 4.0], [9029.0, 4.0], [9061.0, 4.0], [9037.0, 4.0], [9653.0, 4.0], [9677.0, 4.0], [9661.0, 4.0], [9693.0, 4.0], [9701.0, 4.0], [9717.0, 4.0], [9725.0, 4.0], [9685.0, 4.0], [9645.0, 4.0], [9637.0, 4.0], [9621.0, 4.0], [9501.0, 2.0], [9493.0, 4.0], [9509.0, 4.0], [9549.0, 4.0], [9517.0, 4.0], [9525.0, 4.0], [9557.0, 4.0], [9581.0, 4.0], [9597.0, 4.0], [9565.0, 4.0], [9349.0, 4.0], [9365.0, 4.0], [9373.0, 3.0], [9405.0, 4.0], [9341.0, 3.0], [9613.0, 4.0], [9333.0, 4.0], [9317.0, 4.0], [9301.0, 4.0], [9221.0, 4.0], [9293.0, 4.0], [9285.0, 4.0], [9269.0, 4.0], [9229.0, 4.0], [9453.0, 4.0], [9429.0, 4.0], [9437.0, 4.0], [9749.0, 4.0], [9981.0, 4.0], [9757.0, 4.0], [9973.0, 4.0], [9853.0, 4.0], [9805.0, 4.0], [9829.0, 4.0], [9821.0, 4.0], [9845.0, 4.0], [9781.0, 4.0], [9797.0, 4.0], [9773.0, 4.0], [9765.0, 4.0], [9893.0, 4.0], [9861.0, 4.0], [9877.0, 4.0], [9869.0, 4.0], [9885.0, 4.0], [10157.0, 4.0], [10197.0, 4.0], [10133.0, 4.0], [10141.0, 4.0], [10221.0, 4.0], [10069.0, 4.0], [10085.0, 4.0], [10093.0, 4.0], [10101.0, 4.0], [10013.0, 4.0], [9965.0, 4.0], [9933.0, 4.0], [9917.0, 4.0], [2711.0, 1.0], [3611.0, 1.0], [6558.0, 1.0], [7930.0, 5.0], [7970.0, 2.0], [8142.0, 5.0], [8204.0, 2.0], [8604.0, 2.0], [8676.0, 4.0], [8548.0, 4.0], [9164.0, 4.0], [9212.0, 4.0], [8860.0, 4.0], [8964.0, 4.0], [8980.0, 4.0], [9204.0, 4.0], [9196.0, 4.0], [9188.0, 4.0], [9004.0, 4.0], [8892.0, 4.0], [8876.0, 4.0], [9132.0, 4.0], [8916.0, 4.0], [9092.0, 4.0], [9028.0, 4.0], [9084.0, 4.0], [9020.0, 4.0], [8836.0, 4.0], [9628.0, 4.0], [9724.0, 4.0], [9452.0, 4.0], [9540.0, 4.0], [9532.0, 4.0], [9508.0, 4.0], [9484.0, 4.0], [9596.0, 4.0], [9588.0, 4.0], [9556.0, 4.0], [9428.0, 4.0], [9436.0, 4.0], [9420.0, 4.0], [9404.0, 4.0], [9396.0, 4.0], [9372.0, 4.0], [9364.0, 4.0], [9356.0, 4.0], [9388.0, 4.0], [9692.0, 4.0], [9716.0, 4.0], [9700.0, 4.0], [9652.0, 4.0], [9684.0, 4.0], [9604.0, 4.0], [9620.0, 4.0], [9308.0, 4.0], [9332.0, 4.0], [9324.0, 4.0], [9316.0, 4.0], [9284.0, 4.0], [9292.0, 4.0], [9468.0, 4.0], [9260.0, 4.0], [9836.0, 4.0], [10228.0, 4.0], [9748.0, 3.0], [9764.0, 4.0], [9780.0, 4.0], [9788.0, 4.0], [9796.0, 4.0], [9732.0, 4.0], [9740.0, 4.0], [9964.0, 4.0], [9980.0, 4.0], [9908.0, 4.0], [9884.0, 4.0], [10020.0, 4.0], [10036.0, 4.0], [10100.0, 4.0], [10044.0, 4.0], [9988.0, 4.0], [10124.0, 4.0], [10180.0, 4.0], [9852.0, 4.0], [9844.0, 4.0], [10116.0, 4.0], [9996.0, 4.0], [10004.0, 4.0], [9812.0, 4.0], [9828.0, 4.0], [9948.0, 4.0], [9924.0, 4.0], [9956.0, 4.0], [10292.0, 4.0], [10348.0, 4.0], [10300.0, 4.0], [8199.0, 2.0], [8703.0, 4.0], [8335.0, 4.0], [8687.0, 4.0], [8775.0, 4.0], [8727.0, 4.0], [8879.0, 4.0], [8871.0, 4.0], [8855.0, 4.0], [8719.0, 4.0], [9087.0, 4.0], [9215.0, 4.0], [9207.0, 4.0], [9199.0, 4.0], [9135.0, 4.0], [9151.0, 4.0], [9127.0, 4.0], [9095.0, 4.0], [9183.0, 4.0], [9063.0, 4.0], [9079.0, 4.0], [9487.0, 3.0], [9703.0, 4.0], [9687.0, 4.0], [9671.0, 4.0], [9631.0, 4.0], [9719.0, 4.0], [9503.0, 4.0], [9495.0, 4.0], [9519.0, 4.0], [9535.0, 4.0], [9567.0, 4.0], [9543.0, 4.0], [9223.0, 4.0], [9471.0, 4.0], [9455.0, 4.0], [9439.0, 4.0], [9463.0, 4.0], [9391.0, 4.0], [9375.0, 4.0], [9351.0, 4.0], [9367.0, 4.0], [9399.0, 4.0], [9415.0, 4.0], [9279.0, 3.0], [9271.0, 4.0], [9295.0, 4.0], [9263.0, 4.0], [9255.0, 4.0], [9799.0, 4.0], [9759.0, 4.0], [9807.0, 4.0], [9847.0, 4.0], [10127.0, 4.0], [10007.0, 4.0], [10135.0, 4.0], [9815.0, 4.0], [9751.0, 4.0], [9735.0, 4.0], [9983.0, 4.0], [9767.0, 4.0], [9775.0, 4.0], [9783.0, 4.0], [9791.0, 4.0], [9959.0, 4.0], [9919.0, 4.0], [9951.0, 4.0], [9943.0, 4.0], [9903.0, 4.0], [10023.0, 4.0], [10031.0, 4.0], [10103.0, 4.0], [10095.0, 4.0], [10111.0, 4.0], [10071.0, 4.0], [9967.0, 4.0], [5959.0, 1.0], [8254.0, 2.0], [8550.0, 4.0], [8334.0, 4.0], [8686.0, 4.0], [8566.0, 4.0], [8774.0, 4.0], [9134.0, 4.0], [8750.0, 4.0], [8910.0, 4.0], [9126.0, 4.0], [8830.0, 4.0], [9086.0, 4.0], [8942.0, 4.0], [9206.0, 4.0], [9046.0, 4.0], [9670.0, 4.0], [9606.0, 4.0], [9622.0, 4.0], [9630.0, 4.0], [9342.0, 4.0], [9294.0, 4.0], [9542.0, 4.0], [9526.0, 4.0], [9518.0, 4.0], [9510.0, 4.0], [9502.0, 4.0], [9590.0, 4.0], [9582.0, 4.0], [9598.0, 4.0], [9566.0, 4.0], [9470.0, 4.0], [9422.0, 4.0], [9446.0, 4.0], [9406.0, 4.0], [9374.0, 4.0], [9414.0, 4.0], [9718.0, 4.0], [9686.0, 4.0], [9478.0, 4.0], [9494.0, 4.0], [9662.0, 4.0], [9654.0, 4.0], [9638.0, 4.0], [9278.0, 4.0], [9262.0, 4.0], [9254.0, 4.0], [9230.0, 4.0], [9774.0, 4.0], [9958.0, 3.0], [9758.0, 4.0], [9766.0, 4.0], [9982.0, 4.0], [9966.0, 4.0], [9750.0, 4.0], [9934.0, 4.0], [9918.0, 4.0], [9846.0, 4.0], [9814.0, 4.0], [9806.0, 4.0], [9798.0, 4.0], [9782.0, 4.0], [9886.0, 4.0], [9902.0, 4.0], [9910.0, 4.0], [10054.0, 4.0], [10102.0, 4.0], [10110.0, 4.0], [10094.0, 4.0], [10086.0, 4.0], [10014.0, 4.0], [9990.0, 4.0], [10142.0, 4.0], [10006.0, 4.0], [10134.0, 4.0], [10294.0, 4.0], [10286.0, 4.0], [10574.0, 4.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10574.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1.0, "minX": 145.0, "maxY": 5.0, "series": [{"data": [[8601.0, 2.0], [8281.0, 4.0], [8625.0, 4.0], [8385.0, 4.0], [8529.0, 4.0], [9121.0, 4.0], [8993.0, 4.0], [9169.0, 4.0], [8969.0, 4.0], [9145.0, 4.0], [9113.0, 4.0], [9097.0, 4.0], [8817.0, 4.0], [8769.0, 4.0], [8777.0, 4.0], [8825.0, 4.0], [9089.0, 4.0], [8753.0, 4.0], [8721.0, 4.0], [8881.0, 4.0], [8929.0, 4.0], [8713.0, 4.0], [9073.0, 4.0], [9065.0, 4.0], [9041.0, 4.0], [9489.0, 3.0], [9657.0, 4.0], [9641.0, 4.0], [9649.0, 4.0], [9633.0, 4.0], [9705.0, 4.0], [9689.0, 4.0], [9473.0, 4.0], [9681.0, 4.0], [9673.0, 4.0], [9665.0, 4.0], [9505.0, 4.0], [9497.0, 4.0], [9593.0, 4.0], [9513.0, 4.0], [9537.0, 4.0], [9553.0, 4.0], [9345.0, 4.0], [9361.0, 4.0], [9377.0, 4.0], [9393.0, 4.0], [9313.0, 3.0], [9625.0, 4.0], [9337.0, 4.0], [9601.0, 4.0], [9609.0, 4.0], [9433.0, 4.0], [9273.0, 4.0], [9305.0, 4.0], [9417.0, 4.0], [9425.0, 4.0], [9849.0, 4.0], [9761.0, 4.0], [9977.0, 4.0], [9737.0, 4.0], [9729.0, 4.0], [9745.0, 4.0], [9801.0, 4.0], [9777.0, 4.0], [9769.0, 4.0], [9825.0, 4.0], [9809.0, 4.0], [9857.0, 4.0], [9881.0, 4.0], [9889.0, 4.0], [10129.0, 4.0], [10193.0, 4.0], [10225.0, 4.0], [10097.0, 4.0], [10057.0, 4.0], [10017.0, 4.0], [9993.0, 4.0], [9929.0, 4.0], [9921.0, 4.0], [9905.0, 4.0], [9897.0, 4.0], [10281.0, 4.0], [145.0, 1.0], [825.0, 1.0], [1554.0, 1.0], [3270.0, 1.0], [3682.0, 1.0], [7012.0, 1.0], [7828.0, 1.0], [8120.0, 2.0], [8560.0, 2.0], [9160.0, 4.0], [8984.0, 2.0], [9008.0, 4.0], [9040.0, 4.0], [9024.0, 4.0], [8976.0, 4.0], [9184.0, 4.0], [8968.0, 4.0], [8920.0, 4.0], [8904.0, 4.0], [8704.0, 4.0], [8736.0, 4.0], [9096.0, 4.0], [9136.0, 4.0], [9112.0, 4.0], [8800.0, 4.0], [9088.0, 4.0], [8776.0, 4.0], [8752.0, 4.0], [8880.0, 4.0], [8872.0, 4.0], [9664.0, 4.0], [9280.0, 4.0], [9648.0, 4.0], [9656.0, 4.0], [9248.0, 4.0], [9256.0, 4.0], [9232.0, 4.0], [9536.0, 4.0], [9552.0, 4.0], [9544.0, 4.0], [9576.0, 4.0], [9568.0, 4.0], [9592.0, 4.0], [9584.0, 4.0], [9408.0, 4.0], [9464.0, 4.0], [9224.0, 4.0], [9432.0, 4.0], [9400.0, 4.0], [9384.0, 4.0], [9376.0, 4.0], [9352.0, 4.0], [9344.0, 4.0], [9360.0, 4.0], [9392.0, 4.0], [9688.0, 4.0], [9720.0, 4.0], [9696.0, 4.0], [9488.0, 4.0], [9504.0, 4.0], [9528.0, 4.0], [9480.0, 4.0], [9672.0, 4.0], [9600.0, 4.0], [9608.0, 4.0], [9616.0, 4.0], [9632.0, 4.0], [9336.0, 4.0], [9288.0, 4.0], [9960.0, 4.0], [9784.0, 4.0], [9792.0, 4.0], [9744.0, 4.0], [9736.0, 4.0], [9968.0, 4.0], [9976.0, 4.0], [9760.0, 4.0], [9904.0, 4.0], [9936.0, 4.0], [9928.0, 4.0], [9864.0, 4.0], [9880.0, 4.0], [9856.0, 4.0], [9800.0, 4.0], [10104.0, 4.0], [10056.0, 4.0], [10000.0, 4.0], [10136.0, 4.0], [10152.0, 4.0], [9984.0, 4.0], [9992.0, 4.0], [9832.0, 4.0], [9944.0, 4.0], [10456.0, 4.0], [10336.0, 4.0], [8403.0, 2.0], [8627.0, 4.0], [8667.0, 4.0], [9091.0, 4.0], [8715.0, 2.0], [8883.0, 4.0], [8931.0, 4.0], [8939.0, 4.0], [9075.0, 4.0], [9035.0, 4.0], [9027.0, 4.0], [8763.0, 4.0], [8971.0, 4.0], [9187.0, 4.0], [9195.0, 4.0], [9123.0, 4.0], [9139.0, 4.0], [8859.0, 4.0], [8867.0, 4.0], [8843.0, 4.0], [8875.0, 4.0], [9659.0, 4.0], [9339.0, 4.0], [9611.0, 4.0], [9603.0, 4.0], [9707.0, 4.0], [9619.0, 3.0], [9691.0, 4.0], [9651.0, 4.0], [9667.0, 4.0], [9683.0, 4.0], [9643.0, 4.0], [9627.0, 4.0], [9699.0, 4.0], [9723.0, 4.0], [9483.0, 4.0], [9539.0, 3.0], [9531.0, 4.0], [9595.0, 3.0], [9571.0, 4.0], [9563.0, 4.0], [9547.0, 4.0], [9363.0, 4.0], [9355.0, 4.0], [9427.0, 4.0], [9419.0, 4.0], [9467.0, 4.0], [9435.0, 4.0], [9411.0, 4.0], [9403.0, 4.0], [9379.0, 4.0], [9395.0, 4.0], [9307.0, 4.0], [9315.0, 4.0], [9323.0, 4.0], [9251.0, 3.0], [9291.0, 4.0], [9259.0, 4.0], [9235.0, 4.0], [9227.0, 4.0], [9819.0, 4.0], [9971.0, 4.0], [9843.0, 4.0], [10131.0, 4.0], [10139.0, 4.0], [9779.0, 4.0], [9795.0, 4.0], [9811.0, 4.0], [9859.0, 4.0], [9883.0, 4.0], [9891.0, 4.0], [9915.0, 4.0], [9931.0, 4.0], [10211.0, 4.0], [10155.0, 4.0], [10019.0, 4.0], [10011.0, 4.0], [10059.0, 4.0], [10099.0, 4.0], [10083.0, 4.0], [10075.0, 4.0], [10339.0, 4.0], [10291.0, 4.0], [10283.0, 4.0], [10243.0, 4.0], [4585.0, 1.0], [5545.0, 4.0], [5693.0, 1.0], [6277.0, 1.0], [7097.0, 1.0], [7549.0, 1.0], [7909.0, 4.0], [8698.0, 2.0], [8642.0, 2.0], [9194.0, 4.0], [8986.0, 3.0], [9210.0, 4.0], [8722.0, 4.0], [8794.0, 4.0], [9018.0, 4.0], [9066.0, 4.0], [9170.0, 4.0], [9106.0, 4.0], [9002.0, 4.0], [8770.0, 4.0], [9642.0, 4.0], [9458.0, 3.0], [9482.0, 3.0], [9474.0, 4.0], [9498.0, 4.0], [9522.0, 4.0], [9538.0, 4.0], [9506.0, 4.0], [9514.0, 4.0], [9578.0, 4.0], [9570.0, 4.0], [9586.0, 4.0], [9562.0, 4.0], [9450.0, 4.0], [9442.0, 4.0], [9242.0, 4.0], [9258.0, 4.0], [9266.0, 4.0], [9282.0, 4.0], [9218.0, 4.0], [9354.0, 4.0], [9362.0, 4.0], [9426.0, 4.0], [9370.0, 4.0], [9394.0, 4.0], [9650.0, 4.0], [9610.0, 4.0], [9602.0, 4.0], [9618.0, 4.0], [9682.0, 4.0], [9714.0, 4.0], [9722.0, 4.0], [9706.0, 4.0], [9690.0, 4.0], [9322.0, 4.0], [9946.0, 4.0], [9746.0, 4.0], [9754.0, 4.0], [9770.0, 4.0], [9938.0, 4.0], [9786.0, 4.0], [9842.0, 4.0], [9834.0, 4.0], [9794.0, 4.0], [9922.0, 4.0], [9874.0, 4.0], [9890.0, 4.0], [9906.0, 4.0], [9914.0, 4.0], [10082.0, 4.0], [10226.0, 4.0], [9994.0, 4.0], [10018.0, 4.0], [10482.0, 4.0], [10250.0, 4.0], [10370.0, 4.0], [10266.0, 4.0], [8693.0, 2.0], [8565.0, 4.0], [9117.0, 4.0], [9149.0, 2.0], [9133.0, 4.0], [9197.0, 4.0], [9181.0, 4.0], [8973.0, 3.0], [9213.0, 4.0], [8965.0, 4.0], [8837.0, 2.0], [8853.0, 4.0], [8741.0, 4.0], [8941.0, 4.0], [8957.0, 4.0], [9101.0, 4.0], [8917.0, 4.0], [8861.0, 4.0], [9077.0, 4.0], [9005.0, 4.0], [8981.0, 4.0], [9029.0, 4.0], [9061.0, 4.0], [9037.0, 4.0], [9653.0, 4.0], [9677.0, 4.0], [9661.0, 4.0], [9693.0, 4.0], [9701.0, 4.0], [9717.0, 4.0], [9725.0, 4.0], [9685.0, 4.0], [9645.0, 4.0], [9637.0, 4.0], [9621.0, 4.0], [9501.0, 2.0], [9493.0, 4.0], [9509.0, 4.0], [9549.0, 4.0], [9517.0, 4.0], [9525.0, 4.0], [9557.0, 4.0], [9581.0, 4.0], [9597.0, 4.0], [9565.0, 4.0], [9349.0, 4.0], [9365.0, 4.0], [9373.0, 3.0], [9405.0, 4.0], [9341.0, 3.0], [9613.0, 4.0], [9333.0, 4.0], [9317.0, 4.0], [9301.0, 4.0], [9221.0, 4.0], [9293.0, 4.0], [9285.0, 4.0], [9269.0, 4.0], [9229.0, 4.0], [9453.0, 4.0], [9429.0, 4.0], [9437.0, 4.0], [9749.0, 4.0], [9981.0, 4.0], [9757.0, 4.0], [9973.0, 4.0], [9853.0, 4.0], [9805.0, 4.0], [9829.0, 4.0], [9821.0, 4.0], [9845.0, 4.0], [9781.0, 4.0], [9797.0, 4.0], [9773.0, 4.0], [9765.0, 4.0], [9893.0, 4.0], [9861.0, 4.0], [9877.0, 4.0], [9869.0, 4.0], [9885.0, 4.0], [10157.0, 4.0], [10197.0, 4.0], [10133.0, 4.0], [10141.0, 4.0], [10221.0, 4.0], [10069.0, 4.0], [10085.0, 4.0], [10093.0, 4.0], [10101.0, 4.0], [10013.0, 4.0], [9965.0, 4.0], [9933.0, 4.0], [9917.0, 4.0], [2711.0, 1.0], [3611.0, 1.0], [6558.0, 1.0], [7930.0, 5.0], [7970.0, 2.0], [8142.0, 5.0], [8204.0, 2.0], [8604.0, 2.0], [8676.0, 4.0], [8548.0, 4.0], [9164.0, 4.0], [9212.0, 4.0], [8860.0, 4.0], [8964.0, 4.0], [8980.0, 4.0], [9204.0, 4.0], [9196.0, 4.0], [9188.0, 4.0], [9004.0, 4.0], [8892.0, 4.0], [8876.0, 4.0], [9132.0, 4.0], [8916.0, 4.0], [9092.0, 4.0], [9028.0, 4.0], [9084.0, 4.0], [9020.0, 4.0], [8836.0, 4.0], [9628.0, 4.0], [9724.0, 4.0], [9452.0, 4.0], [9540.0, 4.0], [9532.0, 4.0], [9508.0, 4.0], [9484.0, 4.0], [9596.0, 4.0], [9588.0, 4.0], [9556.0, 4.0], [9428.0, 4.0], [9436.0, 4.0], [9420.0, 4.0], [9404.0, 4.0], [9396.0, 4.0], [9372.0, 4.0], [9364.0, 4.0], [9356.0, 4.0], [9388.0, 4.0], [9692.0, 4.0], [9716.0, 4.0], [9700.0, 4.0], [9652.0, 4.0], [9684.0, 4.0], [9604.0, 4.0], [9620.0, 4.0], [9308.0, 4.0], [9332.0, 4.0], [9324.0, 4.0], [9316.0, 4.0], [9284.0, 4.0], [9292.0, 4.0], [9468.0, 4.0], [9260.0, 4.0], [9836.0, 4.0], [10228.0, 4.0], [9748.0, 3.0], [9764.0, 4.0], [9780.0, 4.0], [9788.0, 4.0], [9796.0, 4.0], [9732.0, 4.0], [9740.0, 4.0], [9964.0, 4.0], [9980.0, 4.0], [9908.0, 4.0], [9884.0, 4.0], [10020.0, 4.0], [10036.0, 4.0], [10100.0, 4.0], [10044.0, 4.0], [9988.0, 4.0], [10124.0, 4.0], [10180.0, 4.0], [9852.0, 4.0], [9844.0, 4.0], [10116.0, 4.0], [9996.0, 4.0], [10004.0, 4.0], [9812.0, 4.0], [9828.0, 4.0], [9948.0, 4.0], [9924.0, 4.0], [9956.0, 4.0], [10292.0, 4.0], [10348.0, 4.0], [10300.0, 4.0], [8199.0, 2.0], [8703.0, 4.0], [8335.0, 4.0], [8687.0, 4.0], [8775.0, 4.0], [8727.0, 4.0], [8879.0, 4.0], [8871.0, 4.0], [8855.0, 4.0], [8719.0, 4.0], [9087.0, 4.0], [9215.0, 4.0], [9207.0, 4.0], [9199.0, 4.0], [9135.0, 4.0], [9151.0, 4.0], [9127.0, 4.0], [9095.0, 4.0], [9183.0, 4.0], [9063.0, 4.0], [9079.0, 4.0], [9487.0, 3.0], [9703.0, 4.0], [9687.0, 4.0], [9671.0, 4.0], [9631.0, 4.0], [9719.0, 4.0], [9503.0, 4.0], [9495.0, 4.0], [9519.0, 4.0], [9535.0, 4.0], [9567.0, 4.0], [9543.0, 4.0], [9223.0, 4.0], [9471.0, 4.0], [9455.0, 4.0], [9439.0, 4.0], [9463.0, 4.0], [9391.0, 4.0], [9375.0, 4.0], [9351.0, 4.0], [9367.0, 4.0], [9399.0, 4.0], [9415.0, 4.0], [9279.0, 3.0], [9271.0, 4.0], [9295.0, 4.0], [9263.0, 4.0], [9255.0, 4.0], [9799.0, 4.0], [9759.0, 4.0], [9807.0, 4.0], [9847.0, 4.0], [10127.0, 4.0], [10007.0, 4.0], [10135.0, 4.0], [9815.0, 4.0], [9751.0, 4.0], [9735.0, 4.0], [9983.0, 4.0], [9767.0, 4.0], [9775.0, 4.0], [9783.0, 4.0], [9791.0, 4.0], [9959.0, 4.0], [9919.0, 4.0], [9951.0, 4.0], [9943.0, 4.0], [9903.0, 4.0], [10023.0, 4.0], [10031.0, 4.0], [10103.0, 4.0], [10095.0, 4.0], [10111.0, 4.0], [10071.0, 4.0], [9967.0, 4.0], [5959.0, 1.0], [8254.0, 2.0], [8550.0, 4.0], [8334.0, 4.0], [8686.0, 4.0], [8566.0, 4.0], [8774.0, 4.0], [9134.0, 4.0], [8750.0, 4.0], [8910.0, 4.0], [9126.0, 4.0], [8830.0, 4.0], [9086.0, 4.0], [8942.0, 4.0], [9206.0, 4.0], [9046.0, 4.0], [9670.0, 4.0], [9606.0, 4.0], [9622.0, 4.0], [9630.0, 4.0], [9342.0, 4.0], [9294.0, 4.0], [9542.0, 4.0], [9526.0, 4.0], [9518.0, 4.0], [9510.0, 4.0], [9502.0, 4.0], [9590.0, 4.0], [9582.0, 4.0], [9598.0, 4.0], [9566.0, 4.0], [9470.0, 4.0], [9422.0, 4.0], [9446.0, 4.0], [9406.0, 4.0], [9374.0, 4.0], [9414.0, 4.0], [9718.0, 4.0], [9686.0, 4.0], [9478.0, 4.0], [9494.0, 4.0], [9662.0, 4.0], [9654.0, 4.0], [9638.0, 4.0], [9278.0, 4.0], [9262.0, 4.0], [9254.0, 4.0], [9230.0, 4.0], [9774.0, 4.0], [9958.0, 3.0], [9758.0, 4.0], [9766.0, 4.0], [9982.0, 4.0], [9966.0, 4.0], [9750.0, 4.0], [9934.0, 4.0], [9918.0, 4.0], [9846.0, 4.0], [9814.0, 4.0], [9806.0, 4.0], [9798.0, 4.0], [9782.0, 4.0], [9886.0, 4.0], [9902.0, 4.0], [9910.0, 4.0], [10054.0, 4.0], [10102.0, 4.0], [10110.0, 4.0], [10094.0, 4.0], [10086.0, 4.0], [10014.0, 4.0], [9990.0, 4.0], [10142.0, 4.0], [10006.0, 4.0], [10134.0, 4.0], [10294.0, 4.0], [10286.0, 4.0], [10574.0, 4.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10574.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 643.3666666666667, "minX": 1.60139016E12, "maxY": 9681.933333333332, "series": [{"data": [[1.60139058E12, 9681.933333333332], [1.60139088E12, 9514.166666666666], [1.60139094E12, 9471.416666666666], [1.60139028E12, 9656.666666666666], [1.60139034E12, 9558.466666666667], [1.60139064E12, 9587.766666666666], [1.6013907E12, 9548.583333333334], [1.601391E12, 9564.133333333333], [1.60139106E12, 8010.683333333333], [1.6013904E12, 9562.45], [1.60139046E12, 9514.883333333333], [1.60139076E12, 9309.083333333334], [1.60139082E12, 9348.283333333333], [1.60139016E12, 643.3666666666667], [1.60139022E12, 9104.566666666668], [1.60139052E12, 9559.366666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60139106E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 643.2166666666667, "minX": 1.60139016E12, "maxY": 9681.933333333332, "series": [{"data": [[1.60139058E12, 9681.933333333332], [1.60139088E12, 9514.1], [1.60139094E12, 9471.416666666666], [1.60139028E12, 9656.716666666667], [1.60139034E12, 9558.433333333332], [1.60139064E12, 9587.75], [1.6013907E12, 9548.7], [1.601391E12, 9564.15], [1.60139106E12, 8011.5], [1.6013904E12, 9562.533333333333], [1.60139046E12, 9514.783333333333], [1.60139076E12, 9308.983333333334], [1.60139082E12, 9348.333333333334], [1.60139016E12, 643.2166666666667], [1.60139022E12, 9103.883333333333], [1.60139052E12, 9559.383333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60139106E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 643.2166666666667, "minX": 1.60139016E12, "maxY": 9681.933333333332, "series": [{"data": [[1.60139058E12, 9681.933333333332], [1.60139088E12, 9514.1], [1.60139094E12, 9471.416666666666], [1.60139028E12, 9656.716666666667], [1.60139034E12, 9558.433333333332], [1.60139064E12, 9587.75], [1.6013907E12, 9548.7], [1.601391E12, 9564.15], [1.60139106E12, 8011.5], [1.6013904E12, 9562.533333333333], [1.60139046E12, 9514.783333333333], [1.60139076E12, 9308.983333333334], [1.60139082E12, 9348.333333333334], [1.60139016E12, 643.2166666666667], [1.60139022E12, 9103.883333333333], [1.60139052E12, 9559.383333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60139106E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 643.2166666666667, "minX": 1.60139016E12, "maxY": 9681.933333333332, "series": [{"data": [[1.60139058E12, 9681.933333333332], [1.60139088E12, 9514.1], [1.60139094E12, 9471.416666666666], [1.60139028E12, 9656.716666666667], [1.60139034E12, 9558.433333333332], [1.60139064E12, 9587.75], [1.6013907E12, 9548.7], [1.601391E12, 9564.15], [1.60139106E12, 8011.5], [1.6013904E12, 9562.533333333333], [1.60139046E12, 9514.783333333333], [1.60139076E12, 9308.983333333334], [1.60139082E12, 9348.333333333334], [1.60139016E12, 643.2166666666667], [1.60139022E12, 9103.883333333333], [1.60139052E12, 9559.383333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60139106E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

