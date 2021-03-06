from rest_framework import serializers
from .models import Chore, Image
from rest_framework.reverse import reverse
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model

UserModel = get_user_model()

class ChoreListSerializer(serializers.ModelSerializer):
    absolute_url = serializers.SerializerMethodField()

    class Meta:
        model=Chore
        fields = [
            'id',
            'task',
            'owner',
            'priority',
            'ch_image',
            'isComplete',
            'absolute_url',
        ]
    
    def get_absolute_url(self, obj):
        return reverse('chore_detail', args=(obj.pk,))

class ImageSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model: Image
        fields = ['id', 'chore', 'proof', 'uploaded_at']

class ChoreDetailSerializer(serializers.ModelSerializer):
    update = serializers.SerializerMethodField()
    delete = serializers.SerializerMethodField()
    chore_images = ImageSerializer(many=True, required=False)
    class Meta:
        model = Chore
        fields = [
            'id',
            'task',
            'owner',
            'priority',
            'ch_image',
            'isComplete',
            'chore_images',
            'update',
            'delete',
          ]

    def get_update(self, obj):
        return reverse('chore_update', args=(obj.pk,))

    def get_delete(self, obj):
        return reverse('chore_delete', args=(obj.pk,))

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user=UserModel.objects.create(
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        new_token = Token.objects.create(user=user)
        return user

    class Meta:
        model = get_user_model()
        fields = ['username', 'password']