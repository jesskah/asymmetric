// Date utility functions for the asymmetric LinkedIn clone

/**
 * Format employment duration like "Nov 2016 - Present" or "Jan 2020 - Mar 2022"
 * @param {string} startDate - ISO date string (YYYY-MM-DD)
 * @param {string|null} endDate - ISO date string or null for current job
 * @returns {string} Formatted duration
 */
export function formatJobDuration(startDate, endDate = null) {
  const start = new Date(startDate);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const startMonth = months[start.getMonth()];
  const startYear = start.getFullYear();
  
  if (!endDate) {
    return `${startMonth} ${startYear} - Present`;
  }
  
  const end = new Date(endDate);
  const endMonth = months[end.getMonth()];
  const endYear = end.getFullYear();
  
  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
}

/**
 * Calculate job duration like "2 yrs 3 mos" 
 * @param {string} startDate - ISO date string
 * @param {string|null} endDate - ISO date string or null for current job
 * @returns {string} Duration in years and months
 */
export function calculateDuration(startDate, endDate = null) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const diffTime = end - start;
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44));
  
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  
  let result = '';
  if (years > 0) result += `${years} yr${years > 1 ? 's' : ''}`;
  if (months > 0) {
    if (result) result += ' ';
    result += `${months} mo${months > 1 ? 's' : ''}`;
  }
  
  return result || '1 mo';
}

/**
 * Format post/activity dates like "2 hours ago", "3 days ago"
 * @param {string|Date} date - Date to format
 * @returns {string} Relative time
 */
export function formatRelativeTime(date) {
  const now = new Date();
  const past = new Date(date);
  const diffMs = now - past;
  
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  if (weeks < 4) return `${weeks}w ago`;
  
  // For older dates, show actual date
  return past.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: past.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
  });
}

/**
 * Format message timestamps like "3:45 PM" or "Yesterday 2:30 PM"
 * @param {string|Date} date - Date to format
 * @returns {string} Message timestamp
 */
export function formatMessageTime(date) {
  const messageDate = new Date(date);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const messageDay = new Date(messageDate.getFullYear(), messageDate.getMonth(), messageDate.getDate());
  
  const timeString = messageDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  
  const dayDiff = Math.floor((today - messageDay) / (1000 * 60 * 60 * 24));
  
  if (dayDiff === 0) return timeString; // Today
  if (dayDiff === 1) return `Yesterday ${timeString}`;
  if (dayDiff < 7) return `${messageDate.toLocaleDateString('en-US', { weekday: 'long' })} ${timeString}`;
  
  return messageDate.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: messageDate.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
  }) + ` ${timeString}`;
}