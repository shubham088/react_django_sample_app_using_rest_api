from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
# todo/views.py

from django.shortcuts import render
from rest_framework import viewsets            
from .serializers import TodoSerializer      # a
from .models import Todo                     # 

class TodoView(viewsets.ModelViewSet):       # add this
  serializer_class = TodoSerializer          # add this
  queryset = Todo.objects.all()              # add this
