# 🏋️ Overload Tracker

A personal progressive overload workout tracker built as a fully offline-capable Progressive Web App (PWA). No subscriptions, no ads, no account required — just open the URL, add it to your home screen, and start tracking.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Workout Plan](#workout-plan)
- [How to Use](#how-to-use)
- [Installing as a Mobile App](#installing-as-a-mobile-app)
- [Offline Support](#offline-support)
- [Data & Privacy](#data--privacy)
- [Backup & Restore](#backup--restore)
- [Sharing & Social](#sharing--social)
- [File Structure](#file-structure)
- [Hosting](#hosting)
- [Updating the App](#updating-the-app)

---

## Overview

Overload Tracker is a lightweight, mobile-first PWA designed around one principle: **always know what you lifted last time, so you can beat it this time.** It tracks weights, reps, sets, and hold times across a structured 5-day workout split plus a dedicated skills training day.

Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies beyond Chart.js for the volume charts.

---

## Features

### 📋 Session Logging
- Log weight, reps, and sets for every exercise
- Log hold time in seconds for skill/isometric exercises
- Tick off each set as you complete it
- Add free-text notes per session (energy level, observations, pain points)

### 🔁 Progressive Overload Tracking
- Every exercise shows your **last session's numbers** before you start, so you always know your baseline
- Input placeholders pre-fill with your last session's values as hints

### 🏆 Personal Records (PRs)
- Automatically tracks your all-time best for every exercise
- PRs displayed per exercise on the log screen
- Dedicated PRs tab showing bests across your entire regimen
- Supports both weight-based PRs (kg × reps) and time-based PRs (seconds held)

### 🎉 PR Celebration
- When you hit a new PR, a celebration modal fires automatically after saving
- Displays the exercise, new weight/time, and a rotating motivational quote (10 different quotes)
- Fires only when a genuine improvement is detected — smarter than just any logged set

### 📤 Share Cards
- **Share PR Card** — generates a 1080×1080 shareable image from the PR celebration modal, branded with the app aesthetic
- **Share Session Card** — tap the share button on any past session in History to generate a full session summary image
- On Android, triggers the native share sheet (WhatsApp, Instagram, etc.)
- On iPhone, saves to camera roll

### 📆 Session History
- Full history of every logged session in reverse chronological order
- Shows all exercises and sets per session
- Session notes displayed where logged

### 📈 Volume Charts
- **Volume by Day** — cumulative total volume (kg × reps) per day across all sessions as a bar chart, colour-coded by day
- **Exercise Progress** — select any exercise from the dropdown to see your max weight over time as a line chart, showing your strength progression curve

### 💾 Backup & Restore
- **Export** — downloads a dated `.json` file of all session data
- **Import** — merges a backup file back in without creating duplicates; safe to use on a new device

### 📡 Offline Support
- Full offline functionality via Service Worker after first load
- Offline banner displayed when no internet connection is detected
- All data stored locally on device via localStorage — never sent anywhere

---

## Workout Plan

The app is structured around the following 6-day plan:

### 🟢 Monday — Chest / Triceps / Shoulders (Push Day)
| Exercise | Sets | Reps |
|---|---|---|
| Barbell Floor Press | 4 | 6–10 |
| Feet-Elevated Push-ups | 3 | 8–12 |
| Dumbbell Shoulder Press | 3 | 8–12 |
| Overhead Tricep Extension | 3 | 10–15 |
| Bench Dips | 3 | 8–12 |
| Push-up Plus | 2 | 12–15 |
| Scapular Push-ups | 2 | 12–15 |

### 🔵 Tuesday — Pull / Biceps / Core
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

### 🟡 Thursday — Shoulders / Arms (V-Taper Day)
| Exercise | Sets | Reps |
|---|---|---|
| Pike Push-ups | 4 | 6–10 |
| Dumbbell Shoulder Press | 3 | 8–12 |
| Lateral Raises | 4 | 12–20 |
| Reverse Flyes | 4 | 12–20 |
| Bent-Over Rear Delt Rows | 3 | 10–15 |
| Dumbbell Curls | 3 | 8–12 |
| Overhead Tricep Extension | 3 | 10–12 |
| Partial Lateral Raises | 1 | Drop set to failure |

### 🔴 Friday — Upper Body Mass
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
| 90-Degree Hold | 3 | Seconds held |
| Tuck Planche Hold | 3 | Seconds held |
| Active Hang | 3 | Seconds held |
| Ledge Hang | 3 | Seconds held |
| Behind the Neck Pull-ups | 3 | Reps |
| Handstand Push-ups | 3 | Reps |
| Wall Walks | 3 | Reps |
| Scapula Pull-ups | 3 | Reps |

---

## How to Use

### Logging a Session
1. Open the app and go to the **Log** tab
2. Select the day tab at the top (Mon, Tue, Wed, Thu, Fri, Skills)
3. Tap the **+** on any exercise to expand it
4. Fill in weight (kg) and reps per set — or seconds for timed skills
5. Tap the checkmark on the right to mark a set as done
6. Optionally add a note at the bottom
7. Tap **Save Session** when done

### Reading the Last Session Display
Under each exercise name you'll see two lines before you start:
- **Last** (blue) — what you logged last time for this exact day, set by set
- **PR** (green) — your all-time best for that exercise

Your goal each session is to beat at least one of these numbers somewhere.

### Bodyweight Exercises
For exercises where you're not adding external weight (push-ups, dips, pull-ups without added weight), just enter `0` for the weight field and log your reps. The tracker will still record and display your rep PRs.

---

## Installing as a Mobile App

### Android (Chrome)
1. Open the app URL in Chrome
2. Tap the ⋮ menu (top right)
3. Tap **Add to Home screen**
4. Confirm — the app icon appears on your home screen

### iPhone (Safari)
1. Open the app URL in **Safari** (must be Safari, not Chrome)
2. Tap the Share icon (box with arrow pointing up)
3. Tap **Add to Home Screen**
4. Confirm — the app icon appears on your home screen

Once installed, it behaves like a native app — full screen, no browser UI, launches from your home screen.

---

## Offline Support

The app uses a **Service Worker** to cache all assets on first load. After visiting once with an internet connection, the app works completely offline including:

- All workout data and logging
- Charts and PR tracking
- Export and import

A yellow banner appears at the top of the app whenever you're offline, confirming it's running from cache. Your data is never affected by connectivity — it lives on your device.

---

## Data & Privacy

All data is stored **exclusively on your device** using `localStorage`. Nothing is ever sent to any server. There is no account, no cloud sync, and no analytics. GitHub Pages only hosts the app files — it has no access to your workout data.

---

## Backup & Restore

### Exporting a Backup
1. Go to the **History** tab
2. Tap **⬇ Export backup**
3. A `.json` file is downloaded with today's date in the filename (e.g. `overload-backup-2026-06-08.json`)
4. Save it to Google Drive, email it to yourself, or store it anywhere safe

It is recommended to export a backup every few weeks or before switching phones.

### Importing a Backup
1. Go to the **History** tab on your new device
2. Tap **⬆ Import backup**
3. Select your `.json` backup file
4. Sessions are merged in — duplicates are automatically skipped

---

## Sharing & Social

### Sharing a PR
When a new PR is detected after saving a session, a celebration modal appears. Tap **📤 Share PR** to generate a branded 1080×1080 image card showing the exercise, weight/time, and date.

### Sharing a Session
In the **History** tab, each session has a **📤** button next to the date. Tap it to generate a full session summary image showing all logged sets.

On Android the native share sheet opens. On iPhone the image is saved to your camera roll for sharing anywhere.

---

## File Structure

```
overload-tracker/
├── index.html       # Main app — all UI, logic, and styles in one file
├── sw.js            # Service worker — handles offline caching
├── manifest.json    # PWA manifest — enables home screen installation
└── icon.png         # App icon — shown on home screen and browser tab
```

---

## Hosting

The app is hosted on **GitHub Pages** — free, permanent, and reliable. The URL format is:

```
https://yourusername.github.io/overload-tracker/
```

GitHub Pages has been a free feature for over 10 years with no signs of changing. The only scenarios that would take the app offline are deleting the repository or losing access to the GitHub account.

---

## Updating the App

When new files are uploaded to GitHub:

1. GitHub Pages rebuilds within 1–2 minutes
2. The Service Worker cache version is bumped, forcing all devices to download fresh files
3. On mobile, if the old version persists — remove the app from your home screen and re-add it fresh from the browser

To manually clear the cache on mobile, go to your browser settings, find site data for the app URL, and clear it — then reopen the app with internet to re-cache.

---

*Built with vanilla HTML/CSS/JS · Hosted on GitHub Pages · No frameworks · No accounts · No cost*
