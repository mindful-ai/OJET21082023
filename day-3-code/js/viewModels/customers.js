/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
define(['../accUtils', "knockout", "ojs/ojarraydataprovider", "ojs/ojchart", "text!models/chartData.json", "ojs/ojradioset", "ojs/ojlabel", "ojs/ojlabelvalue"],
 function(accUtils, ko, ArrayDataProvider, chart, data) {
    function CustomerViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      this.stackValue = ko.observable('off');
      this.orientationValue = ko.observable('vertical');
      this.dataProvider = new ArrayDataProvider(JSON.parse(data), {
                  keyAttributes: 'id'
      });

      this.currentColor = ko.observable("area");
      this.colorOptions = [
                  { id: "1", value: "area", color: "Area" },
                  { id: "2", value: "bar", color: "Bar" },
                  { id: "3", value: "pie", color: "Pie" },
                  { id: "4", value: "boxPlot", color: "Box Plot" },
                  { id: "5", value: "candlestick", color: "Candle Stick" },
                  { id: "6", value: "line", color: "Line" },
                  { id: "7", value: "lineWithArea", color: "Line with Area" },
      ];

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Customers page loaded.', 'assertive');
        document.title = "Customers";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return CustomerViewModel;
  }
);
