const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmebedBuilder,
    Client,
    PermissionFlagsBits,
    Webhook,
} = require('discord.js');

const eco = require('../database/ecoDB.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('eco-staff')
    .setDescription('Eco management')
    .setDefaultMemberPermission(PermissionFlagsBits.ADMINISTRATOR)
    .addSubcommand((subcommand) =>
    subcommand
        .setName('add')
        .setDescription('Add money to a user')
        .addUserOption((option) => 
        option
             .setName('target')
             .setDescription('The user to add money to')
             .setRequired( true )
    )
    .addNumberOption((option) =>
    option
        .setName('amount')
        .setDescription('The amount of money to add')
        .setRequired( true )
    )
    )
}
    .addSubcommand((subcommand) =>
    subcommand
        .setName('add')
        .setDescription('Add money to a user')
        .addUserOption((option) => 
        option
            .setName('target')
            .setDescription('The user to add money to')
            .setRequired( true )
    )
    .addNumberOption((option) =>
    option
        .setName('amount')
        .setDescription('The amount of money to add')
        .setRequired( true )
      )
    ),
    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const (guild, member) = interaction;
        const embed = new EmebedBuilder();
        const sub = interaction.options.getSubcommand()

        switch (sub) {
            case('add'):{
                let target = interaction.options.getUser('target');
                let amount = interaction.options.getNumber('amount');
                eco.balance.add(amount, Target.id, guild.id)

                embed
                    .setTitle('coins added')
                    .setDescription(`Added ${amount} coins to ${target.tag}`)
                    .setColor('GREEN')
                    .setTimestamp()

                interaction.reply({embeds: [embed]})
            }
            break;
            case('remove'):{
                let target = interaction.options.getUser('target') || member;
                let amount = interaction.options.getNumber('amount')|| 1;
                eco.balance.subtract(amount, Target.id, guild.id)

                embed
                    .setTitle('coins removed')
                    .setDescription(`took ${amount} coins away from ${target.tag}`)
                    .setColor('RED')
                    .setTimestamp()

                interaction.reply({embeds: [embed]})
            }
            break;
            case('set'):{
                let target = interaction.options.getUser('target');
                let amount = interaction.options.getNumber('amount');
                eco.balance.set(amount, Target.id, guild.id)
}
