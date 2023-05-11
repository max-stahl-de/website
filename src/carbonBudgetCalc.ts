// @ts-ignore
import dayjs from "dayjs";
const countdown = require("./lib/countdown");

export interface CountdownInterface {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface Configuration {
    temp: 2 | 1.5;
}

// Constants
const millisecondsPerYear = 3600 * 24 * 365.25 * 1000;
const startDate = dayjs("2020-02-01");
const initialAnnualEmissions = 42.2 * 1e9;

// Top level function.
// Calculates remaining co2-budget and time until it's depleted
export function calcRemaining(conf: Configuration) {
    const totalBudget = getTotalBudget(conf);
    const remainingBudget = getRemainingBudget(totalBudget);
    const remainingTime = getRemainingTime(totalBudget);

    return { remainingBudget, remainingTime };
}

// Returns seconds passed since a given date
function secondsPassed(date: dayjs.Dayjs) {
    const secondsPassed = dayjs().diff(date, "seconds");
    return secondsPassed;
}

// Calculates remaining budget using interpolation
function getRemainingBudget(totalBudget: number) {
    const budgetUsed = (secondsPassed(startDate) / millisecondsPerYear) * initialAnnualEmissions;
    return totalBudget - budgetUsed;
}

// Calculates time until budget is depleted, using interpolation
function getRemainingTime(totalBudget: number) {
    const yearsBudget = totalBudget / initialAnnualEmissions;
    const endDate = dayjs(startDate).add(yearsBudget * millisecondsPerYear, "milliseconds");
    const cdown: CountdownInterface = countdown(endDate);

    // Destructure cdown into object containing times
    const times = (({ years, months, days, hours, minutes, seconds }) => ({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
    }))(cdown);

    return times;
}

function getTotalBudget(conf: Configuration) {
    switch (conf.temp) {
        case 1.5:
            return 400 * 1e9;
        case 2:
            return 1150 * 1e9;
    }
}
