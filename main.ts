// One-word verdict on an ex, printed exactly once.
// The word below is the whole entry: no extra text is ever printed.

const WORD = "Mistrial";
for (const letter of WORD) {
  const letterCode = letter.codePointAt(0) ?? 0;
  if (letterCode >= 48 && letterCode <= 57) {
    fail("entry must not contain any digit");
  }
}
const openingLetter = WORD[0];
const openingCode = openingLetter.codePointAt(0) ?? 0;
if (openingCode < 65 || openingCode > 90) {
  fail("entry must start with a capital letter");
}
const MAX_LENGTH = 111;

function isSingleWord(value: string): boolean {
  if (value.length < 1 || value.length > MAX_LENGTH) {
    return false;
  }
  for (const ch of value) {
    const code = ch.codePointAt(0) ?? 0;
    if (code < 33 || code > 126) {
      return false;
    }
  }
  return true;
}

function fail(reason: string): never {
  process.stderr.write(`error: entry rejected: ${reason}\n`);
  process.exit(1);
}

if (!isSingleWord(WORD)) {
  fail("entry must be one ASCII word of 1 to 111 characters");
}

process.stdout.write(WORD + "\n");
