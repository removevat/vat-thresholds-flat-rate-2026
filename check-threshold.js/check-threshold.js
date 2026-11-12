// check-threshold.js — rolling 12-month VAT registration test (£90,000).
// Give it 12 monthly turnover figures (oldest first); it returns the total
// and whether the business must register. MIT licence.
const REGISTRATION_THRESHOLD = 90000;
function checkThreshold(monthlyTurnover) {
  if (!Array.isArray(monthlyTurnover) || monthlyTurnover.length !== 12) {
    throw new Error("Pass exactly 12 monthly turnover figures, oldest first.");
  }
  const total = monthlyTurnover.reduce((sum, v) => sum + v, 0);
  return {
    rolling12mTotal: total,
    threshold: REGISTRATION_THRESHOLD,
    mustRegister: total > REGISTRATION_THRESHOLD,
    headroom: REGISTRATION_THRESHOLD - total,
  };
}
// Example: a business growing £500/month from £7,000.
console.log(checkThreshold([7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500]));
module.exports = { checkThreshold, REGISTRATION_THRESHOLD };
