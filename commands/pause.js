var main = require('./../bot.js');

exports.execute = (client, message, args) => {
    main.pauseSong(message.guild.id);
};

exports.info = {
    name: "pause",
    alias: [],
    permission: "default"
};
