import { existsSync, readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const script = readFileSync("script.js", "utf8");
const css = readFileSync("style.css", "utf8");
const errors = [];
const applicationMarker = "// Application setup starts below";
const applicationStart = script.indexOf(applicationMarker);

if (applicationStart === -1) {
  errors.push(`Missing script marker: ${applicationMarker}`);
}

const dictionarySource =
  applicationStart === -1 ? script : script.slice(0, applicationStart);

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
const hashTargets = [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
const missingTargets = hashTargets.filter((target) => !ids.includes(target));
const translationKeys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(
  (match) => match[1],
);
const missingTranslations = translationKeys.filter(
  (key) => !dictionarySource.includes(`"${key}"`),
);
const incompleteTranslations = translationKeys.filter((key) => {
  const occurrences = dictionarySource.split(`"${key}"`).length - 1;
  return occurrences !== 2;
});
const localAssetReferences = [
  ...html.matchAll(/(?:href|src)="([^"]+)"/g),
  ...css.matchAll(/url\("([^"]+)"\)/g),
]
  .map((match) => match[1].split("?")[0])
  .filter(
    (reference) =>
      !reference.startsWith("#") &&
      !reference.startsWith("http") &&
      !reference.startsWith("mailto:"),
  );
const missingAssets = localAssetReferences.filter(
  (reference) => !existsSync(reference),
);

if (duplicateIds.length) {
  errors.push(`Duplicate IDs: ${[...new Set(duplicateIds)].join(", ")}`);
}

if (missingTargets.length) {
  errors.push(`Missing hash targets: ${[...new Set(missingTargets)].join(", ")}`);
}

if (missingTranslations.length) {
  errors.push(
    `Missing translation keys: ${[...new Set(missingTranslations)].join(", ")}`,
  );
}

if (incompleteTranslations.length) {
  errors.push(
    `Translation keys must exist once per language: ${[
      ...new Set(incompleteTranslations),
    ].join(", ")}`,
  );
}

if (missingAssets.length) {
  errors.push(`Missing local assets: ${[...new Set(missingAssets)].join(", ")}`);
}

for (const requiredMetadata of [
  'rel="canonical"',
  'property="og:title"',
  'property="og:description"',
  'rel="icon"',
]) {
  if (!html.includes(requiredMetadata)) {
    errors.push(`Missing metadata: ${requiredMetadata}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `Validated ${ids.length} IDs, ${hashTargets.length} hash links and ${translationKeys.length} translated elements.`,
);
