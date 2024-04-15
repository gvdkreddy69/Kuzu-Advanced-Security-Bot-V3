module.exports = async (client) => {
  client.on("ready", async () => {
    console.log(`Kronix | ${client.user.tag} Has Logged In!\nKronix | Emoji Server: https://discord.gg/fU7YdD2dQ6\nKronix | Subscribe to Team Kronix.`)
    client.user.setPresence({
      activities: [{
        name: `${client.config.prefix}help`,
        type: "STREAMING",
        url: "https://www.discord.gg/teamkronix",
      }],
      status: "online"
    });
  });
};
