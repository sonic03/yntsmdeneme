"""deneme URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django import views
from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.views import defaults as default_views
from django.views.generic import RedirectView, TemplateView
from sss.views import hakkimizda

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    
    url(r'^', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^hakkimizda', hakkimizda, name='hakkimizda'),
    

]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
