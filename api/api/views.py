from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import User, ContactSerializer
from rest_framework.permissions import IsAuthenticated

"""
The ContactsView will contain the logic on how to:
 GET, POST, PUT or delete the contacts
"""
class ContactsView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, contact_id=None):

        if contact_id is not None:
            contact = User.objects.get(id=contact_id)
            serializer = ContactSerializer(contact, many=False)
            return Response(serializer.data)
        else:
            contacts = User.objects.all()
            serializer = ContactSerializer(contacts, many=True)
            return Response(serializer.data)

    def post(self, request):

        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request, contact_id):

        contact = User.objects.get(id=contact_id)
        contact.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
