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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 84.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 2.0], [1.5, 2.0], [1.6, 2.0], [1.7, 2.0], [1.8, 2.0], [1.9, 2.0], [2.0, 2.0], [2.1, 2.0], [2.2, 2.0], [2.3, 2.0], [2.4, 2.0], [2.5, 2.0], [2.6, 2.0], [2.7, 2.0], [2.8, 2.0], [2.9, 2.0], [3.0, 2.0], [3.1, 2.0], [3.2, 2.0], [3.3, 2.0], [3.4, 2.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 3.0], [4.0, 3.0], [4.1, 3.0], [4.2, 3.0], [4.3, 3.0], [4.4, 3.0], [4.5, 3.0], [4.6, 3.0], [4.7, 3.0], [4.8, 3.0], [4.9, 3.0], [5.0, 3.0], [5.1, 3.0], [5.2, 3.0], [5.3, 3.0], [5.4, 3.0], [5.5, 3.0], [5.6, 3.0], [5.7, 3.0], [5.8, 3.0], [5.9, 3.0], [6.0, 3.0], [6.1, 3.0], [6.2, 3.0], [6.3, 3.0], [6.4, 3.0], [6.5, 3.0], [6.6, 3.0], [6.7, 3.0], [6.8, 3.0], [6.9, 3.0], [7.0, 3.0], [7.1, 3.0], [7.2, 3.0], [7.3, 3.0], [7.4, 3.0], [7.5, 3.0], [7.6, 3.0], [7.7, 3.0], [7.8, 3.0], [7.9, 3.0], [8.0, 3.0], [8.1, 3.0], [8.2, 3.0], [8.3, 3.0], [8.4, 3.0], [8.5, 3.0], [8.6, 3.0], [8.7, 3.0], [8.8, 3.0], [8.9, 3.0], [9.0, 3.0], [9.1, 3.0], [9.2, 3.0], [9.3, 3.0], [9.4, 3.0], [9.5, 3.0], [9.6, 3.0], [9.7, 4.0], [9.8, 4.0], [9.9, 4.0], [10.0, 4.0], [10.1, 4.0], [10.2, 4.0], [10.3, 4.0], [10.4, 4.0], [10.5, 4.0], [10.6, 4.0], [10.7, 4.0], [10.8, 4.0], [10.9, 4.0], [11.0, 4.0], [11.1, 4.0], [11.2, 4.0], [11.3, 4.0], [11.4, 4.0], [11.5, 4.0], [11.6, 4.0], [11.7, 4.0], [11.8, 4.0], [11.9, 4.0], [12.0, 4.0], [12.1, 4.0], [12.2, 4.0], [12.3, 4.0], [12.4, 4.0], [12.5, 4.0], [12.6, 4.0], [12.7, 4.0], [12.8, 4.0], [12.9, 4.0], [13.0, 4.0], [13.1, 4.0], [13.2, 4.0], [13.3, 4.0], [13.4, 4.0], [13.5, 4.0], [13.6, 4.0], [13.7, 4.0], [13.8, 4.0], [13.9, 4.0], [14.0, 4.0], [14.1, 4.0], [14.2, 4.0], [14.3, 4.0], [14.4, 4.0], [14.5, 4.0], [14.6, 4.0], [14.7, 4.0], [14.8, 4.0], [14.9, 4.0], [15.0, 4.0], [15.1, 4.0], [15.2, 4.0], [15.3, 4.0], [15.4, 4.0], [15.5, 4.0], [15.6, 4.0], [15.7, 4.0], [15.8, 4.0], [15.9, 4.0], [16.0, 4.0], [16.1, 4.0], [16.2, 4.0], [16.3, 4.0], [16.4, 4.0], [16.5, 4.0], [16.6, 4.0], [16.7, 4.0], [16.8, 4.0], [16.9, 4.0], [17.0, 4.0], [17.1, 4.0], [17.2, 4.0], [17.3, 4.0], [17.4, 4.0], [17.5, 4.0], [17.6, 4.0], [17.7, 4.0], [17.8, 4.0], [17.9, 4.0], [18.0, 4.0], [18.1, 4.0], [18.2, 4.0], [18.3, 4.0], [18.4, 4.0], [18.5, 4.0], [18.6, 4.0], [18.7, 4.0], [18.8, 4.0], [18.9, 4.0], [19.0, 4.0], [19.1, 4.0], [19.2, 4.0], [19.3, 4.0], [19.4, 4.0], [19.5, 4.0], [19.6, 4.0], [19.7, 4.0], [19.8, 5.0], [19.9, 5.0], [20.0, 5.0], [20.1, 5.0], [20.2, 5.0], [20.3, 5.0], [20.4, 5.0], [20.5, 5.0], [20.6, 5.0], [20.7, 5.0], [20.8, 5.0], [20.9, 5.0], [21.0, 5.0], [21.1, 5.0], [21.2, 5.0], [21.3, 5.0], [21.4, 5.0], [21.5, 5.0], [21.6, 5.0], [21.7, 5.0], [21.8, 5.0], [21.9, 5.0], [22.0, 5.0], [22.1, 5.0], [22.2, 5.0], [22.3, 5.0], [22.4, 5.0], [22.5, 5.0], [22.6, 5.0], [22.7, 5.0], [22.8, 5.0], [22.9, 5.0], [23.0, 5.0], [23.1, 5.0], [23.2, 5.0], [23.3, 5.0], [23.4, 5.0], [23.5, 5.0], [23.6, 5.0], [23.7, 5.0], [23.8, 5.0], [23.9, 5.0], [24.0, 5.0], [24.1, 5.0], [24.2, 5.0], [24.3, 5.0], [24.4, 5.0], [24.5, 5.0], [24.6, 5.0], [24.7, 5.0], [24.8, 5.0], [24.9, 5.0], [25.0, 5.0], [25.1, 5.0], [25.2, 5.0], [25.3, 5.0], [25.4, 5.0], [25.5, 5.0], [25.6, 5.0], [25.7, 5.0], [25.8, 5.0], [25.9, 5.0], [26.0, 5.0], [26.1, 5.0], [26.2, 5.0], [26.3, 5.0], [26.4, 5.0], [26.5, 5.0], [26.6, 5.0], [26.7, 5.0], [26.8, 5.0], [26.9, 5.0], [27.0, 5.0], [27.1, 5.0], [27.2, 5.0], [27.3, 5.0], [27.4, 5.0], [27.5, 5.0], [27.6, 5.0], [27.7, 5.0], [27.8, 5.0], [27.9, 5.0], [28.0, 5.0], [28.1, 5.0], [28.2, 5.0], [28.3, 5.0], [28.4, 5.0], [28.5, 5.0], [28.6, 5.0], [28.7, 5.0], [28.8, 5.0], [28.9, 5.0], [29.0, 5.0], [29.1, 5.0], [29.2, 5.0], [29.3, 5.0], [29.4, 5.0], [29.5, 5.0], [29.6, 5.0], [29.7, 5.0], [29.8, 5.0], [29.9, 5.0], [30.0, 5.0], [30.1, 5.0], [30.2, 5.0], [30.3, 5.0], [30.4, 5.0], [30.5, 5.0], [30.6, 5.0], [30.7, 5.0], [30.8, 5.0], [30.9, 5.0], [31.0, 5.0], [31.1, 5.0], [31.2, 5.0], [31.3, 5.0], [31.4, 5.0], [31.5, 5.0], [31.6, 5.0], [31.7, 5.0], [31.8, 5.0], [31.9, 5.0], [32.0, 5.0], [32.1, 5.0], [32.2, 5.0], [32.3, 5.0], [32.4, 5.0], [32.5, 5.0], [32.6, 6.0], [32.7, 6.0], [32.8, 6.0], [32.9, 6.0], [33.0, 6.0], [33.1, 6.0], [33.2, 6.0], [33.3, 6.0], [33.4, 6.0], [33.5, 6.0], [33.6, 6.0], [33.7, 6.0], [33.8, 6.0], [33.9, 6.0], [34.0, 6.0], [34.1, 6.0], [34.2, 6.0], [34.3, 6.0], [34.4, 6.0], [34.5, 6.0], [34.6, 6.0], [34.7, 6.0], [34.8, 6.0], [34.9, 6.0], [35.0, 6.0], [35.1, 6.0], [35.2, 6.0], [35.3, 6.0], [35.4, 6.0], [35.5, 6.0], [35.6, 6.0], [35.7, 6.0], [35.8, 6.0], [35.9, 6.0], [36.0, 6.0], [36.1, 6.0], [36.2, 6.0], [36.3, 6.0], [36.4, 6.0], [36.5, 6.0], [36.6, 6.0], [36.7, 6.0], [36.8, 6.0], [36.9, 6.0], [37.0, 6.0], [37.1, 6.0], [37.2, 6.0], [37.3, 6.0], [37.4, 6.0], [37.5, 6.0], [37.6, 6.0], [37.7, 6.0], [37.8, 6.0], [37.9, 6.0], [38.0, 6.0], [38.1, 6.0], [38.2, 6.0], [38.3, 6.0], [38.4, 6.0], [38.5, 6.0], [38.6, 6.0], [38.7, 6.0], [38.8, 6.0], [38.9, 6.0], [39.0, 6.0], [39.1, 6.0], [39.2, 6.0], [39.3, 6.0], [39.4, 6.0], [39.5, 6.0], [39.6, 6.0], [39.7, 6.0], [39.8, 6.0], [39.9, 6.0], [40.0, 6.0], [40.1, 6.0], [40.2, 6.0], [40.3, 6.0], [40.4, 6.0], [40.5, 6.0], [40.6, 6.0], [40.7, 6.0], [40.8, 6.0], [40.9, 6.0], [41.0, 6.0], [41.1, 6.0], [41.2, 6.0], [41.3, 6.0], [41.4, 6.0], [41.5, 6.0], [41.6, 6.0], [41.7, 6.0], [41.8, 6.0], [41.9, 6.0], [42.0, 6.0], [42.1, 6.0], [42.2, 6.0], [42.3, 6.0], [42.4, 6.0], [42.5, 6.0], [42.6, 6.0], [42.7, 6.0], [42.8, 6.0], [42.9, 6.0], [43.0, 6.0], [43.1, 6.0], [43.2, 6.0], [43.3, 6.0], [43.4, 6.0], [43.5, 6.0], [43.6, 6.0], [43.7, 6.0], [43.8, 6.0], [43.9, 6.0], [44.0, 6.0], [44.1, 6.0], [44.2, 6.0], [44.3, 6.0], [44.4, 6.0], [44.5, 6.0], [44.6, 6.0], [44.7, 6.0], [44.8, 6.0], [44.9, 6.0], [45.0, 6.0], [45.1, 6.0], [45.2, 6.0], [45.3, 7.0], [45.4, 7.0], [45.5, 7.0], [45.6, 7.0], [45.7, 7.0], [45.8, 7.0], [45.9, 7.0], [46.0, 7.0], [46.1, 7.0], [46.2, 7.0], [46.3, 7.0], [46.4, 7.0], [46.5, 7.0], [46.6, 7.0], [46.7, 7.0], [46.8, 7.0], [46.9, 7.0], [47.0, 7.0], [47.1, 7.0], [47.2, 7.0], [47.3, 7.0], [47.4, 7.0], [47.5, 7.0], [47.6, 7.0], [47.7, 7.0], [47.8, 7.0], [47.9, 7.0], [48.0, 7.0], [48.1, 7.0], [48.2, 7.0], [48.3, 7.0], [48.4, 7.0], [48.5, 7.0], [48.6, 7.0], [48.7, 7.0], [48.8, 7.0], [48.9, 7.0], [49.0, 7.0], [49.1, 7.0], [49.2, 7.0], [49.3, 7.0], [49.4, 7.0], [49.5, 7.0], [49.6, 7.0], [49.7, 7.0], [49.8, 7.0], [49.9, 7.0], [50.0, 7.0], [50.1, 7.0], [50.2, 7.0], [50.3, 7.0], [50.4, 7.0], [50.5, 7.0], [50.6, 7.0], [50.7, 7.0], [50.8, 7.0], [50.9, 7.0], [51.0, 7.0], [51.1, 7.0], [51.2, 7.0], [51.3, 7.0], [51.4, 7.0], [51.5, 7.0], [51.6, 7.0], [51.7, 7.0], [51.8, 7.0], [51.9, 7.0], [52.0, 7.0], [52.1, 7.0], [52.2, 7.0], [52.3, 7.0], [52.4, 7.0], [52.5, 7.0], [52.6, 7.0], [52.7, 7.0], [52.8, 7.0], [52.9, 7.0], [53.0, 7.0], [53.1, 7.0], [53.2, 7.0], [53.3, 7.0], [53.4, 7.0], [53.5, 7.0], [53.6, 7.0], [53.7, 7.0], [53.8, 7.0], [53.9, 7.0], [54.0, 7.0], [54.1, 7.0], [54.2, 7.0], [54.3, 7.0], [54.4, 7.0], [54.5, 7.0], [54.6, 7.0], [54.7, 7.0], [54.8, 7.0], [54.9, 7.0], [55.0, 7.0], [55.1, 7.0], [55.2, 7.0], [55.3, 7.0], [55.4, 7.0], [55.5, 7.0], [55.6, 7.0], [55.7, 7.0], [55.8, 7.0], [55.9, 7.0], [56.0, 7.0], [56.1, 7.0], [56.2, 7.0], [56.3, 7.0], [56.4, 7.0], [56.5, 8.0], [56.6, 8.0], [56.7, 8.0], [56.8, 8.0], [56.9, 8.0], [57.0, 8.0], [57.1, 8.0], [57.2, 8.0], [57.3, 8.0], [57.4, 8.0], [57.5, 8.0], [57.6, 8.0], [57.7, 8.0], [57.8, 8.0], [57.9, 8.0], [58.0, 8.0], [58.1, 8.0], [58.2, 8.0], [58.3, 8.0], [58.4, 8.0], [58.5, 8.0], [58.6, 8.0], [58.7, 8.0], [58.8, 8.0], [58.9, 8.0], [59.0, 8.0], [59.1, 8.0], [59.2, 8.0], [59.3, 8.0], [59.4, 8.0], [59.5, 8.0], [59.6, 8.0], [59.7, 8.0], [59.8, 8.0], [59.9, 8.0], [60.0, 8.0], [60.1, 8.0], [60.2, 8.0], [60.3, 8.0], [60.4, 8.0], [60.5, 8.0], [60.6, 8.0], [60.7, 8.0], [60.8, 8.0], [60.9, 8.0], [61.0, 8.0], [61.1, 8.0], [61.2, 8.0], [61.3, 8.0], [61.4, 8.0], [61.5, 8.0], [61.6, 8.0], [61.7, 8.0], [61.8, 8.0], [61.9, 8.0], [62.0, 8.0], [62.1, 8.0], [62.2, 8.0], [62.3, 8.0], [62.4, 8.0], [62.5, 8.0], [62.6, 8.0], [62.7, 8.0], [62.8, 8.0], [62.9, 8.0], [63.0, 8.0], [63.1, 8.0], [63.2, 8.0], [63.3, 8.0], [63.4, 8.0], [63.5, 8.0], [63.6, 8.0], [63.7, 8.0], [63.8, 8.0], [63.9, 8.0], [64.0, 8.0], [64.1, 8.0], [64.2, 8.0], [64.3, 8.0], [64.4, 8.0], [64.5, 8.0], [64.6, 8.0], [64.7, 8.0], [64.8, 8.0], [64.9, 8.0], [65.0, 8.0], [65.1, 8.0], [65.2, 8.0], [65.3, 8.0], [65.4, 8.0], [65.5, 9.0], [65.6, 9.0], [65.7, 9.0], [65.8, 9.0], [65.9, 9.0], [66.0, 9.0], [66.1, 9.0], [66.2, 9.0], [66.3, 9.0], [66.4, 9.0], [66.5, 9.0], [66.6, 9.0], [66.7, 9.0], [66.8, 9.0], [66.9, 9.0], [67.0, 9.0], [67.1, 9.0], [67.2, 9.0], [67.3, 9.0], [67.4, 9.0], [67.5, 9.0], [67.6, 9.0], [67.7, 9.0], [67.8, 9.0], [67.9, 9.0], [68.0, 9.0], [68.1, 9.0], [68.2, 9.0], [68.3, 9.0], [68.4, 9.0], [68.5, 9.0], [68.6, 9.0], [68.7, 9.0], [68.8, 9.0], [68.9, 9.0], [69.0, 9.0], [69.1, 9.0], [69.2, 9.0], [69.3, 9.0], [69.4, 9.0], [69.5, 9.0], [69.6, 9.0], [69.7, 9.0], [69.8, 9.0], [69.9, 9.0], [70.0, 9.0], [70.1, 9.0], [70.2, 9.0], [70.3, 9.0], [70.4, 9.0], [70.5, 9.0], [70.6, 9.0], [70.7, 9.0], [70.8, 9.0], [70.9, 9.0], [71.0, 9.0], [71.1, 9.0], [71.2, 9.0], [71.3, 9.0], [71.4, 9.0], [71.5, 9.0], [71.6, 9.0], [71.7, 9.0], [71.8, 9.0], [71.9, 9.0], [72.0, 9.0], [72.1, 9.0], [72.2, 9.0], [72.3, 9.0], [72.4, 9.0], [72.5, 10.0], [72.6, 10.0], [72.7, 10.0], [72.8, 10.0], [72.9, 10.0], [73.0, 10.0], [73.1, 10.0], [73.2, 10.0], [73.3, 10.0], [73.4, 10.0], [73.5, 10.0], [73.6, 10.0], [73.7, 10.0], [73.8, 10.0], [73.9, 10.0], [74.0, 10.0], [74.1, 10.0], [74.2, 10.0], [74.3, 10.0], [74.4, 10.0], [74.5, 10.0], [74.6, 10.0], [74.7, 10.0], [74.8, 10.0], [74.9, 10.0], [75.0, 10.0], [75.1, 10.0], [75.2, 10.0], [75.3, 10.0], [75.4, 10.0], [75.5, 10.0], [75.6, 10.0], [75.7, 10.0], [75.8, 10.0], [75.9, 10.0], [76.0, 10.0], [76.1, 10.0], [76.2, 10.0], [76.3, 10.0], [76.4, 10.0], [76.5, 10.0], [76.6, 10.0], [76.7, 10.0], [76.8, 10.0], [76.9, 10.0], [77.0, 10.0], [77.1, 10.0], [77.2, 10.0], [77.3, 10.0], [77.4, 10.0], [77.5, 10.0], [77.6, 10.0], [77.7, 11.0], [77.8, 11.0], [77.9, 11.0], [78.0, 11.0], [78.1, 11.0], [78.2, 11.0], [78.3, 11.0], [78.4, 11.0], [78.5, 11.0], [78.6, 11.0], [78.7, 11.0], [78.8, 11.0], [78.9, 11.0], [79.0, 11.0], [79.1, 11.0], [79.2, 11.0], [79.3, 11.0], [79.4, 11.0], [79.5, 11.0], [79.6, 11.0], [79.7, 11.0], [79.8, 11.0], [79.9, 11.0], [80.0, 11.0], [80.1, 11.0], [80.2, 11.0], [80.3, 11.0], [80.4, 11.0], [80.5, 11.0], [80.6, 11.0], [80.7, 11.0], [80.8, 11.0], [80.9, 11.0], [81.0, 11.0], [81.1, 11.0], [81.2, 11.0], [81.3, 11.0], [81.4, 11.0], [81.5, 11.0], [81.6, 12.0], [81.7, 12.0], [81.8, 12.0], [81.9, 12.0], [82.0, 12.0], [82.1, 12.0], [82.2, 12.0], [82.3, 12.0], [82.4, 12.0], [82.5, 12.0], [82.6, 12.0], [82.7, 12.0], [82.8, 12.0], [82.9, 12.0], [83.0, 12.0], [83.1, 12.0], [83.2, 12.0], [83.3, 12.0], [83.4, 12.0], [83.5, 12.0], [83.6, 12.0], [83.7, 12.0], [83.8, 12.0], [83.9, 12.0], [84.0, 12.0], [84.1, 12.0], [84.2, 12.0], [84.3, 12.0], [84.4, 13.0], [84.5, 13.0], [84.6, 13.0], [84.7, 13.0], [84.8, 13.0], [84.9, 13.0], [85.0, 13.0], [85.1, 13.0], [85.2, 13.0], [85.3, 13.0], [85.4, 13.0], [85.5, 13.0], [85.6, 13.0], [85.7, 13.0], [85.8, 13.0], [85.9, 13.0], [86.0, 13.0], [86.1, 13.0], [86.2, 13.0], [86.3, 13.0], [86.4, 13.0], [86.5, 14.0], [86.6, 14.0], [86.7, 14.0], [86.8, 14.0], [86.9, 14.0], [87.0, 14.0], [87.1, 14.0], [87.2, 14.0], [87.3, 14.0], [87.4, 14.0], [87.5, 14.0], [87.6, 14.0], [87.7, 14.0], [87.8, 14.0], [87.9, 14.0], [88.0, 15.0], [88.1, 15.0], [88.2, 15.0], [88.3, 15.0], [88.4, 15.0], [88.5, 15.0], [88.6, 15.0], [88.7, 15.0], [88.8, 15.0], [88.9, 15.0], [89.0, 15.0], [89.1, 16.0], [89.2, 16.0], [89.3, 16.0], [89.4, 16.0], [89.5, 16.0], [89.6, 16.0], [89.7, 16.0], [89.8, 16.0], [89.9, 16.0], [90.0, 17.0], [90.1, 17.0], [90.2, 17.0], [90.3, 17.0], [90.4, 17.0], [90.5, 17.0], [90.6, 18.0], [90.7, 18.0], [90.8, 18.0], [90.9, 18.0], [91.0, 18.0], [91.1, 19.0], [91.2, 19.0], [91.3, 19.0], [91.4, 19.0], [91.5, 19.0], [91.6, 20.0], [91.7, 20.0], [91.8, 20.0], [91.9, 20.0], [92.0, 20.0], [92.1, 21.0], [92.2, 21.0], [92.3, 21.0], [92.4, 21.0], [92.5, 21.0], [92.6, 22.0], [92.7, 22.0], [92.8, 22.0], [92.9, 22.0], [93.0, 22.0], [93.1, 23.0], [93.2, 23.0], [93.3, 23.0], [93.4, 23.0], [93.5, 23.0], [93.6, 23.0], [93.7, 24.0], [93.8, 24.0], [93.9, 24.0], [94.0, 24.0], [94.1, 24.0], [94.2, 24.0], [94.3, 25.0], [94.4, 25.0], [94.5, 25.0], [94.6, 25.0], [94.7, 25.0], [94.8, 25.0], [94.9, 26.0], [95.0, 26.0], [95.1, 26.0], [95.2, 26.0], [95.3, 26.0], [95.4, 26.0], [95.5, 27.0], [95.6, 27.0], [95.7, 27.0], [95.8, 27.0], [95.9, 27.0], [96.0, 27.0], [96.1, 27.0], [96.2, 28.0], [96.3, 28.0], [96.4, 28.0], [96.5, 28.0], [96.6, 28.0], [96.7, 28.0], [96.8, 29.0], [96.9, 29.0], [97.0, 29.0], [97.1, 29.0], [97.2, 29.0], [97.3, 29.0], [97.4, 30.0], [97.5, 30.0], [97.6, 30.0], [97.7, 30.0], [97.8, 30.0], [97.9, 31.0], [98.0, 31.0], [98.1, 31.0], [98.2, 31.0], [98.3, 32.0], [98.4, 32.0], [98.5, 32.0], [98.6, 32.0], [98.7, 33.0], [98.8, 33.0], [98.9, 33.0], [99.0, 34.0], [99.1, 34.0], [99.2, 35.0], [99.3, 35.0], [99.4, 36.0], [99.5, 36.0], [99.6, 37.0], [99.7, 38.0], [99.8, 39.0], [99.9, 42.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1389274.0, "minX": 0.0, "maxY": 1389274.0, "series": [{"data": [[0.0, 1389274.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4.9E-324, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1389274.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1389274.0, "series": [{"data": [[0.0, 1389274.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 12.958414101470602, "minX": 1.60137996E12, "maxY": 50.0, "series": [{"data": [[1.60137996E12, 12.958414101470602], [1.60138014E12, 50.0], [1.60138008E12, 50.0], [1.60138026E12, 50.0], [1.6013802E12, 50.0], [1.60138002E12, 42.13332611214543]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138026E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.9198542805100185, "minX": 1.0, "maxY": 9.515567160579591, "series": [{"data": [[2.0, 1.9198542805100185], [3.0, 1.9376484560570084], [4.0, 2.0131221719457026], [5.0, 2.30803753569971], [6.0, 2.432518597236984], [7.0, 2.8494318181818166], [8.0, 2.5983721582935684], [9.0, 2.6302648171500573], [10.0, 2.841620179480954], [11.0, 2.837458193979936], [12.0, 2.935666387259015], [13.0, 3.078245046502225], [14.0, 3.3856585165399657], [15.0, 3.7691484809584894], [16.0, 3.7715654952076743], [17.0, 3.96615201900238], [18.0, 4.393883033684636], [19.0, 4.512882447665052], [20.0, 4.6330921181302545], [21.0, 4.958225064961035], [22.0, 4.764016123122038], [23.0, 4.97231389805647], [24.0, 5.389865759122702], [25.0, 5.235075287865371], [26.0, 5.4702338766832055], [27.0, 5.8616709417368975], [28.0, 5.891176992721461], [29.0, 5.66529062087185], [30.0, 6.103347639484981], [31.0, 6.235603872940379], [32.0, 6.475953280659569], [33.0, 6.849046702816172], [34.0, 6.698294419605909], [35.0, 6.661217948717953], [36.0, 7.3891293058680905], [37.0, 7.1861606412563495], [38.0, 7.606411547499161], [39.0, 7.423772196448565], [40.0, 7.558010171646533], [41.0, 7.708400128246236], [42.0, 8.202593991134467], [43.0, 8.282749675745768], [44.0, 8.432758898373356], [45.0, 8.731687377370873], [46.0, 9.054009277667344], [47.0, 8.905086357154179], [48.0, 9.221359223300995], [49.0, 9.472163265306115], [50.0, 9.515567160579591], [1.0, 2.0733333333333337]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[46.21168682347722, 8.881009073804528]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 248206.13333333333, "minX": 1.60137996E12, "maxY": 6732466.333333333, "series": [{"data": [[1.60137996E12, 266973.06666666665], [1.60138014E12, 1075983.9166666667], [1.60138008E12, 1077153.3666666667], [1.60138026E12, 248206.13333333333], [1.6013802E12, 1074138.7166666666], [1.60138002E12, 1051204.6166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60137996E12, 1668871.8], [1.60138014E12, 6725176.8], [1.60138008E12, 6732466.333333333], [1.60138026E12, 1551355.0333333334], [1.6013802E12, 6713660.2], [1.60138002E12, 6570479.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138026E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3.390375022615107, "minX": 1.60137996E12, "maxY": 9.552011256095213, "series": [{"data": [[1.60137996E12, 3.390375022615107], [1.60138014E12, 9.542275969111593], [1.60138008E12, 9.527568312137552], [1.60138026E12, 9.379339107224753], [1.6013802E12, 9.552011256095213], [1.60138002E12, 8.132984746880881]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138026E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3.3838101884159393, "minX": 1.60137996E12, "maxY": 9.54692288418151, "series": [{"data": [[1.60137996E12, 3.3838101884159393], [1.60138014E12, 9.537286102773352], [1.60138008E12, 9.522564628247238], [1.60138026E12, 9.374209333685506], [1.6013802E12, 9.54692288418151], [1.60138002E12, 8.12773625594522]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138026E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.2511642778696724E-4, "minX": 1.60137996E12, "maxY": 7.882970199788047E-4, "series": [{"data": [[1.60137996E12, 7.882970199788047E-4], [1.60138014E12, 1.3789476384720015E-4], [1.60138008E12, 1.5055899029375237E-4], [1.60138026E12, 1.2511642778696724E-4], [1.6013802E12, 1.2849424024568114E-4], [1.60138002E12, 1.3457669066070793E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138026E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60137996E12, "maxY": 84.0, "series": [{"data": [[1.60137996E12, 68.0], [1.60138014E12, 57.0], [1.60138008E12, 62.0], [1.60138026E12, 51.0], [1.6013802E12, 84.0], [1.60138002E12, 55.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60137996E12, 1.0], [1.60138014E12, 3.0], [1.60138008E12, 3.0], [1.60138026E12, 2.0], [1.6013802E12, 3.0], [1.60138002E12, 3.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60137996E12, 1.0], [1.60138014E12, 3.0], [1.60138008E12, 3.0], [1.60138026E12, 2.0], [1.6013802E12, 3.0], [1.60138002E12, 3.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60137996E12, 1.0], [1.60138014E12, 3.0], [1.60138008E12, 3.0], [1.60138026E12, 2.0], [1.6013802E12, 3.0], [1.60138002E12, 3.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60137996E12, 1.0], [1.60138014E12, 1.0], [1.60138008E12, 1.0], [1.60138026E12, 1.0], [1.6013802E12, 1.0], [1.60138002E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60137996E12, 4.0], [1.60138014E12, 7.0], [1.60138008E12, 7.0], [1.60138026E12, 7.0], [1.6013802E12, 7.0], [1.60138002E12, 8.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138026E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 273.0, "maxY": 8.0, "series": [{"data": [[273.0, 2.0], [752.0, 2.0], [1103.0, 2.0], [1554.0, 2.0], [1801.0, 2.0], [2087.0, 2.0], [2224.0, 2.0], [2456.0, 2.0], [2478.0, 2.0], [2935.0, 8.0], [3172.0, 2.0], [3282.0, 2.0], [3409.0, 3.0], [3690.0, 3.0], [3903.0, 3.0], [3867.0, 3.0], [3902.0, 3.0], [4039.0, 3.0], [4005.0, 3.0], [4079.0, 4.0], [4156.0, 3.0], [4278.0, 4.0], [4150.0, 4.0], [4376.0, 3.0], [4558.0, 4.0], [4834.0, 8.0], [4852.0, 8.0], [4828.0, 4.0], [4788.0, 5.0], [4682.0, 5.0], [4688.0, 8.0], [4722.0, 8.0], [4848.0, 8.0], [4838.0, 8.0], [5008.0, 7.0], [4918.0, 5.0], [5060.0, 8.0], [5062.0, 8.0], [5070.0, 7.0], [5096.0, 8.0], [5086.0, 7.0], [5094.0, 8.0], [5080.0, 7.0], [5058.0, 5.0], [5044.0, 8.0], [5046.0, 8.0], [5048.0, 7.0], [5054.0, 8.0], [5038.0, 7.0], [5028.0, 8.0], [5030.0, 7.0], [5022.0, 8.0], [5010.0, 8.0], [5118.0, 7.0], [4994.0, 8.0], [4996.0, 8.0], [5006.0, 8.0], [5114.0, 7.0], [5116.0, 8.0], [4948.0, 6.0], [4932.0, 8.0], [4952.0, 7.0], [4950.0, 7.5], [4910.0, 8.0], [4978.0, 8.0], [5320.0, 7.0], [5192.0, 5.0], [5188.0, 7.0], [5200.0, 7.0], [5194.0, 8.0], [5218.0, 7.0], [5224.0, 8.0], [5230.0, 7.0], [5234.0, 8.0], [5124.0, 8.0], [5242.0, 7.0], [5212.0, 7.0], [5210.0, 7.0], [5294.0, 6.0], [5306.0, 7.0], [5308.0, 7.0], [5296.0, 7.0], [5298.0, 7.0], [5274.0, 7.0], [5290.0, 7.0], [5286.0, 7.0], [5264.0, 7.0], [5262.0, 7.0], [5356.0, 7.0], [5358.0, 7.0], [5370.0, 7.0], [5346.0, 7.0], [5348.0, 7.0], [5334.0, 7.0], [5342.0, 7.0], [5324.0, 7.0], [5326.0, 7.0], [5176.0, 8.0], [5314.0, 7.0], [5318.0, 7.0], [5166.0, 7.0], [5172.0, 7.0], [5162.0, 6.0], [5158.0, 7.0], [5154.0, 7.0], [5164.0, 7.0], [5134.0, 7.0], [5132.0, 7.0], [5146.0, 8.0], [5150.0, 7.0], [5144.0, 8.0], [5138.0, 7.0], [5586.0, 7.0], [5512.0, 7.0], [5516.0, 7.0], [5560.0, 7.0], [5542.0, 7.0], [5540.0, 7.0], [5440.0, 7.0], [5448.0, 7.0], [5452.0, 7.0], [5454.0, 7.0], [5492.0, 7.0], [5622.0, 7.0], [5406.0, 7.0], [5376.0, 7.0], [5380.0, 7.0], [5394.0, 7.0], [5430.0, 7.0], [5412.0, 7.0], [5408.0, 7.0], [5874.0, 7.0], [5674.0, 7.0], [4147.0, 3.0], [4199.0, 3.0], [4293.0, 4.0], [4515.0, 4.0], [4527.0, 4.0], [4567.0, 4.0], [4417.0, 5.0], [4813.0, 8.0], [4667.0, 4.0], [4745.0, 5.0], [4789.0, 8.0], [4793.0, 8.0], [4851.0, 8.0], [4833.0, 8.0], [5077.0, 7.0], [5101.0, 7.0], [4915.0, 6.0], [4921.0, 8.0], [5063.0, 8.0], [5067.0, 8.0], [5099.0, 8.0], [5087.0, 7.0], [5095.0, 7.0], [5043.0, 5.0], [5049.0, 7.0], [5035.0, 8.0], [5119.0, 7.0], [5117.0, 7.0], [4993.0, 8.0], [5103.0, 7.0], [5113.0, 7.0], [5109.0, 8.0], [5115.0, 7.0], [4977.0, 5.0], [4947.0, 8.0], [4941.0, 8.0], [4939.0, 8.0], [4959.0, 8.0], [4973.0, 8.0], [4873.0, 6.0], [4879.0, 8.0], [4881.0, 8.0], [4985.0, 7.0], [4989.0, 8.0], [5247.0, 7.0], [5153.0, 6.0], [5165.0, 6.0], [5155.0, 7.0], [5187.0, 7.0], [5191.0, 8.0], [5211.0, 7.0], [5207.0, 7.0], [5201.0, 7.0], [5205.0, 7.0], [5193.0, 7.0], [5213.0, 8.0], [5217.0, 8.0], [5123.0, 7.0], [5227.0, 7.0], [5231.0, 7.0], [5225.0, 7.0], [5239.0, 7.0], [5243.0, 7.0], [5245.0, 7.0], [5241.0, 7.0], [5307.0, 7.0], [5309.0, 7.0], [5311.0, 7.0], [5303.0, 7.0], [5283.0, 7.0], [5293.0, 7.0], [5291.0, 7.0], [5259.0, 7.0], [5267.0, 7.0], [5261.0, 7.0], [5349.0, 7.0], [5347.0, 7.0], [5329.0, 7.0], [5331.0, 8.0], [5335.0, 7.0], [5321.0, 7.0], [5179.0, 8.0], [5313.0, 7.0], [5255.0, 7.0], [5373.0, 7.0], [5375.0, 7.0], [5363.0, 7.0], [5367.0, 7.0], [5273.0, 7.0], [5133.0, 7.0], [5143.0, 8.0], [5135.0, 8.0], [5137.0, 7.0], [5129.0, 7.0], [5405.0, 8.0], [5583.0, 7.0], [5425.0, 7.0], [5515.0, 7.0], [5519.0, 7.0], [5585.0, 7.0], [5621.0, 7.0], [5495.0, 7.0], [5467.0, 7.0], [5395.0, 7.0], [5383.0, 7.0], [5399.0, 7.0], [5397.0, 7.0], [5503.0, 7.0], [5723.0, 7.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5874.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2.0, "minX": 273.0, "maxY": 8.0, "series": [{"data": [[273.0, 2.0], [752.0, 2.0], [1103.0, 2.0], [1554.0, 2.0], [1801.0, 2.0], [2087.0, 2.0], [2224.0, 2.0], [2456.0, 2.0], [2478.0, 2.0], [2935.0, 8.0], [3172.0, 2.0], [3282.0, 2.0], [3409.0, 3.0], [3690.0, 3.0], [3903.0, 3.0], [3867.0, 3.0], [3902.0, 3.0], [4039.0, 3.0], [4005.0, 3.0], [4079.0, 4.0], [4156.0, 3.0], [4278.0, 4.0], [4150.0, 4.0], [4376.0, 3.0], [4558.0, 4.0], [4834.0, 8.0], [4852.0, 8.0], [4828.0, 4.0], [4788.0, 5.0], [4682.0, 5.0], [4688.0, 8.0], [4722.0, 8.0], [4848.0, 8.0], [4838.0, 8.0], [5008.0, 7.0], [4918.0, 5.0], [5060.0, 8.0], [5062.0, 8.0], [5070.0, 7.0], [5096.0, 8.0], [5086.0, 7.0], [5094.0, 8.0], [5080.0, 7.0], [5058.0, 5.0], [5044.0, 8.0], [5046.0, 8.0], [5048.0, 7.0], [5054.0, 8.0], [5038.0, 7.0], [5028.0, 8.0], [5030.0, 7.0], [5022.0, 8.0], [5010.0, 8.0], [5118.0, 7.0], [4994.0, 8.0], [4996.0, 8.0], [5006.0, 8.0], [5114.0, 7.0], [5116.0, 8.0], [4948.0, 6.0], [4932.0, 8.0], [4952.0, 7.0], [4950.0, 7.5], [4910.0, 8.0], [4978.0, 8.0], [5320.0, 7.0], [5192.0, 5.0], [5188.0, 7.0], [5200.0, 7.0], [5194.0, 7.5], [5218.0, 7.0], [5224.0, 8.0], [5230.0, 7.0], [5234.0, 8.0], [5124.0, 7.0], [5242.0, 7.0], [5212.0, 7.0], [5210.0, 7.0], [5294.0, 6.0], [5306.0, 7.0], [5308.0, 7.0], [5296.0, 7.0], [5298.0, 7.0], [5274.0, 7.0], [5290.0, 7.0], [5286.0, 7.0], [5264.0, 7.0], [5262.0, 7.0], [5356.0, 7.0], [5358.0, 7.0], [5370.0, 7.0], [5346.0, 7.0], [5348.0, 7.0], [5334.0, 7.0], [5342.0, 7.0], [5324.0, 7.0], [5326.0, 7.0], [5176.0, 8.0], [5314.0, 7.0], [5318.0, 7.0], [5166.0, 7.0], [5172.0, 7.0], [5162.0, 6.0], [5158.0, 7.0], [5154.0, 7.0], [5164.0, 7.0], [5134.0, 7.0], [5132.0, 7.0], [5146.0, 8.0], [5150.0, 7.0], [5144.0, 8.0], [5138.0, 7.0], [5586.0, 7.0], [5512.0, 7.0], [5516.0, 7.0], [5560.0, 7.0], [5542.0, 7.0], [5540.0, 7.0], [5440.0, 7.0], [5448.0, 7.0], [5452.0, 7.0], [5454.0, 7.0], [5492.0, 7.0], [5622.0, 7.0], [5406.0, 7.0], [5376.0, 7.0], [5380.0, 7.0], [5394.0, 7.0], [5430.0, 7.0], [5412.0, 7.0], [5408.0, 7.0], [5874.0, 7.0], [5674.0, 7.0], [4147.0, 3.0], [4199.0, 3.0], [4293.0, 4.0], [4515.0, 4.0], [4527.0, 4.0], [4567.0, 4.0], [4417.0, 5.0], [4813.0, 8.0], [4667.0, 4.0], [4745.0, 5.0], [4789.0, 8.0], [4793.0, 8.0], [4851.0, 8.0], [4833.0, 8.0], [5077.0, 6.0], [5101.0, 7.0], [4915.0, 6.0], [4921.0, 8.0], [5063.0, 8.0], [5067.0, 8.0], [5099.0, 8.0], [5087.0, 7.0], [5095.0, 7.0], [5043.0, 5.0], [5049.0, 7.0], [5035.0, 8.0], [5119.0, 7.0], [5117.0, 7.0], [4993.0, 8.0], [5103.0, 7.0], [5113.0, 7.0], [5109.0, 8.0], [5115.0, 7.0], [4977.0, 5.0], [4947.0, 8.0], [4941.0, 8.0], [4939.0, 8.0], [4959.0, 8.0], [4973.0, 8.0], [4873.0, 6.0], [4879.0, 8.0], [4881.0, 8.0], [4985.0, 7.0], [4989.0, 8.0], [5247.0, 7.0], [5153.0, 6.0], [5165.0, 6.0], [5155.0, 7.0], [5187.0, 7.0], [5191.0, 8.0], [5211.0, 7.0], [5207.0, 7.0], [5201.0, 7.0], [5205.0, 7.0], [5193.0, 7.0], [5213.0, 8.0], [5217.0, 8.0], [5123.0, 7.0], [5227.0, 7.0], [5231.0, 7.0], [5225.0, 7.0], [5239.0, 7.0], [5243.0, 7.0], [5245.0, 7.0], [5241.0, 7.0], [5307.0, 7.0], [5309.0, 7.0], [5311.0, 7.0], [5303.0, 7.0], [5283.0, 7.0], [5293.0, 7.0], [5291.0, 7.0], [5259.0, 7.0], [5267.0, 7.0], [5261.0, 7.0], [5349.0, 7.0], [5347.0, 7.0], [5329.0, 7.0], [5331.0, 8.0], [5335.0, 7.0], [5321.0, 7.0], [5179.0, 8.0], [5313.0, 7.0], [5255.0, 7.0], [5373.0, 7.0], [5375.0, 7.0], [5363.0, 7.0], [5367.0, 7.0], [5273.0, 7.0], [5133.0, 7.0], [5143.0, 8.0], [5135.0, 8.0], [5137.0, 7.0], [5129.0, 7.0], [5405.0, 8.0], [5583.0, 7.0], [5425.0, 7.0], [5515.0, 7.0], [5519.0, 7.0], [5585.0, 7.0], [5621.0, 7.0], [5495.0, 7.0], [5467.0, 7.0], [5395.0, 7.0], [5383.0, 7.0], [5399.0, 7.0], [5397.0, 7.0], [5503.0, 7.0], [5723.0, 7.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5874.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1198.05, "minX": 1.60137996E12, "maxY": 5202.966666666666, "series": [{"data": [[1.60137996E12, 1290.0333333333333], [1.60138014E12, 5197.166666666667], [1.60138008E12, 5202.966666666666], [1.60138026E12, 1198.05], [1.6013802E12, 5188.4], [1.60138002E12, 5077.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138026E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1198.8833333333334, "minX": 1.60137996E12, "maxY": 5202.833333333333, "series": [{"data": [[1.60137996E12, 1289.7], [1.60138014E12, 5197.2], [1.60138008E12, 5202.833333333333], [1.60138026E12, 1198.8833333333334], [1.6013802E12, 5188.3], [1.60138002E12, 5077.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138026E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1198.8833333333334, "minX": 1.60137996E12, "maxY": 5202.833333333333, "series": [{"data": [[1.60137996E12, 1289.7], [1.60138014E12, 5197.2], [1.60138008E12, 5202.833333333333], [1.60138026E12, 1198.8833333333334], [1.6013802E12, 5188.3], [1.60138002E12, 5077.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138026E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1198.8833333333334, "minX": 1.60137996E12, "maxY": 5202.833333333333, "series": [{"data": [[1.60137996E12, 1289.7], [1.60138014E12, 5197.2], [1.60138008E12, 5202.833333333333], [1.60138026E12, 1198.8833333333334], [1.6013802E12, 5188.3], [1.60138002E12, 5077.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138026E12, "title": "Total Transactions Per Second"}},
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

