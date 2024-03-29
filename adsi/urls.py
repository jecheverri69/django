from django.urls import path

from . import views

app_name = 'adsi'
urlpatterns = [
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),

    path('', views.index, name='inicio'),

    path('crearAprendiz/', views.aprendizFormulario, name='crearAprendiz'),
    path('guardarAprendiz/', views.aprendizGuardar, name='guardarAprendiz'),
    path('listarAprendices/', views.aprendizListado, name='listarAprendices'),
    path('eliminarAprendiz/<int:id>', views.aprendizEliminar, name='eliminarAprendiz'),
    path('editarAprendices/<int:id>', views.aprendizFormularioEditar, name='editarAprendices'),
    path('actualizarAprendiz/', views.actualizarAprendiz, name='actualizarAprendiz'),
    path('verAprendiz/<int:id>', views.verAprendiz, name='verAprendiz'),
    path('verAprendizJSON/<int:id>', views.verAprendizJSON, name='verAprendizJSON'),

]