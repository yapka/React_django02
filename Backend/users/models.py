from django.db import models

class User(models.Model):
    # Champs pour les informations personnelles
    prenom = models.CharField(max_length=30)
    nom = models.CharField(max_length=30)
    date_de_naissance = models.DateField()
    lieu_de_naissance = models.CharField(max_length=100)
    nom_du_pere = models.CharField(max_length=50)
    nom_de_la_mere = models.CharField(max_length=50)
    
    # Champs pour les informations d'identité
    numero_de_piece_identite = models.CharField(max_length=50)
    date_expiration_piece_identite = models.DateField()
    
    # Champ pour le fichier uploadé
    file = models.FileField(upload_to='uploads/', null=True, blank=True)

    def __str__(self):
        return f"{self.prenom} {self.nom}"
