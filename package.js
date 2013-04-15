Package.describe({
    summary: "Bootstrap-wysiwyg"
});

Package.on_use(function (api) {
    api.use('bootstrap', 'client');
    api.add_files([
        'lib/jquery.hotkeys.js',
        'lib/bootstrap-wysiwyg.js'
    ], 'client');
});
