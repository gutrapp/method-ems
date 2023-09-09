export type Address = {
  cep: string;
  number: number;
  street: string;
  neighboorhood: string;
  city: string;
  state:
    | "SC"
    | "RS"
    | "PR"
    | "SP"
    | "RJ"
    | "DF"
    | "MT"
    | "MS"
    | "GO"
    | "AC"
    | "AL"
    | "AP"
    | "AM"
    | "BA"
    | "CE"
    | "ES"
    | "MG"
    | "MA"
    | "PA"
    | "PB"
    | "PE"
    | "PI"
    | "RN"
    | "RO"
    | "RR"
    | "SE"
    | "TO";
  region: "SU" | "NO" | "CO" | "SE" | "NE";
};
