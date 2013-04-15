## bootstrap-wysiwyg for Meteor

This is a simple port of [bootstrap-wysiwyg](http://mindmup.github.io/bootstrap-wysiwyg/) for Meteor.  Thanks to the MindMup guys for their excellent editor!

###How to use?

1. Install [meteorite](https://github.com/oortcloud/meteorite)
2. `mrt add bootstrap-wysiwyg`
3. Transform something into an editor by calling `$('#editor').wysiwyg();` (e.g. in a template's `rendered` callback)
4. Make sure you've styled your wysiwyg object (e.g. add CSS styling for `#editor`; See `lib/index.css` for an example)
5. Also make sure you've setup a toolbar for your editor.  `lib/index.html` contains an example, but check out [the official readme](https://github.com/mindmup/bootstrap-wysiwyg/blob/master/README.md#customising-) for more info.
6. See [bootstrap-wysiwyg](http://mindmup.github.io/bootstrap-wysiwyg/)'s official page for more help with setup options.
