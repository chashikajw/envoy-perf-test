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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 609.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 3.0], [0.9, 3.0], [1.0, 3.0], [1.1, 3.0], [1.2, 3.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 4.0], [3.6, 4.0], [3.7, 4.0], [3.8, 4.0], [3.9, 4.0], [4.0, 4.0], [4.1, 4.0], [4.2, 4.0], [4.3, 4.0], [4.4, 4.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 4.0], [5.4, 4.0], [5.5, 4.0], [5.6, 4.0], [5.7, 4.0], [5.8, 4.0], [5.9, 4.0], [6.0, 4.0], [6.1, 4.0], [6.2, 4.0], [6.3, 4.0], [6.4, 4.0], [6.5, 4.0], [6.6, 4.0], [6.7, 4.0], [6.8, 4.0], [6.9, 4.0], [7.0, 4.0], [7.1, 4.0], [7.2, 4.0], [7.3, 4.0], [7.4, 4.0], [7.5, 4.0], [7.6, 4.0], [7.7, 4.0], [7.8, 4.0], [7.9, 4.0], [8.0, 4.0], [8.1, 4.0], [8.2, 4.0], [8.3, 4.0], [8.4, 4.0], [8.5, 4.0], [8.6, 4.0], [8.7, 4.0], [8.8, 4.0], [8.9, 4.0], [9.0, 4.0], [9.1, 4.0], [9.2, 4.0], [9.3, 4.0], [9.4, 4.0], [9.5, 4.0], [9.6, 4.0], [9.7, 5.0], [9.8, 5.0], [9.9, 5.0], [10.0, 5.0], [10.1, 5.0], [10.2, 5.0], [10.3, 5.0], [10.4, 5.0], [10.5, 5.0], [10.6, 5.0], [10.7, 5.0], [10.8, 5.0], [10.9, 5.0], [11.0, 5.0], [11.1, 5.0], [11.2, 5.0], [11.3, 5.0], [11.4, 5.0], [11.5, 5.0], [11.6, 5.0], [11.7, 5.0], [11.8, 5.0], [11.9, 5.0], [12.0, 5.0], [12.1, 5.0], [12.2, 5.0], [12.3, 5.0], [12.4, 5.0], [12.5, 5.0], [12.6, 5.0], [12.7, 5.0], [12.8, 5.0], [12.9, 5.0], [13.0, 5.0], [13.1, 5.0], [13.2, 5.0], [13.3, 5.0], [13.4, 5.0], [13.5, 5.0], [13.6, 5.0], [13.7, 5.0], [13.8, 5.0], [13.9, 5.0], [14.0, 5.0], [14.1, 5.0], [14.2, 5.0], [14.3, 5.0], [14.4, 5.0], [14.5, 5.0], [14.6, 5.0], [14.7, 5.0], [14.8, 5.0], [14.9, 5.0], [15.0, 5.0], [15.1, 5.0], [15.2, 5.0], [15.3, 5.0], [15.4, 5.0], [15.5, 5.0], [15.6, 5.0], [15.7, 5.0], [15.8, 5.0], [15.9, 5.0], [16.0, 5.0], [16.1, 5.0], [16.2, 5.0], [16.3, 5.0], [16.4, 5.0], [16.5, 5.0], [16.6, 5.0], [16.7, 5.0], [16.8, 5.0], [16.9, 5.0], [17.0, 5.0], [17.1, 5.0], [17.2, 5.0], [17.3, 5.0], [17.4, 5.0], [17.5, 5.0], [17.6, 5.0], [17.7, 5.0], [17.8, 5.0], [17.9, 5.0], [18.0, 5.0], [18.1, 5.0], [18.2, 5.0], [18.3, 5.0], [18.4, 5.0], [18.5, 5.0], [18.6, 5.0], [18.7, 5.0], [18.8, 5.0], [18.9, 5.0], [19.0, 5.0], [19.1, 5.0], [19.2, 5.0], [19.3, 5.0], [19.4, 5.0], [19.5, 6.0], [19.6, 6.0], [19.7, 6.0], [19.8, 6.0], [19.9, 6.0], [20.0, 6.0], [20.1, 6.0], [20.2, 6.0], [20.3, 6.0], [20.4, 6.0], [20.5, 6.0], [20.6, 6.0], [20.7, 6.0], [20.8, 6.0], [20.9, 6.0], [21.0, 6.0], [21.1, 6.0], [21.2, 6.0], [21.3, 6.0], [21.4, 6.0], [21.5, 6.0], [21.6, 6.0], [21.7, 6.0], [21.8, 6.0], [21.9, 6.0], [22.0, 6.0], [22.1, 6.0], [22.2, 6.0], [22.3, 6.0], [22.4, 6.0], [22.5, 6.0], [22.6, 6.0], [22.7, 6.0], [22.8, 6.0], [22.9, 6.0], [23.0, 6.0], [23.1, 6.0], [23.2, 6.0], [23.3, 6.0], [23.4, 6.0], [23.5, 6.0], [23.6, 6.0], [23.7, 6.0], [23.8, 6.0], [23.9, 6.0], [24.0, 6.0], [24.1, 6.0], [24.2, 6.0], [24.3, 6.0], [24.4, 6.0], [24.5, 6.0], [24.6, 6.0], [24.7, 6.0], [24.8, 6.0], [24.9, 6.0], [25.0, 6.0], [25.1, 6.0], [25.2, 6.0], [25.3, 6.0], [25.4, 6.0], [25.5, 6.0], [25.6, 6.0], [25.7, 6.0], [25.8, 6.0], [25.9, 6.0], [26.0, 6.0], [26.1, 6.0], [26.2, 6.0], [26.3, 6.0], [26.4, 6.0], [26.5, 6.0], [26.6, 6.0], [26.7, 6.0], [26.8, 6.0], [26.9, 6.0], [27.0, 6.0], [27.1, 6.0], [27.2, 6.0], [27.3, 6.0], [27.4, 6.0], [27.5, 6.0], [27.6, 6.0], [27.7, 6.0], [27.8, 6.0], [27.9, 6.0], [28.0, 6.0], [28.1, 6.0], [28.2, 6.0], [28.3, 6.0], [28.4, 6.0], [28.5, 6.0], [28.6, 6.0], [28.7, 6.0], [28.8, 6.0], [28.9, 6.0], [29.0, 6.0], [29.1, 6.0], [29.2, 6.0], [29.3, 6.0], [29.4, 6.0], [29.5, 6.0], [29.6, 6.0], [29.7, 6.0], [29.8, 6.0], [29.9, 6.0], [30.0, 6.0], [30.1, 6.0], [30.2, 6.0], [30.3, 6.0], [30.4, 6.0], [30.5, 6.0], [30.6, 6.0], [30.7, 6.0], [30.8, 6.0], [30.9, 6.0], [31.0, 6.0], [31.1, 6.0], [31.2, 6.0], [31.3, 7.0], [31.4, 7.0], [31.5, 7.0], [31.6, 7.0], [31.7, 7.0], [31.8, 7.0], [31.9, 7.0], [32.0, 7.0], [32.1, 7.0], [32.2, 7.0], [32.3, 7.0], [32.4, 7.0], [32.5, 7.0], [32.6, 7.0], [32.7, 7.0], [32.8, 7.0], [32.9, 7.0], [33.0, 7.0], [33.1, 7.0], [33.2, 7.0], [33.3, 7.0], [33.4, 7.0], [33.5, 7.0], [33.6, 7.0], [33.7, 7.0], [33.8, 7.0], [33.9, 7.0], [34.0, 7.0], [34.1, 7.0], [34.2, 7.0], [34.3, 7.0], [34.4, 7.0], [34.5, 7.0], [34.6, 7.0], [34.7, 7.0], [34.8, 7.0], [34.9, 7.0], [35.0, 7.0], [35.1, 7.0], [35.2, 7.0], [35.3, 7.0], [35.4, 7.0], [35.5, 7.0], [35.6, 7.0], [35.7, 7.0], [35.8, 7.0], [35.9, 7.0], [36.0, 7.0], [36.1, 7.0], [36.2, 7.0], [36.3, 7.0], [36.4, 7.0], [36.5, 7.0], [36.6, 7.0], [36.7, 7.0], [36.8, 7.0], [36.9, 7.0], [37.0, 7.0], [37.1, 7.0], [37.2, 7.0], [37.3, 7.0], [37.4, 7.0], [37.5, 7.0], [37.6, 7.0], [37.7, 7.0], [37.8, 7.0], [37.9, 7.0], [38.0, 7.0], [38.1, 7.0], [38.2, 7.0], [38.3, 7.0], [38.4, 7.0], [38.5, 7.0], [38.6, 7.0], [38.7, 7.0], [38.8, 7.0], [38.9, 7.0], [39.0, 7.0], [39.1, 7.0], [39.2, 7.0], [39.3, 7.0], [39.4, 7.0], [39.5, 7.0], [39.6, 7.0], [39.7, 7.0], [39.8, 7.0], [39.9, 7.0], [40.0, 7.0], [40.1, 7.0], [40.2, 7.0], [40.3, 7.0], [40.4, 7.0], [40.5, 7.0], [40.6, 7.0], [40.7, 7.0], [40.8, 7.0], [40.9, 7.0], [41.0, 7.0], [41.1, 7.0], [41.2, 7.0], [41.3, 7.0], [41.4, 7.0], [41.5, 7.0], [41.6, 7.0], [41.7, 7.0], [41.8, 7.0], [41.9, 7.0], [42.0, 7.0], [42.1, 7.0], [42.2, 7.0], [42.3, 7.0], [42.4, 7.0], [42.5, 7.0], [42.6, 7.0], [42.7, 7.0], [42.8, 7.0], [42.9, 7.0], [43.0, 7.0], [43.1, 7.0], [43.2, 7.0], [43.3, 8.0], [43.4, 8.0], [43.5, 8.0], [43.6, 8.0], [43.7, 8.0], [43.8, 8.0], [43.9, 8.0], [44.0, 8.0], [44.1, 8.0], [44.2, 8.0], [44.3, 8.0], [44.4, 8.0], [44.5, 8.0], [44.6, 8.0], [44.7, 8.0], [44.8, 8.0], [44.9, 8.0], [45.0, 8.0], [45.1, 8.0], [45.2, 8.0], [45.3, 8.0], [45.4, 8.0], [45.5, 8.0], [45.6, 8.0], [45.7, 8.0], [45.8, 8.0], [45.9, 8.0], [46.0, 8.0], [46.1, 8.0], [46.2, 8.0], [46.3, 8.0], [46.4, 8.0], [46.5, 8.0], [46.6, 8.0], [46.7, 8.0], [46.8, 8.0], [46.9, 8.0], [47.0, 8.0], [47.1, 8.0], [47.2, 8.0], [47.3, 8.0], [47.4, 8.0], [47.5, 8.0], [47.6, 8.0], [47.7, 8.0], [47.8, 8.0], [47.9, 8.0], [48.0, 8.0], [48.1, 8.0], [48.2, 8.0], [48.3, 8.0], [48.4, 8.0], [48.5, 8.0], [48.6, 8.0], [48.7, 8.0], [48.8, 8.0], [48.9, 8.0], [49.0, 8.0], [49.1, 8.0], [49.2, 8.0], [49.3, 8.0], [49.4, 8.0], [49.5, 8.0], [49.6, 8.0], [49.7, 8.0], [49.8, 8.0], [49.9, 8.0], [50.0, 8.0], [50.1, 8.0], [50.2, 8.0], [50.3, 8.0], [50.4, 8.0], [50.5, 8.0], [50.6, 8.0], [50.7, 8.0], [50.8, 8.0], [50.9, 8.0], [51.0, 8.0], [51.1, 8.0], [51.2, 8.0], [51.3, 8.0], [51.4, 8.0], [51.5, 8.0], [51.6, 8.0], [51.7, 8.0], [51.8, 8.0], [51.9, 8.0], [52.0, 8.0], [52.1, 8.0], [52.2, 8.0], [52.3, 8.0], [52.4, 8.0], [52.5, 8.0], [52.6, 8.0], [52.7, 8.0], [52.8, 8.0], [52.9, 8.0], [53.0, 8.0], [53.1, 8.0], [53.2, 8.0], [53.3, 8.0], [53.4, 8.0], [53.5, 8.0], [53.6, 8.0], [53.7, 8.0], [53.8, 8.0], [53.9, 8.0], [54.0, 8.0], [54.1, 9.0], [54.2, 9.0], [54.3, 9.0], [54.4, 9.0], [54.5, 9.0], [54.6, 9.0], [54.7, 9.0], [54.8, 9.0], [54.9, 9.0], [55.0, 9.0], [55.1, 9.0], [55.2, 9.0], [55.3, 9.0], [55.4, 9.0], [55.5, 9.0], [55.6, 9.0], [55.7, 9.0], [55.8, 9.0], [55.9, 9.0], [56.0, 9.0], [56.1, 9.0], [56.2, 9.0], [56.3, 9.0], [56.4, 9.0], [56.5, 9.0], [56.6, 9.0], [56.7, 9.0], [56.8, 9.0], [56.9, 9.0], [57.0, 9.0], [57.1, 9.0], [57.2, 9.0], [57.3, 9.0], [57.4, 9.0], [57.5, 9.0], [57.6, 9.0], [57.7, 9.0], [57.8, 9.0], [57.9, 9.0], [58.0, 9.0], [58.1, 9.0], [58.2, 9.0], [58.3, 9.0], [58.4, 9.0], [58.5, 9.0], [58.6, 9.0], [58.7, 9.0], [58.8, 9.0], [58.9, 9.0], [59.0, 9.0], [59.1, 9.0], [59.2, 9.0], [59.3, 9.0], [59.4, 9.0], [59.5, 9.0], [59.6, 9.0], [59.7, 9.0], [59.8, 9.0], [59.9, 9.0], [60.0, 9.0], [60.1, 9.0], [60.2, 9.0], [60.3, 9.0], [60.4, 9.0], [60.5, 9.0], [60.6, 9.0], [60.7, 9.0], [60.8, 9.0], [60.9, 9.0], [61.0, 9.0], [61.1, 9.0], [61.2, 9.0], [61.3, 9.0], [61.4, 9.0], [61.5, 9.0], [61.6, 9.0], [61.7, 9.0], [61.8, 9.0], [61.9, 9.0], [62.0, 9.0], [62.1, 9.0], [62.2, 9.0], [62.3, 9.0], [62.4, 9.0], [62.5, 9.0], [62.6, 9.0], [62.7, 9.0], [62.8, 9.0], [62.9, 9.0], [63.0, 9.0], [63.1, 9.0], [63.2, 9.0], [63.3, 10.0], [63.4, 10.0], [63.5, 10.0], [63.6, 10.0], [63.7, 10.0], [63.8, 10.0], [63.9, 10.0], [64.0, 10.0], [64.1, 10.0], [64.2, 10.0], [64.3, 10.0], [64.4, 10.0], [64.5, 10.0], [64.6, 10.0], [64.7, 10.0], [64.8, 10.0], [64.9, 10.0], [65.0, 10.0], [65.1, 10.0], [65.2, 10.0], [65.3, 10.0], [65.4, 10.0], [65.5, 10.0], [65.6, 10.0], [65.7, 10.0], [65.8, 10.0], [65.9, 10.0], [66.0, 10.0], [66.1, 10.0], [66.2, 10.0], [66.3, 10.0], [66.4, 10.0], [66.5, 10.0], [66.6, 10.0], [66.7, 10.0], [66.8, 10.0], [66.9, 10.0], [67.0, 10.0], [67.1, 10.0], [67.2, 10.0], [67.3, 10.0], [67.4, 10.0], [67.5, 10.0], [67.6, 10.0], [67.7, 10.0], [67.8, 10.0], [67.9, 10.0], [68.0, 10.0], [68.1, 10.0], [68.2, 10.0], [68.3, 10.0], [68.4, 10.0], [68.5, 10.0], [68.6, 10.0], [68.7, 10.0], [68.8, 10.0], [68.9, 10.0], [69.0, 10.0], [69.1, 10.0], [69.2, 10.0], [69.3, 10.0], [69.4, 10.0], [69.5, 10.0], [69.6, 10.0], [69.7, 10.0], [69.8, 10.0], [69.9, 10.0], [70.0, 10.0], [70.1, 10.0], [70.2, 10.0], [70.3, 10.0], [70.4, 10.0], [70.5, 10.0], [70.6, 10.0], [70.7, 11.0], [70.8, 11.0], [70.9, 11.0], [71.0, 11.0], [71.1, 11.0], [71.2, 11.0], [71.3, 11.0], [71.4, 11.0], [71.5, 11.0], [71.6, 11.0], [71.7, 11.0], [71.8, 11.0], [71.9, 11.0], [72.0, 11.0], [72.1, 11.0], [72.2, 11.0], [72.3, 11.0], [72.4, 11.0], [72.5, 11.0], [72.6, 11.0], [72.7, 11.0], [72.8, 11.0], [72.9, 11.0], [73.0, 11.0], [73.1, 11.0], [73.2, 11.0], [73.3, 11.0], [73.4, 11.0], [73.5, 11.0], [73.6, 11.0], [73.7, 11.0], [73.8, 11.0], [73.9, 11.0], [74.0, 11.0], [74.1, 11.0], [74.2, 11.0], [74.3, 11.0], [74.4, 11.0], [74.5, 11.0], [74.6, 11.0], [74.7, 11.0], [74.8, 11.0], [74.9, 11.0], [75.0, 11.0], [75.1, 11.0], [75.2, 11.0], [75.3, 11.0], [75.4, 11.0], [75.5, 11.0], [75.6, 11.0], [75.7, 11.0], [75.8, 11.0], [75.9, 11.0], [76.0, 11.0], [76.1, 11.0], [76.2, 11.0], [76.3, 11.0], [76.4, 11.0], [76.5, 12.0], [76.6, 12.0], [76.7, 12.0], [76.8, 12.0], [76.9, 12.0], [77.0, 12.0], [77.1, 12.0], [77.2, 12.0], [77.3, 12.0], [77.4, 12.0], [77.5, 12.0], [77.6, 12.0], [77.7, 12.0], [77.8, 12.0], [77.9, 12.0], [78.0, 12.0], [78.1, 12.0], [78.2, 12.0], [78.3, 12.0], [78.4, 12.0], [78.5, 12.0], [78.6, 12.0], [78.7, 12.0], [78.8, 12.0], [78.9, 12.0], [79.0, 12.0], [79.1, 12.0], [79.2, 12.0], [79.3, 12.0], [79.4, 12.0], [79.5, 12.0], [79.6, 12.0], [79.7, 12.0], [79.8, 12.0], [79.9, 12.0], [80.0, 12.0], [80.1, 12.0], [80.2, 12.0], [80.3, 12.0], [80.4, 12.0], [80.5, 12.0], [80.6, 12.0], [80.7, 12.0], [80.8, 12.0], [80.9, 12.0], [81.0, 12.0], [81.1, 13.0], [81.2, 13.0], [81.3, 13.0], [81.4, 13.0], [81.5, 13.0], [81.6, 13.0], [81.7, 13.0], [81.8, 13.0], [81.9, 13.0], [82.0, 13.0], [82.1, 13.0], [82.2, 13.0], [82.3, 13.0], [82.4, 13.0], [82.5, 13.0], [82.6, 13.0], [82.7, 13.0], [82.8, 13.0], [82.9, 13.0], [83.0, 13.0], [83.1, 13.0], [83.2, 13.0], [83.3, 13.0], [83.4, 13.0], [83.5, 13.0], [83.6, 13.0], [83.7, 13.0], [83.8, 13.0], [83.9, 13.0], [84.0, 13.0], [84.1, 13.0], [84.2, 13.0], [84.3, 13.0], [84.4, 13.0], [84.5, 13.0], [84.6, 14.0], [84.7, 14.0], [84.8, 14.0], [84.9, 14.0], [85.0, 14.0], [85.1, 14.0], [85.2, 14.0], [85.3, 14.0], [85.4, 14.0], [85.5, 14.0], [85.6, 14.0], [85.7, 14.0], [85.8, 14.0], [85.9, 14.0], [86.0, 14.0], [86.1, 14.0], [86.2, 14.0], [86.3, 14.0], [86.4, 14.0], [86.5, 14.0], [86.6, 14.0], [86.7, 14.0], [86.8, 14.0], [86.9, 14.0], [87.0, 14.0], [87.1, 14.0], [87.2, 14.0], [87.3, 15.0], [87.4, 15.0], [87.5, 15.0], [87.6, 15.0], [87.7, 15.0], [87.8, 15.0], [87.9, 15.0], [88.0, 15.0], [88.1, 15.0], [88.2, 15.0], [88.3, 15.0], [88.4, 15.0], [88.5, 15.0], [88.6, 15.0], [88.7, 15.0], [88.8, 15.0], [88.9, 15.0], [89.0, 15.0], [89.1, 15.0], [89.2, 15.0], [89.3, 15.0], [89.4, 16.0], [89.5, 16.0], [89.6, 16.0], [89.7, 16.0], [89.8, 16.0], [89.9, 16.0], [90.0, 16.0], [90.1, 16.0], [90.2, 16.0], [90.3, 16.0], [90.4, 16.0], [90.5, 16.0], [90.6, 16.0], [90.7, 16.0], [90.8, 16.0], [90.9, 16.0], [91.0, 16.0], [91.1, 16.0], [91.2, 17.0], [91.3, 17.0], [91.4, 17.0], [91.5, 17.0], [91.6, 17.0], [91.7, 17.0], [91.8, 17.0], [91.9, 17.0], [92.0, 17.0], [92.1, 17.0], [92.2, 17.0], [92.3, 17.0], [92.4, 17.0], [92.5, 17.0], [92.6, 18.0], [92.7, 18.0], [92.8, 18.0], [92.9, 18.0], [93.0, 18.0], [93.1, 18.0], [93.2, 18.0], [93.3, 18.0], [93.4, 18.0], [93.5, 18.0], [93.6, 18.0], [93.7, 18.0], [93.8, 18.0], [93.9, 19.0], [94.0, 19.0], [94.1, 19.0], [94.2, 19.0], [94.3, 19.0], [94.4, 19.0], [94.5, 19.0], [94.6, 19.0], [94.7, 19.0], [94.8, 19.0], [94.9, 20.0], [95.0, 20.0], [95.1, 20.0], [95.2, 20.0], [95.3, 20.0], [95.4, 20.0], [95.5, 20.0], [95.6, 20.0], [95.7, 20.0], [95.8, 21.0], [95.9, 21.0], [96.0, 21.0], [96.1, 21.0], [96.2, 21.0], [96.3, 21.0], [96.4, 21.0], [96.5, 21.0], [96.6, 22.0], [96.7, 22.0], [96.8, 22.0], [96.9, 22.0], [97.0, 22.0], [97.1, 22.0], [97.2, 23.0], [97.3, 23.0], [97.4, 23.0], [97.5, 23.0], [97.6, 23.0], [97.7, 23.0], [97.8, 24.0], [97.9, 24.0], [98.0, 24.0], [98.1, 24.0], [98.2, 24.0], [98.3, 25.0], [98.4, 25.0], [98.5, 25.0], [98.6, 25.0], [98.7, 26.0], [98.8, 26.0], [98.9, 26.0], [99.0, 27.0], [99.1, 27.0], [99.2, 28.0], [99.3, 28.0], [99.4, 29.0], [99.5, 29.0], [99.6, 30.0], [99.7, 31.0], [99.8, 32.0], [99.9, 35.0], [100.0, 609.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4617687.0, "series": [{"data": [[0.0, 4617687.0], [600.0, 1.0], [200.0, 26.0], [100.0, 25.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4617738.0, "series": [{"data": [[0.0, 4617738.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.071622649711979, "minX": 1.60138596E12, "maxY": 50.0, "series": [{"data": [[1.60138614E12, 50.0], [1.60138644E12, 50.0], [1.60138674E12, 50.0], [1.60138608E12, 50.0], [1.60138686E12, 49.99367326069844], [1.6013862E12, 50.0], [1.6013865E12, 50.0], [1.6013868E12, 50.0], [1.60138662E12, 50.0], [1.60138596E12, 5.071622649711979], [1.60138626E12, 50.0], [1.60138656E12, 50.0], [1.60138638E12, 50.0], [1.60138668E12, 50.0], [1.60138602E12, 34.018638625006176], [1.60138632E12, 50.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138686E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3.0184404636459443, "minX": 1.0, "maxY": 9.89423076923077, "series": [{"data": [[2.0, 3.7755443886097186], [3.0, 3.4399585921325055], [4.0, 3.123809523809532], [5.0, 3.0184404636459443], [6.0, 3.319672131147538], [7.0, 3.3311475409836016], [8.0, 3.4894578313253084], [9.0, 3.5649063032368002], [10.0, 3.5270311084264643], [11.0, 3.7861967694566827], [12.0, 3.78218884120171], [13.0, 3.5550650557620815], [14.0, 3.7252150294250708], [15.0, 3.7706558773424175], [16.0, 4.127538763922252], [17.0, 4.159749739311775], [18.0, 4.734267289303967], [19.0, 5.019406647334379], [20.0, 4.981944152844836], [21.0, 5.410652173913028], [22.0, 5.430058284762683], [23.0, 4.997241632953279], [24.0, 5.636777513855899], [25.0, 5.6807980049875555], [26.0, 5.51665472779368], [27.0, 5.687343582409708], [28.0, 5.838500613067104], [29.0, 5.916867885477741], [30.0, 6.229221347331581], [31.0, 6.6834480260775315], [32.0, 6.789049919484679], [33.0, 6.6273616734142955], [34.0, 6.931492842535777], [35.0, 6.817358366271435], [36.0, 7.420444750905006], [37.0, 7.60670468290997], [38.0, 7.676545300592702], [39.0, 7.708831341301465], [40.0, 8.057556378323818], [41.0, 8.244977207496216], [42.0, 8.33194675540765], [43.0, 8.212554182051699], [44.0, 8.461550888529889], [45.0, 8.71145410235584], [46.0, 8.619958880278377], [47.0, 8.99067973646152], [48.0, 9.136319845857447], [49.0, 9.504213938411691], [50.0, 9.493623844178897], [1.0, 9.89423076923077]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[48.98002377354021, 9.3364731094583]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 31743.516666666666, "minX": 1.60138596E12, "maxY": 6657128.8, "series": [{"data": [[1.60138614E12, 1079158.75], [1.60138644E12, 1084844.1], [1.60138674E12, 1106066.15], [1.60138608E12, 1077141.9], [1.60138686E12, 938017.55], [1.6013862E12, 1083923.9166666667], [1.6013865E12, 1071086.45], [1.6013868E12, 1076411.8333333333], [1.60138662E12, 1074177.35], [1.60138596E12, 31743.516666666666], [1.60138626E12, 1066151.4666666666], [1.60138656E12, 1073441.3666666667], [1.60138638E12, 1091891.0333333334], [1.60138668E12, 1080127.55], [1.60138602E12, 927203.2833333333], [1.60138632E12, 1071219.9666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60138614E12, 6495273.4], [1.60138644E12, 6529455.333333333], [1.60138674E12, 6657128.8], [1.60138608E12, 6483083.366666666], [1.60138686E12, 5645667.533333333], [1.6013862E12, 6523952.166666667], [1.6013865E12, 6446637.866666666], [1.6013868E12, 6478660.066666666], [1.60138662E12, 6465182.5], [1.60138596E12, 191074.1], [1.60138626E12, 6416983.066666666], [1.60138656E12, 6460759.2], [1.60138638E12, 6571840.1], [1.60138668E12, 6501005.0], [1.60138602E12, 5580896.3], [1.60138632E12, 6447447.766666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138686E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3.362786653624607, "minX": 1.60138596E12, "maxY": 9.622247608445184, "series": [{"data": [[1.60138614E12, 9.508245570283908], [1.60138644E12, 9.46448699192156], [1.60138674E12, 9.277803773302418], [1.60138608E12, 9.533660914772181], [1.60138686E12, 9.437350567567233], [1.6013862E12, 9.472168197227395], [1.6013865E12, 9.5799369910316], [1.6013868E12, 9.479770750126729], [1.60138662E12, 9.552628282341526], [1.60138596E12, 3.362786653624607], [1.60138626E12, 9.622247608445184], [1.60138656E12, 9.49837679035217], [1.60138638E12, 9.392095708476052], [1.60138668E12, 9.507538731831994], [1.60138602E12, 7.0337497162716724], [1.60138632E12, 9.560693269258755]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138686E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3.346701445495046, "minX": 1.60138596E12, "maxY": 9.61801465353162, "series": [{"data": [[1.60138614E12, 9.50357766310504], [1.60138644E12, 9.459792634056463], [1.60138674E12, 9.27305907015041], [1.60138608E12, 9.528599845605493], [1.60138686E12, 9.432811499952164], [1.6013862E12, 9.467508077223341], [1.6013865E12, 9.575024482012335], [1.6013868E12, 9.47467096617002], [1.60138662E12, 9.547935437243883], [1.60138596E12, 3.346701445495046], [1.60138626E12, 9.61801465353162], [1.60138656E12, 9.493558589832539], [1.60138638E12, 9.387479025851192], [1.60138668E12, 9.503085769046242], [1.60138602E12, 7.028770981941857], [1.60138632E12, 9.556103468601227]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138686E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.563675688400723E-5, "minX": 1.60138596E12, "maxY": 0.006086294967938268, "series": [{"data": [[1.60138614E12, 1.5666263819882754E-4], [1.60138644E12, 1.240379110743589E-4], [1.60138674E12, 1.4661475880312379E-4], [1.60138608E12, 1.5055079167294373E-4], [1.60138686E12, 9.563675688400723E-5], [1.6013862E12, 1.3050882526141416E-4], [1.6013865E12, 1.4818059993814965E-4], [1.6013868E12, 1.1539423157057829E-4], [1.60138662E12, 1.1242270938729401E-4], [1.60138596E12, 0.006086294967938268], [1.60138626E12, 1.132671421729164E-4], [1.60138656E12, 1.3499961428681866E-4], [1.60138638E12, 1.2007798749292778E-4], [1.60138668E12, 1.1819198211148198E-4], [1.60138602E12, 1.265149231793936E-4], [1.60138632E12, 1.5138289888588801E-4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138686E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60138596E12, "maxY": 609.0, "series": [{"data": [[1.60138614E12, 53.0], [1.60138644E12, 56.0], [1.60138674E12, 60.0], [1.60138608E12, 49.0], [1.60138686E12, 55.0], [1.6013862E12, 49.0], [1.6013865E12, 68.0], [1.6013868E12, 95.0], [1.60138662E12, 48.0], [1.60138596E12, 609.0], [1.60138626E12, 230.0], [1.60138656E12, 266.0], [1.60138638E12, 49.0], [1.60138668E12, 54.0], [1.60138602E12, 42.0], [1.60138632E12, 51.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60138614E12, 3.0], [1.60138644E12, 3.0], [1.60138674E12, 3.0], [1.60138608E12, 3.0], [1.60138686E12, 3.0], [1.6013862E12, 3.0], [1.6013865E12, 3.0], [1.6013868E12, 3.0], [1.60138662E12, 3.0], [1.60138596E12, 1.0], [1.60138626E12, 3.0], [1.60138656E12, 3.0], [1.60138638E12, 3.0], [1.60138668E12, 2.0], [1.60138602E12, 3.0], [1.60138632E12, 3.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60138614E12, 3.0], [1.60138644E12, 3.0], [1.60138674E12, 3.0], [1.60138608E12, 3.0], [1.60138686E12, 3.0], [1.6013862E12, 3.0], [1.6013865E12, 3.0], [1.6013868E12, 3.0], [1.60138662E12, 3.0], [1.60138596E12, 1.0], [1.60138626E12, 3.0], [1.60138656E12, 3.0], [1.60138638E12, 3.0], [1.60138668E12, 3.0], [1.60138602E12, 3.0], [1.60138632E12, 3.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60138614E12, 3.0], [1.60138644E12, 3.0], [1.60138674E12, 3.0], [1.60138608E12, 3.0], [1.60138686E12, 3.0], [1.6013862E12, 3.0], [1.6013865E12, 3.0], [1.6013868E12, 3.0], [1.60138662E12, 3.0], [1.60138596E12, 1.0], [1.60138626E12, 3.0], [1.60138656E12, 3.0], [1.60138638E12, 3.0], [1.60138668E12, 3.0], [1.60138602E12, 3.0], [1.60138632E12, 3.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60138614E12, 1.0], [1.60138644E12, 1.0], [1.60138674E12, 1.0], [1.60138608E12, 1.0], [1.60138686E12, 1.0], [1.6013862E12, 1.0], [1.6013865E12, 1.0], [1.6013868E12, 1.0], [1.60138662E12, 1.0], [1.60138596E12, 1.0], [1.60138626E12, 1.0], [1.60138656E12, 1.0], [1.60138638E12, 1.0], [1.60138668E12, 1.0], [1.60138602E12, 1.0], [1.60138632E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60138614E12, 9.0], [1.60138644E12, 8.0], [1.60138674E12, 8.0], [1.60138608E12, 8.0], [1.60138686E12, 8.0], [1.6013862E12, 8.0], [1.6013865E12, 8.0], [1.6013868E12, 8.0], [1.60138662E12, 8.0], [1.60138596E12, 3.0], [1.60138626E12, 8.0], [1.60138656E12, 8.0], [1.60138638E12, 8.0], [1.60138668E12, 9.0], [1.60138602E12, 9.0], [1.60138632E12, 8.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138686E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3.0, "minX": 123.0, "maxY": 10.0, "series": [{"data": [[123.0, 4.0], [483.0, 3.0], [774.0, 3.0], [1069.0, 3.0], [1356.0, 3.0], [1638.0, 3.0], [1759.0, 3.0], [1999.0, 3.0], [2272.0, 3.0], [3084.0, 3.0], [3502.0, 3.0], [3660.0, 3.0], [3792.0, 5.0], [3872.0, 4.0], [3918.0, 5.0], [3966.0, 9.0], [4168.0, 5.0], [4508.0, 9.0], [4524.0, 10.0], [4664.0, 9.0], [4812.0, 9.0], [4616.0, 6.0], [4612.0, 9.0], [4728.0, 9.0], [4656.0, 4.0], [4700.0, 9.0], [4716.0, 9.0], [4764.0, 5.0], [4796.0, 6.0], [4776.0, 9.0], [4740.0, 9.0], [4736.0, 9.0], [4856.0, 8.0], [4848.0, 9.0], [4816.0, 6.0], [4820.0, 9.0], [4836.0, 9.0], [5056.0, 8.0], [4916.0, 7.0], [4908.0, 9.0], [4924.0, 9.0], [4888.0, 9.0], [4880.0, 9.0], [4892.0, 9.0], [5052.0, 7.0], [5116.0, 8.0], [5112.0, 8.0], [5108.0, 9.0], [5100.0, 8.0], [5104.0, 8.0], [5080.0, 9.0], [5076.0, 9.0], [5096.0, 8.0], [5092.0, 8.0], [5084.0, 9.0], [5088.0, 9.0], [5036.0, 8.0], [5024.0, 9.0], [5028.0, 8.0], [5000.0, 9.0], [5004.0, 9.0], [5016.0, 8.0], [5020.0, 8.0], [4940.0, 9.0], [4936.0, 9.0], [4948.0, 9.0], [4956.0, 9.0], [4968.0, 9.0], [4964.0, 9.0], [4960.0, 8.0], [4952.0, 9.0], [4972.0, 9.0], [4868.0, 9.0], [5060.0, 9.0], [5064.0, 9.0], [5352.0, 8.0], [5324.0, 8.0], [5320.0, 8.0], [5328.0, 8.0], [5308.0, 8.0], [5304.0, 8.0], [5296.0, 8.0], [5336.0, 8.0], [5340.0, 8.0], [5356.0, 8.0], [5360.0, 8.0], [5364.0, 8.0], [5348.0, 8.0], [5344.0, 8.0], [5264.0, 8.0], [5268.0, 8.0], [5272.0, 8.0], [5288.0, 8.0], [5368.0, 8.0], [5252.0, 8.0], [5260.0, 8.0], [5256.0, 8.0], [5248.0, 8.0], [5372.0, 8.0], [5124.0, 8.0], [5244.0, 8.0], [5236.0, 8.0], [5156.0, 9.0], [5144.0, 9.0], [5148.0, 9.0], [5128.0, 9.0], [5140.0, 8.0], [5132.0, 8.0], [5164.0, 8.0], [5168.0, 8.0], [5160.0, 8.0], [5208.0, 8.0], [5204.0, 8.0], [5196.0, 8.0], [5200.0, 8.0], [5188.0, 8.0], [5220.0, 8.0], [5216.0, 8.0], [5392.0, 8.0], [5464.0, 8.0], [5396.0, 8.0], [5488.0, 8.0], [5480.0, 8.0], [5448.0, 8.0], [5456.0, 8.0], [5460.0, 8.0], [5476.0, 8.0], [5472.0, 8.0], [5424.0, 8.0], [5420.0, 8.0], [5432.0, 8.0], [5428.0, 8.0], [5404.0, 7.0], [5384.0, 8.0], [5380.0, 8.0], [5388.0, 8.0], [5376.0, 8.0], [5496.0, 8.0], [5436.0, 8.0], [5580.0, 7.0], [5584.0, 8.0], [5504.0, 8.0], [5588.0, 7.0], [5524.0, 8.0], [5544.0, 8.0], [5444.0, 8.0], [5440.0, 8.0], [5632.0, 8.0], [5668.0, 8.0], [4373.0, 5.0], [4517.0, 8.0], [4733.0, 9.0], [4689.0, 9.0], [4697.0, 9.0], [4849.0, 9.0], [4765.0, 9.0], [4705.0, 9.0], [4841.0, 9.0], [4829.0, 9.0], [4801.0, 9.0], [4821.0, 9.0], [4901.0, 9.0], [5017.0, 9.0], [4909.0, 9.0], [4905.0, 9.0], [4889.0, 9.0], [4897.0, 9.0], [4893.0, 9.0], [5049.0, 9.0], [5041.0, 8.0], [5037.0, 8.0], [5025.0, 8.0], [5033.0, 8.0], [5101.0, 8.0], [5113.0, 8.0], [4997.0, 9.0], [5001.0, 8.0], [5013.0, 9.0], [5009.0, 8.0], [4953.0, 9.0], [4929.0, 9.0], [4965.0, 9.0], [4981.0, 7.0], [4977.0, 8.0], [4865.0, 9.0], [4869.0, 8.0], [4885.0, 9.0], [4989.0, 8.0], [4973.0, 9.0], [5065.0, 9.0], [5089.0, 8.0], [5073.0, 8.0], [5057.0, 9.0], [4921.0, 8.0], [4913.0, 9.0], [5361.0, 8.0], [5177.0, 8.0], [5317.0, 8.0], [5333.0, 8.0], [5329.0, 8.0], [5325.0, 8.0], [5337.0, 8.0], [5345.0, 8.0], [5353.0, 8.0], [5237.0, 8.0], [5233.0, 8.0], [5289.0, 8.0], [5301.0, 8.0], [5297.0, 8.0], [5309.0, 8.0], [5305.0, 8.0], [5253.0, 8.0], [5249.0, 9.0], [5365.0, 8.0], [5261.0, 8.0], [5269.0, 8.0], [5265.0, 8.0], [5273.0, 8.0], [5277.0, 8.0], [5281.0, 8.0], [5285.0, 8.0], [5129.0, 8.0], [5149.0, 8.0], [5141.0, 8.0], [5137.0, 8.0], [5133.0, 8.0], [5153.0, 8.0], [5157.0, 8.0], [5173.0, 8.0], [5169.0, 8.0], [5161.0, 8.0], [5245.0, 8.0], [5125.0, 8.0], [5193.0, 8.0], [5189.0, 8.0], [5221.0, 8.0], [5209.0, 8.0], [5213.0, 8.0], [5217.0, 8.0], [5197.0, 8.0], [5225.0, 8.0], [5385.0, 8.0], [5377.0, 8.0], [5417.0, 8.0], [5429.0, 8.0], [5425.0, 8.0], [5433.0, 8.0], [5413.0, 8.0], [5393.0, 8.0], [5389.0, 8.0], [5401.0, 8.0], [5397.0, 8.0], [5405.0, 8.0], [5381.0, 8.0], [5501.0, 8.0], [5497.0, 8.0], [5481.0, 8.0], [5485.0, 8.0], [5541.0, 8.0], [5545.0, 8.0], [5553.0, 8.0], [5533.0, 8.0], [5529.0, 8.0], [5521.0, 8.0], [5509.0, 8.0], [5505.0, 8.0], [5613.0, 8.0], [5597.0, 8.0], [5573.0, 8.0], [5437.0, 8.0], [5453.0, 8.0], [5445.0, 8.0], [5449.0, 8.0], [5457.0, 8.0], [5477.0, 8.0], [5473.0, 8.0], [5461.0, 8.0], [5717.0, 7.0], [5777.0, 8.0], [5681.0, 8.0], [5721.0, 8.0], [2245.0, 3.0], [2671.0, 3.0], [2693.0, 3.0], [2925.0, 3.0], [2905.0, 9.0], [3645.0, 4.0], [3839.0, 3.0], [3835.0, 4.0], [3871.0, 3.0], [3929.0, 4.0], [3921.0, 4.0], [3923.0, 4.0], [4065.0, 8.0], [4198.0, 8.0], [4846.0, 9.0], [4718.0, 9.0], [4686.0, 5.0], [4774.0, 5.0], [4702.0, 9.0], [4694.0, 9.0], [4798.0, 9.0], [4862.0, 6.0], [4742.0, 9.0], [4830.0, 9.0], [4822.0, 8.0], [4818.0, 9.0], [5102.0, 8.0], [5098.0, 9.0], [5094.0, 8.0], [4898.0, 8.0], [4910.0, 8.0], [4886.0, 9.0], [4926.0, 9.0], [4866.0, 5.0], [4878.0, 9.0], [5054.0, 9.0], [5050.0, 8.0], [5106.0, 9.0], [5110.0, 8.0], [5114.0, 8.0], [5118.0, 8.0], [5070.0, 9.0], [5078.0, 8.0], [5082.0, 8.0], [5090.0, 8.0], [5026.0, 9.0], [5046.0, 8.0], [5042.0, 8.0], [5014.0, 8.0], [5002.0, 8.0], [4970.0, 7.0], [4934.0, 7.0], [4938.0, 9.0], [4942.0, 9.0], [4946.0, 9.0], [4958.0, 9.0], [4990.0, 9.0], [5058.0, 8.0], [5062.0, 8.0], [5342.0, 8.0], [5182.0, 8.0], [5170.0, 8.0], [5178.0, 9.0], [5314.0, 8.0], [5334.0, 8.0], [5338.0, 8.0], [5326.0, 8.0], [5330.0, 8.0], [5318.0, 8.0], [5322.0, 8.0], [5226.0, 8.0], [5230.0, 8.0], [5234.0, 8.0], [5306.0, 8.0], [5310.0, 8.0], [5294.0, 8.0], [5298.0, 8.0], [5302.0, 8.0], [5354.0, 8.0], [5346.0, 8.0], [5266.0, 8.0], [5274.0, 8.0], [5254.0, 8.0], [5258.0, 8.0], [5262.0, 8.0], [5278.0, 8.0], [5286.0, 8.0], [5282.0, 8.0], [5374.0, 8.0], [5358.0, 8.0], [5250.0, 8.0], [5158.0, 8.0], [5238.0, 8.0], [5154.0, 8.0], [5150.0, 8.0], [5130.0, 8.0], [5146.0, 8.0], [5134.0, 8.0], [5126.0, 9.0], [5166.0, 8.0], [5162.0, 9.0], [5190.0, 9.0], [5198.0, 8.0], [5202.0, 8.0], [5194.0, 8.0], [5206.0, 8.0], [5186.0, 8.0], [5222.0, 8.0], [5210.0, 8.0], [5578.0, 8.0], [5402.0, 8.0], [5450.0, 8.0], [5494.0, 8.0], [5482.0, 8.0], [5470.0, 8.0], [5414.0, 8.0], [5410.0, 8.0], [5422.0, 8.0], [5430.0, 8.0], [5398.0, 8.0], [5394.0, 8.0], [5382.0, 8.0], [5434.0, 8.0], [5378.0, 8.0], [5574.0, 8.0], [5438.0, 8.0], [5582.0, 8.0], [5590.0, 8.0], [5594.0, 8.0], [5562.0, 8.0], [5546.0, 8.0], [5522.0, 8.0], [5626.0, 8.0], [5630.0, 8.0], [5506.0, 8.0], [5542.0, 8.0], [5534.0, 8.0], [5446.0, 8.0], [5702.0, 8.0], [5642.0, 8.0], [5666.0, 8.0], [5754.0, 8.0], [5650.0, 8.0], [4339.0, 5.0], [4551.0, 6.0], [4579.0, 9.0], [4847.0, 7.0], [4643.0, 10.0], [4695.0, 5.0], [4771.0, 9.0], [4863.0, 9.0], [4727.0, 6.0], [4851.0, 9.0], [4855.0, 9.0], [4655.0, 9.0], [5095.0, 9.0], [5067.0, 7.0], [5075.0, 8.0], [4875.0, 9.0], [4871.0, 9.0], [4879.0, 9.0], [4883.0, 9.0], [4895.0, 8.0], [4887.0, 8.0], [4907.0, 9.0], [4903.0, 9.0], [5047.0, 8.0], [5043.0, 8.0], [5019.0, 9.0], [5039.0, 8.0], [5035.0, 8.0], [5031.0, 9.0], [5027.0, 9.0], [5115.0, 8.0], [5099.0, 9.0], [5103.0, 8.0], [5107.0, 8.0], [5087.0, 8.0], [5083.0, 9.0], [5079.0, 8.0], [5119.0, 8.0], [4999.0, 8.0], [5011.0, 8.0], [5007.0, 8.0], [4955.0, 9.0], [4935.0, 9.0], [4963.0, 9.0], [4967.0, 9.0], [4975.0, 9.0], [4927.0, 9.0], [5059.0, 8.0], [4923.0, 8.0], [5327.0, 8.0], [5323.0, 8.0], [5179.0, 8.0], [5319.0, 8.0], [5315.0, 8.0], [5335.0, 8.0], [5343.0, 8.0], [5351.0, 8.0], [5355.0, 8.0], [5359.0, 8.0], [5235.0, 8.0], [5231.0, 8.0], [5303.0, 8.0], [5299.0, 8.0], [5295.0, 8.0], [5291.0, 8.0], [5279.0, 8.0], [5283.0, 8.0], [5251.0, 8.0], [5255.0, 8.0], [5371.0, 8.0], [5363.0, 8.0], [5275.0, 8.0], [5263.0, 8.0], [5271.0, 8.0], [5267.0, 8.0], [5159.0, 8.0], [5151.0, 8.0], [5147.0, 8.0], [5155.0, 8.0], [5171.0, 8.0], [5163.0, 8.0], [5243.0, 8.0], [5239.0, 8.0], [5247.0, 8.0], [5131.0, 9.0], [5187.0, 8.0], [5195.0, 8.0], [5199.0, 8.0], [5211.0, 8.0], [5219.0, 8.0], [5207.0, 9.0], [5203.0, 9.0], [5223.0, 8.0], [5427.0, 8.0], [5423.0, 8.0], [5431.0, 8.0], [5435.0, 8.0], [5411.0, 8.0], [5495.0, 8.0], [5503.0, 8.0], [5379.0, 8.0], [5387.0, 8.0], [5395.0, 8.0], [5407.0, 8.0], [5403.0, 8.0], [5399.0, 8.0], [5491.0, 8.0], [5439.0, 8.0], [5551.0, 8.0], [5539.0, 8.0], [5535.0, 8.0], [5527.0, 8.0], [5515.0, 8.0], [5519.0, 8.0], [5631.0, 8.0], [5627.0, 8.0], [5615.0, 8.0], [5571.0, 8.0], [5583.0, 8.0], [5471.0, 8.0], [5467.0, 8.0], [5459.0, 8.0], [5443.0, 8.0], [5455.0, 8.0], [5451.0, 8.0], [5447.0, 8.0], [5479.0, 8.0], [5663.0, 8.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5777.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3.0, "minX": 123.0, "maxY": 10.0, "series": [{"data": [[123.0, 4.0], [483.0, 3.0], [774.0, 3.0], [1069.0, 3.0], [1356.0, 3.0], [1638.0, 3.0], [1759.0, 3.0], [1999.0, 3.0], [2272.0, 3.0], [3084.0, 3.0], [3502.0, 3.0], [3660.0, 3.0], [3792.0, 5.0], [3872.0, 4.0], [3918.0, 5.0], [3966.0, 9.0], [4168.0, 5.0], [4508.0, 9.0], [4524.0, 10.0], [4664.0, 9.0], [4812.0, 9.0], [4616.0, 6.0], [4612.0, 9.0], [4728.0, 9.0], [4656.0, 4.0], [4700.0, 9.0], [4716.0, 9.0], [4764.0, 5.0], [4796.0, 6.0], [4776.0, 9.0], [4740.0, 9.0], [4736.0, 9.0], [4856.0, 8.0], [4848.0, 9.0], [4816.0, 6.0], [4820.0, 9.0], [4836.0, 9.0], [5056.0, 8.0], [4916.0, 7.0], [4908.0, 9.0], [4924.0, 9.0], [4888.0, 9.0], [4880.0, 9.0], [4892.0, 9.0], [5052.0, 7.0], [5116.0, 8.0], [5112.0, 8.0], [5108.0, 9.0], [5100.0, 8.0], [5104.0, 8.0], [5080.0, 9.0], [5076.0, 9.0], [5096.0, 8.0], [5092.0, 8.0], [5084.0, 9.0], [5088.0, 9.0], [5036.0, 8.0], [5024.0, 9.0], [5028.0, 8.0], [5000.0, 9.0], [5004.0, 9.0], [5016.0, 8.0], [5020.0, 8.0], [4940.0, 9.0], [4936.0, 9.0], [4948.0, 9.0], [4956.0, 9.0], [4968.0, 9.0], [4964.0, 9.0], [4960.0, 8.0], [4952.0, 9.0], [4972.0, 9.0], [4868.0, 9.0], [5060.0, 9.0], [5064.0, 9.0], [5352.0, 8.0], [5324.0, 8.0], [5320.0, 8.0], [5328.0, 8.0], [5308.0, 8.0], [5304.0, 8.0], [5296.0, 8.0], [5336.0, 8.0], [5340.0, 8.0], [5356.0, 8.0], [5360.0, 8.0], [5364.0, 8.0], [5348.0, 8.0], [5344.0, 8.0], [5264.0, 8.0], [5268.0, 8.0], [5272.0, 8.0], [5288.0, 8.0], [5368.0, 8.0], [5252.0, 8.0], [5260.0, 8.0], [5256.0, 8.0], [5248.0, 8.0], [5372.0, 8.0], [5124.0, 8.0], [5244.0, 8.0], [5236.0, 8.0], [5156.0, 9.0], [5144.0, 9.0], [5148.0, 9.0], [5128.0, 8.0], [5140.0, 8.0], [5132.0, 8.0], [5164.0, 8.0], [5168.0, 8.0], [5160.0, 8.0], [5208.0, 8.0], [5204.0, 8.0], [5196.0, 8.0], [5200.0, 8.0], [5188.0, 8.0], [5220.0, 8.0], [5216.0, 8.0], [5392.0, 8.0], [5464.0, 8.0], [5396.0, 8.0], [5488.0, 8.0], [5480.0, 8.0], [5448.0, 8.0], [5456.0, 8.0], [5460.0, 8.0], [5476.0, 8.0], [5472.0, 8.0], [5424.0, 8.0], [5420.0, 8.0], [5432.0, 8.0], [5428.0, 8.0], [5404.0, 7.0], [5384.0, 8.0], [5380.0, 8.0], [5388.0, 8.0], [5376.0, 8.0], [5496.0, 8.0], [5436.0, 8.0], [5580.0, 7.0], [5584.0, 8.0], [5504.0, 8.0], [5588.0, 7.0], [5524.0, 8.0], [5544.0, 8.0], [5444.0, 8.0], [5440.0, 8.0], [5632.0, 8.0], [5668.0, 8.0], [4373.0, 5.0], [4517.0, 8.0], [4733.0, 9.0], [4689.0, 9.0], [4697.0, 9.0], [4849.0, 9.0], [4765.0, 9.0], [4705.0, 9.0], [4841.0, 9.0], [4829.0, 9.0], [4801.0, 9.0], [4821.0, 9.0], [4901.0, 9.0], [5017.0, 9.0], [4909.0, 9.0], [4905.0, 9.0], [4889.0, 9.0], [4897.0, 9.0], [4893.0, 9.0], [5049.0, 9.0], [5041.0, 8.0], [5037.0, 8.0], [5025.0, 8.0], [5033.0, 8.0], [5101.0, 8.0], [5113.0, 8.0], [4997.0, 9.0], [5001.0, 8.0], [5013.0, 9.0], [5009.0, 8.0], [4953.0, 9.0], [4929.0, 9.0], [4965.0, 9.0], [4981.0, 7.0], [4977.0, 8.0], [4865.0, 9.0], [4869.0, 8.0], [4885.0, 9.0], [4989.0, 8.0], [4973.0, 9.0], [5065.0, 9.0], [5089.0, 8.0], [5073.0, 8.0], [5057.0, 9.0], [4921.0, 8.0], [4913.0, 9.0], [5361.0, 8.0], [5177.0, 8.0], [5317.0, 8.0], [5333.0, 8.0], [5329.0, 8.0], [5325.0, 8.0], [5337.0, 8.0], [5345.0, 8.0], [5353.0, 8.0], [5237.0, 8.0], [5233.0, 8.0], [5289.0, 8.0], [5301.0, 8.0], [5297.0, 8.0], [5309.0, 8.0], [5305.0, 8.0], [5253.0, 8.0], [5249.0, 9.0], [5365.0, 8.0], [5261.0, 8.0], [5269.0, 8.0], [5265.0, 8.0], [5273.0, 8.0], [5277.0, 8.0], [5281.0, 8.0], [5285.0, 8.0], [5129.0, 8.0], [5149.0, 8.0], [5141.0, 8.0], [5137.0, 8.0], [5133.0, 8.0], [5153.0, 8.0], [5157.0, 8.0], [5173.0, 8.0], [5169.0, 8.0], [5161.0, 8.0], [5245.0, 8.0], [5125.0, 8.0], [5193.0, 8.0], [5189.0, 8.0], [5221.0, 8.0], [5209.0, 8.0], [5213.0, 8.0], [5217.0, 8.0], [5197.0, 8.0], [5225.0, 8.0], [5385.0, 8.0], [5377.0, 8.0], [5417.0, 8.0], [5429.0, 8.0], [5425.0, 8.0], [5433.0, 8.0], [5413.0, 8.0], [5393.0, 8.0], [5389.0, 8.0], [5401.0, 8.0], [5397.0, 8.0], [5405.0, 8.0], [5381.0, 8.0], [5501.0, 8.0], [5497.0, 8.0], [5481.0, 8.0], [5485.0, 8.0], [5541.0, 8.0], [5545.0, 8.0], [5553.0, 8.0], [5533.0, 8.0], [5529.0, 8.0], [5521.0, 8.0], [5509.0, 8.0], [5505.0, 8.0], [5613.0, 8.0], [5597.0, 8.0], [5573.0, 8.0], [5437.0, 8.0], [5453.0, 8.0], [5445.0, 8.0], [5449.0, 8.0], [5457.0, 8.0], [5477.0, 8.0], [5473.0, 8.0], [5461.0, 8.0], [5717.0, 7.0], [5777.0, 8.0], [5681.0, 8.0], [5721.0, 8.0], [2245.0, 3.0], [2671.0, 3.0], [2693.0, 3.0], [2925.0, 3.0], [2905.0, 9.0], [3645.0, 4.0], [3839.0, 3.0], [3835.0, 4.0], [3871.0, 3.0], [3929.0, 4.0], [3921.0, 4.0], [3923.0, 4.0], [4065.0, 8.0], [4198.0, 8.0], [4846.0, 9.0], [4718.0, 9.0], [4686.0, 5.0], [4774.0, 5.0], [4702.0, 9.0], [4694.0, 9.0], [4798.0, 9.0], [4862.0, 6.0], [4742.0, 9.0], [4830.0, 9.0], [4822.0, 8.0], [4818.0, 9.0], [5102.0, 8.0], [5098.0, 9.0], [5094.0, 8.0], [4898.0, 8.0], [4910.0, 8.0], [4886.0, 9.0], [4926.0, 9.0], [4866.0, 5.0], [4878.0, 9.0], [5054.0, 9.0], [5050.0, 8.0], [5106.0, 9.0], [5110.0, 8.0], [5114.0, 8.0], [5118.0, 8.0], [5070.0, 9.0], [5078.0, 8.0], [5082.0, 8.0], [5090.0, 8.0], [5026.0, 9.0], [5046.0, 8.0], [5042.0, 8.0], [5014.0, 8.0], [5002.0, 8.0], [4970.0, 7.0], [4934.0, 7.0], [4938.0, 9.0], [4942.0, 9.0], [4946.0, 9.0], [4958.0, 9.0], [4990.0, 9.0], [5058.0, 8.0], [5062.0, 8.0], [5342.0, 8.0], [5182.0, 8.0], [5170.0, 8.0], [5178.0, 9.0], [5314.0, 8.0], [5334.0, 8.0], [5338.0, 8.0], [5326.0, 8.0], [5330.0, 8.0], [5318.0, 8.0], [5322.0, 8.0], [5226.0, 8.0], [5230.0, 8.0], [5234.0, 8.0], [5306.0, 8.0], [5310.0, 8.0], [5294.0, 8.0], [5298.0, 8.0], [5302.0, 8.0], [5354.0, 8.0], [5346.0, 8.0], [5266.0, 8.0], [5274.0, 8.0], [5254.0, 8.0], [5258.0, 8.0], [5262.0, 8.0], [5278.0, 8.0], [5286.0, 8.0], [5282.0, 8.0], [5374.0, 8.0], [5358.0, 8.0], [5250.0, 8.0], [5158.0, 8.0], [5238.0, 8.0], [5154.0, 8.0], [5150.0, 8.0], [5130.0, 8.0], [5146.0, 8.0], [5134.0, 8.0], [5126.0, 9.0], [5166.0, 8.0], [5162.0, 9.0], [5190.0, 9.0], [5198.0, 8.0], [5202.0, 8.0], [5194.0, 8.0], [5206.0, 8.0], [5186.0, 8.0], [5222.0, 8.0], [5210.0, 8.0], [5578.0, 8.0], [5402.0, 8.0], [5450.0, 8.0], [5494.0, 8.0], [5482.0, 8.0], [5470.0, 8.0], [5414.0, 8.0], [5410.0, 8.0], [5422.0, 8.0], [5430.0, 8.0], [5398.0, 8.0], [5394.0, 8.0], [5382.0, 8.0], [5434.0, 8.0], [5378.0, 8.0], [5574.0, 8.0], [5438.0, 8.0], [5582.0, 8.0], [5590.0, 8.0], [5594.0, 8.0], [5562.0, 8.0], [5546.0, 8.0], [5522.0, 8.0], [5626.0, 8.0], [5630.0, 8.0], [5506.0, 8.0], [5542.0, 8.0], [5534.0, 8.0], [5446.0, 8.0], [5702.0, 8.0], [5642.0, 8.0], [5666.0, 8.0], [5754.0, 8.0], [5650.0, 8.0], [4339.0, 5.0], [4551.0, 6.0], [4579.0, 9.0], [4847.0, 7.0], [4643.0, 10.0], [4695.0, 5.0], [4771.0, 9.0], [4863.0, 9.0], [4727.0, 6.0], [4851.0, 9.0], [4855.0, 9.0], [4655.0, 9.0], [5095.0, 9.0], [5067.0, 7.0], [5075.0, 8.0], [4875.0, 9.0], [4871.0, 9.0], [4879.0, 9.0], [4883.0, 9.0], [4895.0, 8.0], [4887.0, 8.0], [4907.0, 9.0], [4903.0, 9.0], [5047.0, 8.0], [5043.0, 8.0], [5019.0, 9.0], [5039.0, 8.0], [5035.0, 8.0], [5031.0, 9.0], [5027.0, 9.0], [5115.0, 8.0], [5099.0, 9.0], [5103.0, 8.0], [5107.0, 8.0], [5087.0, 8.0], [5083.0, 9.0], [5079.0, 8.0], [5119.0, 8.0], [4999.0, 8.0], [5011.0, 8.0], [5007.0, 8.0], [4955.0, 9.0], [4935.0, 9.0], [4963.0, 9.0], [4967.0, 9.0], [4975.0, 9.0], [4927.0, 9.0], [5059.0, 8.0], [4923.0, 8.0], [5327.0, 8.0], [5323.0, 8.0], [5179.0, 8.0], [5319.0, 8.0], [5315.0, 8.0], [5335.0, 8.0], [5343.0, 8.0], [5351.0, 8.0], [5355.0, 8.0], [5359.0, 8.0], [5235.0, 8.0], [5231.0, 8.0], [5303.0, 8.0], [5299.0, 8.0], [5295.0, 8.0], [5291.0, 8.0], [5279.0, 8.0], [5283.0, 8.0], [5251.0, 8.0], [5255.0, 8.0], [5371.0, 8.0], [5363.0, 8.0], [5275.0, 8.0], [5263.0, 8.0], [5271.0, 8.0], [5267.0, 8.0], [5159.0, 8.0], [5151.0, 8.0], [5147.0, 8.0], [5155.0, 8.0], [5171.0, 8.0], [5163.0, 8.0], [5243.0, 8.0], [5239.0, 8.0], [5247.0, 8.0], [5131.0, 8.0], [5187.0, 8.0], [5195.0, 8.0], [5199.0, 8.0], [5211.0, 8.0], [5219.0, 8.0], [5207.0, 9.0], [5203.0, 9.0], [5223.0, 8.0], [5427.0, 8.0], [5423.0, 8.0], [5431.0, 8.0], [5435.0, 8.0], [5411.0, 8.0], [5495.0, 8.0], [5503.0, 8.0], [5379.0, 8.0], [5387.0, 8.0], [5395.0, 8.0], [5407.0, 8.0], [5403.0, 8.0], [5399.0, 8.0], [5491.0, 8.0], [5439.0, 8.0], [5551.0, 8.0], [5539.0, 8.0], [5535.0, 8.0], [5527.0, 8.0], [5515.0, 8.0], [5519.0, 8.0], [5631.0, 8.0], [5627.0, 8.0], [5615.0, 8.0], [5571.0, 8.0], [5583.0, 8.0], [5471.0, 8.0], [5467.0, 8.0], [5459.0, 8.0], [5443.0, 8.0], [5455.0, 8.0], [5451.0, 8.0], [5447.0, 8.0], [5479.0, 8.0], [5663.0, 8.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5777.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 153.45, "minX": 1.60138596E12, "maxY": 5342.8, "series": [{"data": [[1.60138614E12, 5212.883333333333], [1.60138644E12, 5240.333333333333], [1.60138674E12, 5342.8], [1.60138608E12, 5203.116666666667], [1.60138686E12, 4530.333333333333], [1.6013862E12, 5235.9], [1.6013865E12, 5173.866666666667], [1.6013868E12, 5199.433333333333], [1.60138662E12, 5188.783333333334], [1.60138596E12, 153.45], [1.60138626E12, 5150.083333333333], [1.60138656E12, 5185.166666666667], [1.60138638E12, 5274.366666666667], [1.60138668E12, 5217.5], [1.60138602E12, 4479.783333333334], [1.60138632E12, 5174.516666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138686E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 153.35, "minX": 1.60138596E12, "maxY": 5342.8, "series": [{"data": [[1.60138614E12, 5212.9], [1.60138644E12, 5240.333333333333], [1.60138674E12, 5342.8], [1.60138608E12, 5203.116666666667], [1.60138686E12, 4531.033333333334], [1.6013862E12, 5235.916666666667], [1.6013865E12, 5173.866666666667], [1.6013868E12, 5199.566666666667], [1.60138662E12, 5188.75], [1.60138596E12, 153.35], [1.60138626E12, 5150.066666666667], [1.60138656E12, 5185.2], [1.60138638E12, 5274.35], [1.60138668E12, 5217.5], [1.60138602E12, 4479.05], [1.60138632E12, 5174.516666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60138686E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 153.35, "minX": 1.60138596E12, "maxY": 5342.8, "series": [{"data": [[1.60138614E12, 5212.9], [1.60138644E12, 5240.333333333333], [1.60138674E12, 5342.8], [1.60138608E12, 5203.116666666667], [1.60138686E12, 4531.033333333334], [1.6013862E12, 5235.916666666667], [1.6013865E12, 5173.866666666667], [1.6013868E12, 5199.566666666667], [1.60138662E12, 5188.75], [1.60138596E12, 153.35], [1.60138626E12, 5150.066666666667], [1.60138656E12, 5185.2], [1.60138638E12, 5274.35], [1.60138668E12, 5217.5], [1.60138602E12, 4479.05], [1.60138632E12, 5174.516666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138686E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 153.35, "minX": 1.60138596E12, "maxY": 5342.8, "series": [{"data": [[1.60138614E12, 5212.9], [1.60138644E12, 5240.333333333333], [1.60138674E12, 5342.8], [1.60138608E12, 5203.116666666667], [1.60138686E12, 4531.033333333334], [1.6013862E12, 5235.916666666667], [1.6013865E12, 5173.866666666667], [1.6013868E12, 5199.566666666667], [1.60138662E12, 5188.75], [1.60138596E12, 153.35], [1.60138626E12, 5150.066666666667], [1.60138656E12, 5185.2], [1.60138638E12, 5274.35], [1.60138668E12, 5217.5], [1.60138602E12, 4479.05], [1.60138632E12, 5174.516666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60138686E12, "title": "Total Transactions Per Second"}},
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

