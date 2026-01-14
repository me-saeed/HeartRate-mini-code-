
export function extractHeartRates(input: string): number[] {
  const heartRates: number[] = [];
  
  // Split by pipe to get individual log 
  const logEntries = input.split('|');
  
  for (const entry of logEntries) {
    // Find HeartRate pattern: 
    const heartRateMatch = entry.match(/HeartRate\s*=\s*(\d+)/i);
    
    if (heartRateMatch && heartRateMatch[1]) {
      const value = parseInt(heartRateMatch[1], 10);
      if (!isNaN(value)) {
        heartRates.push(value);
      }
    }
  }
  
  return heartRates;
}


const testInput = "LOG_01: HeartRate=72bpm; STATUS=OK | LOG_02: HeartRate= 85 ; STATUS=WARN | LOG_03: HeartRate=error; STATUS=FAIL";
const result = extractHeartRates(testInput);

console.log("Input:", testInput);
console.log("Output:", result);
console.log("Expected: [72, 85]");
console.log("Match:", JSON.stringify(result) === JSON.stringify([72, 85]) ? "✓ PASS" : "✗ FAIL");
