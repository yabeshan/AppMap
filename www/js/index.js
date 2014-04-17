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

    posX:46.069452,
    posY:-89.411373,

    initGoogle: function() {
        document.getElementById("map_canvas").innerHTML = "Loading Google";

        var map = new google.maps.Map(document.getElementById("map_canvas"),
            {
                center: new google.maps.LatLng( app.posX, app.posY ),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        );

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng( app.posX, app.posY ),
            map: map,
            title: "This is a marker!",
            animation: google.maps.Animation.DROP
        });
    },

    initBing: function() {
        document.getElementById("map_canvas").innerHTML = "Loading Bing";

//        var mapOptions = {
//            credentials: "Au7tvmCVeBN3C1MvpCr-0yACFMH520qLiN7hinvKBKLCgom_kEwqZWWgO9dAtcUv",
//            mapTypeId: Microsoft.Maps.MapTypeId.road,
//            center: new Microsoft.Maps.Location( app.posX, app.posY ),
//            zoom: 11
//        };
//
//        var map = new Microsoft.Maps.Map(document.getElementById("map_canvas"), mapOptions);
//        var loc = new Microsoft.Maps.Location( app.posX, app.posY );
//
//        var pin = new Microsoft.Maps.Pushpin(loc, {text: '1'});
//        map.entities.push(pin);
    },

    mapLeaflet:null,
    initLeaflet: function () {
        document.getElementById("map_canvas").innerHTML = "Loading Leaflet";

//        if (app.mapLeaflet == null) {
//            app.mapLeaflet = new L.Map('map_canvas');
//
//            var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
//            var osmAttrib = 'Map data © OpenStreetMap contributors';
//            var osm = new L.TileLayer(osmUrl, { attribution: osmAttrib });
//
//            app.mapLeaflet.setView(new L.LatLng( app.posX, app.posY ), 11);
//            app.mapLeaflet.addLayer(osm);
//
//            L.marker([ app.posX, app.posY]).addTo(app.mapLeaflet);
//        }
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
        alert("init");
    },

    initialize: function() {
        document.addEventListener('deviceready', app.onDeviceReady, false);
        setTimeout(app.onDeviceReady, 1000);
    }

};
