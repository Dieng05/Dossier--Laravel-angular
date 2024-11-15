export class Etudiant {

    

        id: number; // Identifiant de l'étudiant
      
        codeEtudiant: string; // Code de l'étudiant
        nom: string; // Nom de l'étudiant
        prenom: string; // Prénom de l'étudiant
        ine: string; // Identifiant National Étudiant (INE)
        email_ugb: string; // Adresse e-mail de l'étudiant à l'UGB
        date_naiss_etu: Date; // Date de naissance de l'étudiant
        lieu_naiss_etu: string; // Lieu de naissance de l'étudiant
        sexe: string; // Sexe de l'étudiant (exemple de type énuméré)
        adresse_etu: string; // Adresse de l'étudiant
        telephone_etu: string; // Numéro de téléphone de l'étudiant
      
        constructor() {
         
          this.id = 0;
          this.codeEtudiant = '';
          this.nom = '';
          this.prenom = '';
          this.ine = '';
          this.email_ugb = '';
          this.date_naiss_etu = new Date();
          this.lieu_naiss_etu = '';
          this.sexe = '';
          this.adresse_etu = '';
          this.telephone_etu = '';
        }
}
      

