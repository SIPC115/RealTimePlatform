var LIVERELOAD_PORT = 1337;

var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
    require('matchdep').filter('*', './package.json').forEach(grunt.loadNpmTasks);
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    'view/*',
                    '*.html',
                    '*.css',
                    '*.js',
                    '*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        connect: {
            options: {
                port: 9999,
                hostname: '0.0.0.0',
                livereload: LIVERELOAD_PORT,
                base: './'
            },

            livereload: {
                options: {
                    port: LIVERELOAD_PORT,
                    // hostname: '0.0.0.0',
                    middleware: function (connect) {
                        return [
                            require('grunt-connect-proxy/lib/utils').proxyRequest,
                            // lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, './')
                        ];
                    }
                }
            },

            open: {
                target: 'http://localhost:9999/',
                appName: 'Google Chrome'
            }
        }
    })

    grunt.registerTask('go', [
        'connect:livereload',
        'connect:open',
        'watch:livereload'
    ]);
}
