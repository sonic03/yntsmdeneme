from django.shortcuts import render

# Create your views here.

def hakkimizda(request):
    return render (request, "hakkimizda.html")