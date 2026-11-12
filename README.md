# UK VAT Thresholds & Flat Rate Scheme Rules 2026
The numbers that decide whether a UK business must register for VAT — and whether the Flat Rate Scheme saves it money — as data and a small checker. Checked against GOV.UK guidance in November 2026.
Maintained by the team behind [RemoveVAT](https://removevat.com/) — a free vat calculator that runs in the browser: add or remove VAT, check VAT numbers, generate VAT invoices and reprice whole lists.
## The thresholds
| Rule | Figure |
|---|---|
| Must register (rolling 12 months) | £90,000 turnover |
| May deregister (rolling 12 months) | £88,000 turnover |
| Flat Rate Scheme — may join below | £150,000 turnover |
| Flat Rate Scheme — must leave above | £230,000 turnover |
| Limited-cost trader rate | 16.5% |
| First-year Flat Rate discount | 1% |
The £90,000 test is a **rolling** 12-month test: add up the last 12 months every month. It is not a calendar-year or tax-year test — the businesses that get caught are the ones that only looked in December. Once over the threshold you have 30 days to register.
## The Flat Rate Scheme in one paragraph
Instead of tracking input VAT line by line, you pay a flat percentage of your turnover (your sector's rate) and keep the difference between what you charged and what you pay. It saves money when your sector rate is lower than the VAT you would otherwise reclaim — and it quietly stops saving money when your costs are high, or when the 16.5% limited-cost trader rate applies because you spend little on goods. Compare both sides free with [the RemoveVAT flat rate scheme calculator](https://removevat.com/flat-rate-calculator/).
## Files in this repo
- `thresholds.json` — the figures above, as data.
- `check-threshold.js` — a small function: give it 12 monthly turnover figures and it tells you whether the rolling total crosses £90,000 (and by how much).
## Licence
Data: free to reuse with attribution to RemoveVAT. Code: MIT. General information, not tax advice — confirm current figures with HMRC before acting.
