'use strict';

var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var webpackConfig = require('./common.js');

module.exports = function () {
    var myDevConfig = webpackConfig;
    myDevConfig.devtool = 'inline-source-map';

    myDevConfig.plugins = [
        new WebpackNotifierPlugin({ title: 'Webpack build', excludeWarnings: true })
    ];

    return myDevConfig;
};