export function normalizeForSearch(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function isSubsequence(needle: string, haystack: string) {
  let i = 0;
  let j = 0;
  while (i < needle.length && j < haystack.length) {
    if (needle[i] === haystack[j]) i++;
    j++;
  }
  return i === needle.length;
}

export function scoreMatch(queryRaw: string, textRaw: string) {
  const query = normalizeForSearch(queryRaw);
  const text = normalizeForSearch(textRaw);

  if (!query || !text) return -1;
  if (text === query) return 100;
  if (text.startsWith(query)) return 90;
  if (text.includes(query)) return 80;

  // Key requirement: query may be longer than the target text.
  // Example: "testing1234" should find "testing123".
  if (query.includes(text)) return 70;

  if (isSubsequence(query, text)) return 60;
  if (isSubsequence(text, query)) return 55;

  return -1;
}
