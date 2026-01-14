# HeartRate Extractor

A TypeScript solution for extracting HeartRate values from log strings.

## Problem

Extract "HeartRate" values as numbers from a log string.

**Input String:**
```
LOG_01: HeartRate=72bpm; STATUS=OK | LOG_02: HeartRate= 85 ; STATUS=WARN | LOG_03: HeartRate=error; STATUS=FAIL
```

**Expected Output:**
```
[72, 85]
```

## Solution

The `extractHeartRates` function:
- Parses log entries separated by `|`
- Uses regex to find `HeartRate=` patterns followed by numeric values
- Extracts only valid numeric values (skips errors/invalid entries)
- Returns an array of numbers

## Requirements



### Using Node.js

```bash
# Install dependencies (includes tsx for running TypeScript)
npm install

# If you encounter npm cache permission errors, fix with:
# sudo chown -R $(whoami) ~/.npm
```

## Usage

### Run the script directly:

**With Bun:**
```bash
bun run src/index.ts
# or
bun start
```

**With Node.js:**
```bash
# Option 1: Use npx (recommended, no global install needed)
npx tsx src/index.ts

# Option 2: Use npm script
npm run start:node
```

### Run tests:



**With Node.js:**
```bash
# Option 1: Use npx (recommended)
npx tsx src/index.test.ts

# Option 2: Use npm script
npm run test:node
```

## Example Output

```
Input: LOG_01: HeartRate=72bpm; STATUS=OK | LOG_02: HeartRate= 85 ; STATUS=WARN | LOG_03: HeartRate=error; STATUS=FAIL
Output: [72, 85]
Expected: [72, 85]
Match: ✓ PASS
```

## Project Structure

```
.
├── src/
│   ├── index.ts          # Main function implementation
│   └── index.test.ts     # Test cases
├── package.json
├── tsconfig.json
└── README.md
```

## Implementation Details

The function uses a regular expression pattern `/HeartRate\s*=\s*(\d+)/i` to:
- Match "HeartRate=" (case-insensitive)
- Handle optional whitespace around the equals sign
- Capture numeric digits after the equals sign
- Ignore non-numeric values (like "error")

## License

MIT
