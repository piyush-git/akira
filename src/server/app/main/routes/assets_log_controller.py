from flask import request
from flask_restful import Resource
from ..services.asset_log_service import save_log


class AssetsLog(Resource):
    def get(self):
        pass

    def post(self):
        data = request.json
        return save_log(data)
