from django.shortcuts import render
from accounts.serializers import UserSerializer
# Create your views here.
from rest_framework import generics
from django.contrib.auth.models import User


class RegisterView(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer