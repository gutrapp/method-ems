from rest_framework.routers import SimpleRouter
from django.urls import path

from .views import (
    ClinicViews,
    CellphoneViews,
    AddressViews,
    GetClinicMbtiTests,
    GetClinicPeople,
    GetClinicResults,
)


router = SimpleRouter(trailing_slash=False)

router.register(r"clinic", ClinicViews, basename="clinic")
router.register(r"cellphone", CellphoneViews, basename="cellphone")
router.register(r"address", AddressViews, basename="address")

urlpatterns = [
    path("clinic_specific/<int:id>/mbti", GetClinicMbtiTests.as_view()),
    path("clinic_specific/<int:id>/result", GetClinicResults.as_view()),
    path("clinic_specific/<int:id>/person", GetClinicPeople.as_view()),
]
