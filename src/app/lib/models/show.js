(function (App) {
    'use strict';

    var Provider = require('butter-provider');

    var Show = App.Model.ContentItem.extend({
        updateHealth: function () {
            var torrents = this.get('torrents');

            _.each(torrents, function (torrent) {
                _.each(torrent, function (episode, key) {
                    torrent[key].health =
                        Common.healthMap[Common.calcHealth(episode)];
                });
            });

            this.set('torrents', torrents, {
                silent: true
            });
        }
    });

    App.Model.register(Provider.ItemType.TVSHOW, Show);
    App.Model.register('bookmarked' + Provider.ItemType.TVSHOW, Show);
})(window.App);
