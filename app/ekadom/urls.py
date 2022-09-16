from django.urls import path
from .views import main_page, ads_page, about_page, contacts_page

urlpatterns = [
    path('', main_page),
    path('ads', ads_page),
    path('about', about_page),
    path('contacts', contacts_page)
]
