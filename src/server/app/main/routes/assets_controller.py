from flask import request
from flask_restful import Resource
from ..services.assets_service import save_asset, get_assets, delete_asset


class Assets(Resource):
    def get(self):
        return get_assets()

    def post(self):
        data = request.json
        return save_asset(data)

    def delete(self):
        data = request.json
        return delete_asset(data)
