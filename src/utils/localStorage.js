import { APP_CONFIG } from "../constants";

/**
 * Save notes array to local storage
 * @param {Array} notes - Array of note objects to save
 */
export const saveNotesToStorage = (notes) => {
  try {
    const notesData = JSON.stringify(notes);
    localStorage.setItem(APP_CONFIG.LOCAL_STORAGE_KEY, notesData);
  } catch (error) {
    console.error("Failed to save notes to local storage:", error);
  }
};

/**
 * Load notes array from local storage
 * @returns {Array} Array of note objects, or empty array if none found
 */
export const loadNotesFromStorage = () => {
  try {
    const savedNotes = localStorage.getItem(APP_CONFIG.LOCAL_STORAGE_KEY);
    if (savedNotes) {
      return JSON.parse(savedNotes);
    }
    return [];
  } catch (error) {
    console.error("Failed to load notes from local storage:", error);
    return [];
  }
};

/**
 * Clear all notes from local storage
 */
export const clearNotesFromStorage = () => {
  try {
    localStorage.removeItem(APP_CONFIG.LOCAL_STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear notes from local storage:", error);
  }
};
