from rest_framework import routers

from .viewsets import HorarioViewSet

router = routers.SimpleRouter() #define las rutas get,post,put,delete
router.register('horarios', HorarioViewSet)

urlpatterns = router.urls
