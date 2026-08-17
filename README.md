# Go-Africa-Web-App-Prototype

High fidelity prototype for GoAfrica's Back-To-School initiative.



When you want to run it:

Ensure Live Server by Ritwick Dey is installed.

Right click the role\_selection\_portal\_style, and 'Open with Live Server'.

\## How it works


`role\_selection\_portal\_style.html` is the front door — it splits visitors into two tracks: \*\*Donor/Student\*\* or \*\*Staff\*\*. From there each track has its own sign-in, its own visual style (green for donor/student, teal for staff), and its own nav bar, but everything pulls colors from the same two shared token files (`js/tailwind-config-donor.js` / `-staff.js`) so a rebrand only means editing one file per track.



Within the donor/student track there are actually two different roles sharing the same bottom-nav shell: \*\*donors\*\* browse and give money, \*\*students\*\* manage their own campaign. They're kept apart by which nav bar (and which pages) each one lands on after signing in — nothing in the code currently checks "is this a donor or a student," it's just which links you click.



\## Screens by role



\*\*Donor\*\*

\- `sign\_in.html` / `sign\_up.html` — auth

\- `create\_donor\_profile.html` — onboarding

\- `donor\_account\_dashboard.html` — home base, "My Account" nav tab

\- `student\_directory.html` — browse students to support ("Directory" tab)

\- `student-profile.html` — single student detail, select needs (currently unlinked from the nav — see below)

\- `impact.html` — foundation-wide impact stats ("Impact" tab)

\- `donation-list.html` — cart/checkout ("Donate List" tab)

\- `donation-success.html` — confirmation after donating



\*\*Student / sponsee\*\*

\- `create\_student\_profile.html` — onboarding

\- `edit\_student\_profile.html` — "My Profile" tab

\- `campaign.html` — "My Campaign" tab, funding progress + share

\- `messages.html` — "Messages" tab, notes from donors

\- `settings.html` — "Settings" tab, manage needs list + upload verification docs



\*\*Staff\*\*

\- `staff\_sign\_in\_logo.html` / `staff\_registration.html` — auth

\- `staff\_overview\_dashboard.html` — sidebar "Dashboard", KPI summary

\- `student\_management\_directory.html` — sidebar "Students", full student table

\- `funds.html` — sidebar "Funds", disbursement tracking

\- `initiatives.html` — sidebar "Initiatives", campaign management

\- `verification.html` — sidebar "Verification", approve/reject uploaded docs

\- `staff\_settings.html` — sidebar "Settings"



\*\*Unused:\*\* `student-profile.html` isn't reachable from any nav — please wire it in (e.g. clicking a card in `student\_directory.html`).

