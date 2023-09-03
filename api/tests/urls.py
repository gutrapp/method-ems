from rest_framework.routers import SimpleRouter

from .views import MbtiViews, LifeViews, LoveLanguageViews, SelfKnowledgeViews


router = SimpleRouter(trailing_slash=False)

router.register(r'mbti', MbtiViews, basename='mbti')
router.register(r'life', LifeViews, basename='life')
router.register(r'lovelanguage', LoveLanguageViews, basename='lovelanguage')
router.register(r'selfknowledge', SelfKnowledgeViews, basename='selfknowledge')

urlpatterns = []

