from django.urls import path

from .views import DetailTodo, TodoListView

urlpatterns = [
    path('', TodoListView.as_view()),
    path('<int:pk>', DetailTodo.as_view()),
]