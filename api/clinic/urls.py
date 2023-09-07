from rest_framework.routers import SimpleRouter

from .views import ClinicViews, CellphoneViews, AddressViews


router = SimpleRouter(trailing_slash=False)

router.register(r'clinic', ClinicViews, basename='clinic')
router.register(r'cellphone', CellphoneViews, basename='cellphone')
router.register(r'address', AddressViews, basename='address')

urlpatterns = []