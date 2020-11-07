import * as pulumi from "@pulumi/pulumi";

export const config = new pulumi.Config();

const empAddress = config.require("empAddress");
const privateKey = config.require("privateKey");
const infuraKey = config.require("infuraKey");
const pageDutyAPI = config.require("pageDutyAPI");
const pageDutyServiceID = config.require("pageDutyServiceID");
const pageDutyFromEmail = config.require("pageDutyFromEmail");

export const liquidatorEnvironment = [
    {
        name: "EMP_ADDRESS",
        value: empAddress
    },
    {
        name: "PRIVATE_KEY",
        value: privateKey
    },
    {
        name: "PRICE_FEED_CONFIG",
        value: `{"type":"medianizer","apiKey":"Z24VHM7MYDATUQ9Y8IU3","lookback":7200,"invertPrice":true,"minTimeBetweenUpdates":60,"medianizedFeeds":[{"type":"cryptowatch","exchange":"binance","pair":"perlusdt"}]}`
    },
    {
        name: "LIQUIDATOR_CONFIG",
        value: `{"crThreshold":0.02}`
    },
    {
        name: "PAGERDUTY_API_KEY",
        value: pageDutyAPI
    },
    {
        name: "PAGERDUTY_SERVICE_ID",
        value: pageDutyServiceID
    },
    {
        name: "PAGERDUTY_FROM_EMAIL",
        value: pageDutyFromEmail
    },
    {
        name: "INFURA_API_KEY",
        value: infuraKey
    },
    {
        name: "COMMAND",
        value: "yarn truffle exec ./packages/liquidator/index.js --network kovan_privatekey"
    }
]

export const disputerEnvironment = [
    {
        name: "EMP_ADDRESS",
        value: empAddress
    },
    {
        name: "PRIVATE_KEY",
        value: privateKey
    },
    {
        name: "PRICE_FEED_CONFIG",
        value: `{"type":"medianizer","apiKey":"Z24VHM7MYDATUQ9Y8IU3","lookback":7200,"invertPrice":true,"minTimeBetweenUpdates":60,"medianizedFeeds":[{"type":"cryptowatch","exchange":"binance","pair":"perlusdt"}]}`
    },
    {
        name: "DISPUTER_CONFIG",
        value: `{"disputeDelay":30}`
    },
    {
        name: "PAGERDUTY_API_KEY",
        value: pageDutyAPI
    },
    {
        name: "PAGERDUTY_SERVICE_ID",
        value: pageDutyServiceID
    },
    {
        name: "PAGERDUTY_FROM_EMAIL",
        value: pageDutyFromEmail
    },
    {
        name: "INFURA_API_KEY",
        value: infuraKey
    },
    {
        name: "COMMAND",
        value: "yarn truffle exec ./packages/disputer/index.js --network kovan_privatekey"
    }
]