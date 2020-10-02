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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 183.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 3.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 3.0], [4.0, 3.0], [4.1, 3.0], [4.2, 4.0], [4.3, 4.0], [4.4, 4.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 4.0], [5.4, 4.0], [5.5, 4.0], [5.6, 4.0], [5.7, 4.0], [5.8, 4.0], [5.9, 4.0], [6.0, 4.0], [6.1, 4.0], [6.2, 4.0], [6.3, 4.0], [6.4, 4.0], [6.5, 4.0], [6.6, 4.0], [6.7, 4.0], [6.8, 4.0], [6.9, 4.0], [7.0, 4.0], [7.1, 4.0], [7.2, 4.0], [7.3, 4.0], [7.4, 4.0], [7.5, 4.0], [7.6, 4.0], [7.7, 4.0], [7.8, 4.0], [7.9, 4.0], [8.0, 4.0], [8.1, 4.0], [8.2, 4.0], [8.3, 4.0], [8.4, 4.0], [8.5, 4.0], [8.6, 4.0], [8.7, 4.0], [8.8, 4.0], [8.9, 4.0], [9.0, 4.0], [9.1, 4.0], [9.2, 4.0], [9.3, 4.0], [9.4, 4.0], [9.5, 4.0], [9.6, 4.0], [9.7, 4.0], [9.8, 4.0], [9.9, 4.0], [10.0, 4.0], [10.1, 4.0], [10.2, 5.0], [10.3, 5.0], [10.4, 5.0], [10.5, 5.0], [10.6, 5.0], [10.7, 5.0], [10.8, 5.0], [10.9, 5.0], [11.0, 5.0], [11.1, 5.0], [11.2, 5.0], [11.3, 5.0], [11.4, 5.0], [11.5, 5.0], [11.6, 5.0], [11.7, 5.0], [11.8, 5.0], [11.9, 5.0], [12.0, 5.0], [12.1, 5.0], [12.2, 5.0], [12.3, 5.0], [12.4, 5.0], [12.5, 5.0], [12.6, 5.0], [12.7, 5.0], [12.8, 5.0], [12.9, 5.0], [13.0, 5.0], [13.1, 5.0], [13.2, 5.0], [13.3, 5.0], [13.4, 5.0], [13.5, 5.0], [13.6, 5.0], [13.7, 5.0], [13.8, 5.0], [13.9, 5.0], [14.0, 5.0], [14.1, 5.0], [14.2, 5.0], [14.3, 5.0], [14.4, 5.0], [14.5, 5.0], [14.6, 5.0], [14.7, 5.0], [14.8, 5.0], [14.9, 5.0], [15.0, 5.0], [15.1, 5.0], [15.2, 5.0], [15.3, 5.0], [15.4, 5.0], [15.5, 5.0], [15.6, 5.0], [15.7, 5.0], [15.8, 5.0], [15.9, 5.0], [16.0, 5.0], [16.1, 5.0], [16.2, 5.0], [16.3, 5.0], [16.4, 5.0], [16.5, 5.0], [16.6, 5.0], [16.7, 5.0], [16.8, 5.0], [16.9, 5.0], [17.0, 5.0], [17.1, 5.0], [17.2, 5.0], [17.3, 5.0], [17.4, 5.0], [17.5, 5.0], [17.6, 5.0], [17.7, 5.0], [17.8, 5.0], [17.9, 5.0], [18.0, 5.0], [18.1, 5.0], [18.2, 5.0], [18.3, 5.0], [18.4, 5.0], [18.5, 5.0], [18.6, 5.0], [18.7, 5.0], [18.8, 5.0], [18.9, 5.0], [19.0, 6.0], [19.1, 6.0], [19.2, 6.0], [19.3, 6.0], [19.4, 6.0], [19.5, 6.0], [19.6, 6.0], [19.7, 6.0], [19.8, 6.0], [19.9, 6.0], [20.0, 6.0], [20.1, 6.0], [20.2, 6.0], [20.3, 6.0], [20.4, 6.0], [20.5, 6.0], [20.6, 6.0], [20.7, 6.0], [20.8, 6.0], [20.9, 6.0], [21.0, 6.0], [21.1, 6.0], [21.2, 6.0], [21.3, 6.0], [21.4, 6.0], [21.5, 6.0], [21.6, 6.0], [21.7, 6.0], [21.8, 6.0], [21.9, 6.0], [22.0, 6.0], [22.1, 6.0], [22.2, 6.0], [22.3, 6.0], [22.4, 6.0], [22.5, 6.0], [22.6, 6.0], [22.7, 6.0], [22.8, 6.0], [22.9, 6.0], [23.0, 6.0], [23.1, 6.0], [23.2, 6.0], [23.3, 6.0], [23.4, 6.0], [23.5, 6.0], [23.6, 6.0], [23.7, 6.0], [23.8, 6.0], [23.9, 6.0], [24.0, 6.0], [24.1, 6.0], [24.2, 6.0], [24.3, 6.0], [24.4, 6.0], [24.5, 6.0], [24.6, 6.0], [24.7, 6.0], [24.8, 6.0], [24.9, 6.0], [25.0, 6.0], [25.1, 6.0], [25.2, 6.0], [25.3, 6.0], [25.4, 6.0], [25.5, 6.0], [25.6, 6.0], [25.7, 6.0], [25.8, 6.0], [25.9, 6.0], [26.0, 6.0], [26.1, 6.0], [26.2, 6.0], [26.3, 6.0], [26.4, 6.0], [26.5, 6.0], [26.6, 6.0], [26.7, 6.0], [26.8, 6.0], [26.9, 6.0], [27.0, 6.0], [27.1, 6.0], [27.2, 6.0], [27.3, 6.0], [27.4, 6.0], [27.5, 6.0], [27.6, 6.0], [27.7, 6.0], [27.8, 6.0], [27.9, 6.0], [28.0, 6.0], [28.1, 6.0], [28.2, 6.0], [28.3, 6.0], [28.4, 6.0], [28.5, 6.0], [28.6, 6.0], [28.7, 6.0], [28.8, 6.0], [28.9, 6.0], [29.0, 6.0], [29.1, 6.0], [29.2, 7.0], [29.3, 7.0], [29.4, 7.0], [29.5, 7.0], [29.6, 7.0], [29.7, 7.0], [29.8, 7.0], [29.9, 7.0], [30.0, 7.0], [30.1, 7.0], [30.2, 7.0], [30.3, 7.0], [30.4, 7.0], [30.5, 7.0], [30.6, 7.0], [30.7, 7.0], [30.8, 7.0], [30.9, 7.0], [31.0, 7.0], [31.1, 7.0], [31.2, 7.0], [31.3, 7.0], [31.4, 7.0], [31.5, 7.0], [31.6, 7.0], [31.7, 7.0], [31.8, 7.0], [31.9, 7.0], [32.0, 7.0], [32.1, 7.0], [32.2, 7.0], [32.3, 7.0], [32.4, 7.0], [32.5, 7.0], [32.6, 7.0], [32.7, 7.0], [32.8, 7.0], [32.9, 7.0], [33.0, 7.0], [33.1, 7.0], [33.2, 7.0], [33.3, 7.0], [33.4, 7.0], [33.5, 7.0], [33.6, 7.0], [33.7, 7.0], [33.8, 7.0], [33.9, 7.0], [34.0, 7.0], [34.1, 7.0], [34.2, 7.0], [34.3, 7.0], [34.4, 7.0], [34.5, 7.0], [34.6, 7.0], [34.7, 7.0], [34.8, 7.0], [34.9, 7.0], [35.0, 7.0], [35.1, 7.0], [35.2, 7.0], [35.3, 7.0], [35.4, 7.0], [35.5, 7.0], [35.6, 7.0], [35.7, 7.0], [35.8, 7.0], [35.9, 7.0], [36.0, 7.0], [36.1, 7.0], [36.2, 7.0], [36.3, 7.0], [36.4, 7.0], [36.5, 7.0], [36.6, 7.0], [36.7, 7.0], [36.8, 7.0], [36.9, 7.0], [37.0, 7.0], [37.1, 7.0], [37.2, 7.0], [37.3, 7.0], [37.4, 7.0], [37.5, 7.0], [37.6, 7.0], [37.7, 7.0], [37.8, 7.0], [37.9, 7.0], [38.0, 7.0], [38.1, 7.0], [38.2, 7.0], [38.3, 7.0], [38.4, 7.0], [38.5, 7.0], [38.6, 7.0], [38.7, 7.0], [38.8, 7.0], [38.9, 7.0], [39.0, 7.0], [39.1, 7.0], [39.2, 7.0], [39.3, 7.0], [39.4, 7.0], [39.5, 7.0], [39.6, 8.0], [39.7, 8.0], [39.8, 8.0], [39.9, 8.0], [40.0, 8.0], [40.1, 8.0], [40.2, 8.0], [40.3, 8.0], [40.4, 8.0], [40.5, 8.0], [40.6, 8.0], [40.7, 8.0], [40.8, 8.0], [40.9, 8.0], [41.0, 8.0], [41.1, 8.0], [41.2, 8.0], [41.3, 8.0], [41.4, 8.0], [41.5, 8.0], [41.6, 8.0], [41.7, 8.0], [41.8, 8.0], [41.9, 8.0], [42.0, 8.0], [42.1, 8.0], [42.2, 8.0], [42.3, 8.0], [42.4, 8.0], [42.5, 8.0], [42.6, 8.0], [42.7, 8.0], [42.8, 8.0], [42.9, 8.0], [43.0, 8.0], [43.1, 8.0], [43.2, 8.0], [43.3, 8.0], [43.4, 8.0], [43.5, 8.0], [43.6, 8.0], [43.7, 8.0], [43.8, 8.0], [43.9, 8.0], [44.0, 8.0], [44.1, 8.0], [44.2, 8.0], [44.3, 8.0], [44.4, 8.0], [44.5, 8.0], [44.6, 8.0], [44.7, 8.0], [44.8, 8.0], [44.9, 8.0], [45.0, 8.0], [45.1, 8.0], [45.2, 8.0], [45.3, 8.0], [45.4, 8.0], [45.5, 8.0], [45.6, 8.0], [45.7, 8.0], [45.8, 8.0], [45.9, 8.0], [46.0, 8.0], [46.1, 8.0], [46.2, 8.0], [46.3, 8.0], [46.4, 8.0], [46.5, 8.0], [46.6, 8.0], [46.7, 8.0], [46.8, 8.0], [46.9, 8.0], [47.0, 8.0], [47.1, 8.0], [47.2, 8.0], [47.3, 8.0], [47.4, 8.0], [47.5, 8.0], [47.6, 8.0], [47.7, 8.0], [47.8, 8.0], [47.9, 8.0], [48.0, 8.0], [48.1, 8.0], [48.2, 8.0], [48.3, 8.0], [48.4, 8.0], [48.5, 8.0], [48.6, 8.0], [48.7, 8.0], [48.8, 8.0], [48.9, 8.0], [49.0, 8.0], [49.1, 8.0], [49.2, 8.0], [49.3, 8.0], [49.4, 9.0], [49.5, 9.0], [49.6, 9.0], [49.7, 9.0], [49.8, 9.0], [49.9, 9.0], [50.0, 9.0], [50.1, 9.0], [50.2, 9.0], [50.3, 9.0], [50.4, 9.0], [50.5, 9.0], [50.6, 9.0], [50.7, 9.0], [50.8, 9.0], [50.9, 9.0], [51.0, 9.0], [51.1, 9.0], [51.2, 9.0], [51.3, 9.0], [51.4, 9.0], [51.5, 9.0], [51.6, 9.0], [51.7, 9.0], [51.8, 9.0], [51.9, 9.0], [52.0, 9.0], [52.1, 9.0], [52.2, 9.0], [52.3, 9.0], [52.4, 9.0], [52.5, 9.0], [52.6, 9.0], [52.7, 9.0], [52.8, 9.0], [52.9, 9.0], [53.0, 9.0], [53.1, 9.0], [53.2, 9.0], [53.3, 9.0], [53.4, 9.0], [53.5, 9.0], [53.6, 9.0], [53.7, 9.0], [53.8, 9.0], [53.9, 9.0], [54.0, 9.0], [54.1, 9.0], [54.2, 9.0], [54.3, 9.0], [54.4, 9.0], [54.5, 9.0], [54.6, 9.0], [54.7, 9.0], [54.8, 9.0], [54.9, 9.0], [55.0, 9.0], [55.1, 9.0], [55.2, 9.0], [55.3, 9.0], [55.4, 9.0], [55.5, 9.0], [55.6, 9.0], [55.7, 9.0], [55.8, 9.0], [55.9, 9.0], [56.0, 9.0], [56.1, 9.0], [56.2, 9.0], [56.3, 9.0], [56.4, 9.0], [56.5, 9.0], [56.6, 9.0], [56.7, 9.0], [56.8, 9.0], [56.9, 9.0], [57.0, 9.0], [57.1, 9.0], [57.2, 9.0], [57.3, 9.0], [57.4, 9.0], [57.5, 9.0], [57.6, 9.0], [57.7, 9.0], [57.8, 9.0], [57.9, 9.0], [58.0, 9.0], [58.1, 9.0], [58.2, 9.0], [58.3, 10.0], [58.4, 10.0], [58.5, 10.0], [58.6, 10.0], [58.7, 10.0], [58.8, 10.0], [58.9, 10.0], [59.0, 10.0], [59.1, 10.0], [59.2, 10.0], [59.3, 10.0], [59.4, 10.0], [59.5, 10.0], [59.6, 10.0], [59.7, 10.0], [59.8, 10.0], [59.9, 10.0], [60.0, 10.0], [60.1, 10.0], [60.2, 10.0], [60.3, 10.0], [60.4, 10.0], [60.5, 10.0], [60.6, 10.0], [60.7, 10.0], [60.8, 10.0], [60.9, 10.0], [61.0, 10.0], [61.1, 10.0], [61.2, 10.0], [61.3, 10.0], [61.4, 10.0], [61.5, 10.0], [61.6, 10.0], [61.7, 10.0], [61.8, 10.0], [61.9, 10.0], [62.0, 10.0], [62.1, 10.0], [62.2, 10.0], [62.3, 10.0], [62.4, 10.0], [62.5, 10.0], [62.6, 10.0], [62.7, 10.0], [62.8, 10.0], [62.9, 10.0], [63.0, 10.0], [63.1, 10.0], [63.2, 10.0], [63.3, 10.0], [63.4, 10.0], [63.5, 10.0], [63.6, 10.0], [63.7, 10.0], [63.8, 10.0], [63.9, 10.0], [64.0, 10.0], [64.1, 10.0], [64.2, 10.0], [64.3, 10.0], [64.4, 10.0], [64.5, 10.0], [64.6, 10.0], [64.7, 10.0], [64.8, 10.0], [64.9, 10.0], [65.0, 10.0], [65.1, 10.0], [65.2, 10.0], [65.3, 10.0], [65.4, 10.0], [65.5, 10.0], [65.6, 10.0], [65.7, 10.0], [65.8, 10.0], [65.9, 10.0], [66.0, 10.0], [66.1, 10.0], [66.2, 10.0], [66.3, 10.0], [66.4, 11.0], [66.5, 11.0], [66.6, 11.0], [66.7, 11.0], [66.8, 11.0], [66.9, 11.0], [67.0, 11.0], [67.1, 11.0], [67.2, 11.0], [67.3, 11.0], [67.4, 11.0], [67.5, 11.0], [67.6, 11.0], [67.7, 11.0], [67.8, 11.0], [67.9, 11.0], [68.0, 11.0], [68.1, 11.0], [68.2, 11.0], [68.3, 11.0], [68.4, 11.0], [68.5, 11.0], [68.6, 11.0], [68.7, 11.0], [68.8, 11.0], [68.9, 11.0], [69.0, 11.0], [69.1, 11.0], [69.2, 11.0], [69.3, 11.0], [69.4, 11.0], [69.5, 11.0], [69.6, 11.0], [69.7, 11.0], [69.8, 11.0], [69.9, 11.0], [70.0, 11.0], [70.1, 11.0], [70.2, 11.0], [70.3, 11.0], [70.4, 11.0], [70.5, 11.0], [70.6, 11.0], [70.7, 11.0], [70.8, 11.0], [70.9, 11.0], [71.0, 11.0], [71.1, 11.0], [71.2, 11.0], [71.3, 11.0], [71.4, 11.0], [71.5, 11.0], [71.6, 11.0], [71.7, 11.0], [71.8, 11.0], [71.9, 11.0], [72.0, 11.0], [72.1, 11.0], [72.2, 11.0], [72.3, 11.0], [72.4, 11.0], [72.5, 11.0], [72.6, 11.0], [72.7, 11.0], [72.8, 11.0], [72.9, 11.0], [73.0, 11.0], [73.1, 11.0], [73.2, 11.0], [73.3, 11.0], [73.4, 12.0], [73.5, 12.0], [73.6, 12.0], [73.7, 12.0], [73.8, 12.0], [73.9, 12.0], [74.0, 12.0], [74.1, 12.0], [74.2, 12.0], [74.3, 12.0], [74.4, 12.0], [74.5, 12.0], [74.6, 12.0], [74.7, 12.0], [74.8, 12.0], [74.9, 12.0], [75.0, 12.0], [75.1, 12.0], [75.2, 12.0], [75.3, 12.0], [75.4, 12.0], [75.5, 12.0], [75.6, 12.0], [75.7, 12.0], [75.8, 12.0], [75.9, 12.0], [76.0, 12.0], [76.1, 12.0], [76.2, 12.0], [76.3, 12.0], [76.4, 12.0], [76.5, 12.0], [76.6, 12.0], [76.7, 12.0], [76.8, 12.0], [76.9, 12.0], [77.0, 12.0], [77.1, 12.0], [77.2, 12.0], [77.3, 12.0], [77.4, 12.0], [77.5, 12.0], [77.6, 12.0], [77.7, 12.0], [77.8, 12.0], [77.9, 12.0], [78.0, 12.0], [78.1, 12.0], [78.2, 12.0], [78.3, 12.0], [78.4, 12.0], [78.5, 12.0], [78.6, 12.0], [78.7, 12.0], [78.8, 12.0], [78.9, 12.0], [79.0, 12.0], [79.1, 12.0], [79.2, 12.0], [79.3, 12.0], [79.4, 12.0], [79.5, 13.0], [79.6, 13.0], [79.7, 13.0], [79.8, 13.0], [79.9, 13.0], [80.0, 13.0], [80.1, 13.0], [80.2, 13.0], [80.3, 13.0], [80.4, 13.0], [80.5, 13.0], [80.6, 13.0], [80.7, 13.0], [80.8, 13.0], [80.9, 13.0], [81.0, 13.0], [81.1, 13.0], [81.2, 13.0], [81.3, 13.0], [81.4, 13.0], [81.5, 13.0], [81.6, 13.0], [81.7, 13.0], [81.8, 13.0], [81.9, 13.0], [82.0, 13.0], [82.1, 13.0], [82.2, 13.0], [82.3, 13.0], [82.4, 13.0], [82.5, 13.0], [82.6, 13.0], [82.7, 13.0], [82.8, 13.0], [82.9, 13.0], [83.0, 13.0], [83.1, 13.0], [83.2, 13.0], [83.3, 13.0], [83.4, 13.0], [83.5, 13.0], [83.6, 13.0], [83.7, 13.0], [83.8, 13.0], [83.9, 13.0], [84.0, 13.0], [84.1, 13.0], [84.2, 13.0], [84.3, 13.0], [84.4, 13.0], [84.5, 14.0], [84.6, 14.0], [84.7, 14.0], [84.8, 14.0], [84.9, 14.0], [85.0, 14.0], [85.1, 14.0], [85.2, 14.0], [85.3, 14.0], [85.4, 14.0], [85.5, 14.0], [85.6, 14.0], [85.7, 14.0], [85.8, 14.0], [85.9, 14.0], [86.0, 14.0], [86.1, 14.0], [86.2, 14.0], [86.3, 14.0], [86.4, 14.0], [86.5, 14.0], [86.6, 14.0], [86.7, 14.0], [86.8, 14.0], [86.9, 14.0], [87.0, 14.0], [87.1, 14.0], [87.2, 14.0], [87.3, 14.0], [87.4, 14.0], [87.5, 14.0], [87.6, 14.0], [87.7, 14.0], [87.8, 14.0], [87.9, 14.0], [88.0, 14.0], [88.1, 14.0], [88.2, 14.0], [88.3, 14.0], [88.4, 14.0], [88.5, 15.0], [88.6, 15.0], [88.7, 15.0], [88.8, 15.0], [88.9, 15.0], [89.0, 15.0], [89.1, 15.0], [89.2, 15.0], [89.3, 15.0], [89.4, 15.0], [89.5, 15.0], [89.6, 15.0], [89.7, 15.0], [89.8, 15.0], [89.9, 15.0], [90.0, 15.0], [90.1, 15.0], [90.2, 15.0], [90.3, 15.0], [90.4, 15.0], [90.5, 15.0], [90.6, 15.0], [90.7, 15.0], [90.8, 15.0], [90.9, 15.0], [91.0, 15.0], [91.1, 15.0], [91.2, 15.0], [91.3, 15.0], [91.4, 15.0], [91.5, 15.0], [91.6, 16.0], [91.7, 16.0], [91.8, 16.0], [91.9, 16.0], [92.0, 16.0], [92.1, 16.0], [92.2, 16.0], [92.3, 16.0], [92.4, 16.0], [92.5, 16.0], [92.6, 16.0], [92.7, 16.0], [92.8, 16.0], [92.9, 16.0], [93.0, 16.0], [93.1, 16.0], [93.2, 16.0], [93.3, 16.0], [93.4, 16.0], [93.5, 16.0], [93.6, 16.0], [93.7, 16.0], [93.8, 16.0], [93.9, 17.0], [94.0, 17.0], [94.1, 17.0], [94.2, 17.0], [94.3, 17.0], [94.4, 17.0], [94.5, 17.0], [94.6, 17.0], [94.7, 17.0], [94.8, 17.0], [94.9, 17.0], [95.0, 17.0], [95.1, 17.0], [95.2, 17.0], [95.3, 17.0], [95.4, 17.0], [95.5, 17.0], [95.6, 18.0], [95.7, 18.0], [95.8, 18.0], [95.9, 18.0], [96.0, 18.0], [96.1, 18.0], [96.2, 18.0], [96.3, 18.0], [96.4, 18.0], [96.5, 18.0], [96.6, 18.0], [96.7, 18.0], [96.8, 19.0], [96.9, 19.0], [97.0, 19.0], [97.1, 19.0], [97.2, 19.0], [97.3, 19.0], [97.4, 19.0], [97.5, 19.0], [97.6, 19.0], [97.7, 20.0], [97.8, 20.0], [97.9, 20.0], [98.0, 20.0], [98.1, 20.0], [98.2, 20.0], [98.3, 20.0], [98.4, 21.0], [98.5, 21.0], [98.6, 21.0], [98.7, 21.0], [98.8, 22.0], [98.9, 22.0], [99.0, 22.0], [99.1, 22.0], [99.2, 23.0], [99.3, 23.0], [99.4, 24.0], [99.5, 24.0], [99.6, 25.0], [99.7, 26.0], [99.8, 27.0], [99.9, 30.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 56.0, "minX": 0.0, "maxY": 4649963.0, "series": [{"data": [[0.0, 4649963.0], [100.0, 56.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4650019.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4650019.0, "series": [{"data": [[0.0, 4650019.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 19.35639938319213, "minX": 1.60138188E12, "maxY": 50.0, "series": [{"data": [[1.60138218E12, 50.0], [1.60138248E12, 50.0], [1.60138254E12, 50.0], [1.60138188E12, 19.35639938319213], [1.60138242E12, 50.0], [1.60138272E12, 50.0], [1.60138278E12, 49.98570046793712], [1.60138212E12, 50.0], [1.60138266E12, 50.0], [1.601382E12, 50.0], [1.60138206E12, 50.0], [1.60138236E12, 50.0], [1.60138194E12, 46.97021002718888], [1.60138224E12, 50.0], [1.6013823E12, 50.0], [1.6013826E12, 50.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138278E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2.1033434650455916, "minX": 1.0, "maxY": 9.468147187550663, "series": [{"data": [[2.0, 2.1033434650455916], [3.0, 2.1668856767411255], [4.0, 2.2583541147132142], [5.0, 2.625058004640372], [6.0, 2.647462800457837], [7.0, 2.956633590591692], [8.0, 3.2737252124645875], [9.0, 3.092066311426876], [10.0, 3.2748455923638384], [11.0, 3.4617038430529483], [12.0, 3.5776349614395966], [13.0, 3.58664472137314], [14.0, 3.7216959855660767], [15.0, 3.8502394427514175], [16.0, 3.855920114122678], [17.0, 4.068818514007315], [18.0, 4.143382352941176], [19.0, 4.611875898911033], [20.0, 4.511111111111096], [21.0, 4.773881030807974], [22.0, 5.281395820653282], [23.0, 5.926224156692058], [24.0, 5.807189542483649], [25.0, 5.7636363636363726], [26.0, 6.233813679723979], [27.0, 6.128048780487791], [28.0, 6.269586558429282], [29.0, 5.882875192077866], [30.0, 6.323314956428937], [31.0, 6.598532307141572], [32.0, 6.4418604651163], [33.0, 6.732292917166872], [34.0, 7.030963501124379], [35.0, 7.081490302824095], [36.0, 7.482414698162733], [37.0, 7.474709501025303], [38.0, 7.914335664335662], [39.0, 8.025884383088869], [40.0, 7.964603254487534], [41.0, 8.686145648312602], [42.0, 8.63151515151519], [43.0, 8.32770105605197], [44.0, 9.030502599653374], [45.0, 8.50294914713851], [46.0, 8.943855581318312], [47.0, 8.951728532738551], [48.0, 9.380216891225768], [49.0, 9.468147187550663], [50.0, 9.440119456199671], [1.0, 2.2731591448931123]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[48.946502369125675, 9.28107067949642]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 395927.7, "minX": 1.60138188E12, "maxY": 6878084.466666667, "series": [{"data": [[1.60138218E12, 1077122.65], [1.60138248E12, 1083753.45], [1.60138254E12, 1087424.2], [1.60138188E12, 447466.55], [1.60138242E12, 1083412.4666666666], [1.60138272E12, 1086946.8833333333], [1.60138278E12, 395927.7], [1.60138212E12, 1100298.6], [1.60138266E12, 1078640.75], [1.601382E12, 1081818.35], [1.60138206E12, 1095818.8333333333], [1.60138236E12, 1087674.6166666667], [1.60138194E12, 1050651.7333333334], [1.60138224E12, 1098263.35], [1.6013823E12, 1095046.3666666667], [1.6013826E12, 1092565.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60138218E12, 6733199.6], [1.60138248E12, 6774650.733333333], [1.60138254E12, 6797597.666666667], [1.60138188E12, 2797196.6666666665], [1.60138242E12, 6772515.633333334], [1.60138272E12, 6794621.466666667], [1.60138278E12, 2474969.1], [1.60138212E12, 6878084.466666667], [1.60138266E12, 6742688.933333334], [1.601382E12, 6762551.833333333], [1.60138206E12, 6850090.933333334], [1.60138236E12, 6799150.466666667], [1.60138194E12, 6567740.133333334], [1.60138224E12, 6865360.133333334], [1.6013823E12, 6845260.0], [1.6013826E12, 6829732.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138278E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4.709521973785787, "minX": 1.60138188E12, "maxY": 9.534416599403047, "series": [{"data": [[1.60138218E12, 9.534416599403047], [1.60138248E12, 9.475662632192181], [1.60138254E12, 9.441758939052459], [1.60138188E12, 4.709521973785787], [1.60138242E12, 9.46802026577338], [1.60138272E12, 9.45121440270185], [1.60138278E12, 9.488179576329474], [1.60138212E12, 9.325132791089738], [1.60138266E12, 9.518832921789574], [1.601382E12, 9.48874714971369], [1.60138206E12, 9.365469863738175], [1.60138236E12, 9.440909465777633], [1.60138194E12, 9.11453968712626], [1.60138224E12, 9.351560634809234], [1.6013823E12, 9.366991178323955], [1.6013826E12, 9.395632815460406]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138278E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4.704379336931382, "minX": 1.60138188E12, "maxY": 9.529820245736522, "series": [{"data": [[1.60138218E12, 9.529820245736522], [1.60138248E12, 9.4705914187297], [1.60138254E12, 9.437180748120108], [1.60138188E12, 4.704379336931382], [1.60138242E12, 9.463393275100614], [1.60138272E12, 9.446497721011108], [1.60138278E12, 9.48363962739291], [1.60138212E12, 9.32007199252449], [1.60138266E12, 9.513715279999145], [1.601382E12, 9.483947506896627], [1.60138206E12, 9.360775634083195], [1.60138236E12, 9.43636086810343], [1.60138194E12, 9.109321844666528], [1.60138224E12, 9.346411922144274], [1.6013823E12, 9.36212665406424], [1.6013826E12, 9.390791966654279]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138278E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.585304856263928E-5, "minX": 1.60138188E12, "maxY": 5.397070161912038E-4, "series": [{"data": [[1.60138218E12, 1.3452742437636788E-4], [1.60138248E12, 1.2733743784341508E-4], [1.60138254E12, 1.3008026904407137E-4], [1.60138188E12, 5.397070161912038E-4], [1.60138242E12, 1.0190206574593569E-4], [1.60138272E12, 1.2696316798496894E-4], [1.60138278E12, 9.585304856263928E-5], [1.60138212E12, 1.4110033174255944E-4], [1.60138266E12, 1.3113957088573854E-4], [1.601382E12, 1.7859136064293348E-4], [1.60138206E12, 1.290834445759738E-4], [1.60138236E12, 1.0467484187754997E-4], [1.60138194E12, 1.3134908646709857E-4], [1.60138224E12, 1.225136021512124E-4], [1.6013823E12, 1.0081915563956809E-4], [1.6013826E12, 1.263104711380547E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138278E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60138188E12, "maxY": 183.0, "series": [{"data": [[1.60138218E12, 112.0], [1.60138248E12, 53.0], [1.60138254E12, 49.0], [1.60138188E12, 75.0], [1.60138242E12, 47.0], [1.60138272E12, 46.0], [1.60138278E12, 105.0], [1.60138212E12, 51.0], [1.60138266E12, 107.0], [1.601382E12, 51.0], [1.60138206E12, 46.0], [1.60138236E12, 54.0], [1.60138194E12, 183.0], [1.60138224E12, 46.0], [1.6013823E12, 114.0], [1.6013826E12, 45.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60138218E12, 3.0], [1.60138248E12, 3.0], [1.60138254E12, 3.0], [1.60138188E12, 2.0], [1.60138242E12, 3.0], [1.60138272E12, 3.0], [1.60138278E12, 3.0], [1.60138212E12, 3.0], [1.60138266E12, 3.0], [1.601382E12, 3.0], [1.60138206E12, 3.0], [1.60138236E12, 3.0], [1.60138194E12, 3.0], [1.60138224E12, 3.0], [1.6013823E12, 3.0], [1.6013826E12, 3.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60138218E12, 3.0], [1.60138248E12, 3.0], [1.60138254E12, 3.0], [1.60138188E12, 2.0], [1.60138242E12, 3.0], [1.60138272E12, 3.0], [1.60138278E12, 3.0], [1.60138212E12, 3.0], [1.60138266E12, 3.0], [1.601382E12, 3.0], [1.60138206E12, 3.0], [1.60138236E12, 3.0], [1.60138194E12, 3.0], [1.60138224E12, 3.0], [1.6013823E12, 3.0], [1.6013826E12, 3.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60138218E12, 3.0], [1.60138248E12, 3.0], [1.60138254E12, 3.0], [1.60138188E12, 2.0], [1.60138242E12, 3.0], [1.60138272E12, 3.0], [1.60138278E12, 3.0], [1.60138212E12, 3.0], [1.60138266E12, 3.0], [1.601382E12, 3.0], [1.60138206E12, 3.0], [1.60138236E12, 3.0], [1.60138194E12, 3.0], [1.60138224E12, 3.0], [1.6013823E12, 3.0], [1.6013826E12, 3.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60138218E12, 1.0], [1.60138248E12, 1.0], [1.60138254E12, 1.0], [1.60138188E12, 1.0], [1.60138242E12, 1.0], [1.60138272E12, 1.0], [1.60138278E12, 1.0], [1.60138212E12, 1.0], [1.60138266E12, 1.0], [1.601382E12, 1.0], [1.60138206E12, 1.0], [1.60138236E12, 1.0], [1.60138194E12, 1.0], [1.60138224E12, 1.0], [1.6013823E12, 1.0], [1.6013826E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60138218E12, 8.0], [1.60138248E12, 9.0], [1.60138254E12, 8.0], [1.60138188E12, 6.0], [1.60138242E12, 9.0], [1.60138272E12, 9.0], [1.60138278E12, 9.0], [1.60138212E12, 9.0], [1.60138266E12, 9.0], [1.601382E12, 9.0], [1.60138206E12, 9.0], [1.60138236E12, 9.0], [1.60138194E12, 9.0], [1.60138224E12, 9.0], [1.6013823E12, 9.0], [1.6013826E12, 9.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138278E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 361.0, "maxY": 10.0, "series": [{"data": [[361.0, 2.0], [767.0, 2.0], [1119.0, 2.0], [1421.0, 2.0], [1706.0, 2.0], [1844.0, 2.0], [2312.0, 3.0], [2478.0, 3.0], [2908.0, 3.0], [2982.0, 3.0], [3114.0, 3.0], [3260.0, 3.0], [3788.0, 3.0], [4086.0, 4.0], [4152.0, 4.0], [4296.0, 4.0], [4592.0, 6.0], [4520.0, 10.0], [4824.0, 6.0], [4720.0, 6.0], [4700.0, 6.0], [4768.0, 9.0], [4848.0, 9.5], [4832.0, 9.0], [4736.0, 10.0], [4804.0, 9.0], [5096.0, 9.0], [5100.0, 9.0], [4912.0, 7.0], [4880.0, 5.0], [4904.0, 9.0], [4900.0, 9.0], [4996.0, 9.0], [5108.0, 9.0], [4992.0, 9.0], [5080.0, 9.0], [5084.0, 9.0], [5092.0, 9.0], [5076.0, 9.0], [5064.0, 9.0], [5068.0, 9.0], [5000.0, 7.0], [4968.0, 9.0], [4964.0, 9.0], [4972.0, 9.0], [4988.0, 9.0], [4976.0, 9.0], [4980.0, 9.0], [4960.0, 9.0], [5036.0, 9.0], [5028.0, 9.0], [5024.0, 9.0], [5012.0, 9.0], [5016.0, 9.0], [5008.0, 9.0], [5040.0, 8.0], [5048.0, 9.0], [5044.0, 9.0], [4932.0, 9.0], [4940.0, 9.0], [4952.0, 9.0], [4956.0, 9.0], [5332.0, 9.0], [5200.0, 9.0], [5196.0, 9.0], [5208.0, 9.0], [5184.0, 9.0], [5192.0, 9.0], [5188.0, 9.0], [5292.0, 9.0], [5288.0, 9.0], [5300.0, 9.0], [5304.0, 9.0], [5308.0, 9.0], [5356.0, 9.0], [5340.0, 9.0], [5344.0, 9.0], [5336.0, 9.0], [5352.0, 9.0], [5328.0, 9.0], [5312.0, 8.0], [5180.0, 9.0], [5324.0, 9.0], [5316.0, 9.0], [5368.0, 9.0], [5360.0, 9.0], [5364.0, 9.0], [5248.0, 9.0], [5372.0, 8.5], [5264.0, 9.0], [5268.0, 9.0], [5272.0, 9.0], [5276.0, 9.0], [5280.0, 9.0], [5284.0, 9.0], [5260.0, 9.0], [5172.0, 9.0], [5124.0, 9.0], [5132.0, 9.0], [5144.0, 9.0], [5148.0, 9.0], [5244.0, 9.0], [5164.0, 9.0], [5160.0, 9.0], [5156.0, 9.0], [5232.0, 9.0], [5236.0, 9.0], [5240.0, 9.0], [5212.0, 9.0], [5228.0, 9.0], [5224.0, 9.0], [5220.0, 9.0], [5216.0, 9.0], [5428.0, 9.0], [5400.0, 9.0], [5580.0, 8.0], [5380.0, 9.0], [5384.0, 8.0], [5524.0, 8.0], [5528.0, 8.0], [5556.0, 8.0], [5548.0, 8.0], [5536.0, 9.0], [5544.0, 8.0], [5532.0, 8.0], [5552.0, 8.0], [5512.0, 8.0], [5508.0, 8.0], [5520.0, 8.0], [5504.0, 8.0], [5416.0, 8.0], [5424.0, 9.0], [5420.0, 8.0], [5412.0, 9.0], [5432.0, 9.0], [5568.0, 8.0], [5436.0, 9.0], [5396.0, 8.0], [5388.0, 9.0], [5408.0, 9.0], [5404.0, 9.0], [5496.0, 8.0], [5452.0, 8.0], [5456.0, 8.0], [5464.0, 8.0], [5472.0, 8.0], [5480.0, 8.0], [5492.0, 8.0], [5444.0, 9.0], [5376.0, 9.0], [5500.0, 8.0], [5652.0, 8.0], [4225.0, 4.0], [4321.0, 4.0], [4369.0, 5.0], [4361.0, 6.0], [4589.0, 10.0], [4613.0, 6.0], [4845.0, 9.0], [4677.0, 8.0], [4721.0, 10.0], [4833.0, 9.0], [4841.0, 10.0], [5113.0, 9.0], [5077.0, 9.0], [5073.0, 9.0], [5081.0, 9.0], [5097.0, 9.0], [5105.0, 9.0], [5109.0, 9.0], [5085.0, 9.0], [5061.0, 9.0], [4993.0, 9.0], [5001.0, 9.0], [4957.0, 9.0], [5049.0, 9.0], [5045.0, 9.0], [5029.0, 9.0], [5025.0, 9.0], [5005.0, 9.0], [4873.0, 9.0], [4985.0, 9.0], [4973.0, 9.0], [4961.0, 9.0], [4901.0, 9.0], [4925.0, 9.0], [4941.0, 8.0], [4929.0, 9.0], [4937.0, 9.0], [4949.0, 9.0], [5329.0, 9.0], [5333.0, 9.0], [5209.0, 8.0], [5201.0, 9.0], [5205.0, 9.0], [5193.0, 9.0], [5197.0, 9.0], [5189.0, 9.0], [5185.0, 9.0], [5309.0, 9.0], [5305.0, 9.0], [5289.0, 9.0], [5301.0, 9.0], [5297.0, 9.0], [5293.0, 9.0], [5181.0, 9.0], [5317.0, 9.0], [5325.0, 9.0], [5337.0, 9.0], [5341.0, 9.0], [5345.0, 9.0], [5249.0, 9.0], [5369.0, 9.0], [5349.0, 9.0], [5361.0, 9.0], [5373.0, 8.0], [5257.0, 9.0], [5261.0, 9.0], [5253.0, 9.0], [5277.0, 9.0], [5273.0, 9.0], [5269.0, 9.0], [5265.0, 9.0], [5173.0, 9.0], [5169.0, 9.0], [5177.0, 9.0], [5165.0, 9.0], [5125.0, 9.0], [5245.0, 9.0], [5237.0, 9.0], [5241.0, 9.0], [5121.0, 9.0], [5141.0, 9.0], [5137.0, 9.0], [5129.0, 9.0], [5161.0, 9.0], [5157.0, 9.0], [5153.0, 9.0], [5145.0, 9.0], [5281.0, 9.0], [5229.0, 9.0], [5233.0, 9.0], [5217.0, 9.0], [5213.0, 9.0], [5221.0, 9.0], [5577.0, 8.0], [5425.0, 9.0], [5393.0, 9.0], [5389.0, 9.0], [5449.0, 8.0], [5441.0, 9.0], [5445.0, 8.0], [5385.0, 9.0], [5493.0, 8.0], [5501.0, 8.0], [5381.0, 9.0], [5377.0, 9.0], [5477.0, 8.0], [5469.0, 8.0], [5453.0, 8.0], [5481.0, 9.0], [5485.0, 8.0], [5489.0, 8.0], [5565.0, 8.0], [5545.0, 8.0], [5625.0, 8.0], [5529.0, 8.0], [5509.0, 8.0], [5505.0, 8.0], [5513.0, 9.0], [5521.0, 9.0], [5517.0, 8.0], [5601.0, 8.0], [5585.0, 8.0], [5581.0, 8.0], [5417.0, 9.0], [5421.0, 9.0], [5437.0, 9.0], [5573.0, 8.0], [5433.0, 8.0], [5429.0, 8.0], [5401.0, 9.0], [5397.0, 8.0], [5409.0, 9.0], [5413.0, 9.0], [5661.0, 8.0], [5657.0, 8.0], [2163.0, 2.0], [2289.0, 3.0], [3277.0, 9.0], [3441.0, 3.0], [3613.0, 3.0], [3693.0, 3.0], [3927.0, 5.0], [3889.0, 5.0], [4085.0, 6.0], [4106.0, 3.0], [4718.0, 7.0], [4806.0, 7.0], [4862.0, 9.0], [4846.0, 9.0], [4630.0, 9.0], [4834.0, 9.0], [4842.0, 10.0], [5082.0, 9.0], [4994.0, 6.0], [5118.0, 9.0], [5098.0, 9.0], [5070.0, 9.0], [4922.0, 9.0], [4902.0, 9.0], [4890.0, 9.0], [5058.0, 9.0], [5066.0, 9.0], [5062.0, 9.0], [5094.0, 9.0], [4878.0, 8.0], [4962.0, 7.0], [4958.0, 9.0], [4970.0, 9.0], [4874.0, 9.0], [4870.0, 9.0], [4974.0, 9.0], [4978.0, 9.0], [5034.0, 9.0], [5030.0, 9.0], [5018.0, 9.0], [5006.0, 9.0], [5002.0, 9.0], [5014.0, 9.0], [5010.0, 9.0], [5042.0, 9.0], [5046.0, 9.0], [5050.0, 9.0], [5054.0, 9.0], [4942.0, 9.0], [4938.0, 9.0], [4946.0, 9.0], [5334.0, 9.0], [5166.0, 9.0], [5194.0, 9.0], [5186.0, 9.0], [5290.0, 9.0], [5294.0, 9.0], [5286.0, 9.0], [5298.0, 9.0], [5302.0, 9.0], [5214.0, 9.0], [5330.0, 9.0], [5326.0, 9.0], [5338.0, 9.0], [5342.0, 9.0], [5346.0, 9.0], [5350.0, 9.0], [5354.0, 9.0], [5174.0, 9.0], [5178.0, 9.0], [5314.0, 9.0], [5182.0, 9.0], [5322.0, 9.0], [5374.0, 9.0], [5358.0, 9.0], [5250.0, 9.0], [5262.0, 9.0], [5266.0, 9.0], [5270.0, 9.0], [5254.0, 9.0], [5258.0, 9.0], [5278.0, 9.0], [5274.0, 9.0], [5170.0, 9.0], [5130.0, 9.0], [5242.0, 9.0], [5238.0, 9.0], [5134.0, 9.0], [5138.0, 9.0], [5142.0, 9.0], [5146.0, 9.0], [5154.0, 9.0], [5162.0, 9.0], [5234.0, 9.0], [5210.0, 9.0], [5202.0, 9.0], [5198.0, 9.0], [5206.0, 9.0], [5226.0, 9.0], [5230.0, 9.0], [5218.0, 9.0], [5394.0, 9.0], [5382.0, 9.0], [5386.0, 9.0], [5390.0, 9.0], [5522.0, 8.0], [5546.0, 8.0], [5542.0, 8.0], [5534.0, 8.0], [5558.0, 9.0], [5518.0, 8.0], [5582.0, 8.0], [5510.0, 8.0], [5514.0, 8.0], [5594.0, 8.0], [5590.0, 8.0], [5586.0, 8.0], [5602.0, 8.0], [5378.0, 9.0], [5398.0, 8.0], [5406.0, 9.0], [5402.0, 9.0], [5410.0, 8.0], [5438.0, 8.0], [5434.0, 8.0], [5498.0, 8.0], [5490.0, 8.0], [5482.0, 8.0], [5478.0, 8.0], [5466.0, 8.0], [5470.0, 9.0], [5474.0, 8.0], [5462.0, 8.0], [5454.0, 8.0], [5458.0, 9.0], [5450.0, 9.0], [5446.0, 8.0], [5502.0, 8.0], [5638.0, 8.0], [5670.0, 8.0], [5666.0, 8.0], [4123.0, 5.0], [4227.0, 5.0], [4199.0, 5.0], [4495.0, 10.0], [4691.0, 7.0], [4851.0, 7.0], [4795.0, 8.0], [4731.0, 10.0], [4827.0, 10.0], [4779.0, 10.0], [4859.0, 9.0], [5071.0, 9.0], [5075.0, 9.0], [5091.0, 9.0], [5087.0, 9.0], [5099.0, 9.0], [5107.0, 9.0], [5063.0, 9.0], [5059.0, 9.0], [4927.0, 9.0], [5115.0, 9.0], [4979.0, 9.0], [4963.0, 9.0], [4967.0, 9.0], [4971.0, 9.0], [4983.0, 9.0], [4879.0, 9.0], [5007.0, 9.0], [5019.0, 9.0], [5035.0, 9.0], [5027.0, 9.0], [5055.0, 9.0], [5039.0, 9.0], [4891.0, 8.0], [4887.0, 9.0], [4895.0, 10.0], [4919.0, 9.0], [4951.0, 9.0], [4943.0, 9.0], [4947.0, 9.0], [5319.0, 9.0], [5243.0, 9.0], [5247.0, 9.0], [5203.0, 9.0], [5195.0, 9.0], [5191.0, 9.0], [5187.0, 9.0], [5199.0, 9.0], [5303.0, 9.0], [5311.0, 9.0], [5307.0, 8.0], [5295.0, 9.0], [5283.0, 9.0], [5291.0, 9.0], [5287.0, 9.0], [5183.0, 9.0], [5315.0, 9.0], [5327.0, 9.0], [5339.0, 9.0], [5343.0, 9.0], [5347.0, 8.0], [5351.0, 8.0], [5367.0, 8.0], [5251.0, 9.0], [5375.0, 8.0], [5335.0, 9.0], [5331.0, 9.0], [5255.0, 9.0], [5263.0, 9.0], [5259.0, 9.0], [5275.0, 9.0], [5271.0, 9.0], [5267.0, 9.0], [5171.0, 9.0], [5167.0, 9.0], [5139.0, 9.0], [5163.0, 9.0], [5147.0, 9.0], [5279.0, 9.0], [5227.0, 9.0], [5239.0, 9.0], [5211.0, 9.0], [5207.0, 9.0], [5223.0, 9.0], [5215.0, 9.0], [5439.0, 9.0], [5387.0, 9.0], [5391.0, 9.0], [5475.0, 8.0], [5451.0, 8.0], [5463.0, 8.0], [5471.0, 8.0], [5459.0, 9.0], [5379.0, 9.0], [5503.0, 8.0], [5479.0, 8.0], [5487.0, 9.0], [5531.0, 8.0], [5543.0, 9.0], [5559.0, 8.0], [5567.0, 8.0], [5551.0, 8.0], [5623.0, 8.0], [5631.0, 8.0], [5523.0, 8.0], [5507.0, 8.0], [5611.0, 8.0], [5619.0, 8.0], [5599.0, 8.0], [5415.0, 8.0], [5423.0, 9.0], [5435.0, 9.0], [5431.0, 9.0], [5571.0, 8.0], [5583.0, 8.0], [5399.0, 8.0], [5395.0, 9.0], [5411.0, 9.0], [5663.0, 8.0], [5807.0, 8.0], [5703.0, 8.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5807.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2.0, "minX": 361.0, "maxY": 10.0, "series": [{"data": [[361.0, 2.0], [767.0, 2.0], [1119.0, 2.0], [1421.0, 2.0], [1706.0, 2.0], [1844.0, 2.0], [2312.0, 3.0], [2478.0, 3.0], [2908.0, 3.0], [2982.0, 3.0], [3114.0, 3.0], [3260.0, 3.0], [3788.0, 3.0], [4086.0, 4.0], [4152.0, 4.0], [4296.0, 4.0], [4592.0, 6.0], [4520.0, 10.0], [4824.0, 6.0], [4720.0, 6.0], [4700.0, 6.0], [4768.0, 9.0], [4848.0, 9.0], [4832.0, 9.0], [4736.0, 10.0], [4804.0, 9.0], [5096.0, 9.0], [5100.0, 9.0], [4912.0, 7.0], [4880.0, 5.0], [4904.0, 9.0], [4900.0, 9.0], [4996.0, 9.0], [5108.0, 9.0], [4992.0, 9.0], [5080.0, 9.0], [5084.0, 9.0], [5092.0, 9.0], [5076.0, 9.0], [5064.0, 9.0], [5068.0, 9.0], [5000.0, 7.0], [4968.0, 9.0], [4964.0, 9.0], [4972.0, 9.0], [4988.0, 9.0], [4976.0, 9.0], [4980.0, 9.0], [4960.0, 9.0], [5036.0, 9.0], [5028.0, 9.0], [5024.0, 9.0], [5012.0, 9.0], [5016.0, 9.0], [5008.0, 9.0], [5040.0, 8.0], [5048.0, 9.0], [5044.0, 9.0], [4932.0, 9.0], [4940.0, 9.0], [4952.0, 9.0], [4956.0, 9.0], [5332.0, 9.0], [5200.0, 9.0], [5196.0, 9.0], [5208.0, 9.0], [5184.0, 9.0], [5192.0, 9.0], [5188.0, 9.0], [5292.0, 9.0], [5288.0, 9.0], [5300.0, 9.0], [5304.0, 9.0], [5308.0, 9.0], [5356.0, 9.0], [5340.0, 9.0], [5344.0, 9.0], [5336.0, 9.0], [5352.0, 9.0], [5328.0, 9.0], [5312.0, 8.0], [5180.0, 9.0], [5324.0, 9.0], [5316.0, 9.0], [5368.0, 9.0], [5360.0, 9.0], [5364.0, 9.0], [5248.0, 9.0], [5372.0, 8.0], [5264.0, 9.0], [5268.0, 9.0], [5272.0, 9.0], [5276.0, 9.0], [5280.0, 9.0], [5284.0, 9.0], [5260.0, 9.0], [5172.0, 9.0], [5124.0, 9.0], [5132.0, 9.0], [5144.0, 9.0], [5148.0, 9.0], [5244.0, 9.0], [5164.0, 9.0], [5160.0, 9.0], [5156.0, 9.0], [5232.0, 9.0], [5236.0, 9.0], [5240.0, 9.0], [5212.0, 9.0], [5228.0, 9.0], [5224.0, 9.0], [5220.0, 9.0], [5216.0, 9.0], [5428.0, 9.0], [5400.0, 9.0], [5580.0, 8.0], [5380.0, 9.0], [5384.0, 8.0], [5524.0, 8.0], [5528.0, 8.0], [5556.0, 8.0], [5548.0, 8.0], [5536.0, 9.0], [5544.0, 8.0], [5532.0, 8.0], [5552.0, 8.0], [5512.0, 8.0], [5508.0, 8.0], [5520.0, 8.0], [5504.0, 8.0], [5416.0, 8.0], [5424.0, 9.0], [5420.0, 8.0], [5412.0, 9.0], [5432.0, 9.0], [5568.0, 8.0], [5436.0, 9.0], [5396.0, 8.0], [5388.0, 9.0], [5408.0, 9.0], [5404.0, 9.0], [5496.0, 8.0], [5452.0, 8.0], [5456.0, 8.0], [5464.0, 8.0], [5472.0, 8.0], [5480.0, 8.0], [5492.0, 8.0], [5444.0, 9.0], [5376.0, 9.0], [5500.0, 8.0], [5652.0, 8.0], [4225.0, 4.0], [4321.0, 4.0], [4369.0, 5.0], [4361.0, 6.0], [4589.0, 10.0], [4613.0, 6.0], [4845.0, 9.0], [4677.0, 8.0], [4721.0, 10.0], [4833.0, 9.0], [4841.0, 10.0], [5113.0, 9.0], [5077.0, 9.0], [5073.0, 9.0], [5081.0, 9.0], [5097.0, 9.0], [5105.0, 9.0], [5109.0, 9.0], [5085.0, 9.0], [5061.0, 9.0], [4993.0, 9.0], [5001.0, 9.0], [4957.0, 9.0], [5049.0, 9.0], [5045.0, 9.0], [5029.0, 9.0], [5025.0, 9.0], [5005.0, 9.0], [4873.0, 9.0], [4985.0, 9.0], [4973.0, 9.0], [4961.0, 9.0], [4901.0, 9.0], [4925.0, 9.0], [4941.0, 8.0], [4929.0, 9.0], [4937.0, 9.0], [4949.0, 9.0], [5329.0, 9.0], [5333.0, 9.0], [5209.0, 8.0], [5201.0, 9.0], [5205.0, 9.0], [5193.0, 9.0], [5197.0, 9.0], [5189.0, 9.0], [5185.0, 9.0], [5309.0, 9.0], [5305.0, 9.0], [5289.0, 9.0], [5301.0, 9.0], [5297.0, 9.0], [5293.0, 9.0], [5181.0, 9.0], [5317.0, 9.0], [5325.0, 9.0], [5337.0, 9.0], [5341.0, 9.0], [5345.0, 9.0], [5249.0, 9.0], [5369.0, 8.0], [5349.0, 9.0], [5361.0, 9.0], [5373.0, 8.0], [5257.0, 9.0], [5261.0, 9.0], [5253.0, 9.0], [5277.0, 9.0], [5273.0, 9.0], [5269.0, 9.0], [5265.0, 9.0], [5173.0, 9.0], [5169.0, 9.0], [5177.0, 9.0], [5165.0, 9.0], [5125.0, 9.0], [5245.0, 9.0], [5237.0, 9.0], [5241.0, 9.0], [5121.0, 9.0], [5141.0, 9.0], [5137.0, 9.0], [5129.0, 9.0], [5161.0, 9.0], [5157.0, 9.0], [5153.0, 9.0], [5145.0, 9.0], [5281.0, 9.0], [5229.0, 9.0], [5233.0, 9.0], [5217.0, 9.0], [5213.0, 9.0], [5221.0, 9.0], [5577.0, 8.0], [5425.0, 9.0], [5393.0, 9.0], [5389.0, 9.0], [5449.0, 8.0], [5441.0, 9.0], [5445.0, 8.0], [5385.0, 9.0], [5493.0, 8.0], [5501.0, 8.0], [5381.0, 9.0], [5377.0, 9.0], [5477.0, 8.0], [5469.0, 8.0], [5453.0, 8.0], [5481.0, 8.0], [5485.0, 8.0], [5489.0, 8.0], [5565.0, 8.0], [5545.0, 8.0], [5625.0, 8.0], [5529.0, 8.0], [5509.0, 8.0], [5505.0, 8.0], [5513.0, 9.0], [5521.0, 9.0], [5517.0, 8.0], [5601.0, 8.0], [5585.0, 8.0], [5581.0, 8.0], [5417.0, 9.0], [5421.0, 9.0], [5437.0, 9.0], [5573.0, 8.0], [5433.0, 8.0], [5429.0, 8.0], [5401.0, 9.0], [5397.0, 8.0], [5409.0, 9.0], [5413.0, 9.0], [5661.0, 8.0], [5657.0, 8.0], [2163.0, 2.0], [2289.0, 3.0], [3277.0, 9.0], [3441.0, 3.0], [3613.0, 3.0], [3693.0, 3.0], [3927.0, 5.0], [3889.0, 5.0], [4085.0, 6.0], [4106.0, 3.0], [4718.0, 7.0], [4806.0, 7.0], [4862.0, 9.0], [4846.0, 9.0], [4630.0, 9.0], [4834.0, 9.0], [4842.0, 10.0], [5082.0, 9.0], [4994.0, 6.0], [5118.0, 9.0], [5098.0, 9.0], [5070.0, 9.0], [4922.0, 9.0], [4902.0, 9.0], [4890.0, 9.0], [5058.0, 9.0], [5066.0, 9.0], [5062.0, 9.0], [5094.0, 9.0], [4878.0, 8.0], [4962.0, 7.0], [4958.0, 9.0], [4970.0, 9.0], [4874.0, 9.0], [4870.0, 9.0], [4974.0, 9.0], [4978.0, 9.0], [5034.0, 9.0], [5030.0, 9.0], [5018.0, 9.0], [5006.0, 9.0], [5002.0, 9.0], [5014.0, 9.0], [5010.0, 9.0], [5042.0, 9.0], [5046.0, 9.0], [5050.0, 9.0], [5054.0, 9.0], [4942.0, 9.0], [4938.0, 9.0], [4946.0, 9.0], [5334.0, 9.0], [5166.0, 9.0], [5194.0, 9.0], [5186.0, 9.0], [5290.0, 9.0], [5294.0, 9.0], [5286.0, 9.0], [5298.0, 9.0], [5302.0, 9.0], [5214.0, 9.0], [5330.0, 9.0], [5326.0, 9.0], [5338.0, 9.0], [5342.0, 9.0], [5346.0, 9.0], [5350.0, 9.0], [5354.0, 9.0], [5174.0, 9.0], [5178.0, 9.0], [5314.0, 9.0], [5182.0, 9.0], [5322.0, 9.0], [5374.0, 9.0], [5358.0, 9.0], [5250.0, 9.0], [5262.0, 9.0], [5266.0, 9.0], [5270.0, 9.0], [5254.0, 9.0], [5258.0, 9.0], [5278.0, 9.0], [5274.0, 9.0], [5170.0, 9.0], [5130.0, 9.0], [5242.0, 9.0], [5238.0, 9.0], [5134.0, 9.0], [5138.0, 9.0], [5142.0, 9.0], [5146.0, 9.0], [5154.0, 9.0], [5162.0, 9.0], [5234.0, 9.0], [5210.0, 9.0], [5202.0, 9.0], [5198.0, 9.0], [5206.0, 9.0], [5226.0, 9.0], [5230.0, 9.0], [5218.0, 9.0], [5394.0, 9.0], [5382.0, 9.0], [5386.0, 9.0], [5390.0, 9.0], [5522.0, 8.0], [5546.0, 8.0], [5542.0, 8.0], [5534.0, 8.0], [5558.0, 9.0], [5518.0, 8.0], [5582.0, 8.0], [5510.0, 8.0], [5514.0, 8.0], [5594.0, 8.0], [5590.0, 8.0], [5586.0, 8.0], [5602.0, 8.0], [5378.0, 9.0], [5398.0, 8.0], [5406.0, 9.0], [5402.0, 9.0], [5410.0, 8.0], [5438.0, 8.0], [5434.0, 8.0], [5498.0, 8.0], [5490.0, 8.0], [5482.0, 8.0], [5478.0, 8.0], [5466.0, 8.0], [5470.0, 9.0], [5474.0, 8.0], [5462.0, 8.0], [5454.0, 8.0], [5458.0, 9.0], [5450.0, 9.0], [5446.0, 8.0], [5502.0, 8.0], [5638.0, 8.0], [5670.0, 8.0], [5666.0, 8.0], [4123.0, 5.0], [4227.0, 5.0], [4199.0, 5.0], [4495.0, 10.0], [4691.0, 7.0], [4851.0, 7.0], [4795.0, 8.0], [4731.0, 10.0], [4827.0, 10.0], [4779.0, 10.0], [4859.0, 9.0], [5071.0, 9.0], [5075.0, 9.0], [5091.0, 9.0], [5087.0, 9.0], [5099.0, 9.0], [5107.0, 9.0], [5063.0, 9.0], [5059.0, 9.0], [4927.0, 9.0], [5115.0, 9.0], [4979.0, 9.0], [4963.0, 9.0], [4967.0, 9.0], [4971.0, 9.0], [4983.0, 9.0], [4879.0, 9.0], [5007.0, 9.0], [5019.0, 9.0], [5035.0, 9.0], [5027.0, 9.0], [5055.0, 9.0], [5039.0, 9.0], [4891.0, 8.0], [4887.0, 9.0], [4895.0, 10.0], [4919.0, 9.0], [4951.0, 9.0], [4943.0, 9.0], [4947.0, 9.0], [5319.0, 9.0], [5243.0, 9.0], [5247.0, 9.0], [5203.0, 9.0], [5195.0, 9.0], [5191.0, 8.0], [5187.0, 9.0], [5199.0, 9.0], [5303.0, 9.0], [5311.0, 9.0], [5307.0, 8.0], [5295.0, 9.0], [5283.0, 9.0], [5291.0, 9.0], [5287.0, 9.0], [5183.0, 9.0], [5315.0, 9.0], [5327.0, 8.0], [5339.0, 9.0], [5343.0, 9.0], [5347.0, 8.0], [5351.0, 8.0], [5367.0, 8.0], [5251.0, 9.0], [5375.0, 8.0], [5335.0, 9.0], [5331.0, 9.0], [5255.0, 9.0], [5263.0, 9.0], [5259.0, 9.0], [5275.0, 9.0], [5271.0, 9.0], [5267.0, 9.0], [5171.0, 9.0], [5167.0, 9.0], [5139.0, 9.0], [5163.0, 9.0], [5147.0, 9.0], [5279.0, 9.0], [5227.0, 9.0], [5239.0, 9.0], [5211.0, 9.0], [5207.0, 9.0], [5223.0, 9.0], [5215.0, 9.0], [5439.0, 9.0], [5387.0, 9.0], [5391.0, 9.0], [5475.0, 8.0], [5451.0, 8.0], [5463.0, 8.0], [5471.0, 8.0], [5459.0, 9.0], [5379.0, 9.0], [5503.0, 8.0], [5479.0, 8.0], [5487.0, 9.0], [5531.0, 8.0], [5543.0, 9.0], [5559.0, 8.0], [5567.0, 8.0], [5551.0, 8.0], [5623.0, 8.0], [5631.0, 8.0], [5523.0, 8.0], [5507.0, 8.0], [5611.0, 8.0], [5619.0, 8.0], [5599.0, 8.0], [5415.0, 8.0], [5423.0, 9.0], [5435.0, 9.0], [5431.0, 9.0], [5571.0, 8.0], [5583.0, 8.0], [5399.0, 8.0], [5395.0, 9.0], [5411.0, 9.0], [5663.0, 8.0], [5807.0, 8.0], [5703.0, 8.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5807.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1911.8166666666666, "minX": 1.60138188E12, "maxY": 5315.3, "series": [{"data": [[1.60138218E12, 5203.466666666666], [1.60138248E12, 5235.416666666667], [1.60138254E12, 5253.183333333333], [1.60138188E12, 2162.1833333333334], [1.60138242E12, 5233.783333333334], [1.60138272E12, 5250.883333333333], [1.60138278E12, 1911.8166666666666], [1.60138212E12, 5315.3], [1.60138266E12, 5210.716666666666], [1.601382E12, 5226.25], [1.60138206E12, 5293.733333333334], [1.60138236E12, 5254.383333333333], [1.60138194E12, 5075.683333333333], [1.60138224E12, 5305.5], [1.6013823E12, 5290.016666666666], [1.6013826E12, 5278.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138278E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1912.65, "minX": 1.60138188E12, "maxY": 5315.366666666667, "series": [{"data": [[1.60138218E12, 5203.4], [1.60138248E12, 5235.433333333333], [1.60138254E12, 5253.166666666667], [1.60138188E12, 2161.6666666666665], [1.60138242E12, 5233.783333333334], [1.60138272E12, 5250.866666666667], [1.60138278E12, 1912.65], [1.60138212E12, 5315.366666666667], [1.60138266E12, 5210.733333333334], [1.601382E12, 5226.083333333333], [1.60138206E12, 5293.733333333334], [1.60138236E12, 5254.366666666667], [1.60138194E12, 5075.533333333334], [1.60138224E12, 5305.533333333334], [1.6013823E12, 5290.0], [1.6013826E12, 5278.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138278E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1912.65, "minX": 1.60138188E12, "maxY": 5315.366666666667, "series": [{"data": [[1.60138218E12, 5203.4], [1.60138248E12, 5235.433333333333], [1.60138254E12, 5253.166666666667], [1.60138188E12, 2161.6666666666665], [1.60138242E12, 5233.783333333334], [1.60138272E12, 5250.866666666667], [1.60138278E12, 1912.65], [1.60138212E12, 5315.366666666667], [1.60138266E12, 5210.733333333334], [1.601382E12, 5226.083333333333], [1.60138206E12, 5293.733333333334], [1.60138236E12, 5254.366666666667], [1.60138194E12, 5075.533333333334], [1.60138224E12, 5305.533333333334], [1.6013823E12, 5290.0], [1.6013826E12, 5278.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138278E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1912.65, "minX": 1.60138188E12, "maxY": 5315.366666666667, "series": [{"data": [[1.60138218E12, 5203.4], [1.60138248E12, 5235.433333333333], [1.60138254E12, 5253.166666666667], [1.60138188E12, 2161.6666666666665], [1.60138242E12, 5233.783333333334], [1.60138272E12, 5250.866666666667], [1.60138278E12, 1912.65], [1.60138212E12, 5315.366666666667], [1.60138266E12, 5210.733333333334], [1.601382E12, 5226.083333333333], [1.60138206E12, 5293.733333333334], [1.60138236E12, 5254.366666666667], [1.60138194E12, 5075.533333333334], [1.60138224E12, 5305.533333333334], [1.6013823E12, 5290.0], [1.6013826E12, 5278.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138278E12, "title": "Total Transactions Per Second"}},
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

