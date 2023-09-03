from rest_framework.routers import SimpleRouter

from .views import ClinicViews


router = SimpleRouter(trailing_slash=False)

router.register(r'clinic', ClinicViews, basename='clinic')

urlpatterns = []