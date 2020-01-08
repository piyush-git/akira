from app.main.models.asset import Asset
from app.main import db


def get_assets():
    pass


def save_changes(data):
    db.session.add(data)
    db.session.commit()


def save_asset(data):
    new_asset = Asset(serial_number=data.get("serial_number"), brand=data.get(
        "brand"), category_id=data.get("category_id"), model=data.get("model"), cost=data.get("cost"), item_name=data.get("item_name"), picture=data.get("picture"))
    save_changes(new_asset)
    response_object = {
        "comment": "Asset Added Successfully",
        "data": {}
    }

    return response_object, 201


def delete_asset(data):
    db.engine.execute("DELETE FROM assets WHERE item_uid = %s",
                      (data.get("item_uid"),))
    db.session.commit()

    response_object = {
        "comment": "Assets Deleted Successfully"
    }

    return response_object, 204
