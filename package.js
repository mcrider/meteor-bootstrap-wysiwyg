Package.describe({
    summary: "Bootstrap-wysiwyg"
});

Package.on_use(function (api) {
    api.use('bootstrap', 'client');
    api.add_files([
        'lib/bootstrap-wysiwyg.js'
    ], 'client');
});
