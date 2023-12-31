from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from person.urls import router as person_router
from clinic.urls import router as clinic_router
from result.urls import router as result_router
from tests.urls import router as tests_router
from account.urls import urlpatterns as account_router
from person.urls import urlpatterns as person_router_urls
from result.urls import urlpatterns as result_router_urls
from clinic.urls import urlpatterns as clinic_router_urls
from tests.urls import urlpatterns as tests_router_urls

routes = []
routes.extend(person_router.urls)
routes.extend(clinic_router.urls)
routes.extend(result_router.urls)
routes.extend(tests_router.urls)
routes.extend(account_router)
routes.extend(person_router_urls)
routes.extend(result_router_urls)
routes.extend(clinic_router_urls)
routes.extend(tests_router_urls)


urlpatterns = [path("admin/", admin.site.urls), path("api/", include(routes))]

urlpatterns += staticfiles_urlpatterns()
