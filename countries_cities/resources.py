# coding: utf-8

from json import loads

import vk_api

from flask_restful import Resource, request

vk = None


class VkAuth(Resource):

    def post(self):
        req = loads(request.data)
        vk_session = vk_api.VkApi(req['username'], req['password'])
        try:
            vk_session.auth()
        except vk_api.AuthError as error_msg:
            print(error_msg)
            return {'error': error_msg}, 405

        global vk
        vk = vk_session.get_api()
        return {'status': True}


class GetCountries(Resource):

    def get(self):
        global vk
        response = vk.database.getCountries(need_all=1, count=236)
        return response['items']


class GetCities(Resource):

    def get(self, id):
        global vk
        response = vk.database.getCities(country_id=id)
        return response['items']