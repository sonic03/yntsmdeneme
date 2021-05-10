from django.shortcuts import render

# Create your views here.

def hakkimizda(request):
    return render (request, "hakkimizda.html")

def index(request):
    return render (request, "index.html")

def kvkk(request):
    return render(request,"kvkk.html")