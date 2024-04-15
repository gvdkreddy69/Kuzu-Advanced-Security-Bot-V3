module.exports = async (client) => {
  client.on("ready", async () => {
    console.log(`${client.user.tag} Has Logged In!\nEmoji Server: https://discord.gg/fU7YdD2dQ6\nSubscribe to The Extremez Coder`)
    client.user.setPresence({
      activities: [{
        name: `${client.config.prefix}help`,
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=jFlphUBZpo4",
      }],
      status: "online"
    });
  });
};