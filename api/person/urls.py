from rest_framework.routers import SimpleRouter

from .views import PersonViews, AddressViews, CellphoneViews


router = SimpleRouter(trailing_slash=False)

router.register(r'person', PersonViews, basename='person')
router.register(r'cellphone', CellphoneViews, basename='cellphone')
router.register(r'address', AddressViews, basename='address')

urlpatterns = []