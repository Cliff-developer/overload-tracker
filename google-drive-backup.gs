/**
 * OVERLOAD TRACKER — Google Apps Script Backup Handler
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com and create a New Project
 * 2. Delete all existing code and paste this entire file
 * 3. Click Save (Ctrl+S), name the project "Overload Backup"
 * 4. Click Deploy → New Deployment
 * 5. Select type: Web App
 * 6. Set "Execute as": Me
 * 7. Set "Who has access": Anyone
 * 8. Click Deploy → copy the Web App URL
 * 9. Paste that URL into the app under History → ☁ Drive
 * 10. Tap "Save URL" then "Backup Now"
 *
 * Your backups will appear in a folder called "Overload Tracker Backups"
 * in your Google Drive root.
 */

const FOLDER_NAME = 'Overload Tracker Backups';
const BACKUP_FILENAME = 'overload-latest-backup.json';

function getOrCreateFolder() {
  const folders = DriveApp.getFoldersByName(FOLDER_NAME);
  if (folders.hasNext()) return folders.next();
  return DriveApp.createFolder(FOLDER_NAME);
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    
    if (payload.action === 'backup') {
      const folder = getOrCreateFolder();
      
      // Delete existing backup file if present
      const existing = folder.getFilesByName(BACKUP_FILENAME);
      while (existing.hasNext()) existing.next().setTrashed(true);
      
      // Write new backup
      folder.createFile(BACKUP_FILENAME, payload.data, 'application/json');
      
      // Also save a dated copy
      const dated = `overload-backup-${new Date().toISOString().slice(0,10)}.json`;
      const datedExisting = folder.getFilesByName(dated);
      while (datedExisting.hasNext()) datedExisting.next().setTrashed(true);
      folder.createFile(dated, payload.data, 'application/json');
      
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'ok', message: 'Backed up successfully' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: 'Unknown action' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const action = e.parameter.action;
    
    if (action === 'restore') {
      const folder = getOrCreateFolder();
      const files = folder.getFilesByName(BACKUP_FILENAME);
      
      if (files.hasNext()) {
        const file = files.next();
        const data = file.getBlob().getDataAsString();
        return ContentService
          .createTextOutput(JSON.stringify({ status: 'ok', data: data }))
          .setMimeType(ContentService.MimeType.JSON);
      }
      
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'No backup found' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', message: 'Overload Backup Script running' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
