from django.conf.urls import include, url
from django.urls import path
from rest_framework.routers import DefaultRouter

from server import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'series', views.SeriesViewSet)
router.register(r'seriestemplate', views.SeriesTemplateViewSet)

# The API URLs are now determined automatically by the router.
# Additionally, we include the login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    path('data/', views.Data.as_view()),
    path('setting/', views.Setting.as_view()),
    path('log/', views.Log.as_view()),
]
