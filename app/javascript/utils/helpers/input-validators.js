import Validators from "./validators";
import { isEmpty } from "../utilities";

export default {
  max: limit => value => {
    let result = Validators.max(limit)(value);
    return (
      result ||
      "El campo no debe superar los " + limit + " caracteres de largo."
    );
  },
  min: limit => value => {
    let result = Validators.min(limit)(value);
    return (
      result ||
      "El campo debe tener al menos " + limit + " caracteres de largo."
    );
  },
  maxNumber: limit => value => {
    let result = Validators.maxNumber(limit)(value);
    return result || "El maximo numero permitido es " + limit;
  },
  minNumber: limit => value => {
    let result = Validators.minNumber(limit)(value);
    return result || "El minimo numero permito es " + limit;
  },
  required: value => {
    let result = Validators.required(value);
    return result || "El campo es requerido.";
  },
  number: value => {
    if (isEmpty(value)) return true;

    let result = Validators.number(value);
    return result || "Este campo debe ser un número.";
  },
  trueNumber: value => {
    if (isEmpty(value)) return true;

    let result = Validators.trueNumber(value);
    return result || "Este campo debe ser un numero.";
  },
  positiveNum: value => {
    if (isEmpty(value)) return true;

    let result = Validators.positiveNum(value);
    return result || "El numero debe ser positivo.";
  },
  arrayNotEmpty: array => (value, message) => {
    let result = Validators.arrayNotEmpty(array)(value, message);
    return (
      result ||
      message ||
      "La lista no debe estar vacia. Por favor agrega algo."
    );
  },
  validEmail: value => {
    if (value) {
      let result = Validators.validEmail(value);
      return result || "Correo invalido.";
    } else {
      return true;
    }
  },
  sameAs: (sameAsValue, field) => value => {
    let result = Validators.sameAs(sameAsValue)(value);
    return result || "El campo debe ser igual a " + field;
  },
  rangeCommaSeparatedNumbers: (min, max) => value => {
    let result = Validators.rangeCommaSeparatedNumbers(min, max)(value);
    return (
      result || "Los numeros listados deben estar entre" + min + " y " + max
    );
  },
  validWebsite: regex => value => {
    if (value) {
      let result = Validators.validWebsite(value, regex);
      return result || "Dirección web inválida.";
    } else {
      return true;
    }
  },
  validPhone: value => {
    if (value) {
      let result = Validators.validPhone(value, null);
      return (
        result ||
        "Ingresa un número de telefono válido. Utiliza el formato +506XXXXXXX"
      );
    } else {
      return true;
    }
  }
};
