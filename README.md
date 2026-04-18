# Northstar School Admin Portal

A polished school management dashboard for student records, admin accounts, attendance tracking, fee monitoring, and operational reporting.

![Northstar School Admin Portal preview](assets/preview.png)

## Overview

Northstar is a static front-end school administration portal built to look and behave like a real internal dashboard. It includes student and admin account databases, detail views, reports, quick actions, audit logs, and persistent browser storage using `localStorage`.

## Features

- Modern dashboard with KPI cards and summary panels
- Student database with search, filters, add, edit, remove, and profile view
- Admin accounts database with roles, permissions, status, and login history
- Attendance controls and fee updates from student profiles
- Audit trail showing recent administrative activity
- Announcements, timetable, class overview, and staff snapshot
- CSV roster export for student records
- Browser persistence for students and admin accounts
- Responsive layout for desktop, tablet, and mobile

## Files

- [index.html](index.html) - Page structure and modal markup
- [styles.css](styles.css) - Full visual system and responsive layout
- [app.js](app.js) - Data, rendering, filtering, and interactions
- [assets/preview.png](assets/preview.png) - Screenshot used in this README

## How To Run

### Option 1: Open directly

Open [index.html](index.html) in any modern browser.

### Option 2: Use VS Code Live Server

1. Install the Live Server extension.
2. Right-click [index.html](index.html).
3. Select "Open with Live Server".

## How It Works

- Student and admin records start with demo data.
- Changes are saved in the browser using `localStorage`.
- The dashboard updates automatically when records change.
- Export creates a CSV file for the student roster.

## Demo Accounts And Data

This project is frontend-only. It does not include a backend database or real authentication server. The admin accounts section is a working in-browser database meant to simulate a professional internal portal.

## Customization

- Update the branding text and colors in [styles.css](styles.css).
- Replace the sample student and admin data in [app.js](app.js).
- Add more report cards or dashboard sections in [index.html](index.html).
- Swap `assets/preview.png` with a new screenshot after future design updates.

## Notes

- The project is intended to run as a static site.
- If you want multi-user login, cloud sync, or real database storage, you will need a backend.
