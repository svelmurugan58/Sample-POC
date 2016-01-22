module.exports = function(grunt) {

    // load the task
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-connect");

    // Configure grunt here
    grunt.initConfig({
        ts: {
            dev: { // a particular target
                src: ["typescript/**/*.ts"], // The source typescript files, http://gruntjs.com/configuring-tasks#files
                html: ["typescript/**/*.html"], // The source html files, https://github.com/basarat/grunt-ts#html-2-typescript-support
                reference: "./typescript/reference.ts", // If specified, generate this file that you can use for your reference management
                watch: 'typescript',

                out: 'app/out.js',
            },
        },
        connect: {
            server: {
                options: {
                    protocol: 'http', // or 'http2'
                    port: 8000,
                    hostname: 'localhost',
                    livereload:true,
                    base:'.',
                    keepalive:true,
                    //key: grunt.file.read('server.key').toString(),
                    //cert: grunt.file.read('server.crt').toString(),
                    //ca: grunt.file.read('ca.crt').toString()
                },
                livereload: {
                    options: {
                        livereload: true,
                        base: '.',
                        port: 8000
                    }
                },
            },
        },
    });

    grunt.registerTask("default", ["ts:dev"]);
    grunt.registerTask("server", ["connect:server"]);
}
