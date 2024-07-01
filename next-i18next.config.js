module.exports = {
  i18n: {
    defaultLocale: "az",
    locales: ["az", "ru", "en"],
    localeDetection: false,
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("public/locales")
      : "public/locales",
  ns: ["common"],
};
