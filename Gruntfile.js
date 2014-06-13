var FILES = {},
    freedomFiles = require('freedom/Gruntfile.js').FILES;
for (var key in freedomFiles) {
  FILES[key] = freedomFiles[key].map(function(str) {
    if (str[0] === '!') {
      return '!node_modules/freedom/' + str.substr(1);
    } else {
      return 'node_modules/freedom/' + str;
    }
  });
};

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default tasks.
  grunt.registerTask('compile', [
  ]);
  grunt.registerTask('test', [
  ]);
  grunt.registerTask('travis', [
  ]);
  grunt.registerTask('default', ['compile']);
};
