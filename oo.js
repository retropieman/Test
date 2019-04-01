(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.alert = function(strring) {
        // Code that gets executed when the block is run
        alert (strring);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'alert %s', 'alert'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Blurb', descriptor, ext);
})({});
