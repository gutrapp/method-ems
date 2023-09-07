from rest_framework.routers import SimpleRouter

from .views import PersonViews


router = SimpleRouter(trailing_slash=False)

router.register(r'person', PersonViews, basename='person')

urlpatterns = []