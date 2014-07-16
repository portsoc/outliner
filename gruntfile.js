module.exports = function(grunt) {
  "use strict";
  // Project configuration.
  grunt.initConfig({
    qunit: {
     all: ['test/**/*.html']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        strict: true,
        browser: true,
        qunit: true
      },
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      globals: {"uoptoc": true}
    },
    uglify: {
        my_target: {
            files: {
                'build/uoptoc.min.js': ['src/**/*.js']
            }
        }
    },




    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // Default task.
    grunt.registerTask('default', ['jshint', 'qunit', 'uglify']);

};