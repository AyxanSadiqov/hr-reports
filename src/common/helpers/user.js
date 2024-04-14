const accounts = [
  {
    email: "jgasimov@pasha-holding.az",
    password: "123",
    role: "ALL",
  },
  {
    email: "smammadov@pasha-holding.az",
    password: "123",
    role: "ALL",
  },
  {
    email: "dsadullayev@pasha-holding.az",
    password: "123",
    role: "ALL",
  },
  {
    email: "rallahverdiyev@pasha-holding.az",
    password: "123",
    role: "ALL",
  },
  {
    email: "fmammadov@pasha-holding.az",
    password: "123",
    role: "ALL",
  },
  {
    email: "aboon@pasha-holding.az",
    password: "123",
    role: "ALL",
  },
  {
    email: "jismayilov@pasha-holding.az",
    password: "123",
    role: "ALL",
  },
  {
    email: "aabbasli@pasha-holding.az",
    password: "123",
    role: "ALL",
  },
  {
    email: "ejafarov@pasha-holding.az",
    password: "123",
    role: "ALL",
  },
];

const TrToEn = (text) => {
  return String(text)
    .replaceAll("Ğ", "g")
    .replaceAll("Ü", "u")
    .replaceAll("Ş", "s")
    .replaceAll("I", "i")
    .replaceAll("İ", "i")
    .replaceAll("Ö", "o")
    .replaceAll("Ç", "c")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ı", "i")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c");
};

export { accounts, TrToEn };
