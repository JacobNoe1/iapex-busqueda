export interface Paciente {
    persona?: Persona;
}
export interface Buscador {
    nombre?:    string;
    apellidos?: string;
    telefono?: string;
}

export interface Persona {
    nombreB?:    string;
    apellidosB?: string;
    telefonoB?: string;
    nombre?:           string;
    apellido_paterno?: string;
    apellido_materno?: string;
    sexo?:             string;
    estatura?:         number;
    edad?:             number;
    peso?:             number;
    particularidades?: Particularidades;
    contextura?:       string;
    cara?:             Cara;
    cabello?:          Cabello;
    ojos?:             Ojos;
    nariz?:            string;
    boca?:             string;
    labios?:           string;
    barba?:            Barba;
    bigote?:           Bigote;
    orejas?:           string;
}

export interface Barba {
    existe?:         string;
    capilaridad?:    string;
    estilo?:        string;
    longitud?:       string;
    particularidad?: string;
}

export interface Bigote {
    existe?:         string;
    capilaridad?:    string;
    longitud?:       string;
    particularidad?: string;
}

export interface Cabello {
    color?:          string;
    longitud?:       string;
    forma?:          string;
    calvicie?:       string;
    particularidad?: string;
}

export interface Cara {
    contorno?:       string;
    color?:          string;
    particularidad?: string;
}

export interface Ojos {
    color?:          string;
    tamano?:         string;
    particularidad?: string;
}

export interface Particularidades {
    tatuajes?:         string;
    cicatrices?:       string;
    falta_extremidad?: string;
}
