from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import User, Campaign, UserSerializer, CampaignSerializer, UserCreateSerializer
from rest_framework.permissions import IsAuthenticated

"""
The ContactsView will contain the logic on how to:
 GET, POST, PUT or delete the contacts
"""


# Esta clase crea los metodos para las campanias, post, get, put y delete
class Register(APIView):

    def post(self, request):
        serializer = UserCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CampaignView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request):
        print(' XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ', request.user.id)
        holder = request.data
        holder['fk_user'] = request.user.id
        serializer = CampaignSerializer(data=holder)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, campaign_id=None):
        if campaign_id is not None:
            campaign = Campaign.objects.get(id=campaign_id)
            serializer = CampaignSerializer(campaign, many=False)
            return Response(serializer.data)
        else:
            campaigns = Campaign.objects.all()
            serializer = CampaignSerializer(campaigns, many=True)
            return Response(serializer.data)

    def delete(self, request, campaign_id):
        campaign = Campaign.objects.get(id=campaign_id)
        campaign.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Esta clase crea los metodos para los usuarios, post, get, put y delete


class UsersView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, user_id=None):

        if user_id is not None:
            user = User.objects.get(id=user_id)
            serializer = UserSerializer(user, many=False)
            return Response(serializer.data)
        else:
            users = User.objects.all()
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data)

    def post(self, request):

        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, user_id):

        user = User.objects.get(id=user_id)
        user.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
