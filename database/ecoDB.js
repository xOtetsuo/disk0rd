const Economy = require('discord-economy-super');
const eco = new Economy({
    storagePath: './storage.json',
    updateCountdown: 1000,
    checkStorage: true,
    depreciationWarnings: true,
    sellingItemPercent: 75,
    savePurchasesHistory: true,
    dailyAmount: 150,
    workAmount:[10, 150],
    weeklyAmount: 500,
    dailyCooldown: 60000 * 60 * 24,
    workCooldown: 60000 * 60,
    weeklyCooldown: 60000 * 60 * 24 * 7,
    dateLocale: 'en',
    updater: {
        checkUpdates: true,
        upToDateMessage: true,

    },
    errorHandler: {
        handleErrors: true,
        attempts: 5,
        time: 3000,
    },
    optionsChecker: {
    ignoreInvalidOptions: false,
    ignoreInvalidTypes: false,
    ignoreUnspecifiedOptions: true,
    showProblems: true,
    sendLog:  true,
    sendSuccessLog: true,
    },

});


eco.on('ready', () => {
    console.log('Ecobase is ready!')
});

module.exports = eco;