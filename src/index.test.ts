import { test, expect } from "bun:test";
import { extractHeartRates } from "./index";

test("extracts HeartRate values from log string", () => {
  const input = "LOG_01: HeartRate=72bpm; STATUS=OK | LOG_02: HeartRate= 85 ; STATUS=WARN | LOG_03: HeartRate=error; STATUS=FAIL";
  const result = extractHeartRates(input);
  expect(result).toEqual([72, 85]);
});

test("handles single HeartRate value", () => {
  const input = "LOG_01: HeartRate=72bpm; STATUS=OK";
  const result = extractHeartRates(input);
  expect(result).toEqual([72]);
});

test("handles multiple valid HeartRate values", () => {
  const input = "LOG_01: HeartRate=60bpm | LOG_02: HeartRate=75 | LOG_03: HeartRate=90bpm";
  const result = extractHeartRates(input);
  expect(result).toEqual([60, 75, 90]);
});

test("skips invalid HeartRate values", () => {
  const input = "LOG_01: HeartRate=error | LOG_02: HeartRate=72bpm | LOG_03: HeartRate=invalid";
  const result = extractHeartRates(input);
  expect(result).toEqual([72]);
});

test("handles empty string", () => {
  const input = "";
  const result = extractHeartRates(input);
  expect(result).toEqual([]);
});

test("handles string with no HeartRate values", () => {
  const input = "LOG_01: STATUS=OK | LOG_02: STATUS=WARN";
  const result = extractHeartRates(input);
  expect(result).toEqual([]);
});

test("handles HeartRate with various spacing", () => {
  const input = "LOG_01: HeartRate= 100 bpm | LOG_02: HeartRate=50bpm | LOG_03: HeartRate= 75 ";
  const result = extractHeartRates(input);
  expect(result).toEqual([100, 50, 75]);
});
