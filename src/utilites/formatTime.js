// Formats a timestamp into "HH:MM" time format
export const formatClockTime = (timestamp) => {
  const date = new Date(timestamp);
  const hrs = date.getHours();
  const mins = date.getMinutes();
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
};
// Formats a duration (in seconds) into "HH:MM:SS" format
export const formatDuration = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(
    2,
    '0'
  )}:${String(secs).padStart(2, '0')}`;
};
