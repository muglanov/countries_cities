# coding: utf-8

from countries_cities import app, api
from countries_cities.resources import VkAuth, GetCountries, GetCities
from countries_cities import views


def route_resources():
    api.add_resource(VkAuth, '/auth')
    api.add_resource(GetCountries, '/countries')
    api.add_resource(GetCities, '/cities/<int:id>')


def run_api():
    app.run(debug=True)


if __name__ == '__main__':
    route_resources()
    run_api()
