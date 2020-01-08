from app.main.models.asset_log import Asset_Log
from app.main import db


def get_logs():
    pass


def save_changes(data):
    db.session.add(data)
    db.session.commit()


def save_log(data):
    new_log = Asset_Log(item_uid=data.get("item_uid"), date_of_assignment=data.get(
        "date_of_assignment"), expected_date_of_return=data.get("expected_date_of_return"))
    save_changes(new_log)

    response_object = {
        "comment": "Asset Assigned Successfully",
        "data": {}
    }

    return response_object, 201
