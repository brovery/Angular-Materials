(function(){
    'use strict';

    angular.module('myController', [])
        .controller('myController', myController);

    myController.$inject = [];

    function myController() {

        // list everything
        var mc = this;
        mc.tabs = [{name: 'Tab1'}, {name: 'Tab2'}];
        mc.tabCount = 2;
        mc.addTab = addTab;



        // public functions

        function addTab() {
            mc.tabCount++;
            mc.tabs.push({name: 'Tab' + mc.tabCount});
        }

    }

}());