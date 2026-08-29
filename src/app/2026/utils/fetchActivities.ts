export interface Activity {
  name: string;
  mapsLink: string;
  minsDriving: number;
  types: string[];
}

export async function fetchActivitiesFromCSV(): Promise<Activity[]> {
  try {
    // Directly use the Google Sheets CSV URL
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3qP9VZtj1opQ-B8S7kIA9-nNmuECpadjGVWy2ywfgGFrldRVE1ly3kmCLBymuDbLdoqCSrLKxD_6B/pub?output=csv';
    
    const response = await fetch(csvUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.status} ${response.statusText}`);
    }
    
    const csvText = await response.text();
    
    // Parse CSV data
    const lines = csvText.split('\n');
    
    const activities: Activity[] = [];
    
    // Start from line 1 to skip headers
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line.trim()) continue; // Skip empty lines
      
      // Handle CSV parsing more robustly
      const values = parseCSVLine(line);
      
      // Skip rows that don't have enough data (should have at least 5 columns)
      if (values.length >= 5) {
        // Create activity object
        // Column 1: Activity name, Column 2: Maps link, Column 3: Categories, Column 4: Minutes driving
        const activity: Activity = {
          name: values[1]?.trim() || '',
          mapsLink: values[2]?.trim() || '',
          minsDriving: parseInt(values[4]?.trim() || '0', 10),
          types: values[3]?.trim() ? values[3].split(',').map(t => t.trim()) : []
        };
        
        // Only add activities with a name
        if (activity.name) {
          activities.push(activity);
        }
      }
    }
    
    return activities;
  } catch (error) {
    console.error('Error fetching activities:', error);
    return [];
  }
}

// Helper function to parse CSV line (handles quoted values)
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  // Add the last value
  result.push(current.trim());
  
  return result;
}
