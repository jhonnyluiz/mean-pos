export class Localizacao {

  constructor(public lat?: Number,
              public lon?: Number,
              public org?: String,
              public query?: String,
              public dataHora?: Date,
              public country?: String,
              public dominio?: String,
              public _id?: String) {}
}
