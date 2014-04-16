/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        setTimeout(this.onDeviceReady, 10000);
    },

    onDeviceReady: function() {
        document.getElementById('google').onclick=function(){
            app.initGoogle();
        };
        document.getElementById('bing').onclick=function(){
            app.initBing();
        };
        document.getElementById('leaflet').onclick=function(){
            app.initLeaflet();
        };
        app.initGoogle();
    },

    initGoogle: function() {
        document.getElementById("map_canvas").innerHTML = "Loading";

        alert("111" + google.maps );
        alert("222" + google.maps.LatLng(43.069452, -89.411373));
        alert("333" + google.maps.MapTypeId );
        alert("444" + google.maps.MapTypeId.ROADMAP );

        var mapOptions = {
            center: new google.maps.LatLng(43.069452, -89.411373),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(43.069452, -89.411373),
            map: map,
            title: "This is a marker!",
            animation: google.maps.Animation.DROP
        });
    },

    initBing: function() {
        document.getElementById("map_canvas").innerHTML = "Loading";
        alert("222" + Microsoft);

        var mapOptions = {
            credentials: "Au7tvmCVeBN3C1MvpCr-0yACFMH520qLiN7hinvKBKLCgom_kEwqZWWgO9dAtcUv",
            mapTypeId: Microsoft.Maps.MapTypeId.road,
            center: new Microsoft.Maps.Location(43.069452, -89.411373),
            zoom: 11
        };

        var map = new Microsoft.Maps.Map(document.getElementById("map_canvas"), mapOptions);
        var loc = new Microsoft.Maps.Location(43.069452, -89.411373);

        var pin = new Microsoft.Maps.Pushpin(loc, {text: '1'});
        map.entities.push(pin);
    },

    mapLeaflet:null,
    initLeaflet: function () {
        document.getElementById("map_canvas").innerHTML = "Loading";
        alert("333"+L);

        if (app.mapLeaflet == null) {
            app.mapLeaflet = new L.Map('map_canvas');

            var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            var osmAttrib = 'Map data © OpenStreetMap contributors';
            var osm = new L.TileLayer(osmUrl, { attribution: osmAttrib });

            app.mapLeaflet.setView(new L.LatLng(43.069452, -89.411373), 11);
            app.mapLeaflet.addLayer(osm);

            L.marker([43.069452, -89.411373]).addTo(app.mapLeaflet);
        }
    }
};
