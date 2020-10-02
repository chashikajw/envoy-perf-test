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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 616.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 3.0], [1.0, 3.0], [1.1, 3.0], [1.2, 3.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 4.0], [3.9, 4.0], [4.0, 4.0], [4.1, 4.0], [4.2, 4.0], [4.3, 4.0], [4.4, 4.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 4.0], [5.4, 4.0], [5.5, 4.0], [5.6, 4.0], [5.7, 4.0], [5.8, 4.0], [5.9, 4.0], [6.0, 4.0], [6.1, 4.0], [6.2, 4.0], [6.3, 4.0], [6.4, 4.0], [6.5, 4.0], [6.6, 4.0], [6.7, 4.0], [6.8, 4.0], [6.9, 4.0], [7.0, 4.0], [7.1, 4.0], [7.2, 4.0], [7.3, 4.0], [7.4, 4.0], [7.5, 4.0], [7.6, 4.0], [7.7, 4.0], [7.8, 4.0], [7.9, 4.0], [8.0, 4.0], [8.1, 4.0], [8.2, 4.0], [8.3, 4.0], [8.4, 4.0], [8.5, 4.0], [8.6, 4.0], [8.7, 4.0], [8.8, 4.0], [8.9, 4.0], [9.0, 4.0], [9.1, 4.0], [9.2, 4.0], [9.3, 4.0], [9.4, 4.0], [9.5, 4.0], [9.6, 4.0], [9.7, 4.0], [9.8, 4.0], [9.9, 4.0], [10.0, 4.0], [10.1, 4.0], [10.2, 4.0], [10.3, 4.0], [10.4, 4.0], [10.5, 5.0], [10.6, 5.0], [10.7, 5.0], [10.8, 5.0], [10.9, 5.0], [11.0, 5.0], [11.1, 5.0], [11.2, 5.0], [11.3, 5.0], [11.4, 5.0], [11.5, 5.0], [11.6, 5.0], [11.7, 5.0], [11.8, 5.0], [11.9, 5.0], [12.0, 5.0], [12.1, 5.0], [12.2, 5.0], [12.3, 5.0], [12.4, 5.0], [12.5, 5.0], [12.6, 5.0], [12.7, 5.0], [12.8, 5.0], [12.9, 5.0], [13.0, 5.0], [13.1, 5.0], [13.2, 5.0], [13.3, 5.0], [13.4, 5.0], [13.5, 5.0], [13.6, 5.0], [13.7, 5.0], [13.8, 5.0], [13.9, 5.0], [14.0, 5.0], [14.1, 5.0], [14.2, 5.0], [14.3, 5.0], [14.4, 5.0], [14.5, 5.0], [14.6, 5.0], [14.7, 5.0], [14.8, 5.0], [14.9, 5.0], [15.0, 5.0], [15.1, 5.0], [15.2, 5.0], [15.3, 5.0], [15.4, 5.0], [15.5, 5.0], [15.6, 5.0], [15.7, 5.0], [15.8, 5.0], [15.9, 5.0], [16.0, 5.0], [16.1, 5.0], [16.2, 5.0], [16.3, 5.0], [16.4, 5.0], [16.5, 5.0], [16.6, 5.0], [16.7, 5.0], [16.8, 5.0], [16.9, 5.0], [17.0, 5.0], [17.1, 5.0], [17.2, 5.0], [17.3, 5.0], [17.4, 5.0], [17.5, 5.0], [17.6, 5.0], [17.7, 5.0], [17.8, 5.0], [17.9, 5.0], [18.0, 5.0], [18.1, 5.0], [18.2, 5.0], [18.3, 5.0], [18.4, 5.0], [18.5, 5.0], [18.6, 5.0], [18.7, 5.0], [18.8, 5.0], [18.9, 5.0], [19.0, 5.0], [19.1, 5.0], [19.2, 5.0], [19.3, 5.0], [19.4, 5.0], [19.5, 5.0], [19.6, 5.0], [19.7, 5.0], [19.8, 5.0], [19.9, 5.0], [20.0, 5.0], [20.1, 5.0], [20.2, 5.0], [20.3, 5.0], [20.4, 5.0], [20.5, 5.0], [20.6, 5.0], [20.7, 5.0], [20.8, 5.0], [20.9, 5.0], [21.0, 6.0], [21.1, 6.0], [21.2, 6.0], [21.3, 6.0], [21.4, 6.0], [21.5, 6.0], [21.6, 6.0], [21.7, 6.0], [21.8, 6.0], [21.9, 6.0], [22.0, 6.0], [22.1, 6.0], [22.2, 6.0], [22.3, 6.0], [22.4, 6.0], [22.5, 6.0], [22.6, 6.0], [22.7, 6.0], [22.8, 6.0], [22.9, 6.0], [23.0, 6.0], [23.1, 6.0], [23.2, 6.0], [23.3, 6.0], [23.4, 6.0], [23.5, 6.0], [23.6, 6.0], [23.7, 6.0], [23.8, 6.0], [23.9, 6.0], [24.0, 6.0], [24.1, 6.0], [24.2, 6.0], [24.3, 6.0], [24.4, 6.0], [24.5, 6.0], [24.6, 6.0], [24.7, 6.0], [24.8, 6.0], [24.9, 6.0], [25.0, 6.0], [25.1, 6.0], [25.2, 6.0], [25.3, 6.0], [25.4, 6.0], [25.5, 6.0], [25.6, 6.0], [25.7, 6.0], [25.8, 6.0], [25.9, 6.0], [26.0, 6.0], [26.1, 6.0], [26.2, 6.0], [26.3, 6.0], [26.4, 6.0], [26.5, 6.0], [26.6, 6.0], [26.7, 6.0], [26.8, 6.0], [26.9, 6.0], [27.0, 6.0], [27.1, 6.0], [27.2, 6.0], [27.3, 6.0], [27.4, 6.0], [27.5, 6.0], [27.6, 6.0], [27.7, 6.0], [27.8, 6.0], [27.9, 6.0], [28.0, 6.0], [28.1, 6.0], [28.2, 6.0], [28.3, 6.0], [28.4, 6.0], [28.5, 6.0], [28.6, 6.0], [28.7, 6.0], [28.8, 6.0], [28.9, 6.0], [29.0, 6.0], [29.1, 6.0], [29.2, 6.0], [29.3, 6.0], [29.4, 6.0], [29.5, 6.0], [29.6, 6.0], [29.7, 6.0], [29.8, 6.0], [29.9, 6.0], [30.0, 6.0], [30.1, 6.0], [30.2, 6.0], [30.3, 6.0], [30.4, 6.0], [30.5, 6.0], [30.6, 6.0], [30.7, 6.0], [30.8, 6.0], [30.9, 6.0], [31.0, 6.0], [31.1, 6.0], [31.2, 6.0], [31.3, 6.0], [31.4, 6.0], [31.5, 6.0], [31.6, 6.0], [31.7, 6.0], [31.8, 6.0], [31.9, 6.0], [32.0, 6.0], [32.1, 6.0], [32.2, 6.0], [32.3, 6.0], [32.4, 6.0], [32.5, 6.0], [32.6, 6.0], [32.7, 6.0], [32.8, 6.0], [32.9, 6.0], [33.0, 6.0], [33.1, 6.0], [33.2, 6.0], [33.3, 7.0], [33.4, 7.0], [33.5, 7.0], [33.6, 7.0], [33.7, 7.0], [33.8, 7.0], [33.9, 7.0], [34.0, 7.0], [34.1, 7.0], [34.2, 7.0], [34.3, 7.0], [34.4, 7.0], [34.5, 7.0], [34.6, 7.0], [34.7, 7.0], [34.8, 7.0], [34.9, 7.0], [35.0, 7.0], [35.1, 7.0], [35.2, 7.0], [35.3, 7.0], [35.4, 7.0], [35.5, 7.0], [35.6, 7.0], [35.7, 7.0], [35.8, 7.0], [35.9, 7.0], [36.0, 7.0], [36.1, 7.0], [36.2, 7.0], [36.3, 7.0], [36.4, 7.0], [36.5, 7.0], [36.6, 7.0], [36.7, 7.0], [36.8, 7.0], [36.9, 7.0], [37.0, 7.0], [37.1, 7.0], [37.2, 7.0], [37.3, 7.0], [37.4, 7.0], [37.5, 7.0], [37.6, 7.0], [37.7, 7.0], [37.8, 7.0], [37.9, 7.0], [38.0, 7.0], [38.1, 7.0], [38.2, 7.0], [38.3, 7.0], [38.4, 7.0], [38.5, 7.0], [38.6, 7.0], [38.7, 7.0], [38.8, 7.0], [38.9, 7.0], [39.0, 7.0], [39.1, 7.0], [39.2, 7.0], [39.3, 7.0], [39.4, 7.0], [39.5, 7.0], [39.6, 7.0], [39.7, 7.0], [39.8, 7.0], [39.9, 7.0], [40.0, 7.0], [40.1, 7.0], [40.2, 7.0], [40.3, 7.0], [40.4, 7.0], [40.5, 7.0], [40.6, 7.0], [40.7, 7.0], [40.8, 7.0], [40.9, 7.0], [41.0, 7.0], [41.1, 7.0], [41.2, 7.0], [41.3, 7.0], [41.4, 7.0], [41.5, 7.0], [41.6, 7.0], [41.7, 7.0], [41.8, 7.0], [41.9, 7.0], [42.0, 7.0], [42.1, 7.0], [42.2, 7.0], [42.3, 7.0], [42.4, 7.0], [42.5, 7.0], [42.6, 7.0], [42.7, 7.0], [42.8, 7.0], [42.9, 7.0], [43.0, 7.0], [43.1, 7.0], [43.2, 7.0], [43.3, 7.0], [43.4, 7.0], [43.5, 7.0], [43.6, 7.0], [43.7, 7.0], [43.8, 7.0], [43.9, 7.0], [44.0, 7.0], [44.1, 7.0], [44.2, 7.0], [44.3, 7.0], [44.4, 7.0], [44.5, 7.0], [44.6, 7.0], [44.7, 7.0], [44.8, 7.0], [44.9, 7.0], [45.0, 7.0], [45.1, 7.0], [45.2, 7.0], [45.3, 7.0], [45.4, 7.0], [45.5, 7.0], [45.6, 8.0], [45.7, 8.0], [45.8, 8.0], [45.9, 8.0], [46.0, 8.0], [46.1, 8.0], [46.2, 8.0], [46.3, 8.0], [46.4, 8.0], [46.5, 8.0], [46.6, 8.0], [46.7, 8.0], [46.8, 8.0], [46.9, 8.0], [47.0, 8.0], [47.1, 8.0], [47.2, 8.0], [47.3, 8.0], [47.4, 8.0], [47.5, 8.0], [47.6, 8.0], [47.7, 8.0], [47.8, 8.0], [47.9, 8.0], [48.0, 8.0], [48.1, 8.0], [48.2, 8.0], [48.3, 8.0], [48.4, 8.0], [48.5, 8.0], [48.6, 8.0], [48.7, 8.0], [48.8, 8.0], [48.9, 8.0], [49.0, 8.0], [49.1, 8.0], [49.2, 8.0], [49.3, 8.0], [49.4, 8.0], [49.5, 8.0], [49.6, 8.0], [49.7, 8.0], [49.8, 8.0], [49.9, 8.0], [50.0, 8.0], [50.1, 8.0], [50.2, 8.0], [50.3, 8.0], [50.4, 8.0], [50.5, 8.0], [50.6, 8.0], [50.7, 8.0], [50.8, 8.0], [50.9, 8.0], [51.0, 8.0], [51.1, 8.0], [51.2, 8.0], [51.3, 8.0], [51.4, 8.0], [51.5, 8.0], [51.6, 8.0], [51.7, 8.0], [51.8, 8.0], [51.9, 8.0], [52.0, 8.0], [52.1, 8.0], [52.2, 8.0], [52.3, 8.0], [52.4, 8.0], [52.5, 8.0], [52.6, 8.0], [52.7, 8.0], [52.8, 8.0], [52.9, 8.0], [53.0, 8.0], [53.1, 8.0], [53.2, 8.0], [53.3, 8.0], [53.4, 8.0], [53.5, 8.0], [53.6, 8.0], [53.7, 8.0], [53.8, 8.0], [53.9, 8.0], [54.0, 8.0], [54.1, 8.0], [54.2, 8.0], [54.3, 8.0], [54.4, 8.0], [54.5, 8.0], [54.6, 8.0], [54.7, 8.0], [54.8, 8.0], [54.9, 8.0], [55.0, 8.0], [55.1, 8.0], [55.2, 8.0], [55.3, 8.0], [55.4, 8.0], [55.5, 8.0], [55.6, 8.0], [55.7, 8.0], [55.8, 8.0], [55.9, 8.0], [56.0, 8.0], [56.1, 8.0], [56.2, 8.0], [56.3, 8.0], [56.4, 9.0], [56.5, 9.0], [56.6, 9.0], [56.7, 9.0], [56.8, 9.0], [56.9, 9.0], [57.0, 9.0], [57.1, 9.0], [57.2, 9.0], [57.3, 9.0], [57.4, 9.0], [57.5, 9.0], [57.6, 9.0], [57.7, 9.0], [57.8, 9.0], [57.9, 9.0], [58.0, 9.0], [58.1, 9.0], [58.2, 9.0], [58.3, 9.0], [58.4, 9.0], [58.5, 9.0], [58.6, 9.0], [58.7, 9.0], [58.8, 9.0], [58.9, 9.0], [59.0, 9.0], [59.1, 9.0], [59.2, 9.0], [59.3, 9.0], [59.4, 9.0], [59.5, 9.0], [59.6, 9.0], [59.7, 9.0], [59.8, 9.0], [59.9, 9.0], [60.0, 9.0], [60.1, 9.0], [60.2, 9.0], [60.3, 9.0], [60.4, 9.0], [60.5, 9.0], [60.6, 9.0], [60.7, 9.0], [60.8, 9.0], [60.9, 9.0], [61.0, 9.0], [61.1, 9.0], [61.2, 9.0], [61.3, 9.0], [61.4, 9.0], [61.5, 9.0], [61.6, 9.0], [61.7, 9.0], [61.8, 9.0], [61.9, 9.0], [62.0, 9.0], [62.1, 9.0], [62.2, 9.0], [62.3, 9.0], [62.4, 9.0], [62.5, 9.0], [62.6, 9.0], [62.7, 9.0], [62.8, 9.0], [62.9, 9.0], [63.0, 9.0], [63.1, 9.0], [63.2, 9.0], [63.3, 9.0], [63.4, 9.0], [63.5, 9.0], [63.6, 9.0], [63.7, 9.0], [63.8, 9.0], [63.9, 9.0], [64.0, 9.0], [64.1, 9.0], [64.2, 9.0], [64.3, 9.0], [64.4, 9.0], [64.5, 9.0], [64.6, 9.0], [64.7, 9.0], [64.8, 9.0], [64.9, 9.0], [65.0, 9.0], [65.1, 9.0], [65.2, 9.0], [65.3, 10.0], [65.4, 10.0], [65.5, 10.0], [65.6, 10.0], [65.7, 10.0], [65.8, 10.0], [65.9, 10.0], [66.0, 10.0], [66.1, 10.0], [66.2, 10.0], [66.3, 10.0], [66.4, 10.0], [66.5, 10.0], [66.6, 10.0], [66.7, 10.0], [66.8, 10.0], [66.9, 10.0], [67.0, 10.0], [67.1, 10.0], [67.2, 10.0], [67.3, 10.0], [67.4, 10.0], [67.5, 10.0], [67.6, 10.0], [67.7, 10.0], [67.8, 10.0], [67.9, 10.0], [68.0, 10.0], [68.1, 10.0], [68.2, 10.0], [68.3, 10.0], [68.4, 10.0], [68.5, 10.0], [68.6, 10.0], [68.7, 10.0], [68.8, 10.0], [68.9, 10.0], [69.0, 10.0], [69.1, 10.0], [69.2, 10.0], [69.3, 10.0], [69.4, 10.0], [69.5, 10.0], [69.6, 10.0], [69.7, 10.0], [69.8, 10.0], [69.9, 10.0], [70.0, 10.0], [70.1, 10.0], [70.2, 10.0], [70.3, 10.0], [70.4, 10.0], [70.5, 10.0], [70.6, 10.0], [70.7, 10.0], [70.8, 10.0], [70.9, 10.0], [71.0, 10.0], [71.1, 10.0], [71.2, 10.0], [71.3, 10.0], [71.4, 10.0], [71.5, 10.0], [71.6, 10.0], [71.7, 10.0], [71.8, 10.0], [71.9, 10.0], [72.0, 10.0], [72.1, 10.0], [72.2, 10.0], [72.3, 10.0], [72.4, 11.0], [72.5, 11.0], [72.6, 11.0], [72.7, 11.0], [72.8, 11.0], [72.9, 11.0], [73.0, 11.0], [73.1, 11.0], [73.2, 11.0], [73.3, 11.0], [73.4, 11.0], [73.5, 11.0], [73.6, 11.0], [73.7, 11.0], [73.8, 11.0], [73.9, 11.0], [74.0, 11.0], [74.1, 11.0], [74.2, 11.0], [74.3, 11.0], [74.4, 11.0], [74.5, 11.0], [74.6, 11.0], [74.7, 11.0], [74.8, 11.0], [74.9, 11.0], [75.0, 11.0], [75.1, 11.0], [75.2, 11.0], [75.3, 11.0], [75.4, 11.0], [75.5, 11.0], [75.6, 11.0], [75.7, 11.0], [75.8, 11.0], [75.9, 11.0], [76.0, 11.0], [76.1, 11.0], [76.2, 11.0], [76.3, 11.0], [76.4, 11.0], [76.5, 11.0], [76.6, 11.0], [76.7, 11.0], [76.8, 11.0], [76.9, 11.0], [77.0, 11.0], [77.1, 11.0], [77.2, 11.0], [77.3, 11.0], [77.4, 11.0], [77.5, 11.0], [77.6, 11.0], [77.7, 11.0], [77.8, 12.0], [77.9, 12.0], [78.0, 12.0], [78.1, 12.0], [78.2, 12.0], [78.3, 12.0], [78.4, 12.0], [78.5, 12.0], [78.6, 12.0], [78.7, 12.0], [78.8, 12.0], [78.9, 12.0], [79.0, 12.0], [79.1, 12.0], [79.2, 12.0], [79.3, 12.0], [79.4, 12.0], [79.5, 12.0], [79.6, 12.0], [79.7, 12.0], [79.8, 12.0], [79.9, 12.0], [80.0, 12.0], [80.1, 12.0], [80.2, 12.0], [80.3, 12.0], [80.4, 12.0], [80.5, 12.0], [80.6, 12.0], [80.7, 12.0], [80.8, 12.0], [80.9, 12.0], [81.0, 12.0], [81.1, 12.0], [81.2, 12.0], [81.3, 12.0], [81.4, 12.0], [81.5, 12.0], [81.6, 12.0], [81.7, 12.0], [81.8, 13.0], [81.9, 13.0], [82.0, 13.0], [82.1, 13.0], [82.2, 13.0], [82.3, 13.0], [82.4, 13.0], [82.5, 13.0], [82.6, 13.0], [82.7, 13.0], [82.8, 13.0], [82.9, 13.0], [83.0, 13.0], [83.1, 13.0], [83.2, 13.0], [83.3, 13.0], [83.4, 13.0], [83.5, 13.0], [83.6, 13.0], [83.7, 13.0], [83.8, 13.0], [83.9, 13.0], [84.0, 13.0], [84.1, 13.0], [84.2, 13.0], [84.3, 13.0], [84.4, 13.0], [84.5, 13.0], [84.6, 13.0], [84.7, 13.0], [84.8, 14.0], [84.9, 14.0], [85.0, 14.0], [85.1, 14.0], [85.2, 14.0], [85.3, 14.0], [85.4, 14.0], [85.5, 14.0], [85.6, 14.0], [85.7, 14.0], [85.8, 14.0], [85.9, 14.0], [86.0, 14.0], [86.1, 14.0], [86.2, 14.0], [86.3, 14.0], [86.4, 14.0], [86.5, 14.0], [86.6, 14.0], [86.7, 14.0], [86.8, 14.0], [86.9, 14.0], [87.0, 14.0], [87.1, 14.0], [87.2, 15.0], [87.3, 15.0], [87.4, 15.0], [87.5, 15.0], [87.6, 15.0], [87.7, 15.0], [87.8, 15.0], [87.9, 15.0], [88.0, 15.0], [88.1, 15.0], [88.2, 15.0], [88.3, 15.0], [88.4, 15.0], [88.5, 15.0], [88.6, 15.0], [88.7, 15.0], [88.8, 15.0], [88.9, 16.0], [89.0, 16.0], [89.1, 16.0], [89.2, 16.0], [89.3, 16.0], [89.4, 16.0], [89.5, 16.0], [89.6, 16.0], [89.7, 16.0], [89.8, 16.0], [89.9, 16.0], [90.0, 16.0], [90.1, 16.0], [90.2, 16.0], [90.3, 16.0], [90.4, 17.0], [90.5, 17.0], [90.6, 17.0], [90.7, 17.0], [90.8, 17.0], [90.9, 17.0], [91.0, 17.0], [91.1, 17.0], [91.2, 17.0], [91.3, 17.0], [91.4, 17.0], [91.5, 17.0], [91.6, 18.0], [91.7, 18.0], [91.8, 18.0], [91.9, 18.0], [92.0, 18.0], [92.1, 18.0], [92.2, 18.0], [92.3, 18.0], [92.4, 18.0], [92.5, 18.0], [92.6, 19.0], [92.7, 19.0], [92.8, 19.0], [92.9, 19.0], [93.0, 19.0], [93.1, 19.0], [93.2, 19.0], [93.3, 19.0], [93.4, 19.0], [93.5, 19.0], [93.6, 20.0], [93.7, 20.0], [93.8, 20.0], [93.9, 20.0], [94.0, 20.0], [94.1, 20.0], [94.2, 20.0], [94.3, 20.0], [94.4, 21.0], [94.5, 21.0], [94.6, 21.0], [94.7, 21.0], [94.8, 21.0], [94.9, 21.0], [95.0, 21.0], [95.1, 21.0], [95.2, 22.0], [95.3, 22.0], [95.4, 22.0], [95.5, 22.0], [95.6, 22.0], [95.7, 22.0], [95.8, 22.0], [95.9, 23.0], [96.0, 23.0], [96.1, 23.0], [96.2, 23.0], [96.3, 23.0], [96.4, 23.0], [96.5, 23.0], [96.6, 24.0], [96.7, 24.0], [96.8, 24.0], [96.9, 24.0], [97.0, 24.0], [97.1, 24.0], [97.2, 25.0], [97.3, 25.0], [97.4, 25.0], [97.5, 25.0], [97.6, 25.0], [97.7, 26.0], [97.8, 26.0], [97.9, 26.0], [98.0, 26.0], [98.1, 26.0], [98.2, 27.0], [98.3, 27.0], [98.4, 27.0], [98.5, 27.0], [98.6, 28.0], [98.7, 28.0], [98.8, 28.0], [98.9, 29.0], [99.0, 29.0], [99.1, 29.0], [99.2, 30.0], [99.3, 30.0], [99.4, 31.0], [99.5, 32.0], [99.6, 32.0], [99.7, 33.0], [99.8, 35.0], [99.9, 37.0], [100.0, 616.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4621143.0, "series": [{"data": [[0.0, 4621143.0], [600.0, 1.0], [100.0, 34.0], [200.0, 16.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4621193.0, "series": [{"data": [[0.0, 4621193.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.5078461324815935, "minX": 1.6013886E12, "maxY": 50.0, "series": [{"data": [[1.60138932E12, 50.0], [1.60138902E12, 50.0], [1.60138896E12, 50.0], [1.60138866E12, 33.27899697021562], [1.60138908E12, 50.0], [1.60138878E12, 50.0], [1.60138872E12, 50.0], [1.60138938E12, 50.0], [1.60138884E12, 50.0], [1.60138944E12, 50.0], [1.6013895E12, 49.99272927231624], [1.60138914E12, 50.0], [1.6013886E12, 4.5078461324815935], [1.60138926E12, 50.0], [1.6013892E12, 50.0], [1.6013889E12, 50.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6013895E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2.9773022049286686, "minX": 1.0, "maxY": 10.824175824175825, "series": [{"data": [[2.0, 3.6282894736842115], [3.0, 3.476683937823835], [4.0, 2.9773022049286686], [5.0, 2.9932221063607933], [6.0, 3.365901319003419], [7.0, 3.1492770613520946], [8.0, 3.3725063474791432], [9.0, 3.5666098807495716], [10.0, 3.323931623931625], [11.0, 3.456521739130434], [12.0, 3.310206961429921], [13.0, 3.4092020448988687], [14.0, 3.5596998928188643], [15.0, 4.002939846223426], [16.0, 3.8819301848049252], [17.0, 3.923107100823849], [18.0, 4.072674976030686], [19.0, 4.527929017947163], [20.0, 4.5632472040107945], [21.0, 4.796159813809162], [22.0, 5.317053150010257], [23.0, 5.248411322934715], [24.0, 5.429636711281071], [25.0, 5.559827456864236], [26.0, 5.492704626334524], [27.0, 6.168396770472884], [28.0, 6.551309828638959], [29.0, 6.413737373737368], [30.0, 6.336653032189208], [31.0, 6.70487627365355], [32.0, 6.505890387570413], [33.0, 6.678626875970314], [34.0, 6.777534891541962], [35.0, 6.9813539391903], [36.0, 7.0274716236223105], [37.0, 7.392917086270554], [38.0, 7.976375176304677], [39.0, 8.019047619047598], [40.0, 8.003700588730036], [41.0, 8.40715883668907], [42.0, 8.320199501246858], [43.0, 7.936801242236022], [44.0, 8.257075471698117], [45.0, 8.51196323878944], [46.0, 8.652424387902057], [47.0, 8.725058548009365], [48.0, 9.042974944497335], [49.0, 9.03969111969113], [50.0, 9.509458981834443], [1.0, 10.824175824175825]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[48.95654975748454, 9.343658154148567]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 24843.483333333334, "minX": 1.6013886E12, "maxY": 6586605.2, "series": [{"data": [[1.60138932E12, 1091130.5], [1.60138902E12, 1081404.6833333333], [1.60138896E12, 1084610.2], [1.60138866E12, 926947.8833333333], [1.60138908E12, 1068672.1833333333], [1.60138878E12, 1091653.6], [1.60138872E12, 1074821.2], [1.60138938E12, 1087533.5], [1.60138884E12, 1051010.0166666666], [1.60138944E12, 1094370.4166666667], [1.6013895E12, 960035.9166666666], [1.60138914E12, 1084040.6833333333], [1.6013886E12, 24843.483333333334], [1.60138926E12, 1074416.5666666667], [1.6013892E12, 1081236.9833333334], [1.6013889E12, 1068145.3333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60138932E12, 6567126.066666666], [1.60138902E12, 6508584.833333333], [1.60138896E12, 6527897.833333333], [1.60138866E12, 5579297.266666667], [1.60138908E12, 6431976.6], [1.60138878E12, 6570303.366666666], [1.60138872E12, 6468962.033333333], [1.60138938E12, 6545445.666666667], [1.60138884E12, 6325609.733333333], [1.60138944E12, 6586605.2], [1.6013895E12, 5778096.566666666], [1.60138914E12, 6524492.1], [1.6013886E12, 149540.76666666666], [1.60138926E12, 6466511.566666666], [1.6013892E12, 6507588.033333333], [1.6013889E12, 6428757.766666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6013895E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3.31065129843077, "minX": 1.6013886E12, "maxY": 9.77345668474474, "series": [{"data": [[1.60138932E12, 9.41557517534476], [1.60138902E12, 9.500110077692563], [1.60138896E12, 9.466592438244612], [1.60138866E12, 6.853397899250415], [1.60138908E12, 9.60071482536177], [1.60138878E12, 9.412406325165], [1.60138872E12, 9.5538591428123], [1.60138938E12, 9.447999619277152], [1.60138884E12, 9.77345668474474], [1.60138944E12, 9.388855258345597], [1.6013895E12, 9.414532110883052], [1.60138914E12, 9.4772853864493], [1.6013886E12, 3.31065129843077], [1.60138926E12, 9.548567868486193], [1.6013892E12, 9.49731465023434], [1.6013889E12, 9.61313559732645]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6013895E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3.2974586862935706, "minX": 1.6013886E12, "maxY": 9.768804743207815, "series": [{"data": [[1.60138932E12, 9.41097098983657], [1.60138902E12, 9.495512339868869], [1.60138896E12, 9.461731537005338], [1.60138866E12, 6.8484624031324755], [1.60138908E12, 9.595804033242219], [1.60138878E12, 9.40757047539887], [1.60138872E12, 9.548575152404327], [1.60138938E12, 9.443281830007333], [1.60138884E12, 9.768804743207815], [1.60138944E12, 9.384387650864491], [1.6013895E12, 9.409967689647983], [1.60138914E12, 9.472294632711925], [1.6013886E12, 3.2974586862935706], [1.60138926E12, 9.543949850508675], [1.6013892E12, 9.49231731484164], [1.6013889E12, 9.608464617163888]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6013895E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.57343944959101E-5, "minX": 1.6013886E12, "maxY": 0.008748784890987385, "series": [{"data": [[1.60138932E12, 1.2016418221949421E-4], [1.60138902E12, 1.2762631016383875E-4], [1.60138896E12, 1.4951725015508344E-4], [1.60138866E12, 1.228290889059276E-4], [1.60138908E12, 1.5497568818891483E-4], [1.60138878E12, 1.485522477219364E-4], [1.60138872E12, 1.637202374264473E-4], [1.60138938E12, 1.1104413211078693E-4], [1.60138884E12, 1.4773279405391922E-4], [1.60138944E12, 9.773876634759665E-5], [1.6013895E12, 1.0422694158619108E-4], [1.60138914E12, 1.177665103873246E-4], [1.6013886E12, 0.008748784890987385], [1.60138926E12, 1.1561102029936827E-4], [1.6013892E12, 9.57343944959101E-5], [1.6013889E12, 1.2598079277451613E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6013895E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6013886E12, "maxY": 616.0, "series": [{"data": [[1.60138932E12, 52.0], [1.60138902E12, 54.0], [1.60138896E12, 54.0], [1.60138866E12, 51.0], [1.60138908E12, 58.0], [1.60138878E12, 60.0], [1.60138872E12, 52.0], [1.60138938E12, 48.0], [1.60138884E12, 73.0], [1.60138944E12, 56.0], [1.6013895E12, 54.0], [1.60138914E12, 63.0], [1.6013886E12, 616.0], [1.60138926E12, 263.0], [1.6013892E12, 55.0], [1.6013889E12, 52.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60138932E12, 3.0], [1.60138902E12, 3.0], [1.60138896E12, 3.0], [1.60138866E12, 3.0], [1.60138908E12, 3.0], [1.60138878E12, 3.0], [1.60138872E12, 3.0], [1.60138938E12, 3.0], [1.60138884E12, 3.0], [1.60138944E12, 3.0], [1.6013895E12, 3.0], [1.60138914E12, 3.0], [1.6013886E12, 1.0], [1.60138926E12, 3.0], [1.6013892E12, 3.0], [1.6013889E12, 3.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60138932E12, 3.0], [1.60138902E12, 3.0], [1.60138896E12, 3.0], [1.60138866E12, 3.0], [1.60138908E12, 3.0], [1.60138878E12, 3.0], [1.60138872E12, 3.0], [1.60138938E12, 3.0], [1.60138884E12, 3.0], [1.60138944E12, 3.0], [1.6013895E12, 3.0], [1.60138914E12, 3.0], [1.6013886E12, 1.0], [1.60138926E12, 3.0], [1.6013892E12, 3.0], [1.6013889E12, 3.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60138932E12, 3.0], [1.60138902E12, 3.0], [1.60138896E12, 3.0], [1.60138866E12, 3.0], [1.60138908E12, 3.0], [1.60138878E12, 3.0], [1.60138872E12, 3.0], [1.60138938E12, 3.0], [1.60138884E12, 3.0], [1.60138944E12, 3.0], [1.6013895E12, 3.0], [1.60138914E12, 3.0], [1.6013886E12, 1.0], [1.60138926E12, 3.0], [1.6013892E12, 3.0], [1.6013889E12, 3.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60138932E12, 1.0], [1.60138902E12, 1.0], [1.60138896E12, 1.0], [1.60138866E12, 1.0], [1.60138908E12, 1.0], [1.60138878E12, 1.0], [1.60138872E12, 1.0], [1.60138938E12, 1.0], [1.60138884E12, 1.0], [1.60138944E12, 1.0], [1.6013895E12, 1.0], [1.60138914E12, 1.0], [1.6013886E12, 1.0], [1.60138926E12, 1.0], [1.6013892E12, 1.0], [1.6013889E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60138932E12, 8.0], [1.60138902E12, 9.0], [1.60138896E12, 8.0], [1.60138866E12, 8.0], [1.60138908E12, 8.0], [1.60138878E12, 8.0], [1.60138872E12, 8.0], [1.60138938E12, 8.0], [1.60138884E12, 8.0], [1.60138944E12, 8.0], [1.6013895E12, 8.0], [1.60138914E12, 9.0], [1.6013886E12, 3.0], [1.60138926E12, 8.0], [1.6013892E12, 8.0], [1.6013889E12, 8.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6013895E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3.0, "minX": 91.0, "maxY": 10.0, "series": [{"data": [[91.0, 4.0], [504.0, 3.0], [745.0, 3.0], [1086.0, 3.0], [1413.0, 3.0], [1610.0, 3.0], [1752.0, 3.0], [2106.0, 3.0], [3546.0, 3.0], [3656.0, 3.0], [3730.0, 3.0], [4078.0, 5.0], [4316.0, 4.0], [4180.0, 5.0], [4280.0, 6.0], [4312.0, 8.0], [4460.0, 4.0], [4356.0, 5.0], [4412.0, 5.0], [4488.0, 9.0], [4560.0, 9.0], [4760.0, 8.0], [4624.0, 9.0], [4636.0, 9.0], [4780.0, 9.0], [4772.0, 9.0], [4800.0, 9.0], [4828.0, 9.0], [4836.0, 9.0], [4744.0, 9.0], [5060.0, 8.0], [4872.0, 9.0], [4880.0, 7.0], [4928.0, 6.0], [5084.0, 8.0], [5112.0, 8.0], [5100.0, 8.0], [5092.0, 8.0], [5096.0, 8.0], [5108.0, 8.0], [5068.0, 8.0], [5076.0, 8.0], [5080.0, 8.0], [4912.0, 9.0], [4892.0, 9.0], [4888.0, 8.0], [4948.0, 9.0], [4952.0, 8.0], [4988.0, 8.0], [4976.0, 8.0], [4932.0, 8.0], [5040.0, 8.0], [5052.0, 8.0], [5048.0, 8.0], [5036.0, 8.0], [5004.0, 8.0], [5028.0, 8.0], [5020.0, 8.0], [4992.0, 8.0], [5356.0, 8.0], [5360.0, 8.0], [5192.0, 8.0], [5188.0, 8.0], [5184.0, 8.0], [5272.0, 8.0], [5276.0, 8.0], [5268.0, 8.0], [5280.0, 8.0], [5260.0, 8.0], [5256.0, 8.0], [5252.0, 8.0], [5372.0, 8.0], [5284.0, 8.0], [5288.0, 8.0], [5308.0, 8.0], [5304.0, 8.0], [5296.0, 8.0], [5300.0, 8.0], [5292.0, 8.0], [5368.0, 8.0], [5204.0, 8.0], [5200.0, 8.0], [5212.0, 8.0], [5232.0, 8.0], [5236.0, 8.0], [5240.0, 8.0], [5124.0, 8.0], [5216.0, 8.0], [5228.0, 8.0], [5220.0, 8.0], [5224.0, 8.0], [5332.0, 8.0], [5336.0, 8.0], [5136.0, 8.0], [5148.0, 8.0], [5140.0, 8.0], [5176.0, 8.0], [5180.0, 8.0], [5328.0, 8.0], [5316.0, 8.0], [5320.0, 8.0], [5164.0, 8.0], [5160.0, 8.0], [5156.0, 8.0], [5152.0, 8.0], [5128.0, 8.0], [5132.0, 8.0], [5352.0, 8.0], [5344.0, 8.0], [5340.0, 8.0], [5404.0, 8.0], [5592.0, 8.0], [5600.0, 7.0], [5604.0, 8.0], [5620.0, 7.0], [5508.0, 7.0], [5504.0, 8.0], [5408.0, 8.0], [5400.0, 8.0], [5388.0, 8.0], [5380.0, 8.0], [5496.0, 8.0], [5488.0, 8.0], [5476.0, 8.0], [5480.0, 7.0], [5412.0, 8.0], [5416.0, 8.0], [5420.0, 8.0], [5544.0, 8.0], [5556.0, 8.0], [5548.0, 8.0], [5472.0, 8.0], [5512.0, 8.0], [5532.0, 8.0], [5528.0, 8.0], [5524.0, 8.0], [5520.0, 8.0], [5448.0, 8.0], [5444.0, 8.0], [5468.0, 8.0], [5460.0, 8.0], [5432.0, 8.0], [5436.0, 8.0], [5572.0, 8.0], [5580.0, 8.0], [5584.0, 8.0], [5720.0, 7.0], [5700.0, 7.0], [5684.0, 7.0], [5772.0, 7.0], [4113.0, 3.0], [4489.0, 6.0], [4593.0, 9.0], [4837.0, 9.0], [4805.0, 7.0], [4785.0, 9.0], [4781.0, 9.0], [4697.0, 9.0], [4665.0, 9.0], [4813.0, 8.0], [4809.0, 9.0], [4753.0, 9.0], [4821.0, 8.0], [4817.0, 9.0], [4857.0, 9.0], [4861.0, 9.0], [5061.0, 8.0], [4989.0, 8.0], [4981.0, 9.0], [4969.0, 8.0], [4965.0, 8.0], [5105.0, 8.0], [5101.0, 9.0], [5089.0, 8.0], [5069.0, 8.0], [5073.0, 8.0], [5057.0, 8.0], [4925.0, 9.0], [4909.0, 8.0], [4897.0, 9.0], [4901.0, 8.0], [4881.0, 9.0], [4877.0, 9.0], [5117.0, 8.0], [5109.0, 8.0], [4937.0, 7.0], [4929.0, 8.0], [4933.0, 8.0], [4953.0, 8.0], [5045.0, 8.0], [5033.0, 8.0], [5037.0, 8.0], [5041.0, 8.0], [5017.0, 9.0], [5029.0, 8.0], [5013.0, 8.0], [4997.0, 8.0], [5333.0, 8.0], [5125.0, 8.0], [5201.0, 8.0], [5197.0, 8.0], [5185.0, 8.0], [5189.0, 8.0], [5261.0, 8.0], [5265.0, 8.0], [5273.0, 8.0], [5277.0, 8.0], [5281.0, 8.0], [5285.0, 8.0], [5289.0, 8.0], [5297.0, 8.0], [5301.0, 8.0], [5309.0, 8.0], [5237.0, 8.0], [5349.0, 8.0], [5353.0, 8.0], [5249.0, 8.0], [5369.0, 8.0], [5357.0, 8.0], [5253.0, 8.0], [5205.0, 8.0], [5209.0, 8.0], [5213.0, 8.0], [5217.0, 8.0], [5233.0, 8.0], [5321.0, 8.0], [5329.0, 8.0], [5177.0, 8.0], [5317.0, 8.0], [5133.0, 8.0], [5137.0, 8.0], [5149.0, 8.0], [5153.0, 8.0], [5173.0, 9.0], [5157.0, 8.0], [5161.0, 8.0], [5169.0, 8.0], [5165.0, 8.0], [5129.0, 8.0], [5341.0, 8.0], [5337.0, 8.0], [5405.0, 8.0], [5377.0, 8.0], [5389.0, 8.0], [5537.0, 8.0], [5529.0, 8.0], [5545.0, 8.0], [5549.0, 7.0], [5473.0, 8.0], [5461.0, 8.0], [5457.0, 8.0], [5465.0, 8.0], [5477.0, 8.0], [5489.0, 8.0], [5493.0, 8.0], [5485.0, 8.0], [5381.0, 8.0], [5393.0, 8.0], [5401.0, 8.0], [5589.0, 8.0], [5593.0, 7.0], [5613.0, 8.0], [5621.0, 8.0], [5517.0, 8.0], [5453.0, 8.0], [5441.0, 8.0], [5449.0, 8.0], [5437.0, 8.0], [5417.0, 8.0], [5409.0, 8.0], [5421.0, 8.0], [5425.0, 8.0], [5429.0, 8.0], [5581.0, 8.0], [5713.0, 7.0], [5741.0, 7.0], [5681.0, 8.0], [2307.0, 3.0], [2349.0, 3.0], [2655.0, 3.0], [2957.0, 3.0], [3117.0, 3.0], [3757.0, 3.0], [3905.0, 3.0], [3841.0, 8.0], [3997.0, 4.0], [4298.0, 5.0], [4278.0, 5.0], [4342.0, 10.0], [4506.0, 5.0], [4582.0, 9.0], [4830.0, 8.0], [4666.0, 5.0], [4638.0, 5.0], [4658.0, 9.0], [4798.0, 7.0], [4862.0, 9.0], [4746.0, 9.0], [4754.0, 9.0], [4842.0, 9.0], [4838.0, 9.0], [4810.0, 9.0], [4826.0, 9.0], [4814.0, 9.0], [4610.0, 9.0], [4730.0, 9.0], [4922.0, 8.0], [4914.0, 8.0], [4918.0, 8.0], [4958.0, 7.0], [4962.0, 9.0], [4970.0, 8.0], [4866.0, 8.0], [4978.0, 8.0], [4974.0, 8.0], [4930.0, 7.0], [5090.0, 8.0], [5110.0, 8.0], [5102.0, 8.0], [5094.0, 8.0], [5098.0, 8.0], [5106.0, 8.0], [5086.0, 8.0], [5074.0, 8.0], [4926.0, 8.0], [4910.0, 9.0], [4906.0, 8.0], [4890.0, 9.0], [5114.0, 8.0], [4946.0, 8.0], [4934.0, 8.0], [4942.0, 8.0], [5046.0, 8.0], [5050.0, 8.0], [5054.0, 8.0], [5002.0, 9.0], [5010.0, 8.0], [5006.0, 8.0], [5018.0, 8.0], [5026.0, 8.0], [5030.0, 8.0], [5034.0, 8.0], [5118.0, 8.0], [5354.0, 8.0], [5370.0, 8.0], [5182.0, 8.0], [5202.0, 7.0], [5186.0, 8.0], [5190.0, 8.0], [5198.0, 8.0], [5194.0, 8.0], [5282.0, 8.0], [5286.0, 8.0], [5266.0, 8.0], [5274.0, 8.0], [5270.0, 8.0], [5278.0, 8.0], [5258.0, 8.0], [5262.0, 8.0], [5254.0, 8.0], [5250.0, 8.0], [5374.0, 8.0], [5290.0, 8.0], [5302.0, 8.0], [5306.0, 8.0], [5294.0, 8.0], [5298.0, 8.0], [5242.0, 8.0], [5246.0, 8.0], [5122.0, 8.0], [5366.0, 8.0], [5358.0, 8.0], [5234.0, 8.0], [5210.0, 8.0], [5218.0, 8.0], [5226.0, 8.0], [5222.0, 8.0], [5230.0, 8.0], [5330.0, 8.0], [5326.0, 8.0], [5318.0, 8.0], [5150.0, 8.0], [5142.0, 8.0], [5146.0, 8.0], [5162.0, 8.0], [5154.0, 8.0], [5178.0, 8.0], [5126.0, 8.0], [5130.0, 8.0], [5346.0, 8.0], [5342.0, 8.0], [5334.0, 8.0], [5398.0, 8.0], [5422.0, 8.0], [5630.0, 7.0], [5506.0, 8.0], [5590.0, 8.0], [5582.0, 8.0], [5430.0, 8.0], [5434.0, 8.0], [5586.0, 8.0], [5406.0, 8.0], [5394.0, 8.0], [5382.0, 8.0], [5386.0, 8.0], [5378.0, 8.0], [5418.0, 8.0], [5414.0, 8.0], [5410.0, 8.0], [5550.0, 7.0], [5534.0, 8.0], [5562.0, 8.0], [5566.0, 8.0], [5554.0, 8.0], [5522.0, 8.0], [5530.0, 8.0], [5474.0, 8.0], [5498.0, 8.0], [5490.0, 8.0], [5486.0, 8.0], [5514.0, 8.0], [5450.0, 8.0], [5442.0, 8.0], [5458.0, 8.0], [5638.0, 7.0], [5674.0, 7.0], [5654.0, 7.0], [4307.0, 3.0], [4275.0, 4.0], [4223.0, 4.0], [4411.0, 5.0], [4575.0, 9.0], [4847.0, 9.0], [4839.0, 8.0], [4799.0, 9.0], [4791.0, 6.0], [4767.0, 7.0], [4855.0, 8.0], [4843.0, 8.0], [4783.0, 9.0], [4683.0, 9.0], [4703.0, 9.0], [4719.0, 9.0], [4723.0, 9.0], [4811.0, 8.0], [4815.0, 9.0], [4835.0, 9.0], [4807.0, 9.0], [4631.0, 9.0], [5107.0, 8.0], [5095.0, 8.0], [5103.0, 8.0], [5099.0, 8.0], [5059.0, 8.0], [4975.0, 8.0], [4987.0, 8.0], [5091.0, 8.0], [5063.0, 8.0], [5067.0, 8.0], [5071.0, 8.0], [5075.0, 8.0], [5083.0, 8.0], [4907.0, 8.0], [4911.0, 8.0], [4875.0, 8.0], [4991.0, 8.0], [5111.0, 9.0], [5115.0, 8.0], [4935.0, 8.0], [4943.0, 8.0], [4955.0, 8.0], [4963.0, 8.0], [5039.0, 8.0], [5055.0, 8.0], [5051.0, 8.0], [5043.0, 8.0], [5027.0, 8.0], [5031.0, 8.0], [5023.0, 9.0], [5015.0, 9.0], [4999.0, 9.0], [4995.0, 9.0], [5119.0, 8.0], [5239.0, 8.0], [5187.0, 8.0], [5195.0, 8.0], [5203.0, 8.0], [5191.0, 8.0], [5259.0, 8.0], [5255.0, 8.0], [5263.0, 8.0], [5283.0, 8.0], [5275.0, 8.0], [5267.0, 8.0], [5271.0, 8.0], [5287.0, 8.0], [5295.0, 8.0], [5299.0, 8.0], [5307.0, 8.0], [5123.0, 8.0], [5243.0, 8.0], [5247.0, 8.0], [5359.0, 8.0], [5371.0, 8.0], [5367.0, 8.0], [5375.0, 8.0], [5251.0, 8.0], [5211.0, 8.0], [5207.0, 8.0], [5231.0, 8.0], [5227.0, 8.0], [5219.0, 8.0], [5235.0, 8.0], [5323.0, 8.0], [5331.0, 8.0], [5339.0, 8.0], [5335.0, 8.0], [5135.0, 8.0], [5139.0, 8.0], [5143.0, 8.0], [5147.0, 8.0], [5155.0, 8.0], [5167.0, 8.0], [5159.0, 8.0], [5171.0, 8.0], [5179.0, 8.0], [5315.0, 8.0], [5319.0, 8.0], [5131.0, 8.0], [5127.0, 8.0], [5347.0, 8.0], [5355.0, 8.0], [5343.0, 8.0], [5427.0, 7.0], [5503.0, 8.0], [5403.0, 7.0], [5407.0, 8.0], [5539.0, 8.0], [5543.0, 8.0], [5563.0, 8.0], [5479.0, 8.0], [5475.0, 8.0], [5483.0, 8.0], [5491.0, 8.0], [5495.0, 8.0], [5487.0, 8.0], [5387.0, 8.0], [5391.0, 8.0], [5399.0, 8.0], [5527.0, 8.0], [5519.0, 8.0], [5607.0, 8.0], [5611.0, 7.0], [5623.0, 8.0], [5531.0, 8.0], [5535.0, 8.0], [5463.0, 8.0], [5459.0, 7.0], [5443.0, 8.0], [5451.0, 8.0], [5455.0, 8.0], [5579.0, 8.0], [5435.0, 8.0], [5599.0, 8.0], [5411.0, 8.0], [5419.0, 8.0], [5415.0, 8.0], [5735.0, 7.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5772.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3.0, "minX": 91.0, "maxY": 10.0, "series": [{"data": [[91.0, 4.0], [504.0, 3.0], [745.0, 3.0], [1086.0, 3.0], [1413.0, 3.0], [1610.0, 3.0], [1752.0, 3.0], [2106.0, 3.0], [3546.0, 3.0], [3656.0, 3.0], [3730.0, 3.0], [4078.0, 5.0], [4316.0, 4.0], [4180.0, 5.0], [4280.0, 6.0], [4312.0, 8.0], [4460.0, 4.0], [4356.0, 5.0], [4412.0, 5.0], [4488.0, 9.0], [4560.0, 9.0], [4760.0, 8.0], [4624.0, 9.0], [4636.0, 9.0], [4780.0, 9.0], [4772.0, 9.0], [4800.0, 9.0], [4828.0, 9.0], [4836.0, 9.0], [4744.0, 9.0], [5060.0, 8.0], [4872.0, 9.0], [4880.0, 7.0], [4928.0, 6.0], [5084.0, 8.0], [5112.0, 8.0], [5100.0, 8.0], [5092.0, 8.0], [5096.0, 8.0], [5108.0, 8.0], [5068.0, 8.0], [5076.0, 8.0], [5080.0, 8.0], [4912.0, 9.0], [4892.0, 9.0], [4888.0, 8.0], [4948.0, 8.0], [4952.0, 8.0], [4988.0, 8.0], [4976.0, 8.0], [4932.0, 8.0], [5040.0, 8.0], [5052.0, 8.0], [5048.0, 8.0], [5036.0, 8.0], [5004.0, 8.0], [5028.0, 8.0], [5020.0, 8.0], [4992.0, 8.0], [5356.0, 8.0], [5360.0, 8.0], [5192.0, 8.0], [5188.0, 8.0], [5184.0, 8.0], [5272.0, 8.0], [5276.0, 8.0], [5268.0, 8.0], [5280.0, 8.0], [5260.0, 8.0], [5256.0, 8.0], [5252.0, 8.0], [5372.0, 8.0], [5284.0, 8.0], [5288.0, 8.0], [5308.0, 8.0], [5304.0, 8.0], [5296.0, 8.0], [5300.0, 8.0], [5292.0, 8.0], [5368.0, 8.0], [5204.0, 8.0], [5200.0, 8.0], [5212.0, 8.0], [5232.0, 8.0], [5236.0, 8.0], [5240.0, 8.0], [5124.0, 8.0], [5216.0, 8.0], [5228.0, 8.0], [5220.0, 8.0], [5224.0, 8.0], [5332.0, 8.0], [5336.0, 8.0], [5136.0, 8.0], [5148.0, 8.0], [5140.0, 8.0], [5176.0, 8.0], [5180.0, 8.0], [5328.0, 8.0], [5316.0, 8.0], [5320.0, 8.0], [5164.0, 8.0], [5160.0, 8.0], [5156.0, 8.0], [5152.0, 8.0], [5128.0, 8.0], [5132.0, 8.0], [5352.0, 8.0], [5344.0, 8.0], [5340.0, 8.0], [5404.0, 8.0], [5592.0, 8.0], [5600.0, 7.0], [5604.0, 8.0], [5620.0, 7.0], [5508.0, 7.0], [5504.0, 8.0], [5408.0, 8.0], [5400.0, 8.0], [5388.0, 8.0], [5380.0, 8.0], [5496.0, 8.0], [5488.0, 8.0], [5476.0, 8.0], [5480.0, 7.0], [5412.0, 8.0], [5416.0, 8.0], [5420.0, 8.0], [5544.0, 7.0], [5556.0, 8.0], [5548.0, 8.0], [5472.0, 8.0], [5512.0, 8.0], [5532.0, 8.0], [5528.0, 8.0], [5524.0, 8.0], [5520.0, 8.0], [5448.0, 8.0], [5444.0, 8.0], [5468.0, 8.0], [5460.0, 8.0], [5432.0, 8.0], [5436.0, 8.0], [5572.0, 7.5], [5580.0, 8.0], [5584.0, 8.0], [5720.0, 7.0], [5700.0, 7.0], [5684.0, 7.0], [5772.0, 7.0], [4113.0, 3.0], [4489.0, 6.0], [4593.0, 9.0], [4837.0, 9.0], [4805.0, 7.0], [4785.0, 9.0], [4781.0, 9.0], [4697.0, 9.0], [4665.0, 9.0], [4813.0, 8.0], [4809.0, 9.0], [4753.0, 9.0], [4821.0, 8.0], [4817.0, 9.0], [4857.0, 9.0], [4861.0, 9.0], [5061.0, 8.0], [4989.0, 8.0], [4981.0, 9.0], [4969.0, 8.0], [4965.0, 8.0], [5105.0, 8.0], [5101.0, 9.0], [5089.0, 8.0], [5069.0, 8.0], [5073.0, 8.0], [5057.0, 8.0], [4925.0, 9.0], [4909.0, 8.0], [4897.0, 9.0], [4901.0, 8.0], [4881.0, 9.0], [4877.0, 8.0], [5117.0, 8.0], [5109.0, 8.0], [4937.0, 7.0], [4929.0, 8.0], [4933.0, 8.0], [4953.0, 8.0], [5045.0, 8.0], [5033.0, 8.0], [5037.0, 8.0], [5041.0, 8.0], [5017.0, 9.0], [5029.0, 8.0], [5013.0, 8.0], [4997.0, 8.0], [5333.0, 8.0], [5125.0, 8.0], [5201.0, 8.0], [5197.0, 8.0], [5185.0, 8.0], [5189.0, 8.0], [5261.0, 8.0], [5265.0, 8.0], [5273.0, 8.0], [5277.0, 8.0], [5281.0, 8.0], [5285.0, 8.0], [5289.0, 8.0], [5297.0, 8.0], [5301.0, 8.0], [5309.0, 8.0], [5237.0, 8.0], [5349.0, 8.0], [5353.0, 8.0], [5249.0, 8.0], [5369.0, 8.0], [5357.0, 8.0], [5253.0, 8.0], [5205.0, 8.0], [5209.0, 8.0], [5213.0, 8.0], [5217.0, 8.0], [5233.0, 8.0], [5321.0, 8.0], [5329.0, 8.0], [5177.0, 8.0], [5317.0, 8.0], [5133.0, 8.0], [5137.0, 8.0], [5149.0, 8.0], [5153.0, 8.0], [5173.0, 9.0], [5157.0, 8.0], [5161.0, 8.0], [5169.0, 8.0], [5165.0, 8.0], [5129.0, 8.0], [5341.0, 8.0], [5337.0, 8.0], [5405.0, 8.0], [5377.0, 8.0], [5389.0, 8.0], [5537.0, 8.0], [5529.0, 8.0], [5545.0, 8.0], [5549.0, 7.0], [5473.0, 8.0], [5461.0, 8.0], [5457.0, 8.0], [5465.0, 8.0], [5477.0, 8.0], [5489.0, 8.0], [5493.0, 8.0], [5485.0, 8.0], [5381.0, 8.0], [5393.0, 8.0], [5401.0, 8.0], [5589.0, 8.0], [5593.0, 7.0], [5613.0, 8.0], [5621.0, 8.0], [5517.0, 8.0], [5453.0, 8.0], [5441.0, 8.0], [5449.0, 8.0], [5437.0, 8.0], [5417.0, 8.0], [5409.0, 8.0], [5421.0, 8.0], [5425.0, 8.0], [5429.0, 8.0], [5581.0, 8.0], [5713.0, 7.0], [5741.0, 7.0], [5681.0, 8.0], [2307.0, 3.0], [2349.0, 3.0], [2655.0, 3.0], [2957.0, 3.0], [3117.0, 3.0], [3757.0, 3.0], [3905.0, 3.0], [3841.0, 8.0], [3997.0, 4.0], [4298.0, 5.0], [4278.0, 5.0], [4342.0, 10.0], [4506.0, 5.0], [4582.0, 9.0], [4830.0, 8.0], [4666.0, 5.0], [4638.0, 5.0], [4658.0, 9.0], [4798.0, 7.0], [4862.0, 9.0], [4746.0, 9.0], [4754.0, 9.0], [4842.0, 9.0], [4838.0, 9.0], [4810.0, 9.0], [4826.0, 9.0], [4814.0, 9.0], [4610.0, 9.0], [4730.0, 9.0], [4922.0, 8.0], [4914.0, 8.0], [4918.0, 8.0], [4958.0, 7.0], [4962.0, 9.0], [4970.0, 8.0], [4866.0, 8.0], [4978.0, 8.0], [4974.0, 8.0], [4930.0, 7.0], [5090.0, 8.0], [5110.0, 8.0], [5102.0, 8.0], [5094.0, 8.0], [5098.0, 8.0], [5106.0, 8.0], [5086.0, 8.0], [5074.0, 8.0], [4926.0, 8.0], [4910.0, 9.0], [4906.0, 8.0], [4890.0, 9.0], [5114.0, 8.0], [4946.0, 8.0], [4934.0, 8.0], [4942.0, 8.0], [5046.0, 8.0], [5050.0, 8.0], [5054.0, 8.0], [5002.0, 9.0], [5010.0, 8.0], [5006.0, 8.0], [5018.0, 8.0], [5026.0, 8.0], [5030.0, 8.0], [5034.0, 8.0], [5118.0, 8.0], [5354.0, 8.0], [5370.0, 8.0], [5182.0, 8.0], [5202.0, 7.0], [5186.0, 8.0], [5190.0, 8.0], [5198.0, 8.0], [5194.0, 8.0], [5282.0, 8.0], [5286.0, 8.0], [5266.0, 8.0], [5274.0, 8.0], [5270.0, 8.0], [5278.0, 8.0], [5258.0, 8.0], [5262.0, 8.0], [5254.0, 8.0], [5250.0, 8.0], [5374.0, 8.0], [5290.0, 8.0], [5302.0, 8.0], [5306.0, 8.0], [5294.0, 8.0], [5298.0, 8.0], [5242.0, 8.0], [5246.0, 8.0], [5122.0, 8.0], [5366.0, 8.0], [5358.0, 8.0], [5234.0, 8.0], [5210.0, 8.0], [5218.0, 8.0], [5226.0, 8.0], [5222.0, 8.0], [5230.0, 8.0], [5330.0, 8.0], [5326.0, 8.0], [5318.0, 8.0], [5150.0, 8.0], [5142.0, 8.0], [5146.0, 8.0], [5162.0, 8.0], [5154.0, 8.0], [5178.0, 8.0], [5126.0, 8.0], [5130.0, 8.0], [5346.0, 8.0], [5342.0, 8.0], [5334.0, 8.0], [5398.0, 8.0], [5422.0, 8.0], [5630.0, 7.0], [5506.0, 8.0], [5590.0, 8.0], [5582.0, 8.0], [5430.0, 8.0], [5434.0, 8.0], [5586.0, 8.0], [5406.0, 8.0], [5394.0, 8.0], [5382.0, 8.0], [5386.0, 8.0], [5378.0, 8.0], [5418.0, 8.0], [5414.0, 8.0], [5410.0, 8.0], [5550.0, 7.0], [5534.0, 8.0], [5562.0, 8.0], [5566.0, 8.0], [5554.0, 8.0], [5522.0, 8.0], [5530.0, 8.0], [5474.0, 8.0], [5498.0, 8.0], [5490.0, 8.0], [5486.0, 8.0], [5514.0, 8.0], [5450.0, 8.0], [5442.0, 8.0], [5458.0, 8.0], [5638.0, 7.0], [5674.0, 7.0], [5654.0, 7.0], [4307.0, 3.0], [4275.0, 4.0], [4223.0, 4.0], [4411.0, 5.0], [4575.0, 9.0], [4847.0, 9.0], [4839.0, 8.0], [4799.0, 9.0], [4791.0, 6.0], [4767.0, 7.0], [4855.0, 8.0], [4843.0, 8.0], [4783.0, 9.0], [4683.0, 9.0], [4703.0, 9.0], [4719.0, 9.0], [4723.0, 9.0], [4811.0, 8.0], [4815.0, 9.0], [4835.0, 9.0], [4807.0, 9.0], [4631.0, 9.0], [5107.0, 8.0], [5095.0, 8.0], [5103.0, 8.0], [5099.0, 8.0], [5059.0, 8.0], [4975.0, 8.0], [4987.0, 8.0], [5091.0, 8.0], [5063.0, 8.0], [5067.0, 8.0], [5071.0, 8.0], [5075.0, 8.0], [5083.0, 8.0], [4907.0, 8.0], [4911.0, 8.0], [4875.0, 8.0], [4991.0, 8.0], [5111.0, 9.0], [5115.0, 8.0], [4935.0, 8.0], [4943.0, 8.0], [4955.0, 8.0], [4963.0, 8.0], [5039.0, 8.0], [5055.0, 8.0], [5051.0, 8.0], [5043.0, 8.0], [5027.0, 8.0], [5031.0, 8.0], [5023.0, 9.0], [5015.0, 9.0], [4999.0, 9.0], [4995.0, 9.0], [5119.0, 8.0], [5239.0, 8.0], [5187.0, 8.0], [5195.0, 8.0], [5203.0, 8.0], [5191.0, 8.0], [5259.0, 8.0], [5255.0, 8.0], [5263.0, 8.0], [5283.0, 8.0], [5275.0, 8.0], [5267.0, 8.0], [5271.0, 8.0], [5287.0, 8.0], [5295.0, 8.0], [5299.0, 8.0], [5307.0, 8.0], [5123.0, 8.0], [5243.0, 8.0], [5247.0, 8.0], [5359.0, 8.0], [5371.0, 8.0], [5367.0, 8.0], [5375.0, 8.0], [5251.0, 8.0], [5211.0, 8.0], [5207.0, 8.0], [5231.0, 8.0], [5227.0, 8.0], [5219.0, 8.0], [5235.0, 8.0], [5323.0, 8.0], [5331.0, 8.0], [5339.0, 8.0], [5335.0, 8.0], [5135.0, 8.0], [5139.0, 8.0], [5143.0, 8.0], [5147.0, 8.0], [5155.0, 8.0], [5167.0, 8.0], [5159.0, 8.0], [5171.0, 8.0], [5179.0, 8.0], [5315.0, 8.0], [5319.0, 8.0], [5131.0, 8.0], [5127.0, 8.0], [5347.0, 8.0], [5355.0, 8.0], [5343.0, 8.0], [5427.0, 7.0], [5503.0, 8.0], [5403.0, 7.0], [5407.0, 8.0], [5539.0, 8.0], [5543.0, 8.0], [5563.0, 8.0], [5479.0, 8.0], [5475.0, 8.0], [5483.0, 8.0], [5491.0, 8.0], [5495.0, 8.0], [5487.0, 8.0], [5387.0, 8.0], [5391.0, 8.0], [5399.0, 8.0], [5527.0, 8.0], [5519.0, 8.0], [5607.0, 8.0], [5611.0, 7.0], [5623.0, 8.0], [5531.0, 8.0], [5535.0, 8.0], [5463.0, 8.0], [5459.0, 7.0], [5443.0, 8.0], [5451.0, 8.0], [5455.0, 8.0], [5579.0, 8.0], [5435.0, 8.0], [5599.0, 8.0], [5411.0, 8.0], [5419.0, 8.0], [5415.0, 8.0], [5735.0, 7.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5772.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 120.11666666666666, "minX": 1.6013886E12, "maxY": 5286.166666666667, "series": [{"data": [[1.60138932E12, 5270.55], [1.60138902E12, 5223.583333333333], [1.60138896E12, 5239.083333333333], [1.60138866E12, 4478.4], [1.60138908E12, 5162.066666666667], [1.60138878E12, 5273.083333333333], [1.60138872E12, 5191.883333333333], [1.60138938E12, 5253.183333333333], [1.60138884E12, 5076.733333333334], [1.60138944E12, 5286.166666666667], [1.6013895E12, 4636.516666666666], [1.60138914E12, 5236.366666666667], [1.6013886E12, 120.11666666666666], [1.60138926E12, 5189.816666666667], [1.6013892E12, 5222.8], [1.6013889E12, 5159.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6013895E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 120.01666666666667, "minX": 1.6013886E12, "maxY": 5286.2, "series": [{"data": [[1.60138932E12, 5270.566666666667], [1.60138902E12, 5223.583333333333], [1.60138896E12, 5239.083333333333], [1.60138866E12, 4477.766666666666], [1.60138908E12, 5162.1], [1.60138878E12, 5273.116666666667], [1.60138872E12, 5191.783333333334], [1.60138938E12, 5253.166666666667], [1.60138884E12, 5076.733333333334], [1.60138944E12, 5286.2], [1.6013895E12, 4637.316666666667], [1.60138914E12, 5236.35], [1.6013886E12, 120.01666666666667], [1.60138926E12, 5189.816666666667], [1.6013892E12, 5222.783333333334], [1.6013889E12, 5159.516666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6013895E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 120.01666666666667, "minX": 1.6013886E12, "maxY": 5286.2, "series": [{"data": [[1.60138932E12, 5270.566666666667], [1.60138902E12, 5223.583333333333], [1.60138896E12, 5239.083333333333], [1.60138866E12, 4477.766666666666], [1.60138908E12, 5162.1], [1.60138878E12, 5273.116666666667], [1.60138872E12, 5191.783333333334], [1.60138938E12, 5253.166666666667], [1.60138884E12, 5076.733333333334], [1.60138944E12, 5286.2], [1.6013895E12, 4637.316666666667], [1.60138914E12, 5236.35], [1.6013886E12, 120.01666666666667], [1.60138926E12, 5189.816666666667], [1.6013892E12, 5222.783333333334], [1.6013889E12, 5159.516666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6013895E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 120.01666666666667, "minX": 1.6013886E12, "maxY": 5286.2, "series": [{"data": [[1.60138932E12, 5270.566666666667], [1.60138902E12, 5223.583333333333], [1.60138896E12, 5239.083333333333], [1.60138866E12, 4477.766666666666], [1.60138908E12, 5162.1], [1.60138878E12, 5273.116666666667], [1.60138872E12, 5191.783333333334], [1.60138938E12, 5253.166666666667], [1.60138884E12, 5076.733333333334], [1.60138944E12, 5286.2], [1.6013895E12, 4637.316666666667], [1.60138914E12, 5236.35], [1.6013886E12, 120.01666666666667], [1.60138926E12, 5189.816666666667], [1.6013892E12, 5222.783333333334], [1.6013889E12, 5159.516666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6013895E12, "title": "Total Transactions Per Second"}},
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

