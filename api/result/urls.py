from rest_framework.routers import SimpleRouter

from .views import ResultViews


router = SimpleRouter(trailing_slash=False)

router.register(r'result', ResultViews, basename='result')

urlpatterns = []