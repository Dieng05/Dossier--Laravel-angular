import { Annee } from "./annee.model";
import { Etudiant } from "./etudiant.model";
import { Formation } from "./formation.model";
import { Niveau } from "./niveau.model";

export class InfosStudent {
  id!: number;
  etudiant_id!: number;
  annee_id!: number;
  formation_id!: number;
  niveau_id!: number;
  created_at!: string;
  updated_at!: string;
  etudiant!: Etudiant | null;
  niveau!: Niveau | null;
  formation!: Formation | null;
  annee!: Annee | null;

  constructor() {
    this.id = 0;
    this.etudiant_id = 0;
    this.annee_id = 0;
    this.formation_id = 0;
    this.niveau_id = 0;
    this.created_at = "";
    this.updated_at = "";
    this.etudiant = null;
    this.niveau = null;
    this.formation = null;
    this.annee = null;
  }
}
