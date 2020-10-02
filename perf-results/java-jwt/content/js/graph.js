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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 236.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 3.0], [0.7, 3.0], [0.8, 3.0], [0.9, 3.0], [1.0, 3.0], [1.1, 3.0], [1.2, 3.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 4.0], [2.9, 4.0], [3.0, 4.0], [3.1, 4.0], [3.2, 4.0], [3.3, 4.0], [3.4, 4.0], [3.5, 4.0], [3.6, 4.0], [3.7, 4.0], [3.8, 4.0], [3.9, 4.0], [4.0, 4.0], [4.1, 4.0], [4.2, 4.0], [4.3, 4.0], [4.4, 4.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 4.0], [5.4, 4.0], [5.5, 4.0], [5.6, 4.0], [5.7, 4.0], [5.8, 4.0], [5.9, 4.0], [6.0, 4.0], [6.1, 4.0], [6.2, 4.0], [6.3, 4.0], [6.4, 4.0], [6.5, 4.0], [6.6, 4.0], [6.7, 4.0], [6.8, 4.0], [6.9, 5.0], [7.0, 5.0], [7.1, 5.0], [7.2, 5.0], [7.3, 5.0], [7.4, 5.0], [7.5, 5.0], [7.6, 5.0], [7.7, 5.0], [7.8, 5.0], [7.9, 5.0], [8.0, 5.0], [8.1, 5.0], [8.2, 5.0], [8.3, 5.0], [8.4, 5.0], [8.5, 5.0], [8.6, 5.0], [8.7, 5.0], [8.8, 5.0], [8.9, 5.0], [9.0, 5.0], [9.1, 5.0], [9.2, 5.0], [9.3, 5.0], [9.4, 5.0], [9.5, 5.0], [9.6, 5.0], [9.7, 5.0], [9.8, 5.0], [9.9, 5.0], [10.0, 5.0], [10.1, 5.0], [10.2, 5.0], [10.3, 5.0], [10.4, 5.0], [10.5, 5.0], [10.6, 5.0], [10.7, 5.0], [10.8, 5.0], [10.9, 5.0], [11.0, 5.0], [11.1, 5.0], [11.2, 5.0], [11.3, 5.0], [11.4, 5.0], [11.5, 5.0], [11.6, 5.0], [11.7, 5.0], [11.8, 5.0], [11.9, 5.0], [12.0, 5.0], [12.1, 5.0], [12.2, 5.0], [12.3, 5.0], [12.4, 5.0], [12.5, 5.0], [12.6, 5.0], [12.7, 6.0], [12.8, 6.0], [12.9, 6.0], [13.0, 6.0], [13.1, 6.0], [13.2, 6.0], [13.3, 6.0], [13.4, 6.0], [13.5, 6.0], [13.6, 6.0], [13.7, 6.0], [13.8, 6.0], [13.9, 6.0], [14.0, 6.0], [14.1, 6.0], [14.2, 6.0], [14.3, 6.0], [14.4, 6.0], [14.5, 6.0], [14.6, 6.0], [14.7, 6.0], [14.8, 6.0], [14.9, 6.0], [15.0, 6.0], [15.1, 6.0], [15.2, 6.0], [15.3, 6.0], [15.4, 6.0], [15.5, 6.0], [15.6, 6.0], [15.7, 6.0], [15.8, 6.0], [15.9, 6.0], [16.0, 6.0], [16.1, 6.0], [16.2, 6.0], [16.3, 6.0], [16.4, 6.0], [16.5, 6.0], [16.6, 6.0], [16.7, 6.0], [16.8, 6.0], [16.9, 6.0], [17.0, 6.0], [17.1, 6.0], [17.2, 6.0], [17.3, 6.0], [17.4, 6.0], [17.5, 6.0], [17.6, 6.0], [17.7, 6.0], [17.8, 6.0], [17.9, 6.0], [18.0, 6.0], [18.1, 6.0], [18.2, 6.0], [18.3, 6.0], [18.4, 6.0], [18.5, 6.0], [18.6, 6.0], [18.7, 6.0], [18.8, 6.0], [18.9, 6.0], [19.0, 6.0], [19.1, 6.0], [19.2, 6.0], [19.3, 6.0], [19.4, 6.0], [19.5, 6.0], [19.6, 6.0], [19.7, 6.0], [19.8, 6.0], [19.9, 7.0], [20.0, 7.0], [20.1, 7.0], [20.2, 7.0], [20.3, 7.0], [20.4, 7.0], [20.5, 7.0], [20.6, 7.0], [20.7, 7.0], [20.8, 7.0], [20.9, 7.0], [21.0, 7.0], [21.1, 7.0], [21.2, 7.0], [21.3, 7.0], [21.4, 7.0], [21.5, 7.0], [21.6, 7.0], [21.7, 7.0], [21.8, 7.0], [21.9, 7.0], [22.0, 7.0], [22.1, 7.0], [22.2, 7.0], [22.3, 7.0], [22.4, 7.0], [22.5, 7.0], [22.6, 7.0], [22.7, 7.0], [22.8, 7.0], [22.9, 7.0], [23.0, 7.0], [23.1, 7.0], [23.2, 7.0], [23.3, 7.0], [23.4, 7.0], [23.5, 7.0], [23.6, 7.0], [23.7, 7.0], [23.8, 7.0], [23.9, 7.0], [24.0, 7.0], [24.1, 7.0], [24.2, 7.0], [24.3, 7.0], [24.4, 7.0], [24.5, 7.0], [24.6, 7.0], [24.7, 7.0], [24.8, 7.0], [24.9, 7.0], [25.0, 7.0], [25.1, 7.0], [25.2, 7.0], [25.3, 7.0], [25.4, 7.0], [25.5, 7.0], [25.6, 7.0], [25.7, 7.0], [25.8, 7.0], [25.9, 7.0], [26.0, 7.0], [26.1, 7.0], [26.2, 7.0], [26.3, 7.0], [26.4, 7.0], [26.5, 7.0], [26.6, 7.0], [26.7, 7.0], [26.8, 7.0], [26.9, 7.0], [27.0, 7.0], [27.1, 7.0], [27.2, 7.0], [27.3, 7.0], [27.4, 7.0], [27.5, 7.0], [27.6, 7.0], [27.7, 7.0], [27.8, 7.0], [27.9, 7.0], [28.0, 8.0], [28.1, 8.0], [28.2, 8.0], [28.3, 8.0], [28.4, 8.0], [28.5, 8.0], [28.6, 8.0], [28.7, 8.0], [28.8, 8.0], [28.9, 8.0], [29.0, 8.0], [29.1, 8.0], [29.2, 8.0], [29.3, 8.0], [29.4, 8.0], [29.5, 8.0], [29.6, 8.0], [29.7, 8.0], [29.8, 8.0], [29.9, 8.0], [30.0, 8.0], [30.1, 8.0], [30.2, 8.0], [30.3, 8.0], [30.4, 8.0], [30.5, 8.0], [30.6, 8.0], [30.7, 8.0], [30.8, 8.0], [30.9, 8.0], [31.0, 8.0], [31.1, 8.0], [31.2, 8.0], [31.3, 8.0], [31.4, 8.0], [31.5, 8.0], [31.6, 8.0], [31.7, 8.0], [31.8, 8.0], [31.9, 8.0], [32.0, 8.0], [32.1, 8.0], [32.2, 8.0], [32.3, 8.0], [32.4, 8.0], [32.5, 8.0], [32.6, 8.0], [32.7, 8.0], [32.8, 8.0], [32.9, 8.0], [33.0, 8.0], [33.1, 8.0], [33.2, 8.0], [33.3, 8.0], [33.4, 8.0], [33.5, 8.0], [33.6, 8.0], [33.7, 8.0], [33.8, 8.0], [33.9, 8.0], [34.0, 8.0], [34.1, 8.0], [34.2, 8.0], [34.3, 8.0], [34.4, 8.0], [34.5, 8.0], [34.6, 8.0], [34.7, 8.0], [34.8, 8.0], [34.9, 8.0], [35.0, 8.0], [35.1, 8.0], [35.2, 8.0], [35.3, 8.0], [35.4, 8.0], [35.5, 8.0], [35.6, 8.0], [35.7, 8.0], [35.8, 8.0], [35.9, 8.0], [36.0, 8.0], [36.1, 8.0], [36.2, 8.0], [36.3, 8.0], [36.4, 8.0], [36.5, 8.0], [36.6, 8.0], [36.7, 9.0], [36.8, 9.0], [36.9, 9.0], [37.0, 9.0], [37.1, 9.0], [37.2, 9.0], [37.3, 9.0], [37.4, 9.0], [37.5, 9.0], [37.6, 9.0], [37.7, 9.0], [37.8, 9.0], [37.9, 9.0], [38.0, 9.0], [38.1, 9.0], [38.2, 9.0], [38.3, 9.0], [38.4, 9.0], [38.5, 9.0], [38.6, 9.0], [38.7, 9.0], [38.8, 9.0], [38.9, 9.0], [39.0, 9.0], [39.1, 9.0], [39.2, 9.0], [39.3, 9.0], [39.4, 9.0], [39.5, 9.0], [39.6, 9.0], [39.7, 9.0], [39.8, 9.0], [39.9, 9.0], [40.0, 9.0], [40.1, 9.0], [40.2, 9.0], [40.3, 9.0], [40.4, 9.0], [40.5, 9.0], [40.6, 9.0], [40.7, 9.0], [40.8, 9.0], [40.9, 9.0], [41.0, 9.0], [41.1, 9.0], [41.2, 9.0], [41.3, 9.0], [41.4, 9.0], [41.5, 9.0], [41.6, 9.0], [41.7, 9.0], [41.8, 9.0], [41.9, 9.0], [42.0, 9.0], [42.1, 9.0], [42.2, 9.0], [42.3, 9.0], [42.4, 9.0], [42.5, 9.0], [42.6, 9.0], [42.7, 9.0], [42.8, 9.0], [42.9, 9.0], [43.0, 9.0], [43.1, 9.0], [43.2, 9.0], [43.3, 9.0], [43.4, 9.0], [43.5, 9.0], [43.6, 9.0], [43.7, 9.0], [43.8, 9.0], [43.9, 9.0], [44.0, 9.0], [44.1, 9.0], [44.2, 9.0], [44.3, 9.0], [44.4, 9.0], [44.5, 9.0], [44.6, 9.0], [44.7, 9.0], [44.8, 9.0], [44.9, 9.0], [45.0, 9.0], [45.1, 9.0], [45.2, 9.0], [45.3, 9.0], [45.4, 9.0], [45.5, 10.0], [45.6, 10.0], [45.7, 10.0], [45.8, 10.0], [45.9, 10.0], [46.0, 10.0], [46.1, 10.0], [46.2, 10.0], [46.3, 10.0], [46.4, 10.0], [46.5, 10.0], [46.6, 10.0], [46.7, 10.0], [46.8, 10.0], [46.9, 10.0], [47.0, 10.0], [47.1, 10.0], [47.2, 10.0], [47.3, 10.0], [47.4, 10.0], [47.5, 10.0], [47.6, 10.0], [47.7, 10.0], [47.8, 10.0], [47.9, 10.0], [48.0, 10.0], [48.1, 10.0], [48.2, 10.0], [48.3, 10.0], [48.4, 10.0], [48.5, 10.0], [48.6, 10.0], [48.7, 10.0], [48.8, 10.0], [48.9, 10.0], [49.0, 10.0], [49.1, 10.0], [49.2, 10.0], [49.3, 10.0], [49.4, 10.0], [49.5, 10.0], [49.6, 10.0], [49.7, 10.0], [49.8, 10.0], [49.9, 10.0], [50.0, 10.0], [50.1, 10.0], [50.2, 10.0], [50.3, 10.0], [50.4, 10.0], [50.5, 10.0], [50.6, 10.0], [50.7, 10.0], [50.8, 10.0], [50.9, 10.0], [51.0, 10.0], [51.1, 10.0], [51.2, 10.0], [51.3, 10.0], [51.4, 10.0], [51.5, 10.0], [51.6, 10.0], [51.7, 10.0], [51.8, 10.0], [51.9, 10.0], [52.0, 10.0], [52.1, 10.0], [52.2, 10.0], [52.3, 10.0], [52.4, 10.0], [52.5, 10.0], [52.6, 10.0], [52.7, 10.0], [52.8, 10.0], [52.9, 10.0], [53.0, 10.0], [53.1, 10.0], [53.2, 10.0], [53.3, 10.0], [53.4, 10.0], [53.5, 10.0], [53.6, 10.0], [53.7, 10.0], [53.8, 10.0], [53.9, 10.0], [54.0, 11.0], [54.1, 11.0], [54.2, 11.0], [54.3, 11.0], [54.4, 11.0], [54.5, 11.0], [54.6, 11.0], [54.7, 11.0], [54.8, 11.0], [54.9, 11.0], [55.0, 11.0], [55.1, 11.0], [55.2, 11.0], [55.3, 11.0], [55.4, 11.0], [55.5, 11.0], [55.6, 11.0], [55.7, 11.0], [55.8, 11.0], [55.9, 11.0], [56.0, 11.0], [56.1, 11.0], [56.2, 11.0], [56.3, 11.0], [56.4, 11.0], [56.5, 11.0], [56.6, 11.0], [56.7, 11.0], [56.8, 11.0], [56.9, 11.0], [57.0, 11.0], [57.1, 11.0], [57.2, 11.0], [57.3, 11.0], [57.4, 11.0], [57.5, 11.0], [57.6, 11.0], [57.7, 11.0], [57.8, 11.0], [57.9, 11.0], [58.0, 11.0], [58.1, 11.0], [58.2, 11.0], [58.3, 11.0], [58.4, 11.0], [58.5, 11.0], [58.6, 11.0], [58.7, 11.0], [58.8, 11.0], [58.9, 11.0], [59.0, 11.0], [59.1, 11.0], [59.2, 11.0], [59.3, 11.0], [59.4, 11.0], [59.5, 11.0], [59.6, 11.0], [59.7, 11.0], [59.8, 11.0], [59.9, 11.0], [60.0, 11.0], [60.1, 11.0], [60.2, 11.0], [60.3, 11.0], [60.4, 11.0], [60.5, 11.0], [60.6, 11.0], [60.7, 11.0], [60.8, 11.0], [60.9, 11.0], [61.0, 11.0], [61.1, 11.0], [61.2, 11.0], [61.3, 11.0], [61.4, 11.0], [61.5, 11.0], [61.6, 11.0], [61.7, 12.0], [61.8, 12.0], [61.9, 12.0], [62.0, 12.0], [62.1, 12.0], [62.2, 12.0], [62.3, 12.0], [62.4, 12.0], [62.5, 12.0], [62.6, 12.0], [62.7, 12.0], [62.8, 12.0], [62.9, 12.0], [63.0, 12.0], [63.1, 12.0], [63.2, 12.0], [63.3, 12.0], [63.4, 12.0], [63.5, 12.0], [63.6, 12.0], [63.7, 12.0], [63.8, 12.0], [63.9, 12.0], [64.0, 12.0], [64.1, 12.0], [64.2, 12.0], [64.3, 12.0], [64.4, 12.0], [64.5, 12.0], [64.6, 12.0], [64.7, 12.0], [64.8, 12.0], [64.9, 12.0], [65.0, 12.0], [65.1, 12.0], [65.2, 12.0], [65.3, 12.0], [65.4, 12.0], [65.5, 12.0], [65.6, 12.0], [65.7, 12.0], [65.8, 12.0], [65.9, 12.0], [66.0, 12.0], [66.1, 12.0], [66.2, 12.0], [66.3, 12.0], [66.4, 12.0], [66.5, 12.0], [66.6, 12.0], [66.7, 12.0], [66.8, 12.0], [66.9, 12.0], [67.0, 12.0], [67.1, 12.0], [67.2, 12.0], [67.3, 12.0], [67.4, 12.0], [67.5, 12.0], [67.6, 12.0], [67.7, 12.0], [67.8, 12.0], [67.9, 12.0], [68.0, 12.0], [68.1, 12.0], [68.2, 12.0], [68.3, 12.0], [68.4, 12.0], [68.5, 12.0], [68.6, 12.0], [68.7, 13.0], [68.8, 13.0], [68.9, 13.0], [69.0, 13.0], [69.1, 13.0], [69.2, 13.0], [69.3, 13.0], [69.4, 13.0], [69.5, 13.0], [69.6, 13.0], [69.7, 13.0], [69.8, 13.0], [69.9, 13.0], [70.0, 13.0], [70.1, 13.0], [70.2, 13.0], [70.3, 13.0], [70.4, 13.0], [70.5, 13.0], [70.6, 13.0], [70.7, 13.0], [70.8, 13.0], [70.9, 13.0], [71.0, 13.0], [71.1, 13.0], [71.2, 13.0], [71.3, 13.0], [71.4, 13.0], [71.5, 13.0], [71.6, 13.0], [71.7, 13.0], [71.8, 13.0], [71.9, 13.0], [72.0, 13.0], [72.1, 13.0], [72.2, 13.0], [72.3, 13.0], [72.4, 13.0], [72.5, 13.0], [72.6, 13.0], [72.7, 13.0], [72.8, 13.0], [72.9, 13.0], [73.0, 13.0], [73.1, 13.0], [73.2, 13.0], [73.3, 13.0], [73.4, 13.0], [73.5, 13.0], [73.6, 13.0], [73.7, 13.0], [73.8, 13.0], [73.9, 13.0], [74.0, 13.0], [74.1, 13.0], [74.2, 13.0], [74.3, 13.0], [74.4, 13.0], [74.5, 13.0], [74.6, 13.0], [74.7, 13.0], [74.8, 14.0], [74.9, 14.0], [75.0, 14.0], [75.1, 14.0], [75.2, 14.0], [75.3, 14.0], [75.4, 14.0], [75.5, 14.0], [75.6, 14.0], [75.7, 14.0], [75.8, 14.0], [75.9, 14.0], [76.0, 14.0], [76.1, 14.0], [76.2, 14.0], [76.3, 14.0], [76.4, 14.0], [76.5, 14.0], [76.6, 14.0], [76.7, 14.0], [76.8, 14.0], [76.9, 14.0], [77.0, 14.0], [77.1, 14.0], [77.2, 14.0], [77.3, 14.0], [77.4, 14.0], [77.5, 14.0], [77.6, 14.0], [77.7, 14.0], [77.8, 14.0], [77.9, 14.0], [78.0, 14.0], [78.1, 14.0], [78.2, 14.0], [78.3, 14.0], [78.4, 14.0], [78.5, 14.0], [78.6, 14.0], [78.7, 14.0], [78.8, 14.0], [78.9, 14.0], [79.0, 14.0], [79.1, 14.0], [79.2, 14.0], [79.3, 14.0], [79.4, 14.0], [79.5, 14.0], [79.6, 14.0], [79.7, 14.0], [79.8, 15.0], [79.9, 15.0], [80.0, 15.0], [80.1, 15.0], [80.2, 15.0], [80.3, 15.0], [80.4, 15.0], [80.5, 15.0], [80.6, 15.0], [80.7, 15.0], [80.8, 15.0], [80.9, 15.0], [81.0, 15.0], [81.1, 15.0], [81.2, 15.0], [81.3, 15.0], [81.4, 15.0], [81.5, 15.0], [81.6, 15.0], [81.7, 15.0], [81.8, 15.0], [81.9, 15.0], [82.0, 15.0], [82.1, 15.0], [82.2, 15.0], [82.3, 15.0], [82.4, 15.0], [82.5, 15.0], [82.6, 15.0], [82.7, 15.0], [82.8, 15.0], [82.9, 15.0], [83.0, 15.0], [83.1, 15.0], [83.2, 15.0], [83.3, 15.0], [83.4, 15.0], [83.5, 15.0], [83.6, 15.0], [83.7, 15.0], [83.8, 15.0], [83.9, 15.0], [84.0, 15.0], [84.1, 16.0], [84.2, 16.0], [84.3, 16.0], [84.4, 16.0], [84.5, 16.0], [84.6, 16.0], [84.7, 16.0], [84.8, 16.0], [84.9, 16.0], [85.0, 16.0], [85.1, 16.0], [85.2, 16.0], [85.3, 16.0], [85.4, 16.0], [85.5, 16.0], [85.6, 16.0], [85.7, 16.0], [85.8, 16.0], [85.9, 16.0], [86.0, 16.0], [86.1, 16.0], [86.2, 16.0], [86.3, 16.0], [86.4, 16.0], [86.5, 16.0], [86.6, 16.0], [86.7, 16.0], [86.8, 16.0], [86.9, 16.0], [87.0, 16.0], [87.1, 16.0], [87.2, 16.0], [87.3, 16.0], [87.4, 16.0], [87.5, 17.0], [87.6, 17.0], [87.7, 17.0], [87.8, 17.0], [87.9, 17.0], [88.0, 17.0], [88.1, 17.0], [88.2, 17.0], [88.3, 17.0], [88.4, 17.0], [88.5, 17.0], [88.6, 17.0], [88.7, 17.0], [88.8, 17.0], [88.9, 17.0], [89.0, 17.0], [89.1, 17.0], [89.2, 17.0], [89.3, 17.0], [89.4, 17.0], [89.5, 17.0], [89.6, 17.0], [89.7, 17.0], [89.8, 17.0], [89.9, 17.0], [90.0, 17.0], [90.1, 17.0], [90.2, 17.0], [90.3, 18.0], [90.4, 18.0], [90.5, 18.0], [90.6, 18.0], [90.7, 18.0], [90.8, 18.0], [90.9, 18.0], [91.0, 18.0], [91.1, 18.0], [91.2, 18.0], [91.3, 18.0], [91.4, 18.0], [91.5, 18.0], [91.6, 18.0], [91.7, 18.0], [91.8, 18.0], [91.9, 18.0], [92.0, 18.0], [92.1, 18.0], [92.2, 18.0], [92.3, 18.0], [92.4, 18.0], [92.5, 19.0], [92.6, 19.0], [92.7, 19.0], [92.8, 19.0], [92.9, 19.0], [93.0, 19.0], [93.1, 19.0], [93.2, 19.0], [93.3, 19.0], [93.4, 19.0], [93.5, 19.0], [93.6, 19.0], [93.7, 19.0], [93.8, 19.0], [93.9, 19.0], [94.0, 19.0], [94.1, 19.0], [94.2, 20.0], [94.3, 20.0], [94.4, 20.0], [94.5, 20.0], [94.6, 20.0], [94.7, 20.0], [94.8, 20.0], [94.9, 20.0], [95.0, 20.0], [95.1, 20.0], [95.2, 20.0], [95.3, 20.0], [95.4, 20.0], [95.5, 20.0], [95.6, 21.0], [95.7, 21.0], [95.8, 21.0], [95.9, 21.0], [96.0, 21.0], [96.1, 21.0], [96.2, 21.0], [96.3, 21.0], [96.4, 21.0], [96.5, 21.0], [96.6, 22.0], [96.7, 22.0], [96.8, 22.0], [96.9, 22.0], [97.0, 22.0], [97.1, 22.0], [97.2, 22.0], [97.3, 22.0], [97.4, 23.0], [97.5, 23.0], [97.6, 23.0], [97.7, 23.0], [97.8, 23.0], [97.9, 23.0], [98.0, 24.0], [98.1, 24.0], [98.2, 24.0], [98.3, 24.0], [98.4, 24.0], [98.5, 25.0], [98.6, 25.0], [98.7, 25.0], [98.8, 25.0], [98.9, 26.0], [99.0, 26.0], [99.1, 26.0], [99.2, 27.0], [99.3, 27.0], [99.4, 28.0], [99.5, 29.0], [99.6, 29.0], [99.7, 30.0], [99.8, 32.0], [99.9, 35.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 25.0, "minX": 0.0, "maxY": 4004332.0, "series": [{"data": [[0.0, 4004332.0], [100.0, 42.0], [200.0, 25.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4004399.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4004399.0, "series": [{"data": [[0.0, 4004399.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.290729622468705, "minX": 1.60138722E12, "maxY": 50.0, "series": [{"data": [[1.6013874E12, 50.0], [1.60138806E12, 50.0], [1.601388E12, 50.0], [1.6013877E12, 50.0], [1.60138812E12, 49.98885515103251], [1.60138782E12, 50.0], [1.60138776E12, 50.0], [1.60138746E12, 50.0], [1.60138788E12, 50.0], [1.60138758E12, 50.0], [1.60138722E12, 5.290729622468705], [1.60138752E12, 50.0], [1.60138734E12, 50.0], [1.60138764E12, 50.0], [1.60138728E12, 34.139798703887934], [1.60138794E12, 50.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138812E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3.1969380654140576, "minX": 1.0, "maxY": 11.276408787010467, "series": [{"data": [[2.0, 3.4061538461538454], [3.0, 3.4695378151260496], [4.0, 3.1969380654140576], [5.0, 3.252530933633294], [6.0, 4.037856726849161], [7.0, 3.9464802314368375], [8.0, 3.9324664429530194], [9.0, 4.452653927813163], [10.0, 4.346439169139461], [11.0, 4.487974904147804], [12.0, 4.0516296509950775], [13.0, 4.06991695687114], [14.0, 4.069948817938085], [15.0, 4.063546685019512], [16.0, 4.883882595262614], [17.0, 4.657215895886593], [18.0, 5.033151787828562], [19.0, 5.39784431137725], [20.0, 5.477477477477481], [21.0, 6.283900457084815], [22.0, 6.1438340014147625], [23.0, 6.092981671881992], [24.0, 6.644749070631967], [25.0, 6.8403961308152885], [26.0, 7.410860163382992], [27.0, 6.920508401551074], [28.0, 7.389417755147216], [29.0, 7.731045311798997], [30.0, 7.4916247906197535], [31.0, 7.199021526418784], [32.0, 7.7220085037456965], [33.0, 7.803177755710029], [34.0, 7.906591263650525], [35.0, 8.67526523819428], [36.0, 8.791529605263104], [37.0, 9.20396246089673], [38.0, 9.644169158479274], [39.0, 9.682348043297269], [40.0, 10.169155290102392], [41.0, 9.994673222700223], [42.0, 10.011569918212663], [43.0, 10.134307722694068], [44.0, 10.040543124880498], [45.0, 10.25186033199772], [46.0, 10.863322141023106], [47.0, 10.75350355154541], [48.0, 10.912652905198756], [49.0, 11.276408787010467], [50.0, 10.960945089309835], [1.0, 4.939393939393941]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[48.98571396107034, 10.791975524916245]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 33903.333333333336, "minX": 1.60138722E12, "maxY": 5800358.433333334, "series": [{"data": [[1.6013874E12, 911897.3666666667], [1.60138806E12, 963632.7666666667], [1.601388E12, 956522.4], [1.6013877E12, 933297.2833333333], [1.60138812E12, 810126.1333333333], [1.60138782E12, 940212.2666666667], [1.60138776E12, 937437.5166666667], [1.60138746E12, 930774.9666666667], [1.60138788E12, 931950.0], [1.60138758E12, 938351.8333333334], [1.60138722E12, 33903.333333333336], [1.60138752E12, 939250.8333333334], [1.60138734E12, 907138.4666666667], [1.60138764E12, 940382.0333333333], [1.60138728E12, 787368.4166666666], [1.60138794E12, 953097.1666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6013874E12, 5488920.733333333], [1.60138806E12, 5800358.433333334], [1.601388E12, 5757558.333333333], [1.6013877E12, 5617736.366666666], [1.60138812E12, 4876366.366666666], [1.60138782E12, 5659373.533333333], [1.60138776E12, 5642677.133333334], [1.60138746E12, 5602576.7], [1.60138788E12, 5609637.366666666], [1.60138758E12, 5648180.3], [1.60138722E12, 204074.03333333333], [1.60138752E12, 5653579.633333334], [1.60138734E12, 5460262.733333333], [1.60138764E12, 5660391.1], [1.60138728E12, 4739389.433333334], [1.60138794E12, 5736937.033333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138812E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3.675791187544508, "minX": 1.60138722E12, "maxY": 11.337753961070089, "series": [{"data": [[1.6013874E12, 11.272422194813803], [1.60138806E12, 10.664828810895267], [1.601388E12, 10.747675383228142], [1.6013877E12, 11.00132708850089], [1.60138812E12, 10.805686981777315], [1.60138782E12, 10.934177791150624], [1.60138776E12, 10.971389455244234], [1.60138746E12, 11.030828023589113], [1.60138788E12, 11.02217105287492], [1.60138758E12, 10.95593842262207], [1.60138722E12, 3.675791187544508], [1.60138752E12, 10.931832958055978], [1.60138734E12, 11.337753961070089], [1.60138764E12, 10.932443290004885], [1.60138728E12, 8.414436007203548], [1.60138794E12, 10.773526100696234]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138812E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3.6642922560293094, "minX": 1.60138722E12, "maxY": 11.332387595366292, "series": [{"data": [[1.6013874E12, 11.267091414000118], [1.60138806E12, 10.660009809853532], [1.601388E12, 10.742935978358844], [1.6013877E12, 10.99625162189444], [1.60138812E12, 10.800721412844897], [1.60138782E12, 10.929253418072436], [1.60138776E12, 10.966019917708833], [1.60138746E12, 11.02557943859419], [1.60138788E12, 11.017195615395714], [1.60138758E12, 10.950750598383323], [1.60138722E12, 3.6642922560293094], [1.60138752E12, 10.926521526724322], [1.60138734E12, 11.332387595366292], [1.60138764E12, 10.927472108184476], [1.60138728E12, 8.40883179023842], [1.60138794E12, 10.768237546921954]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138812E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.794861530468294E-5, "minX": 1.60138722E12, "maxY": 0.006207387809097387, "series": [{"data": [[1.6013874E12, 1.4755177553970206E-4], [1.60138806E12, 1.0024667843371528E-4], [1.601388E12, 1.0820559062218485E-4], [1.6013877E12, 2.0331439428945464E-4], [1.60138812E12, 9.794861530468294E-5], [1.60138782E12, 1.2109114126565981E-4], [1.60138776E12, 1.1776915772970682E-4], [1.60138746E12, 1.445584850270789E-4], [1.60138788E12, 1.4807849641094783E-4], [1.60138758E12, 1.2868451337031978E-4], [1.60138722E12, 0.006207387809097387], [1.60138752E12, 1.4692756103921973E-4], [1.60138734E12, 1.635391390995475E-4], [1.60138764E12, 1.320756793642754E-4], [1.60138728E12, 2.1032245060708543E-4], [1.60138794E12, 1.2669362224305953E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138812E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60138722E12, "maxY": 236.0, "series": [{"data": [[1.6013874E12, 105.0], [1.60138806E12, 53.0], [1.601388E12, 54.0], [1.6013877E12, 51.0], [1.60138812E12, 111.0], [1.60138782E12, 58.0], [1.60138776E12, 93.0], [1.60138746E12, 236.0], [1.60138788E12, 55.0], [1.60138758E12, 77.0], [1.60138722E12, 169.0], [1.60138752E12, 57.0], [1.60138734E12, 49.0], [1.60138764E12, 49.0], [1.60138728E12, 57.0], [1.60138794E12, 54.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6013874E12, 3.0], [1.60138806E12, 3.0], [1.601388E12, 3.0], [1.6013877E12, 3.0], [1.60138812E12, 3.0], [1.60138782E12, 3.0], [1.60138776E12, 3.0], [1.60138746E12, 3.0], [1.60138788E12, 3.0], [1.60138758E12, 3.0], [1.60138722E12, 2.0], [1.60138752E12, 3.0], [1.60138734E12, 3.0], [1.60138764E12, 3.0], [1.60138728E12, 3.0], [1.60138794E12, 3.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6013874E12, 3.0], [1.60138806E12, 3.0], [1.601388E12, 3.0], [1.6013877E12, 3.0], [1.60138812E12, 3.0], [1.60138782E12, 3.0], [1.60138776E12, 3.0], [1.60138746E12, 3.0], [1.60138788E12, 3.0], [1.60138758E12, 3.0], [1.60138722E12, 2.0], [1.60138752E12, 3.0], [1.60138734E12, 3.0], [1.60138764E12, 3.0], [1.60138728E12, 3.0], [1.60138794E12, 3.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6013874E12, 3.0], [1.60138806E12, 3.0], [1.601388E12, 3.0], [1.6013877E12, 3.0], [1.60138812E12, 3.0], [1.60138782E12, 3.0], [1.60138776E12, 3.0], [1.60138746E12, 3.0], [1.60138788E12, 3.0], [1.60138758E12, 3.0], [1.60138722E12, 2.0], [1.60138752E12, 3.0], [1.60138734E12, 3.0], [1.60138764E12, 3.0], [1.60138728E12, 3.0], [1.60138794E12, 3.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6013874E12, 1.0], [1.60138806E12, 1.0], [1.601388E12, 1.0], [1.6013877E12, 1.0], [1.60138812E12, 1.0], [1.60138782E12, 1.0], [1.60138776E12, 1.0], [1.60138746E12, 1.0], [1.60138788E12, 1.0], [1.60138758E12, 1.0], [1.60138722E12, 1.0], [1.60138752E12, 1.0], [1.60138734E12, 1.0], [1.60138764E12, 1.0], [1.60138728E12, 1.0], [1.60138794E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6013874E12, 11.0], [1.60138806E12, 10.0], [1.601388E12, 10.0], [1.6013877E12, 10.0], [1.60138812E12, 11.0], [1.60138782E12, 10.0], [1.60138776E12, 10.0], [1.60138746E12, 10.0], [1.60138788E12, 10.0], [1.60138758E12, 10.0], [1.60138722E12, 3.0], [1.60138752E12, 10.0], [1.60138734E12, 10.0], [1.60138764E12, 10.0], [1.60138728E12, 11.0], [1.60138794E12, 10.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138812E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3.0, "minX": 129.0, "maxY": 12.0, "series": [{"data": [[129.0, 4.0], [435.0, 3.0], [471.0, 11.0], [695.0, 3.0], [910.0, 3.0], [1212.0, 3.0], [1433.0, 3.0], [1540.0, 3.0], [1548.0, 3.0], [1925.0, 3.0], [1971.0, 3.0], [2246.0, 4.0], [2356.0, 4.0], [2716.0, 4.0], [3226.0, 4.0], [3306.0, 5.0], [3336.0, 4.0], [3422.0, 5.0], [3530.0, 4.0], [3550.0, 7.0], [3646.0, 5.0], [3644.0, 5.0], [3750.0, 6.0], [3740.0, 7.0], [3900.0, 9.0], [3862.0, 10.0], [3902.0, 11.0], [3970.0, 9.0], [4004.0, 8.0], [4022.0, 10.0], [4044.0, 11.0], [4312.0, 11.0], [4152.0, 9.0], [4280.0, 8.0], [4208.0, 7.0], [4108.0, 11.0], [4188.0, 11.0], [4176.0, 11.0], [4268.0, 11.0], [4256.0, 10.0], [4264.0, 11.0], [4252.0, 11.0], [4248.0, 10.0], [4308.0, 11.0], [4324.0, 11.0], [4320.0, 11.0], [4296.0, 11.0], [4288.0, 11.0], [4292.0, 11.0], [4304.0, 10.0], [4300.0, 11.0], [4328.0, 11.0], [4340.0, 10.0], [4344.0, 11.0], [4336.0, 10.0], [4484.0, 10.0], [4584.0, 10.0], [4388.0, 10.0], [4380.0, 10.0], [4376.0, 11.0], [4528.0, 10.0], [4536.0, 10.0], [4532.0, 10.0], [4540.0, 10.0], [4524.0, 10.0], [4520.0, 10.0], [4504.0, 10.0], [4512.0, 10.0], [4508.0, 10.0], [4488.0, 10.0], [4588.0, 10.0], [4600.0, 10.0], [4596.0, 10.0], [4592.0, 10.0], [4604.0, 10.0], [4480.0, 10.0], [4564.0, 10.0], [4572.0, 10.0], [4568.0, 10.0], [4576.0, 10.0], [4580.0, 10.0], [4556.0, 10.0], [4560.0, 10.0], [4548.0, 10.0], [4552.0, 10.0], [4408.0, 11.0], [4432.0, 10.0], [4416.0, 10.0], [4420.0, 11.0], [4424.0, 10.0], [4444.0, 11.0], [4440.0, 11.0], [4448.0, 10.0], [4460.0, 10.0], [4464.0, 10.0], [4468.0, 10.0], [4472.0, 10.0], [4392.0, 11.0], [4396.0, 10.0], [4372.0, 11.0], [4360.0, 10.0], [4368.0, 11.0], [4364.0, 10.0], [4476.0, 10.0], [4356.0, 10.0], [4648.0, 10.0], [4676.0, 10.0], [4672.0, 10.0], [4652.0, 10.0], [4656.0, 10.0], [4660.0, 10.0], [4632.0, 10.0], [4636.0, 10.0], [4640.0, 10.0], [4644.0, 10.0], [4784.0, 10.0], [4788.0, 10.0], [4796.0, 10.0], [4768.0, 10.0], [4756.0, 10.0], [4780.0, 10.0], [4772.0, 9.0], [4708.0, 10.0], [4716.0, 10.0], [4712.0, 10.0], [4688.0, 10.0], [4684.0, 10.0], [4680.0, 10.0], [4692.0, 10.0], [4696.0, 10.0], [4724.0, 10.0], [4620.0, 10.0], [4616.0, 10.0], [4608.0, 10.0], [4732.0, 10.0], [4612.0, 10.0], [4624.0, 10.0], [4736.0, 9.0], [4828.0, 9.0], [4816.0, 10.0], [4852.0, 10.0], [4668.0, 10.0], [4752.0, 10.0], [4744.0, 10.0], [4740.0, 10.0], [4900.0, 9.0], [4908.0, 9.0], [4876.0, 10.0], [5012.0, 9.0], [4884.0, 9.0], [5292.0, 9.0], [4309.0, 11.0], [4117.0, 11.0], [4245.0, 9.0], [4137.0, 11.0], [4201.0, 9.0], [4197.0, 11.0], [4193.0, 11.0], [4253.0, 11.0], [4269.0, 11.0], [4305.0, 11.0], [4313.0, 11.0], [4317.0, 10.0], [4325.0, 11.0], [4321.0, 11.0], [4293.0, 11.0], [4301.0, 11.0], [4337.0, 11.0], [4237.0, 11.0], [4345.0, 11.0], [4349.0, 10.0], [4165.0, 11.0], [4181.0, 11.0], [4493.0, 10.0], [4585.0, 10.0], [4401.0, 10.0], [4397.0, 10.0], [4529.0, 10.0], [4525.0, 10.0], [4537.0, 10.0], [4541.0, 10.0], [4533.0, 10.0], [4521.0, 10.0], [4489.0, 10.0], [4485.0, 10.0], [4497.0, 10.0], [4501.0, 10.0], [4517.0, 10.0], [4513.0, 10.0], [4509.0, 10.0], [4505.0, 10.0], [4561.0, 10.0], [4601.0, 10.0], [4597.0, 10.0], [4593.0, 10.0], [4589.0, 10.0], [4573.0, 10.0], [4577.0, 10.0], [4569.0, 10.0], [4565.0, 10.0], [4581.0, 10.0], [4605.0, 10.0], [4481.0, 10.0], [4413.0, 10.0], [4553.0, 10.0], [4557.0, 10.0], [4549.0, 10.0], [4545.0, 10.0], [4429.0, 10.0], [4441.0, 10.0], [4433.0, 11.0], [4473.0, 10.0], [4469.0, 10.0], [4461.0, 10.0], [4457.0, 10.0], [4453.0, 10.0], [4449.0, 10.0], [4445.0, 10.0], [4393.0, 11.0], [4389.0, 11.0], [4405.0, 10.0], [4409.0, 11.0], [4357.0, 11.0], [4353.0, 11.0], [4477.0, 10.0], [4381.0, 10.0], [4373.0, 10.0], [4377.0, 10.0], [4361.0, 11.0], [4369.0, 11.0], [4629.0, 10.0], [4701.0, 10.0], [4705.0, 10.0], [4697.0, 10.0], [4689.0, 10.0], [4677.0, 10.0], [4673.0, 10.0], [4685.0, 10.0], [4681.0, 10.0], [4753.0, 10.0], [4777.0, 10.0], [4797.0, 10.0], [4757.0, 10.0], [4761.0, 10.0], [4741.0, 10.0], [4749.0, 10.0], [4617.0, 10.0], [4621.0, 10.0], [4613.0, 10.0], [4709.0, 10.0], [4609.0, 10.0], [4721.0, 10.0], [4717.0, 10.0], [4633.0, 10.0], [4637.0, 10.0], [4641.0, 10.0], [4665.0, 10.0], [4809.0, 9.0], [4801.0, 10.0], [4853.0, 10.0], [4837.0, 9.0], [4661.0, 10.0], [4657.0, 10.0], [4649.0, 10.0], [4645.0, 10.0], [2049.0, 4.0], [2993.0, 4.0], [3411.0, 4.0], [3417.0, 5.0], [3547.0, 4.0], [3543.0, 5.0], [3545.0, 6.0], [3577.0, 6.0], [3611.0, 4.0], [3743.0, 7.0], [3775.0, 7.0], [3773.0, 7.0], [3963.0, 7.0], [4071.0, 11.0], [4077.0, 7.0], [3973.0, 8.0], [3995.0, 10.0], [4047.0, 8.0], [4053.0, 11.0], [4027.0, 10.0], [4029.0, 11.0], [4031.0, 11.0], [4079.0, 9.0], [4017.0, 12.0], [4134.0, 11.0], [4286.0, 11.0], [4282.0, 10.0], [4206.0, 7.0], [4194.0, 11.0], [4218.0, 11.0], [4222.0, 11.0], [4130.0, 11.0], [4186.0, 11.0], [4254.0, 11.0], [4274.0, 11.0], [4326.0, 10.0], [4310.0, 11.0], [4322.0, 11.0], [4318.0, 11.0], [4158.0, 11.0], [4290.0, 10.0], [4330.0, 11.0], [4338.0, 11.0], [4342.0, 10.0], [4238.0, 11.0], [4350.0, 11.0], [4346.0, 11.0], [4162.0, 10.0], [4182.0, 11.0], [4494.0, 10.0], [4390.0, 10.0], [4386.0, 10.0], [4374.0, 11.0], [4382.0, 10.0], [4538.0, 10.0], [4542.0, 10.0], [4534.0, 10.0], [4530.0, 10.0], [4526.0, 10.0], [4522.0, 10.0], [4518.0, 11.0], [4498.0, 10.0], [4506.0, 10.0], [4510.0, 10.0], [4514.0, 10.0], [4490.0, 10.0], [4482.0, 10.0], [4594.0, 10.0], [4590.0, 10.0], [4586.0, 10.0], [4598.0, 10.0], [4602.0, 10.0], [4606.0, 10.0], [4566.0, 10.0], [4582.0, 10.0], [4574.0, 10.0], [4570.0, 10.0], [4550.0, 10.0], [4562.0, 10.0], [4558.0, 10.0], [4554.0, 10.0], [4414.0, 10.0], [4546.0, 10.0], [4410.0, 11.0], [4486.0, 10.0], [4438.0, 10.0], [4426.0, 11.0], [4430.0, 10.0], [4418.0, 10.0], [4422.0, 11.0], [4442.0, 10.0], [4450.0, 10.0], [4454.0, 10.0], [4458.0, 10.0], [4470.0, 10.0], [4474.0, 10.0], [4466.0, 11.0], [4406.0, 11.0], [4402.0, 11.0], [4398.0, 11.0], [4370.0, 10.0], [4478.0, 10.0], [4354.0, 11.0], [4358.0, 11.0], [4638.0, 10.0], [4702.0, 10.0], [4698.0, 10.0], [4694.0, 10.0], [4690.0, 10.0], [4686.0, 10.0], [4678.0, 10.0], [4642.0, 10.0], [4654.0, 10.0], [4626.0, 10.0], [4634.0, 10.0], [4630.0, 10.0], [4658.0, 10.0], [4726.0, 10.0], [4714.0, 10.0], [4710.0, 10.0], [4718.0, 10.0], [4722.0, 10.0], [4614.0, 10.0], [4610.0, 10.0], [4834.0, 10.0], [4798.0, 9.0], [4774.0, 10.0], [4762.0, 10.0], [4758.0, 10.0], [4750.0, 10.0], [4778.0, 10.0], [4794.0, 10.0], [4810.0, 10.0], [4670.0, 10.0], [4806.0, 10.0], [4662.0, 10.0], [4666.0, 10.0], [4958.0, 9.0], [4938.0, 9.0], [4982.0, 9.0], [4922.0, 9.0], [5030.0, 9.0], [5086.0, 9.0], [4311.0, 11.0], [4127.0, 11.0], [4187.0, 11.0], [4255.0, 10.0], [4287.0, 11.0], [4307.0, 11.0], [4303.0, 11.0], [4323.0, 11.0], [4155.0, 11.0], [4159.0, 11.0], [4339.0, 11.0], [4335.0, 10.0], [4347.0, 10.0], [4343.0, 11.0], [4175.0, 11.0], [4583.0, 10.0], [4403.0, 11.0], [4535.0, 10.0], [4531.0, 10.0], [4543.0, 10.0], [4539.0, 10.0], [4487.0, 10.0], [4495.0, 10.0], [4491.0, 10.0], [4519.0, 10.0], [4527.0, 10.0], [4515.0, 10.0], [4511.0, 10.0], [4507.0, 11.0], [4503.0, 10.0], [4499.0, 10.0], [4587.0, 10.0], [4595.0, 10.0], [4599.0, 10.0], [4591.0, 11.0], [4575.0, 10.0], [4579.0, 10.0], [4567.0, 10.0], [4571.0, 10.0], [4603.0, 10.0], [4607.0, 10.0], [4483.0, 10.0], [4551.0, 10.0], [4559.0, 10.0], [4563.0, 10.0], [4419.0, 10.0], [4471.0, 10.0], [4475.0, 10.0], [4467.0, 10.0], [4463.0, 10.0], [4451.0, 10.0], [4447.0, 10.0], [4439.0, 10.0], [4435.0, 10.0], [4391.0, 11.0], [4411.0, 10.0], [4407.0, 11.0], [4547.0, 10.0], [4479.0, 10.0], [4375.0, 11.0], [4383.0, 10.0], [4379.0, 10.0], [4371.0, 11.0], [4355.0, 11.0], [4387.0, 11.0], [4647.0, 10.0], [4739.0, 10.0], [4619.0, 10.0], [4695.0, 10.0], [4687.0, 10.0], [4691.0, 10.0], [4683.0, 10.0], [4675.0, 10.0], [4759.0, 10.0], [4779.0, 10.0], [4743.0, 10.0], [4819.0, 10.0], [4815.0, 10.0], [4859.0, 10.0], [4863.0, 10.0], [4855.0, 10.0], [4671.0, 10.0], [4811.0, 10.0], [4615.0, 10.0], [4611.0, 10.0], [4707.0, 10.0], [4711.0, 10.0], [4715.0, 10.0], [4723.0, 10.0], [4719.0, 10.0], [4727.0, 10.0], [4735.0, 10.0], [4627.0, 10.0], [4623.0, 10.0], [4643.0, 10.0], [4631.0, 10.0], [4655.0, 10.0], [4663.0, 10.0], [4667.0, 10.0], [4931.0, 9.0], [4875.0, 9.0], [4959.0, 10.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5292.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3.0, "minX": 129.0, "maxY": 12.0, "series": [{"data": [[129.0, 4.0], [435.0, 3.0], [471.0, 11.0], [695.0, 3.0], [910.0, 3.0], [1212.0, 3.0], [1433.0, 3.0], [1540.0, 3.0], [1548.0, 3.0], [1925.0, 3.0], [1971.0, 3.0], [2246.0, 4.0], [2356.0, 4.0], [2716.0, 4.0], [3226.0, 4.0], [3306.0, 5.0], [3336.0, 4.0], [3422.0, 5.0], [3530.0, 4.0], [3550.0, 7.0], [3646.0, 5.0], [3644.0, 5.0], [3750.0, 6.0], [3740.0, 7.0], [3900.0, 9.0], [3862.0, 10.0], [3902.0, 11.0], [3970.0, 9.0], [4004.0, 8.0], [4022.0, 10.0], [4044.0, 11.0], [4312.0, 11.0], [4152.0, 9.0], [4280.0, 8.0], [4208.0, 7.0], [4108.0, 11.0], [4188.0, 11.0], [4176.0, 11.0], [4268.0, 11.0], [4256.0, 10.0], [4264.0, 11.0], [4252.0, 11.0], [4248.0, 10.0], [4308.0, 11.0], [4324.0, 11.0], [4320.0, 11.0], [4296.0, 11.0], [4288.0, 11.0], [4292.0, 11.0], [4304.0, 10.0], [4300.0, 11.0], [4328.0, 11.0], [4340.0, 10.0], [4344.0, 11.0], [4336.0, 10.0], [4484.0, 10.0], [4584.0, 10.0], [4388.0, 10.0], [4380.0, 10.0], [4376.0, 11.0], [4528.0, 10.0], [4536.0, 10.0], [4532.0, 10.0], [4540.0, 10.0], [4524.0, 10.0], [4520.0, 10.0], [4504.0, 10.0], [4512.0, 10.0], [4508.0, 10.0], [4488.0, 10.0], [4588.0, 10.0], [4600.0, 10.0], [4596.0, 10.0], [4592.0, 10.0], [4604.0, 10.0], [4480.0, 10.0], [4564.0, 10.0], [4572.0, 10.0], [4568.0, 10.0], [4576.0, 10.0], [4580.0, 10.0], [4556.0, 10.0], [4560.0, 10.0], [4548.0, 10.0], [4552.0, 10.0], [4408.0, 10.0], [4432.0, 10.0], [4416.0, 10.0], [4420.0, 11.0], [4424.0, 10.0], [4444.0, 11.0], [4440.0, 11.0], [4448.0, 10.0], [4460.0, 10.0], [4464.0, 10.0], [4468.0, 10.0], [4472.0, 10.0], [4392.0, 11.0], [4396.0, 10.0], [4372.0, 11.0], [4360.0, 10.0], [4368.0, 11.0], [4364.0, 10.0], [4476.0, 10.0], [4356.0, 10.0], [4648.0, 10.0], [4676.0, 10.0], [4672.0, 10.0], [4652.0, 10.0], [4656.0, 10.0], [4660.0, 10.0], [4632.0, 10.0], [4636.0, 10.0], [4640.0, 10.0], [4644.0, 10.0], [4784.0, 10.0], [4788.0, 10.0], [4796.0, 10.0], [4768.0, 10.0], [4756.0, 10.0], [4780.0, 10.0], [4772.0, 9.0], [4708.0, 10.0], [4716.0, 10.0], [4712.0, 10.0], [4688.0, 10.0], [4684.0, 10.0], [4680.0, 10.0], [4692.0, 10.0], [4696.0, 10.0], [4724.0, 10.0], [4620.0, 10.0], [4616.0, 10.0], [4608.0, 10.0], [4732.0, 10.0], [4612.0, 10.0], [4624.0, 10.0], [4736.0, 9.0], [4828.0, 9.0], [4816.0, 10.0], [4852.0, 10.0], [4668.0, 10.0], [4752.0, 10.0], [4744.0, 10.0], [4740.0, 10.0], [4900.0, 9.0], [4908.0, 9.0], [4876.0, 10.0], [5012.0, 9.0], [4884.0, 9.0], [5292.0, 9.0], [4309.0, 11.0], [4117.0, 11.0], [4245.0, 9.0], [4137.0, 11.0], [4201.0, 9.0], [4197.0, 11.0], [4193.0, 11.0], [4253.0, 11.0], [4269.0, 11.0], [4305.0, 11.0], [4313.0, 11.0], [4317.0, 10.0], [4325.0, 11.0], [4321.0, 11.0], [4293.0, 11.0], [4301.0, 11.0], [4337.0, 11.0], [4237.0, 11.0], [4345.0, 11.0], [4349.0, 10.0], [4165.0, 11.0], [4181.0, 11.0], [4493.0, 10.0], [4585.0, 10.0], [4401.0, 10.0], [4397.0, 10.0], [4529.0, 10.0], [4525.0, 10.0], [4537.0, 10.0], [4541.0, 10.0], [4533.0, 10.0], [4521.0, 10.0], [4489.0, 10.0], [4485.0, 10.0], [4497.0, 10.0], [4501.0, 10.0], [4517.0, 10.0], [4513.0, 10.0], [4509.0, 10.0], [4505.0, 10.0], [4561.0, 10.0], [4601.0, 10.0], [4597.0, 10.0], [4593.0, 10.0], [4589.0, 10.0], [4573.0, 10.0], [4577.0, 10.0], [4569.0, 10.0], [4565.0, 10.0], [4581.0, 10.0], [4605.0, 10.0], [4481.0, 10.0], [4413.0, 10.0], [4553.0, 10.0], [4557.0, 10.0], [4549.0, 10.0], [4545.0, 10.0], [4429.0, 10.0], [4441.0, 10.0], [4433.0, 11.0], [4473.0, 10.0], [4469.0, 10.0], [4461.0, 10.0], [4457.0, 10.0], [4453.0, 10.0], [4449.0, 10.0], [4445.0, 10.0], [4393.0, 10.0], [4389.0, 11.0], [4405.0, 10.0], [4409.0, 10.0], [4357.0, 11.0], [4353.0, 11.0], [4477.0, 10.0], [4381.0, 10.0], [4373.0, 10.0], [4377.0, 10.0], [4361.0, 11.0], [4369.0, 11.0], [4629.0, 10.0], [4701.0, 10.0], [4705.0, 10.0], [4697.0, 10.0], [4689.0, 10.0], [4677.0, 10.0], [4673.0, 10.0], [4685.0, 10.0], [4681.0, 10.0], [4753.0, 10.0], [4777.0, 10.0], [4797.0, 10.0], [4757.0, 10.0], [4761.0, 10.0], [4741.0, 10.0], [4749.0, 10.0], [4617.0, 10.0], [4621.0, 10.0], [4613.0, 10.0], [4709.0, 10.0], [4609.0, 10.0], [4721.0, 10.0], [4717.0, 10.0], [4633.0, 10.0], [4637.0, 10.0], [4641.0, 10.0], [4665.0, 10.0], [4809.0, 9.0], [4801.0, 10.0], [4853.0, 10.0], [4837.0, 9.0], [4661.0, 10.0], [4657.0, 10.0], [4649.0, 10.0], [4645.0, 10.0], [2049.0, 4.0], [2993.0, 4.0], [3411.0, 4.0], [3417.0, 5.0], [3547.0, 4.0], [3543.0, 4.0], [3545.0, 6.0], [3577.0, 6.0], [3611.0, 4.0], [3743.0, 7.0], [3775.0, 7.0], [3773.0, 7.0], [3963.0, 7.0], [4071.0, 11.0], [4077.0, 7.0], [3973.0, 8.0], [3995.0, 10.0], [4047.0, 8.0], [4053.0, 11.0], [4027.0, 10.0], [4029.0, 11.0], [4031.0, 11.0], [4079.0, 9.0], [4017.0, 12.0], [4134.0, 11.0], [4286.0, 11.0], [4282.0, 10.0], [4206.0, 7.0], [4194.0, 11.0], [4218.0, 11.0], [4222.0, 11.0], [4130.0, 11.0], [4186.0, 11.0], [4254.0, 11.0], [4274.0, 11.0], [4326.0, 10.0], [4310.0, 11.0], [4322.0, 11.0], [4318.0, 11.0], [4158.0, 11.0], [4290.0, 10.0], [4330.0, 10.5], [4338.0, 11.0], [4342.0, 10.0], [4238.0, 11.0], [4350.0, 11.0], [4346.0, 11.0], [4162.0, 10.0], [4182.0, 11.0], [4494.0, 10.0], [4390.0, 10.0], [4386.0, 10.0], [4374.0, 11.0], [4382.0, 10.0], [4538.0, 10.0], [4542.0, 10.0], [4534.0, 10.0], [4530.0, 10.0], [4526.0, 10.0], [4522.0, 10.0], [4518.0, 11.0], [4498.0, 10.0], [4506.0, 10.0], [4510.0, 10.0], [4514.0, 10.0], [4490.0, 10.0], [4482.0, 10.0], [4594.0, 10.0], [4590.0, 10.0], [4586.0, 10.0], [4598.0, 10.0], [4602.0, 10.0], [4606.0, 10.0], [4566.0, 10.0], [4582.0, 10.0], [4574.0, 10.0], [4570.0, 10.0], [4550.0, 10.0], [4562.0, 10.0], [4558.0, 10.0], [4554.0, 10.0], [4414.0, 10.0], [4546.0, 10.0], [4410.0, 11.0], [4486.0, 10.0], [4438.0, 10.0], [4426.0, 11.0], [4430.0, 10.0], [4418.0, 10.0], [4422.0, 11.0], [4442.0, 10.0], [4450.0, 10.0], [4454.0, 10.0], [4458.0, 10.0], [4470.0, 10.0], [4474.0, 10.0], [4466.0, 11.0], [4406.0, 11.0], [4402.0, 11.0], [4398.0, 11.0], [4370.0, 10.0], [4478.0, 10.0], [4354.0, 11.0], [4358.0, 11.0], [4638.0, 10.0], [4702.0, 10.0], [4698.0, 10.0], [4694.0, 10.0], [4690.0, 10.0], [4686.0, 10.0], [4678.0, 10.0], [4642.0, 10.0], [4654.0, 10.0], [4626.0, 10.0], [4634.0, 10.0], [4630.0, 10.0], [4658.0, 10.0], [4726.0, 10.0], [4714.0, 10.0], [4710.0, 10.0], [4718.0, 10.0], [4722.0, 10.0], [4614.0, 10.0], [4610.0, 10.0], [4834.0, 9.0], [4798.0, 9.0], [4774.0, 10.0], [4762.0, 10.0], [4758.0, 10.0], [4750.0, 10.0], [4778.0, 10.0], [4794.0, 10.0], [4810.0, 10.0], [4670.0, 10.0], [4806.0, 10.0], [4662.0, 10.0], [4666.0, 10.0], [4958.0, 9.0], [4938.0, 9.0], [4982.0, 9.0], [4922.0, 9.0], [5030.0, 9.0], [5086.0, 9.0], [4311.0, 11.0], [4127.0, 11.0], [4187.0, 11.0], [4255.0, 10.0], [4287.0, 11.0], [4307.0, 11.0], [4303.0, 11.0], [4323.0, 11.0], [4155.0, 11.0], [4159.0, 11.0], [4339.0, 11.0], [4335.0, 10.0], [4347.0, 10.0], [4343.0, 11.0], [4175.0, 11.0], [4583.0, 10.0], [4403.0, 11.0], [4535.0, 10.0], [4531.0, 10.0], [4543.0, 10.0], [4539.0, 10.0], [4487.0, 10.0], [4495.0, 10.0], [4491.0, 10.0], [4519.0, 10.0], [4527.0, 10.0], [4515.0, 10.0], [4511.0, 10.0], [4507.0, 11.0], [4503.0, 10.0], [4499.0, 10.0], [4587.0, 10.0], [4595.0, 10.0], [4599.0, 10.0], [4591.0, 11.0], [4575.0, 10.0], [4579.0, 10.0], [4567.0, 10.0], [4571.0, 10.0], [4603.0, 10.0], [4607.0, 10.0], [4483.0, 10.0], [4551.0, 10.0], [4559.0, 10.0], [4563.0, 10.0], [4419.0, 10.0], [4471.0, 10.0], [4475.0, 10.0], [4467.0, 10.0], [4463.0, 10.0], [4451.0, 10.0], [4447.0, 10.0], [4439.0, 10.0], [4435.0, 10.0], [4391.0, 11.0], [4411.0, 10.0], [4407.0, 11.0], [4547.0, 10.0], [4479.0, 10.0], [4375.0, 11.0], [4383.0, 10.0], [4379.0, 10.0], [4371.0, 11.0], [4355.0, 11.0], [4387.0, 11.0], [4647.0, 10.0], [4739.0, 10.0], [4619.0, 10.0], [4695.0, 10.0], [4687.0, 10.0], [4691.0, 10.0], [4683.0, 10.0], [4675.0, 10.0], [4759.0, 10.0], [4779.0, 10.0], [4743.0, 10.0], [4819.0, 10.0], [4815.0, 10.0], [4859.0, 10.0], [4863.0, 10.0], [4855.0, 10.0], [4671.0, 10.0], [4811.0, 10.0], [4615.0, 10.0], [4611.0, 10.0], [4707.0, 10.0], [4711.0, 10.0], [4715.0, 10.0], [4723.0, 10.0], [4719.0, 10.0], [4727.0, 10.0], [4735.0, 10.0], [4627.0, 10.0], [4623.0, 10.0], [4643.0, 10.0], [4631.0, 10.0], [4655.0, 10.0], [4663.0, 10.0], [4667.0, 10.0], [4931.0, 9.0], [4875.0, 9.0], [4959.0, 10.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5292.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 163.88333333333333, "minX": 1.60138722E12, "maxY": 4655.166666666667, "series": [{"data": [[1.6013874E12, 4405.25], [1.60138806E12, 4655.166666666667], [1.601388E12, 4620.833333333333], [1.6013877E12, 4508.616666666667], [1.60138812E12, 3912.8], [1.60138782E12, 4542.016666666666], [1.60138776E12, 4528.633333333333], [1.60138746E12, 4496.45], [1.60138788E12, 4502.116666666667], [1.60138758E12, 4533.05], [1.60138722E12, 163.88333333333333], [1.60138752E12, 4537.383333333333], [1.60138734E12, 4382.383333333333], [1.60138764E12, 4542.85], [1.60138728E12, 3804.25], [1.60138794E12, 4604.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138812E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 163.78333333333333, "minX": 1.60138722E12, "maxY": 4655.183333333333, "series": [{"data": [[1.6013874E12, 4405.233333333334], [1.60138806E12, 4655.183333333333], [1.601388E12, 4620.833333333333], [1.6013877E12, 4508.616666666667], [1.60138812E12, 3913.616666666667], [1.60138782E12, 4542.033333333334], [1.60138776E12, 4528.633333333333], [1.60138746E12, 4496.45], [1.60138788E12, 4502.116666666667], [1.60138758E12, 4533.05], [1.60138722E12, 163.78333333333333], [1.60138752E12, 4537.383333333333], [1.60138734E12, 4382.233333333334], [1.60138764E12, 4542.85], [1.60138728E12, 3803.6833333333334], [1.60138794E12, 4604.283333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138812E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 163.78333333333333, "minX": 1.60138722E12, "maxY": 4655.183333333333, "series": [{"data": [[1.6013874E12, 4405.233333333334], [1.60138806E12, 4655.183333333333], [1.601388E12, 4620.833333333333], [1.6013877E12, 4508.616666666667], [1.60138812E12, 3913.616666666667], [1.60138782E12, 4542.033333333334], [1.60138776E12, 4528.633333333333], [1.60138746E12, 4496.45], [1.60138788E12, 4502.116666666667], [1.60138758E12, 4533.05], [1.60138722E12, 163.78333333333333], [1.60138752E12, 4537.383333333333], [1.60138734E12, 4382.233333333334], [1.60138764E12, 4542.85], [1.60138728E12, 3803.6833333333334], [1.60138794E12, 4604.283333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138812E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 163.78333333333333, "minX": 1.60138722E12, "maxY": 4655.183333333333, "series": [{"data": [[1.6013874E12, 4405.233333333334], [1.60138806E12, 4655.183333333333], [1.601388E12, 4620.833333333333], [1.6013877E12, 4508.616666666667], [1.60138812E12, 3913.616666666667], [1.60138782E12, 4542.033333333334], [1.60138776E12, 4528.633333333333], [1.60138746E12, 4496.45], [1.60138788E12, 4502.116666666667], [1.60138758E12, 4533.05], [1.60138722E12, 163.78333333333333], [1.60138752E12, 4537.383333333333], [1.60138734E12, 4382.233333333334], [1.60138764E12, 4542.85], [1.60138728E12, 3803.6833333333334], [1.60138794E12, 4604.283333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138812E12, "title": "Total Transactions Per Second"}},
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

