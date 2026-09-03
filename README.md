# 💪 Overload Tracker

A personal progressive overload workout tracker built as a fully offline-capable Progressive Web App (PWA). No subscriptions, no ads, no account required — install it on your home screen and start tracking.

---

## Table of Contents
- [Features](#features)
- [Workout Plan](#workout-plan)
- [How to Use](#how-to-use)
- [Installing on Your Phone](#installing-on-your-phone)
- [Offline Support](#offline-support)
- [Draft Auto-Save](#draft-auto-save)
- [Google Drive Backup](#google-drive-backup)
- [Local Backup & Restore](#local-backup--restore)
- [Sharing PRs & Sessions](#sharing-prs--sessions)
- [Calendar & Stats](#calendar--stats)
- [Adding New Exercises](#adding-new-exercises)
- [File Structure](#file-structure)
- [Deploying Updates](#deploying-updates)

---

## Features

| Feature | Details |
|---|---|
| Session logging | Weight + reps + sets per exercise; seconds for timed holds |
| Draft auto-save | Inputs saved instantly — switching apps won't lose your progress |
| Last session display | See exactly what you lifted last time before each set |
| PR tracking | Auto-detects new personal records on save |
| PR celebration | Animated modal with rotating motivational quote |
| Streak counter | 🔥 Tracks consecutive training days |
| Calendar view | Monthly heatmap with per-day session details and stats |
| Volume charts | Volume by day + exercise progress line chart |
| Share cards | 1080×1080 shareable images for PRs and full sessions |
| Google Drive backup | One-tap cloud backup via Google Apps Script |
| Local backup | Export/import JSON for manual phone-to-phone transfer |
| Offline support | Full offline capability via Service Worker after first load |

---

## Workout Plan

### 🟢 Monday — Push
| Exercise | Sets | Reps |
|---|---|---|
| Barbell Floor Press | 4 | 6–10 |
| Feet-Elevated Push-ups | 3 | 8–12 |
| Dumbbell Shoulder Press | 3 | 8–12 |
| Overhead Tricep Extension | 3 | 10–15 |
| Bench Dips | 3 | 8–12 |
| Push-up Plus | 2 | 12–15 |
| Scapular Push-ups | 2 | 12–15 |

### 🔵 Tuesday — Pull / Core
| Exercise | Sets | Reps |
|---|---|---|
| Weighted Pull-ups | 4 | 5–8 |
| Barbell Rows | 4 | 6–10 |
| Chin-ups | 3 | 8–12 |
| Dumbbell Curls | 3 | 8–12 |
| Hammer Curls | 3 | 8–12 |
| Side Planks | 2 | 60 sec |
| Russian Twists | 2 | 15–20 |

### 🟢 Wednesday — Legs / Core
| Exercise | Sets | Reps |
|---|---|---|
| Barbell Squats | 4 | 6–10 |
| Romanian Deadlifts | 4 | 8–12 |
| Bulgarian Split Squats | 3 | 8–12 each |
| Calf Raises | 4 | 12–20 |
| Hanging Leg Raises | 3 | 10–15 |
| Planks | 3 | max 90 sec |

### 🟡 Thursday — V-Taper
| Exercise | Sets | Reps |
|---|---|---|
| Pike Push-ups | 4 | 6–10 |
| Dumbbell Shoulder Press | 3 | 8–12 |
| Lateral Raises | 4 | 12–20 |
| Reverse Flyes | 4 | 12–20 |
| Bent-Over Rear Delt Rows | 3 | 10–15 |
| Dumbbell Curls | 3 | 8–12 |
| Overhead Tricep Extension | 3 | 10–12 |
| Partial Lateral Raises | 1 | Drop set |

### 🔴 Friday — Upper Mass
| Exercise | Sets | Reps |
|---|---|---|
| Weighted Pull-ups | 4 | 6–10 |
| Barbell Floor Press | 4 | 8–12 |
| Barbell Rows | 3 | 8–12 |
| Lateral Raises | 3 | 15–20 |
| Hammer Curls | 3 | 10–12 |
| Tricep Extensions | 3 | 10–12 |
| Push-up Plus | 2 | max reps |

### 🟣 Skills Training
| Exercise | Sets | Tracking |
|---|---|---|
| 90-Degree Hold | 3 | Seconds |
| Tuck Planche Hold | 3 | Seconds |
| Active Hang | 3 | Seconds |
| Ledge Hang | 3 | Seconds |
| Behind the Neck Pull-ups | 3 | Reps |
| Handstand Push-ups | 3 | Reps |
| Wall Walks | 3 | Reps |
| Scapula Pull-ups | 3 | Reps |

---

## How to Use

### Logging a Session
1. Open the app → **Log** tab
2. Select the day (Mon – Skills)
3. Tap **+** on any exercise to expand it
4. Fill in weight + reps per set (or seconds for timed holds)
5. Tap the ✓ checkmark to mark a set done
6. Add optional notes at the bottom
7. Tap **Save Session →**

### Reading the Indicators
- **↩ Last** (blue) — your numbers from the last time you trained this day
- **★ PR** (green) — your all-time best for that exercise

Your goal: beat at least one number somewhere in the session.

### Bodyweight Exercises
Enter `0` for weight and log your reps. PR tracking still works.

---

## Installing on Your Phone

### Android (Chrome)
1. Open the app URL in Chrome
2. Tap ⋮ menu → **Add to Home screen**
3. Confirm

### iPhone (Safari)
1. Open the app URL in **Safari** (not Chrome)
2. Tap the Share icon → **Add to Home Screen**
3. Confirm

---

## Offline Support

After one visit with internet, the app works fully offline including all logging, PR tracking, charts, and backup/export. A yellow banner appears when you're offline. All data is stored on your device — GitHub only hosts the app files.

---

## Draft Auto-Save

This is the fix for losing progress when switching apps mid-session.

Every input (weight, reps, seconds, checkmarks, notes) is saved automatically to your device as you type. If you:
- Switch to another app
- Take a call
- Lock your screen
- The app goes to the background for any reason

Your in-progress session is still there when you come back. The draft is cleared only when you tap **Save Session →**. You can safely switch apps as many times as you need mid-workout.

---

## Google Drive Backup

This gives you full cloud backup so you never lose data if you lose your phone.

### One-Time Setup (5 minutes)

**Step 1 — Create the Script**
1. Go to [script.google.com](https://script.google.com) and sign in with your Google account
2. Click **New Project**
3. Delete all existing code
4. Open the file `google-drive-backup.gs` from this repo and paste its entire contents
5. Press **Ctrl+S** to save. Name the project `Overload Backup`

**Step 2 — Deploy as Web App**
1. Click **Deploy** → **New Deployment**
2. Click the gear icon ⚙ next to "Select type" → choose **Web App**
3. Set **Execute as**: `Me`
4. Set **Who has access**: `Anyone`
5. Click **Deploy**
6. Google will ask you to authorize — click through and allow
7. Copy the **Web App URL** that appears (it starts with `https://script.google.com/macros/s/...`)

**Step 3 — Connect to the App**
1. Open the Overload Tracker → **History** tab → tap **☁ Drive**
2. Paste your Web App URL into the field
3. Tap **Save URL** (saves it permanently so you only do this once)
4. Tap **⬆ Backup Now** — your sessions upload to a folder called `Overload Tracker Backups` in your Google Drive

### Restoring from Drive
1. Open the app on your new phone → **History** → **☁ Drive**
2. Paste your Web App URL → tap **⬇ Restore from Drive**
3. All sessions are merged in without duplicates

### Backup Strategy
- Tap **⬆ Backup Now** after any important session or weekly
- Google Drive keeps both `overload-latest-backup.json` (always current) and dated copies

---

## Local Backup & Restore

For manual backups without Google Drive.

### Export
History tab → **⬇ Export** → downloads `overload-backup-YYYY-MM-DD.json`

Save it to Google Drive, WhatsApp Saved Messages, or email it to yourself.

### Import
History tab → **⬆ Import** → select your `.json` file → sessions merge in without duplicates.

---

## Sharing PRs & Sessions

### Share a PR
When a new PR fires, tap **📤 Share PR** on the celebration modal. Generates a branded 1080×1080 image card.

### Share a Session
In the **History** tab, tap the **📤** button on any session. Generates a full session summary image.

On Android → native share sheet (WhatsApp, Instagram, etc.)
On iPhone → saves to camera roll

---

## Calendar & Stats

The **Calendar** tab shows:
- Monthly view with coloured dots on workout days
- Stats: sessions this month, active days, total volume
- Scrollable log of recent sessions with volume, day type, and notes
- Navigate months with ‹ › arrows

---

## Adding New Exercises

Open `index.html` in any text editor and find the clearly marked section:

```
// ╔══════════════════════════════════════════╗
// ║  WORKOUT DATA — EDIT THIS SECTION        ║
```

### Adding to an Existing Day
Find the day you want (e.g. Monday) and add a new line inside its `exercises` array:

```js
// For a weight + reps exercise:
{name:"Your Exercise Name", sets:3, rep_range:"8–12", type:"reps"},

// For a timed hold exercise (logs seconds):
{name:"Your Hold Name", sets:3, rep_range:"max time", type:"time"},
```

### Adding to Skills
Scroll to the Skills day and find the comment:
```
// ── ADD NEW SKILLS BELOW THIS LINE ──
```
Add your exercise there. Examples are already in the comments.

### Rules
- `name` — exactly what appears in the app and PR tracking (must be unique)
- `sets` — number of input rows shown
- `rep_range` — display only, shown as a hint (e.g. `"8–12"`, `"max reps"`, `"60 sec"`)
- `type` — `"reps"` for weight+reps tracking, `"time"` for seconds tracking

After editing, upload the new `index.html` to GitHub. Your existing session data is never affected by adding exercises.

---

## File Structure

```
overload-tracker/
├── index.html                # Full app — all UI, logic, styles
├── sw.js                     # Service worker — offline caching
├── manifest.json             # PWA manifest — home screen install
├── icon.png                  # App icon
├── google-drive-backup.gs    # Google Apps Script — paste into script.google.com
└── README.md                 # This file
```

---

## Deploying Updates

When you upload a new `index.html` to GitHub:
1. GitHub Pages rebuilds within 1–2 minutes
2. The service worker cache version bumps, forcing devices to download fresh files
3. On mobile: if the old version persists, remove the app from home screen, reopen in browser with internet, and re-add

To force a cache refresh manually on mobile: go to browser settings → find site data for your app URL → clear it → reopen.

---

*Vanilla HTML/CSS/JS · Chart.js · GitHub Pages · No frameworks · No accounts · No cost*
