/// <reference path="types/types.ts"/>

module ngApp.components.header {}

angular
    .module("components.header", [
      "header.controller",
      "header.directives"
    ]);
