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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 108.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 2.0], [1.5, 2.0], [1.6, 2.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 3.0], [4.0, 3.0], [4.1, 3.0], [4.2, 3.0], [4.3, 3.0], [4.4, 3.0], [4.5, 3.0], [4.6, 3.0], [4.7, 3.0], [4.8, 3.0], [4.9, 3.0], [5.0, 3.0], [5.1, 3.0], [5.2, 3.0], [5.3, 3.0], [5.4, 3.0], [5.5, 3.0], [5.6, 3.0], [5.7, 3.0], [5.8, 3.0], [5.9, 3.0], [6.0, 3.0], [6.1, 3.0], [6.2, 4.0], [6.3, 4.0], [6.4, 4.0], [6.5, 4.0], [6.6, 4.0], [6.7, 4.0], [6.8, 4.0], [6.9, 4.0], [7.0, 4.0], [7.1, 4.0], [7.2, 4.0], [7.3, 4.0], [7.4, 4.0], [7.5, 4.0], [7.6, 4.0], [7.7, 4.0], [7.8, 4.0], [7.9, 4.0], [8.0, 4.0], [8.1, 4.0], [8.2, 4.0], [8.3, 4.0], [8.4, 4.0], [8.5, 4.0], [8.6, 4.0], [8.7, 4.0], [8.8, 4.0], [8.9, 4.0], [9.0, 4.0], [9.1, 4.0], [9.2, 4.0], [9.3, 4.0], [9.4, 4.0], [9.5, 4.0], [9.6, 4.0], [9.7, 4.0], [9.8, 4.0], [9.9, 4.0], [10.0, 4.0], [10.1, 4.0], [10.2, 4.0], [10.3, 4.0], [10.4, 4.0], [10.5, 4.0], [10.6, 4.0], [10.7, 4.0], [10.8, 4.0], [10.9, 4.0], [11.0, 4.0], [11.1, 4.0], [11.2, 4.0], [11.3, 4.0], [11.4, 4.0], [11.5, 4.0], [11.6, 4.0], [11.7, 4.0], [11.8, 4.0], [11.9, 4.0], [12.0, 4.0], [12.1, 4.0], [12.2, 4.0], [12.3, 4.0], [12.4, 4.0], [12.5, 4.0], [12.6, 4.0], [12.7, 4.0], [12.8, 4.0], [12.9, 4.0], [13.0, 4.0], [13.1, 4.0], [13.2, 4.0], [13.3, 4.0], [13.4, 4.0], [13.5, 4.0], [13.6, 4.0], [13.7, 4.0], [13.8, 4.0], [13.9, 4.0], [14.0, 4.0], [14.1, 4.0], [14.2, 4.0], [14.3, 4.0], [14.4, 4.0], [14.5, 4.0], [14.6, 4.0], [14.7, 4.0], [14.8, 4.0], [14.9, 4.0], [15.0, 4.0], [15.1, 4.0], [15.2, 4.0], [15.3, 4.0], [15.4, 5.0], [15.5, 5.0], [15.6, 5.0], [15.7, 5.0], [15.8, 5.0], [15.9, 5.0], [16.0, 5.0], [16.1, 5.0], [16.2, 5.0], [16.3, 5.0], [16.4, 5.0], [16.5, 5.0], [16.6, 5.0], [16.7, 5.0], [16.8, 5.0], [16.9, 5.0], [17.0, 5.0], [17.1, 5.0], [17.2, 5.0], [17.3, 5.0], [17.4, 5.0], [17.5, 5.0], [17.6, 5.0], [17.7, 5.0], [17.8, 5.0], [17.9, 5.0], [18.0, 5.0], [18.1, 5.0], [18.2, 5.0], [18.3, 5.0], [18.4, 5.0], [18.5, 5.0], [18.6, 5.0], [18.7, 5.0], [18.8, 5.0], [18.9, 5.0], [19.0, 5.0], [19.1, 5.0], [19.2, 5.0], [19.3, 5.0], [19.4, 5.0], [19.5, 5.0], [19.6, 5.0], [19.7, 5.0], [19.8, 5.0], [19.9, 5.0], [20.0, 5.0], [20.1, 5.0], [20.2, 5.0], [20.3, 5.0], [20.4, 5.0], [20.5, 5.0], [20.6, 5.0], [20.7, 5.0], [20.8, 5.0], [20.9, 5.0], [21.0, 5.0], [21.1, 5.0], [21.2, 5.0], [21.3, 5.0], [21.4, 5.0], [21.5, 5.0], [21.6, 5.0], [21.7, 5.0], [21.8, 5.0], [21.9, 5.0], [22.0, 5.0], [22.1, 5.0], [22.2, 5.0], [22.3, 5.0], [22.4, 5.0], [22.5, 5.0], [22.6, 5.0], [22.7, 5.0], [22.8, 5.0], [22.9, 5.0], [23.0, 5.0], [23.1, 5.0], [23.2, 5.0], [23.3, 5.0], [23.4, 5.0], [23.5, 5.0], [23.6, 5.0], [23.7, 5.0], [23.8, 5.0], [23.9, 5.0], [24.0, 5.0], [24.1, 5.0], [24.2, 5.0], [24.3, 5.0], [24.4, 5.0], [24.5, 5.0], [24.6, 5.0], [24.7, 5.0], [24.8, 5.0], [24.9, 5.0], [25.0, 5.0], [25.1, 5.0], [25.2, 5.0], [25.3, 5.0], [25.4, 5.0], [25.5, 5.0], [25.6, 5.0], [25.7, 5.0], [25.8, 5.0], [25.9, 5.0], [26.0, 5.0], [26.1, 5.0], [26.2, 5.0], [26.3, 5.0], [26.4, 5.0], [26.5, 5.0], [26.6, 5.0], [26.7, 5.0], [26.8, 5.0], [26.9, 5.0], [27.0, 5.0], [27.1, 5.0], [27.2, 5.0], [27.3, 5.0], [27.4, 5.0], [27.5, 5.0], [27.6, 5.0], [27.7, 5.0], [27.8, 5.0], [27.9, 5.0], [28.0, 6.0], [28.1, 6.0], [28.2, 6.0], [28.3, 6.0], [28.4, 6.0], [28.5, 6.0], [28.6, 6.0], [28.7, 6.0], [28.8, 6.0], [28.9, 6.0], [29.0, 6.0], [29.1, 6.0], [29.2, 6.0], [29.3, 6.0], [29.4, 6.0], [29.5, 6.0], [29.6, 6.0], [29.7, 6.0], [29.8, 6.0], [29.9, 6.0], [30.0, 6.0], [30.1, 6.0], [30.2, 6.0], [30.3, 6.0], [30.4, 6.0], [30.5, 6.0], [30.6, 6.0], [30.7, 6.0], [30.8, 6.0], [30.9, 6.0], [31.0, 6.0], [31.1, 6.0], [31.2, 6.0], [31.3, 6.0], [31.4, 6.0], [31.5, 6.0], [31.6, 6.0], [31.7, 6.0], [31.8, 6.0], [31.9, 6.0], [32.0, 6.0], [32.1, 6.0], [32.2, 6.0], [32.3, 6.0], [32.4, 6.0], [32.5, 6.0], [32.6, 6.0], [32.7, 6.0], [32.8, 6.0], [32.9, 6.0], [33.0, 6.0], [33.1, 6.0], [33.2, 6.0], [33.3, 6.0], [33.4, 6.0], [33.5, 6.0], [33.6, 6.0], [33.7, 6.0], [33.8, 6.0], [33.9, 6.0], [34.0, 6.0], [34.1, 6.0], [34.2, 6.0], [34.3, 6.0], [34.4, 6.0], [34.5, 6.0], [34.6, 6.0], [34.7, 6.0], [34.8, 6.0], [34.9, 6.0], [35.0, 6.0], [35.1, 6.0], [35.2, 6.0], [35.3, 6.0], [35.4, 6.0], [35.5, 6.0], [35.6, 6.0], [35.7, 6.0], [35.8, 6.0], [35.9, 6.0], [36.0, 6.0], [36.1, 6.0], [36.2, 6.0], [36.3, 6.0], [36.4, 6.0], [36.5, 6.0], [36.6, 6.0], [36.7, 6.0], [36.8, 6.0], [36.9, 6.0], [37.0, 6.0], [37.1, 6.0], [37.2, 6.0], [37.3, 6.0], [37.4, 6.0], [37.5, 6.0], [37.6, 6.0], [37.7, 6.0], [37.8, 6.0], [37.9, 6.0], [38.0, 6.0], [38.1, 6.0], [38.2, 6.0], [38.3, 6.0], [38.4, 6.0], [38.5, 6.0], [38.6, 6.0], [38.7, 6.0], [38.8, 6.0], [38.9, 6.0], [39.0, 6.0], [39.1, 6.0], [39.2, 6.0], [39.3, 6.0], [39.4, 6.0], [39.5, 6.0], [39.6, 6.0], [39.7, 6.0], [39.8, 6.0], [39.9, 6.0], [40.0, 6.0], [40.1, 6.0], [40.2, 6.0], [40.3, 6.0], [40.4, 6.0], [40.5, 6.0], [40.6, 6.0], [40.7, 6.0], [40.8, 6.0], [40.9, 6.0], [41.0, 6.0], [41.1, 6.0], [41.2, 7.0], [41.3, 7.0], [41.4, 7.0], [41.5, 7.0], [41.6, 7.0], [41.7, 7.0], [41.8, 7.0], [41.9, 7.0], [42.0, 7.0], [42.1, 7.0], [42.2, 7.0], [42.3, 7.0], [42.4, 7.0], [42.5, 7.0], [42.6, 7.0], [42.7, 7.0], [42.8, 7.0], [42.9, 7.0], [43.0, 7.0], [43.1, 7.0], [43.2, 7.0], [43.3, 7.0], [43.4, 7.0], [43.5, 7.0], [43.6, 7.0], [43.7, 7.0], [43.8, 7.0], [43.9, 7.0], [44.0, 7.0], [44.1, 7.0], [44.2, 7.0], [44.3, 7.0], [44.4, 7.0], [44.5, 7.0], [44.6, 7.0], [44.7, 7.0], [44.8, 7.0], [44.9, 7.0], [45.0, 7.0], [45.1, 7.0], [45.2, 7.0], [45.3, 7.0], [45.4, 7.0], [45.5, 7.0], [45.6, 7.0], [45.7, 7.0], [45.8, 7.0], [45.9, 7.0], [46.0, 7.0], [46.1, 7.0], [46.2, 7.0], [46.3, 7.0], [46.4, 7.0], [46.5, 7.0], [46.6, 7.0], [46.7, 7.0], [46.8, 7.0], [46.9, 7.0], [47.0, 7.0], [47.1, 7.0], [47.2, 7.0], [47.3, 7.0], [47.4, 7.0], [47.5, 7.0], [47.6, 7.0], [47.7, 7.0], [47.8, 7.0], [47.9, 7.0], [48.0, 7.0], [48.1, 7.0], [48.2, 7.0], [48.3, 7.0], [48.4, 7.0], [48.5, 7.0], [48.6, 7.0], [48.7, 7.0], [48.8, 7.0], [48.9, 7.0], [49.0, 7.0], [49.1, 7.0], [49.2, 7.0], [49.3, 7.0], [49.4, 7.0], [49.5, 7.0], [49.6, 7.0], [49.7, 7.0], [49.8, 7.0], [49.9, 7.0], [50.0, 7.0], [50.1, 7.0], [50.2, 7.0], [50.3, 7.0], [50.4, 7.0], [50.5, 7.0], [50.6, 7.0], [50.7, 7.0], [50.8, 7.0], [50.9, 7.0], [51.0, 7.0], [51.1, 7.0], [51.2, 7.0], [51.3, 7.0], [51.4, 7.0], [51.5, 7.0], [51.6, 7.0], [51.7, 7.0], [51.8, 7.0], [51.9, 7.0], [52.0, 7.0], [52.1, 7.0], [52.2, 7.0], [52.3, 7.0], [52.4, 7.0], [52.5, 7.0], [52.6, 7.0], [52.7, 7.0], [52.8, 7.0], [52.9, 8.0], [53.0, 8.0], [53.1, 8.0], [53.2, 8.0], [53.3, 8.0], [53.4, 8.0], [53.5, 8.0], [53.6, 8.0], [53.7, 8.0], [53.8, 8.0], [53.9, 8.0], [54.0, 8.0], [54.1, 8.0], [54.2, 8.0], [54.3, 8.0], [54.4, 8.0], [54.5, 8.0], [54.6, 8.0], [54.7, 8.0], [54.8, 8.0], [54.9, 8.0], [55.0, 8.0], [55.1, 8.0], [55.2, 8.0], [55.3, 8.0], [55.4, 8.0], [55.5, 8.0], [55.6, 8.0], [55.7, 8.0], [55.8, 8.0], [55.9, 8.0], [56.0, 8.0], [56.1, 8.0], [56.2, 8.0], [56.3, 8.0], [56.4, 8.0], [56.5, 8.0], [56.6, 8.0], [56.7, 8.0], [56.8, 8.0], [56.9, 8.0], [57.0, 8.0], [57.1, 8.0], [57.2, 8.0], [57.3, 8.0], [57.4, 8.0], [57.5, 8.0], [57.6, 8.0], [57.7, 8.0], [57.8, 8.0], [57.9, 8.0], [58.0, 8.0], [58.1, 8.0], [58.2, 8.0], [58.3, 8.0], [58.4, 8.0], [58.5, 8.0], [58.6, 8.0], [58.7, 8.0], [58.8, 8.0], [58.9, 8.0], [59.0, 8.0], [59.1, 8.0], [59.2, 8.0], [59.3, 8.0], [59.4, 8.0], [59.5, 8.0], [59.6, 8.0], [59.7, 8.0], [59.8, 8.0], [59.9, 8.0], [60.0, 8.0], [60.1, 8.0], [60.2, 8.0], [60.3, 8.0], [60.4, 8.0], [60.5, 8.0], [60.6, 8.0], [60.7, 8.0], [60.8, 8.0], [60.9, 8.0], [61.0, 8.0], [61.1, 8.0], [61.2, 8.0], [61.3, 8.0], [61.4, 8.0], [61.5, 8.0], [61.6, 8.0], [61.7, 8.0], [61.8, 8.0], [61.9, 8.0], [62.0, 8.0], [62.1, 8.0], [62.2, 8.0], [62.3, 8.0], [62.4, 8.0], [62.5, 9.0], [62.6, 9.0], [62.7, 9.0], [62.8, 9.0], [62.9, 9.0], [63.0, 9.0], [63.1, 9.0], [63.2, 9.0], [63.3, 9.0], [63.4, 9.0], [63.5, 9.0], [63.6, 9.0], [63.7, 9.0], [63.8, 9.0], [63.9, 9.0], [64.0, 9.0], [64.1, 9.0], [64.2, 9.0], [64.3, 9.0], [64.4, 9.0], [64.5, 9.0], [64.6, 9.0], [64.7, 9.0], [64.8, 9.0], [64.9, 9.0], [65.0, 9.0], [65.1, 9.0], [65.2, 9.0], [65.3, 9.0], [65.4, 9.0], [65.5, 9.0], [65.6, 9.0], [65.7, 9.0], [65.8, 9.0], [65.9, 9.0], [66.0, 9.0], [66.1, 9.0], [66.2, 9.0], [66.3, 9.0], [66.4, 9.0], [66.5, 9.0], [66.6, 9.0], [66.7, 9.0], [66.8, 9.0], [66.9, 9.0], [67.0, 9.0], [67.1, 9.0], [67.2, 9.0], [67.3, 9.0], [67.4, 9.0], [67.5, 9.0], [67.6, 9.0], [67.7, 9.0], [67.8, 9.0], [67.9, 9.0], [68.0, 9.0], [68.1, 9.0], [68.2, 9.0], [68.3, 9.0], [68.4, 9.0], [68.5, 9.0], [68.6, 9.0], [68.7, 9.0], [68.8, 9.0], [68.9, 9.0], [69.0, 9.0], [69.1, 9.0], [69.2, 9.0], [69.3, 9.0], [69.4, 9.0], [69.5, 9.0], [69.6, 9.0], [69.7, 9.0], [69.8, 9.0], [69.9, 9.0], [70.0, 10.0], [70.1, 10.0], [70.2, 10.0], [70.3, 10.0], [70.4, 10.0], [70.5, 10.0], [70.6, 10.0], [70.7, 10.0], [70.8, 10.0], [70.9, 10.0], [71.0, 10.0], [71.1, 10.0], [71.2, 10.0], [71.3, 10.0], [71.4, 10.0], [71.5, 10.0], [71.6, 10.0], [71.7, 10.0], [71.8, 10.0], [71.9, 10.0], [72.0, 10.0], [72.1, 10.0], [72.2, 10.0], [72.3, 10.0], [72.4, 10.0], [72.5, 10.0], [72.6, 10.0], [72.7, 10.0], [72.8, 10.0], [72.9, 10.0], [73.0, 10.0], [73.1, 10.0], [73.2, 10.0], [73.3, 10.0], [73.4, 10.0], [73.5, 10.0], [73.6, 10.0], [73.7, 10.0], [73.8, 10.0], [73.9, 10.0], [74.0, 10.0], [74.1, 10.0], [74.2, 10.0], [74.3, 10.0], [74.4, 10.0], [74.5, 10.0], [74.6, 10.0], [74.7, 10.0], [74.8, 10.0], [74.9, 10.0], [75.0, 10.0], [75.1, 10.0], [75.2, 10.0], [75.3, 10.0], [75.4, 10.0], [75.5, 10.0], [75.6, 10.0], [75.7, 11.0], [75.8, 11.0], [75.9, 11.0], [76.0, 11.0], [76.1, 11.0], [76.2, 11.0], [76.3, 11.0], [76.4, 11.0], [76.5, 11.0], [76.6, 11.0], [76.7, 11.0], [76.8, 11.0], [76.9, 11.0], [77.0, 11.0], [77.1, 11.0], [77.2, 11.0], [77.3, 11.0], [77.4, 11.0], [77.5, 11.0], [77.6, 11.0], [77.7, 11.0], [77.8, 11.0], [77.9, 11.0], [78.0, 11.0], [78.1, 11.0], [78.2, 11.0], [78.3, 11.0], [78.4, 11.0], [78.5, 11.0], [78.6, 11.0], [78.7, 11.0], [78.8, 11.0], [78.9, 11.0], [79.0, 11.0], [79.1, 11.0], [79.2, 11.0], [79.3, 11.0], [79.4, 11.0], [79.5, 11.0], [79.6, 11.0], [79.7, 11.0], [79.8, 11.0], [79.9, 12.0], [80.0, 12.0], [80.1, 12.0], [80.2, 12.0], [80.3, 12.0], [80.4, 12.0], [80.5, 12.0], [80.6, 12.0], [80.7, 12.0], [80.8, 12.0], [80.9, 12.0], [81.0, 12.0], [81.1, 12.0], [81.2, 12.0], [81.3, 12.0], [81.4, 12.0], [81.5, 12.0], [81.6, 12.0], [81.7, 12.0], [81.8, 12.0], [81.9, 12.0], [82.0, 12.0], [82.1, 12.0], [82.2, 12.0], [82.3, 12.0], [82.4, 12.0], [82.5, 12.0], [82.6, 12.0], [82.7, 12.0], [82.8, 12.0], [82.9, 12.0], [83.0, 13.0], [83.1, 13.0], [83.2, 13.0], [83.3, 13.0], [83.4, 13.0], [83.5, 13.0], [83.6, 13.0], [83.7, 13.0], [83.8, 13.0], [83.9, 13.0], [84.0, 13.0], [84.1, 13.0], [84.2, 13.0], [84.3, 13.0], [84.4, 13.0], [84.5, 13.0], [84.6, 13.0], [84.7, 13.0], [84.8, 13.0], [84.9, 13.0], [85.0, 13.0], [85.1, 13.0], [85.2, 13.0], [85.3, 14.0], [85.4, 14.0], [85.5, 14.0], [85.6, 14.0], [85.7, 14.0], [85.8, 14.0], [85.9, 14.0], [86.0, 14.0], [86.1, 14.0], [86.2, 14.0], [86.3, 14.0], [86.4, 14.0], [86.5, 14.0], [86.6, 14.0], [86.7, 14.0], [86.8, 14.0], [86.9, 15.0], [87.0, 15.0], [87.1, 15.0], [87.2, 15.0], [87.3, 15.0], [87.4, 15.0], [87.5, 15.0], [87.6, 15.0], [87.7, 15.0], [87.8, 15.0], [87.9, 15.0], [88.0, 15.0], [88.1, 15.0], [88.2, 16.0], [88.3, 16.0], [88.4, 16.0], [88.5, 16.0], [88.6, 16.0], [88.7, 16.0], [88.8, 16.0], [88.9, 16.0], [89.0, 16.0], [89.1, 17.0], [89.2, 17.0], [89.3, 17.0], [89.4, 17.0], [89.5, 17.0], [89.6, 17.0], [89.7, 17.0], [89.8, 17.0], [89.9, 18.0], [90.0, 18.0], [90.1, 18.0], [90.2, 18.0], [90.3, 18.0], [90.4, 18.0], [90.5, 19.0], [90.6, 19.0], [90.7, 19.0], [90.8, 19.0], [90.9, 19.0], [91.0, 19.0], [91.1, 20.0], [91.2, 20.0], [91.3, 20.0], [91.4, 20.0], [91.5, 20.0], [91.6, 20.0], [91.7, 21.0], [91.8, 21.0], [91.9, 21.0], [92.0, 21.0], [92.1, 21.0], [92.2, 21.0], [92.3, 22.0], [92.4, 22.0], [92.5, 22.0], [92.6, 22.0], [92.7, 22.0], [92.8, 22.0], [92.9, 23.0], [93.0, 23.0], [93.1, 23.0], [93.2, 23.0], [93.3, 23.0], [93.4, 23.0], [93.5, 23.0], [93.6, 24.0], [93.7, 24.0], [93.8, 24.0], [93.9, 24.0], [94.0, 24.0], [94.1, 24.0], [94.2, 24.0], [94.3, 25.0], [94.4, 25.0], [94.5, 25.0], [94.6, 25.0], [94.7, 25.0], [94.8, 25.0], [94.9, 25.0], [95.0, 26.0], [95.1, 26.0], [95.2, 26.0], [95.3, 26.0], [95.4, 26.0], [95.5, 26.0], [95.6, 26.0], [95.7, 27.0], [95.8, 27.0], [95.9, 27.0], [96.0, 27.0], [96.1, 27.0], [96.2, 27.0], [96.3, 28.0], [96.4, 28.0], [96.5, 28.0], [96.6, 28.0], [96.7, 28.0], [96.8, 28.0], [96.9, 28.0], [97.0, 29.0], [97.1, 29.0], [97.2, 29.0], [97.3, 29.0], [97.4, 29.0], [97.5, 29.0], [97.6, 30.0], [97.7, 30.0], [97.8, 30.0], [97.9, 30.0], [98.0, 30.0], [98.1, 31.0], [98.2, 31.0], [98.3, 31.0], [98.4, 31.0], [98.5, 32.0], [98.6, 32.0], [98.7, 32.0], [98.8, 33.0], [98.9, 33.0], [99.0, 33.0], [99.1, 34.0], [99.2, 34.0], [99.3, 35.0], [99.4, 35.0], [99.5, 36.0], [99.6, 37.0], [99.7, 38.0], [99.8, 39.0], [99.9, 42.0], [100.0, 108.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 49.0, "minX": 0.0, "maxY": 4658040.0, "series": [{"data": [[0.0, 4658040.0], [100.0, 49.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4658089.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4658089.0, "series": [{"data": [[0.0, 4658089.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.222287835329862, "minX": 1.60138392E12, "maxY": 50.0, "series": [{"data": [[1.6013844E12, 50.0], [1.6013841E12, 50.0], [1.60138476E12, 50.0], [1.60138446E12, 50.0], [1.60138464E12, 50.0], [1.60138434E12, 50.0], [1.60138404E12, 50.0], [1.6013847E12, 50.0], [1.60138392E12, 8.222287835329862], [1.60138458E12, 50.0], [1.60138428E12, 50.0], [1.60138398E12, 37.02257385105555], [1.60138416E12, 50.0], [1.60138482E12, 49.993346725730575], [1.60138452E12, 50.0], [1.60138422E12, 50.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138482E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.966605950212504, "minX": 1.0, "maxY": 9.617273776166106, "series": [{"data": [[2.0, 1.9675262655205359], [3.0, 1.966605950212504], [4.0, 2.1088595664467498], [5.0, 2.2488906817265026], [6.0, 2.3973463687150818], [7.0, 2.7338300033863856], [8.0, 2.61328013679111], [9.0, 2.5920757538001507], [10.0, 2.8089371980676265], [11.0, 2.8010857763300723], [12.0, 3.0053202809108295], [13.0, 3.093826157595444], [14.0, 3.258211317768108], [15.0, 3.4905996437759774], [16.0, 3.760395639886961], [17.0, 3.9093401214020025], [18.0, 4.0037593984962445], [19.0, 4.2372049102927285], [20.0, 4.451704010544157], [21.0, 4.688955672426756], [22.0, 4.610776320453724], [23.0, 4.982910694597562], [24.0, 5.117488305145742], [25.0, 5.410981393651958], [26.0, 5.360055768560467], [27.0, 5.433882193176032], [28.0, 6.188362551286838], [29.0, 6.3806427642578445], [30.0, 6.032553407934897], [31.0, 6.14989939637827], [32.0, 6.4804840634054734], [33.0, 6.752971576227392], [34.0, 6.9915415156222975], [35.0, 7.161518550474567], [36.0, 7.53022847100176], [37.0, 7.2608194832976976], [38.0, 7.213739241313339], [39.0, 7.478747566515249], [40.0, 7.353494831044598], [41.0, 7.745936563042454], [42.0, 7.756249029653788], [43.0, 8.042686754551184], [44.0, 8.212486308871801], [45.0, 8.47224880382773], [46.0, 8.695120012716561], [47.0, 8.465317919075149], [48.0, 9.13508322663252], [49.0, 9.617273776166106], [50.0, 9.453652634159639], [1.0, 2.0494382022471926]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[48.85530353756868, 9.261371777137814]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 122689.13333333333, "minX": 1.60138392E12, "maxY": 6900945.133333334, "series": [{"data": [[1.6013844E12, 1088555.5], [1.6013841E12, 1104107.4666666666], [1.60138476E12, 1068808.1666666667], [1.60138446E12, 1051724.8166666667], [1.60138464E12, 1091555.7666666666], [1.60138434E12, 1093376.1], [1.60138404E12, 1101109.7], [1.6013847E12, 1082061.15], [1.60138392E12, 122689.13333333333], [1.60138458E12, 1095538.2833333334], [1.60138428E12, 1086147.9166666667], [1.60138398E12, 1022244.2], [1.60138416E12, 1097140.9333333333], [1.60138482E12, 803868.4], [1.60138452E12, 1074576.4333333333], [1.60138422E12, 1089301.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6013844E12, 6803744.166666667], [1.6013841E12, 6900945.133333334], [1.60138476E12, 6680296.566666666], [1.60138446E12, 6573498.433333334], [1.60138464E12, 6822485.6], [1.60138434E12, 6833894.366666666], [1.60138404E12, 6882225.266666667], [1.6013847E12, 6763155.7], [1.60138392E12, 766953.8], [1.60138458E12, 6847395.1], [1.60138428E12, 6788690.633333334], [1.60138398E12, 6389599.466666667], [1.60138416E12, 6857423.6], [1.60138482E12, 5024343.2], [1.60138452E12, 6716399.166666667], [1.60138422E12, 6808402.566666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138482E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2.6018502896350264, "minX": 1.60138392E12, "maxY": 9.759917191329702, "series": [{"data": [[1.6013844E12, 9.432490688643956], [1.6013841E12, 9.300545030657812], [1.60138476E12, 9.600563032887734], [1.60138446E12, 9.759917191329702], [1.60138464E12, 9.402002250714272], [1.60138434E12, 9.390809567239815], [1.60138404E12, 9.315501670249562], [1.6013847E12, 9.48495661574097], [1.60138392E12, 2.6018502896350264], [1.60138458E12, 9.375468899114633], [1.60138428E12, 9.453111250186568], [1.60138398E12, 7.221910946697652], [1.60138416E12, 9.351178120793593], [1.60138482E12, 9.624064249167345], [1.60138452E12, 9.530628562254138], [1.60138422E12, 9.423382358065302]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138482E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2.594398515269101, "minX": 1.60138392E12, "maxY": 9.754136332468308, "series": [{"data": [[1.6013844E12, 9.426953007369944], [1.6013841E12, 9.295382240250962], [1.60138476E12, 9.595452476343754], [1.60138446E12, 9.754136332468308], [1.60138464E12, 9.396701059606093], [1.60138434E12, 9.385940108497714], [1.60138404E12, 9.31046585232833], [1.6013847E12, 9.47956746483486], [1.60138392E12, 2.594398515269101], [1.60138458E12, 9.370139748471578], [1.60138428E12, 9.447990164465574], [1.60138398E12, 7.217107927850037], [1.60138416E12, 9.3458158785268], [1.60138482E12, 9.619003468287284], [1.60138452E12, 9.525346391587268], [1.60138422E12, 9.418548517378811]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138482E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.0393733523570036E-4, "minX": 1.60138392E12, "maxY": 0.0020527529385298425, "series": [{"data": [[1.6013844E12, 1.7117045724700778E-4], [1.6013841E12, 1.5313361376577698E-4], [1.60138476E12, 1.2590758383346332E-4], [1.60138446E12, 1.574808316300269E-4], [1.60138464E12, 1.3592797713881172E-4], [1.60138434E12, 1.2938937681657977E-4], [1.60138404E12, 1.6295117105486007E-4], [1.6013847E12, 1.4030925435197733E-4], [1.60138392E12, 0.0020527529385298425], [1.60138458E12, 1.0393733523570036E-4], [1.60138428E12, 1.5566575702799087E-4], [1.60138398E12, 1.383863476805089E-4], [1.60138416E12, 1.3838044558503373E-4], [1.60138482E12, 1.2448061536348475E-4], [1.60138452E12, 1.3486393192582325E-4], [1.60138422E12, 1.868916123677919E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138482E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60138392E12, "maxY": 108.0, "series": [{"data": [[1.6013844E12, 56.0], [1.6013841E12, 58.0], [1.60138476E12, 58.0], [1.60138446E12, 71.0], [1.60138464E12, 67.0], [1.60138434E12, 57.0], [1.60138404E12, 57.0], [1.6013847E12, 55.0], [1.60138392E12, 76.0], [1.60138458E12, 62.0], [1.60138428E12, 58.0], [1.60138398E12, 52.0], [1.60138416E12, 54.0], [1.60138482E12, 108.0], [1.60138452E12, 62.0], [1.60138422E12, 60.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6013844E12, 3.0], [1.6013841E12, 2.0], [1.60138476E12, 3.0], [1.60138446E12, 3.0], [1.60138464E12, 2.0], [1.60138434E12, 3.0], [1.60138404E12, 3.0], [1.6013847E12, 3.0], [1.60138392E12, 1.0], [1.60138458E12, 3.0], [1.60138428E12, 3.0], [1.60138398E12, 3.0], [1.60138416E12, 3.0], [1.60138482E12, 3.0], [1.60138452E12, 3.0], [1.60138422E12, 3.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6013844E12, 3.0], [1.6013841E12, 3.0], [1.60138476E12, 3.0], [1.60138446E12, 3.0], [1.60138464E12, 2.0], [1.60138434E12, 3.0], [1.60138404E12, 3.0], [1.6013847E12, 3.0], [1.60138392E12, 1.0], [1.60138458E12, 3.0], [1.60138428E12, 3.0], [1.60138398E12, 3.0], [1.60138416E12, 3.0], [1.60138482E12, 3.0], [1.60138452E12, 3.0], [1.60138422E12, 3.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6013844E12, 3.0], [1.6013841E12, 3.0], [1.60138476E12, 3.0], [1.60138446E12, 3.0], [1.60138464E12, 2.0], [1.60138434E12, 3.0], [1.60138404E12, 3.0], [1.6013847E12, 3.0], [1.60138392E12, 1.0], [1.60138458E12, 3.0], [1.60138428E12, 3.0], [1.60138398E12, 3.0], [1.60138416E12, 3.0], [1.60138482E12, 3.0], [1.60138452E12, 3.0], [1.60138422E12, 3.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6013844E12, 1.0], [1.6013841E12, 1.0], [1.60138476E12, 1.0], [1.60138446E12, 1.0], [1.60138464E12, 1.0], [1.60138434E12, 1.0], [1.60138404E12, 1.0], [1.6013847E12, 1.0], [1.60138392E12, 1.0], [1.60138458E12, 1.0], [1.60138428E12, 1.0], [1.60138398E12, 1.0], [1.60138416E12, 1.0], [1.60138482E12, 1.0], [1.60138452E12, 1.0], [1.60138422E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6013844E12, 7.0], [1.6013841E12, 7.0], [1.60138476E12, 7.0], [1.60138446E12, 7.0], [1.60138464E12, 7.0], [1.60138434E12, 8.0], [1.60138404E12, 7.0], [1.6013847E12, 7.0], [1.60138392E12, 2.0], [1.60138458E12, 7.0], [1.60138428E12, 7.0], [1.60138398E12, 7.0], [1.60138416E12, 7.0], [1.60138482E12, 8.0], [1.60138452E12, 7.0], [1.60138422E12, 7.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138482E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 184.0, "maxY": 8.0, "series": [{"data": [[184.0, 2.0], [622.0, 2.0], [993.0, 2.0], [1419.0, 2.0], [1803.0, 2.0], [1980.0, 2.0], [1979.0, 7.0], [3036.0, 2.0], [3364.0, 2.0], [3860.0, 2.0], [3964.0, 3.0], [4304.0, 7.0], [4468.0, 3.0], [4480.0, 5.0], [4712.0, 8.0], [4688.0, 5.0], [4780.0, 8.0], [4708.0, 8.0], [4672.0, 8.0], [4816.0, 8.0], [4736.0, 8.0], [4848.0, 8.0], [4808.0, 8.0], [5104.0, 8.0], [5096.0, 8.0], [5008.0, 8.0], [5004.0, 8.0], [4992.0, 8.0], [4996.0, 8.0], [5012.0, 8.0], [5028.0, 8.0], [5032.0, 7.0], [5116.0, 8.0], [5108.0, 8.0], [4896.0, 6.0], [4980.0, 7.0], [4876.0, 8.0], [4964.0, 8.0], [4956.0, 8.0], [4952.0, 8.0], [5068.0, 6.0], [5064.0, 8.0], [5056.0, 8.0], [4920.0, 8.0], [5060.0, 8.0], [5092.0, 8.0], [5072.0, 8.0], [5076.0, 8.0], [5080.0, 8.0], [5084.0, 7.0], [5044.0, 8.0], [5048.0, 8.0], [5052.0, 8.0], [5040.0, 8.0], [5036.0, 8.0], [4944.0, 8.0], [4948.0, 8.0], [4940.0, 8.0], [4928.0, 8.0], [5348.0, 7.0], [5340.0, 7.0], [5336.0, 7.0], [5332.0, 7.0], [5248.0, 6.0], [5360.0, 7.0], [5356.0, 7.0], [5364.0, 7.0], [5372.0, 7.0], [5240.0, 7.0], [5236.0, 7.0], [5232.0, 7.0], [5228.0, 7.0], [5204.0, 8.0], [5208.0, 7.0], [5216.0, 7.0], [5212.0, 7.0], [5184.0, 7.0], [5192.0, 7.0], [5188.0, 8.0], [5200.0, 8.0], [5196.0, 7.0], [5308.0, 7.0], [5304.0, 7.0], [5300.0, 7.0], [5276.0, 7.0], [5296.0, 7.0], [5288.0, 7.0], [5292.0, 7.0], [5280.0, 8.0], [5268.0, 7.0], [5264.0, 7.0], [5272.0, 7.0], [5260.0, 7.0], [5252.0, 7.0], [5256.0, 7.0], [5316.0, 7.0], [5312.0, 7.0], [5320.0, 7.0], [5328.0, 7.0], [5324.0, 7.0], [5168.0, 7.0], [5172.0, 8.0], [5176.0, 7.0], [5180.0, 7.0], [5148.0, 7.0], [5124.0, 8.0], [5128.0, 8.0], [5132.0, 8.0], [5140.0, 7.0], [5164.0, 8.0], [5152.0, 8.0], [5156.0, 7.0], [5160.0, 7.0], [5384.0, 7.0], [5428.0, 7.0], [5424.0, 7.0], [5444.0, 7.0], [5416.0, 7.0], [5408.0, 7.0], [5400.0, 7.0], [5396.0, 7.0], [5376.0, 7.0], [5380.0, 7.0], [5500.0, 7.0], [5496.0, 7.0], [5456.0, 7.0], [5448.0, 7.0], [5452.0, 7.0], [5472.0, 7.0], [5488.0, 7.0], [5464.0, 7.0], [5460.0, 7.0], [5440.0, 7.0], [5584.0, 7.0], [5600.0, 7.0], [5596.0, 7.0], [5520.0, 7.0], [5556.0, 7.0], [5536.0, 7.0], [5540.0, 7.0], [5548.0, 7.0], [5552.0, 7.0], [5524.0, 7.0], [5528.0, 7.0], [5632.0, 7.0], [5672.0, 7.0], [5760.0, 7.0], [5796.0, 7.0], [5636.0, 7.0], [4265.0, 3.0], [4321.0, 3.0], [4341.0, 4.0], [4561.0, 4.0], [4441.0, 4.0], [4597.0, 8.0], [4761.0, 4.0], [4781.0, 8.0], [4649.0, 4.0], [4665.0, 5.0], [4837.0, 5.0], [4821.0, 8.0], [4861.0, 8.0], [4813.0, 8.0], [5105.0, 8.0], [4921.0, 8.0], [4913.0, 8.0], [5057.0, 7.0], [4997.0, 8.0], [5117.0, 8.0], [5113.0, 7.0], [4869.0, 8.0], [4885.0, 8.0], [4881.0, 8.0], [4897.0, 8.0], [5081.0, 7.0], [5085.0, 8.0], [5089.0, 7.0], [5097.0, 8.0], [5093.0, 8.0], [5073.0, 7.0], [5037.0, 8.0], [5033.0, 8.0], [5041.0, 7.0], [5029.0, 8.0], [5049.0, 8.0], [5053.0, 8.0], [5045.0, 8.0], [4865.0, 7.0], [4985.0, 8.0], [4973.0, 8.0], [4961.0, 8.0], [4945.0, 8.0], [4981.0, 8.0], [5065.0, 8.0], [5337.0, 7.0], [5333.0, 7.0], [5305.0, 7.0], [5349.0, 7.0], [5341.0, 7.0], [5345.0, 7.0], [5361.0, 7.0], [5353.0, 7.0], [5357.0, 8.0], [5369.0, 7.0], [5241.0, 8.0], [5233.0, 7.0], [5237.0, 7.0], [5121.0, 7.0], [5125.0, 7.0], [5245.0, 7.0], [5221.0, 7.0], [5229.0, 7.0], [5225.0, 7.0], [5213.0, 7.0], [5205.0, 8.0], [5201.0, 7.0], [5185.0, 8.0], [5197.0, 7.0], [5189.0, 8.0], [5309.0, 7.0], [5301.0, 7.0], [5297.0, 7.0], [5285.0, 7.0], [5265.0, 7.0], [5273.0, 8.0], [5277.0, 7.0], [5269.0, 7.0], [5249.0, 7.0], [5253.0, 7.0], [5261.0, 7.0], [5165.0, 7.0], [5317.0, 7.0], [5325.0, 7.0], [5173.0, 7.0], [5181.0, 8.0], [5313.0, 7.0], [5169.0, 7.0], [5129.0, 8.0], [5157.0, 8.0], [5161.0, 8.0], [5153.0, 7.0], [5149.0, 8.0], [5137.0, 8.0], [5145.0, 8.0], [5385.0, 7.0], [5445.0, 7.0], [5449.0, 7.0], [5433.0, 7.0], [5437.0, 7.0], [5425.0, 7.0], [5569.0, 7.0], [5421.0, 7.0], [5397.0, 7.0], [5389.0, 7.0], [5393.0, 7.0], [5401.0, 7.0], [5405.0, 7.0], [5381.0, 7.0], [5497.0, 7.0], [5501.0, 7.0], [5485.0, 7.0], [5489.0, 7.0], [5453.0, 7.0], [5461.0, 7.0], [5481.0, 7.0], [5465.0, 7.0], [5473.0, 7.0], [5597.0, 7.0], [5505.0, 7.0], [5521.0, 7.0], [5517.0, 7.0], [5525.0, 7.0], [5557.0, 7.0], [5561.0, 7.0], [5549.0, 7.0], [5541.0, 7.0], [5701.0, 7.0], [5669.0, 7.0], [2227.0, 2.0], [2521.0, 2.0], [2475.0, 2.0], [3361.0, 3.0], [3753.0, 2.0], [4093.0, 3.0], [4065.0, 3.0], [4222.0, 3.0], [4358.0, 3.0], [4502.0, 5.0], [4810.0, 4.0], [4738.0, 5.0], [4826.0, 8.0], [4794.0, 8.0], [4650.0, 8.0], [4770.0, 8.0], [4850.0, 8.0], [4818.0, 8.0], [5094.0, 8.0], [5118.0, 8.0], [5002.0, 8.0], [5006.0, 8.0], [5014.0, 8.0], [5030.0, 8.0], [5034.0, 8.0], [5022.0, 8.0], [4994.0, 8.0], [5114.0, 8.0], [5106.0, 8.0], [5098.0, 7.0], [4978.0, 8.0], [4966.0, 8.0], [5058.0, 8.0], [4906.0, 8.0], [4894.0, 8.0], [4890.0, 8.0], [4886.0, 8.0], [5062.0, 8.0], [5066.0, 8.0], [4962.0, 8.0], [4954.0, 8.0], [5086.0, 8.0], [5078.0, 7.0], [5074.0, 7.0], [5070.0, 8.0], [5042.0, 7.0], [5054.0, 8.0], [5050.0, 8.0], [5046.0, 8.0], [5330.0, 7.0], [5122.0, 7.0], [5126.0, 7.0], [5334.0, 7.0], [5338.0, 7.0], [5374.0, 7.0], [5342.0, 7.0], [5370.0, 7.0], [5362.0, 8.0], [5346.0, 7.0], [5350.0, 7.0], [5246.0, 7.0], [5242.0, 7.0], [5238.0, 7.0], [5234.0, 7.0], [5230.0, 7.0], [5218.0, 7.0], [5214.0, 7.0], [5206.0, 8.0], [5210.0, 7.0], [5198.0, 7.0], [5190.0, 7.0], [5202.0, 7.0], [5278.0, 7.0], [5286.0, 7.0], [5282.0, 7.0], [5298.0, 7.0], [5290.0, 7.0], [5302.0, 7.0], [5306.0, 7.0], [5266.0, 7.0], [5274.0, 7.0], [5270.0, 7.0], [5250.0, 7.0], [5258.0, 7.0], [5254.0, 7.0], [5318.0, 7.0], [5322.0, 7.0], [5326.0, 7.0], [5314.0, 7.0], [5182.0, 8.0], [5142.0, 7.0], [5166.0, 8.0], [5174.0, 7.0], [5154.0, 7.0], [5158.0, 7.5], [5150.0, 7.0], [5146.0, 8.0], [5162.0, 8.0], [5410.0, 7.0], [5406.0, 7.0], [5394.0, 7.0], [5386.0, 7.0], [5390.0, 7.0], [5398.0, 7.0], [5422.0, 7.0], [5438.0, 7.0], [5570.0, 7.0], [5442.0, 7.0], [5418.0, 7.0], [5414.0, 7.0], [5402.0, 7.0], [5382.0, 7.0], [5378.0, 7.0], [5498.0, 7.0], [5462.0, 7.0], [5446.0, 7.0], [5458.0, 7.0], [5486.0, 7.0], [5478.0, 7.0], [5482.0, 7.0], [5598.0, 7.0], [5582.0, 7.0], [5574.0, 7.0], [5606.0, 7.0], [5554.0, 7.0], [5546.0, 7.0], [5526.0, 7.0], [5542.0, 7.0], [5550.0, 7.0], [5642.0, 7.0], [5650.0, 7.0], [5694.0, 7.0], [5634.0, 7.0], [4179.0, 3.0], [4507.0, 3.0], [4579.0, 4.0], [4851.0, 4.0], [4783.0, 6.0], [4815.0, 8.0], [4863.0, 7.0], [4855.0, 8.0], [4787.0, 8.0], [4843.0, 8.0], [5095.0, 8.0], [5059.0, 8.0], [4927.0, 8.0], [4923.0, 8.0], [5027.0, 5.0], [5023.0, 8.0], [5015.0, 8.0], [5119.0, 8.0], [5003.0, 8.0], [5115.0, 7.0], [5111.0, 8.0], [5107.0, 7.0], [5103.0, 8.0], [4891.0, 5.0], [4879.0, 8.0], [4867.0, 8.0], [4887.0, 8.0], [4903.0, 8.0], [4899.0, 8.0], [5079.0, 8.0], [5083.0, 8.0], [5087.0, 7.0], [5039.0, 8.0], [5055.0, 8.0], [5051.0, 7.0], [5035.0, 8.0], [4947.0, 8.0], [4931.0, 8.0], [4987.0, 8.0], [4991.0, 8.0], [4971.0, 8.0], [4955.0, 8.0], [5063.0, 8.0], [5067.0, 7.0], [5071.0, 8.0], [5339.0, 7.0], [5335.0, 7.0], [5331.0, 7.0], [5347.0, 7.0], [5343.0, 7.0], [5375.0, 7.0], [5351.0, 7.0], [5371.0, 7.0], [5359.0, 7.0], [5355.0, 7.0], [5231.0, 7.0], [5243.0, 7.0], [5239.0, 7.0], [5235.0, 7.0], [5247.0, 7.0], [5123.0, 7.0], [5223.0, 7.0], [5227.0, 7.0], [5215.0, 7.0], [5219.0, 7.0], [5195.0, 8.0], [5191.0, 7.0], [5199.0, 7.0], [5203.0, 7.0], [5287.0, 7.0], [5291.0, 7.0], [5295.0, 7.0], [5303.0, 7.0], [5311.0, 7.0], [5299.0, 7.0], [5271.0, 7.0], [5275.0, 7.0], [5279.0, 7.0], [5259.0, 7.0], [5255.0, 8.0], [5327.0, 7.0], [5323.0, 7.0], [5179.0, 7.0], [5183.0, 7.0], [5315.0, 7.0], [5171.0, 7.0], [5167.0, 7.0], [5127.0, 7.0], [5131.0, 7.0], [5135.0, 8.0], [5163.0, 8.0], [5139.0, 7.0], [5147.0, 7.0], [5155.0, 8.0], [5395.0, 7.0], [5403.0, 7.0], [5399.0, 7.0], [5435.0, 7.0], [5427.0, 7.0], [5415.0, 7.0], [5423.0, 7.0], [5419.0, 7.0], [5387.0, 7.0], [5391.0, 7.0], [5379.0, 7.0], [5383.0, 7.0], [5499.0, 7.0], [5495.0, 7.0], [5491.0, 7.0], [5487.0, 7.0], [5483.0, 7.0], [5451.0, 7.0], [5443.0, 7.0], [5455.0, 7.0], [5459.0, 7.0], [5463.0, 7.0], [5467.0, 7.0], [5475.0, 7.0], [5471.0, 7.0], [5479.0, 7.0], [5579.0, 7.0], [5511.0, 7.0], [5507.0, 7.0], [5607.0, 7.0], [5515.0, 7.0], [5535.0, 7.0], [5555.0, 7.0], [5563.0, 7.0], [5527.0, 7.0], [5659.0, 7.0], [5719.0, 7.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5796.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2.0, "minX": 184.0, "maxY": 8.0, "series": [{"data": [[184.0, 2.0], [622.0, 2.0], [993.0, 2.0], [1419.0, 2.0], [1803.0, 2.0], [1980.0, 2.0], [1979.0, 7.0], [3036.0, 2.0], [3364.0, 2.0], [3860.0, 2.0], [3964.0, 3.0], [4304.0, 7.0], [4468.0, 3.0], [4480.0, 5.0], [4712.0, 8.0], [4688.0, 5.0], [4780.0, 8.0], [4708.0, 8.0], [4672.0, 8.0], [4816.0, 8.0], [4736.0, 8.0], [4848.0, 8.0], [4808.0, 8.0], [5104.0, 8.0], [5096.0, 8.0], [5008.0, 8.0], [5004.0, 8.0], [4992.0, 8.0], [4996.0, 8.0], [5012.0, 8.0], [5028.0, 8.0], [5032.0, 7.0], [5116.0, 8.0], [5108.0, 8.0], [4896.0, 6.0], [4980.0, 7.0], [4876.0, 8.0], [4964.0, 8.0], [4956.0, 8.0], [4952.0, 8.0], [5068.0, 6.0], [5064.0, 8.0], [5056.0, 8.0], [4920.0, 8.0], [5060.0, 8.0], [5092.0, 8.0], [5072.0, 8.0], [5076.0, 8.0], [5080.0, 8.0], [5084.0, 7.0], [5044.0, 8.0], [5048.0, 8.0], [5052.0, 8.0], [5040.0, 8.0], [5036.0, 8.0], [4944.0, 8.0], [4948.0, 8.0], [4940.0, 8.0], [4928.0, 8.0], [5348.0, 7.0], [5340.0, 7.0], [5336.0, 7.0], [5332.0, 7.0], [5248.0, 6.0], [5360.0, 7.0], [5356.0, 7.0], [5364.0, 7.0], [5372.0, 7.0], [5240.0, 7.0], [5236.0, 7.0], [5232.0, 7.0], [5228.0, 7.0], [5204.0, 8.0], [5208.0, 7.0], [5216.0, 7.0], [5212.0, 7.0], [5184.0, 7.0], [5192.0, 7.0], [5188.0, 8.0], [5200.0, 8.0], [5196.0, 7.0], [5308.0, 7.0], [5304.0, 7.0], [5300.0, 7.0], [5276.0, 7.0], [5296.0, 7.0], [5288.0, 7.0], [5292.0, 7.0], [5280.0, 8.0], [5268.0, 7.0], [5264.0, 7.0], [5272.0, 7.0], [5260.0, 7.0], [5252.0, 7.0], [5256.0, 7.0], [5316.0, 7.0], [5312.0, 7.0], [5320.0, 7.0], [5328.0, 7.0], [5324.0, 7.0], [5168.0, 7.0], [5172.0, 8.0], [5176.0, 7.0], [5180.0, 7.0], [5148.0, 7.0], [5124.0, 8.0], [5128.0, 8.0], [5132.0, 8.0], [5140.0, 7.0], [5164.0, 8.0], [5152.0, 8.0], [5156.0, 7.0], [5160.0, 7.0], [5384.0, 7.0], [5428.0, 7.0], [5424.0, 7.0], [5444.0, 7.0], [5416.0, 7.0], [5408.0, 7.0], [5400.0, 7.0], [5396.0, 7.0], [5376.0, 7.0], [5380.0, 7.0], [5500.0, 7.0], [5496.0, 7.0], [5456.0, 7.0], [5448.0, 7.0], [5452.0, 7.0], [5472.0, 7.0], [5488.0, 7.0], [5464.0, 7.0], [5460.0, 7.0], [5440.0, 7.0], [5584.0, 7.0], [5600.0, 7.0], [5596.0, 7.0], [5520.0, 7.0], [5556.0, 7.0], [5536.0, 7.0], [5540.0, 7.0], [5548.0, 7.0], [5552.0, 7.0], [5524.0, 7.0], [5528.0, 7.0], [5632.0, 7.0], [5672.0, 7.0], [5760.0, 7.0], [5796.0, 7.0], [5636.0, 7.0], [4265.0, 3.0], [4321.0, 3.0], [4341.0, 4.0], [4561.0, 4.0], [4441.0, 4.0], [4597.0, 8.0], [4761.0, 4.0], [4781.0, 8.0], [4649.0, 4.0], [4665.0, 5.0], [4837.0, 5.0], [4821.0, 8.0], [4861.0, 8.0], [4813.0, 8.0], [5105.0, 8.0], [4921.0, 8.0], [4913.0, 8.0], [5057.0, 7.0], [4997.0, 8.0], [5117.0, 8.0], [5113.0, 7.0], [4869.0, 8.0], [4885.0, 8.0], [4881.0, 8.0], [4897.0, 8.0], [5081.0, 7.0], [5085.0, 8.0], [5089.0, 7.0], [5097.0, 8.0], [5093.0, 8.0], [5073.0, 7.0], [5037.0, 8.0], [5033.0, 8.0], [5041.0, 7.0], [5029.0, 7.0], [5049.0, 8.0], [5053.0, 8.0], [5045.0, 8.0], [4865.0, 7.0], [4985.0, 8.0], [4973.0, 8.0], [4961.0, 8.0], [4945.0, 8.0], [4981.0, 8.0], [5065.0, 8.0], [5337.0, 7.0], [5333.0, 7.0], [5305.0, 7.0], [5349.0, 7.0], [5341.0, 7.0], [5345.0, 7.0], [5361.0, 7.0], [5353.0, 7.0], [5357.0, 8.0], [5369.0, 7.0], [5241.0, 8.0], [5233.0, 7.0], [5237.0, 7.0], [5121.0, 7.0], [5125.0, 7.0], [5245.0, 7.0], [5221.0, 7.0], [5229.0, 7.0], [5225.0, 7.0], [5213.0, 7.0], [5205.0, 8.0], [5201.0, 7.0], [5185.0, 8.0], [5197.0, 7.0], [5189.0, 8.0], [5309.0, 7.0], [5301.0, 7.0], [5297.0, 7.0], [5285.0, 7.0], [5265.0, 7.0], [5273.0, 8.0], [5277.0, 7.0], [5269.0, 7.0], [5249.0, 7.0], [5253.0, 7.0], [5261.0, 7.0], [5165.0, 7.0], [5317.0, 7.0], [5325.0, 7.0], [5173.0, 7.0], [5181.0, 8.0], [5313.0, 7.0], [5169.0, 7.0], [5129.0, 7.0], [5157.0, 8.0], [5161.0, 8.0], [5153.0, 7.0], [5149.0, 8.0], [5137.0, 8.0], [5145.0, 8.0], [5385.0, 7.0], [5445.0, 7.0], [5449.0, 7.0], [5433.0, 7.0], [5437.0, 7.0], [5425.0, 7.0], [5569.0, 7.0], [5421.0, 7.0], [5397.0, 7.0], [5389.0, 7.0], [5393.0, 7.0], [5401.0, 7.0], [5405.0, 7.0], [5381.0, 7.0], [5497.0, 7.0], [5501.0, 7.0], [5485.0, 7.0], [5489.0, 7.0], [5453.0, 7.0], [5461.0, 7.0], [5481.0, 7.0], [5465.0, 7.0], [5473.0, 7.0], [5597.0, 7.0], [5505.0, 7.0], [5521.0, 7.0], [5517.0, 7.0], [5525.0, 7.0], [5557.0, 7.0], [5561.0, 7.0], [5549.0, 7.0], [5541.0, 7.0], [5701.0, 7.0], [5669.0, 7.0], [2227.0, 2.0], [2521.0, 2.0], [2475.0, 2.0], [3361.0, 3.0], [3753.0, 2.0], [4093.0, 3.0], [4065.0, 3.0], [4222.0, 3.0], [4358.0, 3.0], [4502.0, 5.0], [4810.0, 4.0], [4738.0, 5.0], [4826.0, 8.0], [4794.0, 8.0], [4650.0, 8.0], [4770.0, 8.0], [4850.0, 8.0], [4818.0, 8.0], [5094.0, 8.0], [5118.0, 8.0], [5002.0, 8.0], [5006.0, 8.0], [5014.0, 8.0], [5030.0, 8.0], [5034.0, 8.0], [5022.0, 8.0], [4994.0, 8.0], [5114.0, 8.0], [5106.0, 8.0], [5098.0, 7.0], [4978.0, 8.0], [4966.0, 8.0], [5058.0, 8.0], [4906.0, 8.0], [4894.0, 8.0], [4890.0, 8.0], [4886.0, 8.0], [5062.0, 8.0], [5066.0, 8.0], [4962.0, 8.0], [4954.0, 8.0], [5086.0, 7.0], [5078.0, 7.0], [5074.0, 7.0], [5070.0, 8.0], [5042.0, 7.0], [5054.0, 8.0], [5050.0, 8.0], [5046.0, 8.0], [5330.0, 7.0], [5122.0, 7.0], [5126.0, 7.0], [5334.0, 7.0], [5338.0, 7.0], [5374.0, 7.0], [5342.0, 7.0], [5370.0, 7.0], [5362.0, 8.0], [5346.0, 7.0], [5350.0, 7.0], [5246.0, 7.0], [5242.0, 7.0], [5238.0, 7.0], [5234.0, 7.0], [5230.0, 7.0], [5218.0, 7.0], [5214.0, 7.0], [5206.0, 8.0], [5210.0, 7.0], [5198.0, 7.0], [5190.0, 7.0], [5202.0, 7.0], [5278.0, 7.0], [5286.0, 7.0], [5282.0, 7.0], [5298.0, 7.0], [5290.0, 7.0], [5302.0, 7.0], [5306.0, 7.0], [5266.0, 7.0], [5274.0, 7.0], [5270.0, 7.0], [5250.0, 7.0], [5258.0, 7.0], [5254.0, 7.0], [5318.0, 7.0], [5322.0, 7.0], [5326.0, 7.0], [5314.0, 7.0], [5182.0, 8.0], [5142.0, 7.0], [5166.0, 7.0], [5174.0, 7.0], [5154.0, 7.0], [5158.0, 7.0], [5150.0, 7.0], [5146.0, 8.0], [5162.0, 8.0], [5410.0, 7.0], [5406.0, 7.0], [5394.0, 7.0], [5386.0, 7.0], [5390.0, 7.0], [5398.0, 7.0], [5422.0, 7.0], [5438.0, 7.0], [5570.0, 7.0], [5442.0, 7.0], [5418.0, 7.0], [5414.0, 7.0], [5402.0, 7.0], [5382.0, 7.0], [5378.0, 7.0], [5498.0, 7.0], [5462.0, 7.0], [5446.0, 7.0], [5458.0, 7.0], [5486.0, 7.0], [5478.0, 7.0], [5482.0, 7.0], [5598.0, 7.0], [5582.0, 7.0], [5574.0, 7.0], [5606.0, 7.0], [5554.0, 7.0], [5546.0, 7.0], [5526.0, 7.0], [5542.0, 7.0], [5550.0, 7.0], [5642.0, 7.0], [5650.0, 7.0], [5694.0, 7.0], [5634.0, 7.0], [4179.0, 3.0], [4507.0, 3.0], [4579.0, 4.0], [4851.0, 4.0], [4783.0, 6.0], [4815.0, 8.0], [4863.0, 7.0], [4855.0, 8.0], [4787.0, 8.0], [4843.0, 8.0], [5095.0, 8.0], [5059.0, 8.0], [4927.0, 8.0], [4923.0, 8.0], [5027.0, 5.0], [5023.0, 8.0], [5015.0, 8.0], [5119.0, 8.0], [5003.0, 8.0], [5115.0, 7.0], [5111.0, 7.0], [5107.0, 7.0], [5103.0, 8.0], [4891.0, 5.0], [4879.0, 8.0], [4867.0, 8.0], [4887.0, 8.0], [4903.0, 8.0], [4899.0, 8.0], [5079.0, 8.0], [5083.0, 8.0], [5087.0, 7.0], [5039.0, 8.0], [5055.0, 8.0], [5051.0, 7.0], [5035.0, 8.0], [4947.0, 8.0], [4931.0, 8.0], [4987.0, 8.0], [4991.0, 8.0], [4971.0, 8.0], [4955.0, 8.0], [5063.0, 8.0], [5067.0, 7.0], [5071.0, 8.0], [5339.0, 7.0], [5335.0, 7.0], [5331.0, 7.0], [5347.0, 7.0], [5343.0, 7.0], [5375.0, 7.0], [5351.0, 7.0], [5371.0, 7.0], [5359.0, 7.0], [5355.0, 7.0], [5231.0, 7.0], [5243.0, 7.0], [5239.0, 7.0], [5235.0, 7.0], [5247.0, 7.0], [5123.0, 7.0], [5223.0, 7.0], [5227.0, 7.0], [5215.0, 7.0], [5219.0, 7.0], [5195.0, 8.0], [5191.0, 7.0], [5199.0, 7.0], [5203.0, 7.0], [5287.0, 7.0], [5291.0, 7.0], [5295.0, 7.0], [5303.0, 7.0], [5311.0, 7.0], [5299.0, 7.0], [5271.0, 7.0], [5275.0, 7.0], [5279.0, 7.0], [5259.0, 7.0], [5255.0, 8.0], [5327.0, 7.0], [5323.0, 7.0], [5179.0, 7.0], [5183.0, 7.0], [5315.0, 7.0], [5171.0, 7.0], [5167.0, 7.0], [5127.0, 7.0], [5131.0, 7.0], [5135.0, 8.0], [5163.0, 8.0], [5139.0, 7.0], [5147.0, 7.0], [5155.0, 8.0], [5395.0, 7.0], [5403.0, 7.0], [5399.0, 7.0], [5435.0, 7.0], [5427.0, 7.0], [5415.0, 7.0], [5423.0, 7.0], [5419.0, 7.0], [5387.0, 7.0], [5391.0, 7.0], [5379.0, 7.0], [5383.0, 7.0], [5499.0, 7.0], [5495.0, 7.0], [5491.0, 7.0], [5487.0, 7.0], [5483.0, 7.0], [5451.0, 7.0], [5443.0, 7.0], [5455.0, 7.0], [5459.0, 7.0], [5463.0, 7.0], [5467.0, 7.0], [5475.0, 7.0], [5471.0, 7.0], [5479.0, 7.0], [5579.0, 7.0], [5511.0, 7.0], [5507.0, 7.0], [5607.0, 7.0], [5515.0, 7.0], [5535.0, 7.0], [5555.0, 7.0], [5563.0, 7.0], [5527.0, 7.0], [5659.0, 7.0], [5719.0, 7.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5796.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 592.8833333333333, "minX": 1.60138392E12, "maxY": 5333.033333333334, "series": [{"data": [[1.6013844E12, 5257.916666666667], [1.6013841E12, 5333.033333333334], [1.60138476E12, 5162.583333333333], [1.60138446E12, 5079.966666666666], [1.60138464E12, 5272.4], [1.60138434E12, 5281.216666666666], [1.60138404E12, 5318.566666666667], [1.6013847E12, 5226.483333333334], [1.60138392E12, 592.8833333333333], [1.60138458E12, 5291.666666666667], [1.60138428E12, 5246.3], [1.60138398E12, 4938.516666666666], [1.60138416E12, 5299.4], [1.60138482E12, 3881.983333333333], [1.60138452E12, 5190.4], [1.60138422E12, 5261.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138482E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 592.7, "minX": 1.60138392E12, "maxY": 5333.033333333334, "series": [{"data": [[1.6013844E12, 5257.916666666667], [1.6013841E12, 5333.033333333334], [1.60138476E12, 5162.516666666666], [1.60138446E12, 5079.983333333334], [1.60138464E12, 5272.4], [1.60138434E12, 5281.216666666666], [1.60138404E12, 5318.566666666667], [1.6013847E12, 5226.55], [1.60138392E12, 592.7], [1.60138458E12, 5291.65], [1.60138428E12, 5246.283333333334], [1.60138398E12, 4937.866666666667], [1.60138416E12, 5299.4], [1.60138482E12, 3882.8], [1.60138452E12, 5190.416666666667], [1.60138422E12, 5261.516666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138482E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 592.7, "minX": 1.60138392E12, "maxY": 5333.033333333334, "series": [{"data": [[1.6013844E12, 5257.916666666667], [1.6013841E12, 5333.033333333334], [1.60138476E12, 5162.516666666666], [1.60138446E12, 5079.983333333334], [1.60138464E12, 5272.4], [1.60138434E12, 5281.216666666666], [1.60138404E12, 5318.566666666667], [1.6013847E12, 5226.55], [1.60138392E12, 592.7], [1.60138458E12, 5291.65], [1.60138428E12, 5246.283333333334], [1.60138398E12, 4937.866666666667], [1.60138416E12, 5299.4], [1.60138482E12, 3882.8], [1.60138452E12, 5190.416666666667], [1.60138422E12, 5261.516666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138482E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 592.7, "minX": 1.60138392E12, "maxY": 5333.033333333334, "series": [{"data": [[1.6013844E12, 5257.916666666667], [1.6013841E12, 5333.033333333334], [1.60138476E12, 5162.516666666666], [1.60138446E12, 5079.983333333334], [1.60138464E12, 5272.4], [1.60138434E12, 5281.216666666666], [1.60138404E12, 5318.566666666667], [1.6013847E12, 5226.55], [1.60138392E12, 592.7], [1.60138458E12, 5291.65], [1.60138428E12, 5246.283333333334], [1.60138398E12, 4937.866666666667], [1.60138416E12, 5299.4], [1.60138482E12, 3882.8], [1.60138452E12, 5190.416666666667], [1.60138422E12, 5261.516666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138482E12, "title": "Total Transactions Per Second"}},
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

