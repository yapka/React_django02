from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'prenom',
            'nom',
            'date_de_naissance',
            'lieu_de_naissance',
            'nom_du_pere',
            'nom_de_la_mere',
            'numero_de_piece_identite',
            'date_expiration_piece_identite',
            'file'
        ]
