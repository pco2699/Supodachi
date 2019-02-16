FORMAT: 1A

# 周辺スポーツ施設 [/api/v1/map?location_name={location_name}&date={date}&event={event}]
## スポーツ施設に関する情報を取得 [GET]
対象地点の周辺にあるスポーツ施設の場所や施設予約状況などを取得する

- 200 OK
    - あとで書く

- 404 Not Found
    - あとで書く

- 400 BadRequest
    - パラメーターのフォーマットがおかしいとき

- 401 Unauthorized
    - 認証失敗時

+ Parameters
    + location_name: `渋谷` (string, required) - 地域名
    + date: `2019-02-03` (string, required) - 日付
    + event: `basketball` (string) - 種目

+ Request
        {
            "location_name" : "渋谷",
            "date" : "2019-02-03",
            "event" : "basketball",
        }

    + Headers

            Authorization: Bearer hogehoge

+ Response 200 (application/json)
    + Attributes
        + facilities (array[object])
            + object (Facility1)
            + object (Facility1)

+ Response 404

+ Response 401

+ Response 400

# Data Structures

## Facility1 (object)
+ basic_info (array[BasicInfo]) - 基本情報
+ location (array[Location]) - 位置情報
+ availabilities (array[Availabilities]) - 空き状況
+ cost (array[Cost]) - 利用料金
+ picture_url: `http://example.com/` (string) - イメージ

## Location (object)
+ lat: 35.679396 (number, required) - 緯度
+ lng: 139.711963 (number, required) - 経度

## Availabilities (array[object])
+ object (Availability1)
+ object (Availability2)
+ object (Availability3)

## Availability1 (object)
+ start: `8:30` (string) - 開始時刻
+ end: `10:30` (string) - 終了時刻
+ remaining_slots: `２コート` (string) - 残り枠

## Availability2 (object)
+ start: `12:30` (string) - 開始時刻
+ end: `14:30` (string) - 終了時刻
+ remaining_slots: `余裕あり` (string) - 残り枠

## Availability3 (object)
+ start: `14:30` (string) - 開始時刻
+ end: `16:30` (string) - 終了時刻
+ remaining_slots: `1コート` (string) - 残り枠

## BasicInfo (object)
+ name: `東京体育館` (string) - 施設名
+ group: `体育館` (string) - 施設分類
+ type: `室内` (string) - 施設区分

## Cost (object)
+ amount: 4500 (number, required) - 費用
+ unit_of_use: `午前（9:00～13:00）` (string) - 使用単位
