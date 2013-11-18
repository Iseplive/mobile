'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['./app/scripts/controllers/**/*.js',
        './app/scripts/models/**/*.js',
        './app/scripts/providers/**/*.js',
        './app/scripts/services/**/*.js',
        './app/scripts/filters/**/*.js',
        './app/scripts/directives/**/*.js',
        './app/scripts/app.js',
        './app/scripts/config.js',
        './test/**/*.js'
      ],
      options: {
        indent: 2,
        unused: true,
        quotmark: 'single',
        strict: true,
        globalstrict: true,
        globals: {
          jQuery: true,
          services: true,
          console: true,
          module: true,
          angular: true,
          alert: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'app',
          hostname: 'localhost',
          debugInfo: true
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: './app/styles/',
          cssDir: './app/styles/',
          outputStyle: 'compressed',
          force: true,
          trace: true
        }
      }
    },
    grunticon: {
      myIcons: {
          options: {
          src: "./app/img/svg/",
          dest: "./app/img/icons/"
        }
      }
    },
    watch: {
      livereload: {
        options: {
          livereload: true
        },
        files: ['./app/styles/**/*.{scss,sass}']
      },
      compass: {
				files: ['app/styles/**/*.{scss,sass}'],
				tasks: ['compass']
			},
      grunticon: {
        files: ['app/img/svg/**/*.{svg}'],
				tasks: ['grunticon']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-grunticon');

  // this would be run by typing "grunt server" on the command line
  grunt.registerTask('server', ['compass:dist', 'connect:server', 'grunticon', 'watch']);

};

