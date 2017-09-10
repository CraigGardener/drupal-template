module.exports = function (grunt) {
  'use strict';

  // Load all plugins and tasks defined by the grunt-drupal-build package.
  require('grunt-drupal-build')(grunt);

  // Load grunt-hub tasks.
  grunt.loadNpmTasks('grunt-hub');

  // If bin/grunt exists, load task files.
  if (grunt.file.exists(__dirname + '/bin/grunt')) {
    grunt.loadTasks(__dirname + '/bin/grunt');
  }
};
