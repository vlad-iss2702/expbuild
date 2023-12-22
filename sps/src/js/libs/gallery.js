// Lightbox
    $(document).on('click', '#galleryBlock, .gallery-init, *[rel=zoom]', function (event) {
        app.blueimp(this, event);
    });

    app = {
    blueimp: function(e, event){
        event = event || window.event;
        if (
            event.target.nodeName == 'IMG' ||
            event.target.nodeName == 'SPAN' ||
            event.target.nodeName == 'A'){
            var target = event.target || event.srcElement;
            var index = (event.target.nodeName == 'A') ? target : target.parentNode;
            var	options = {
                index: index,
                event: event
            };
            links = e.getElementsByTagName('a');
            if ($(e).attr('rel') == 'zoom'){
                links = $(e);
            }
            blueimp.Gallery(links, options);
        }
        return false;
    }
};