# VietNamProvince

This is a simple expressjs server that serves a list of provinces in Vietnam. The data is stored in a csv file and is served as an API.
The data is retrieved from [https://danhmuchanhchinh.gso.gov.vn/](https://danhmuchanhchinh.gso.gov.vn/) and stored in a csv file.

If you want to update the data, you can convert the data from the website to csv format and replace the first row with the column names corresponding to the data in the csv file.

#### Requirements

ts-node

#### Installation

npm install

#### Run

```
npm start
```

#### Build

```
npm run build

```

#### Api Endpoints

1. Get all provinces
   This endpoint returns a list of all provinces in Vietnam.

```
GET /api/v1/provinces
```

Output example

```
[
    {
        "name": "Thành phố Hà Nội",
        "code": "01"
    },
    {
        "name": "Tỉnh Hà Giang",
        "code": "02"
    },
        {
        "name": "Tỉnh Cao Bằng",
        "code": "04"
    },
    {
        "name": "Tỉnh Bắc Kạn",
        "code": "06"
    },
    {
        "name": "Tỉnh Tuyên Quang",
        "code": "08"
    },
    ...
]
```

2. Get all district of province by id

```

GET /api/v1/provinces/:id

```

This endpoint returns list districts of a province by province id.

Output example

```
[
    {
        "name": "Quận Ba Đình",
        "code": "001"
    },
    {
        "name": "Quận Hoàn Kiếm",
        "code": "002"
    },
    {
        "name": "Quận Tây Hồ",
        "code": "003"
    },
    {
        "name": "Quận Long Biên",
        "code": "004"
    }
    ...
]

```

3. Get all wards of district by district id
   This endpoint returns list wards of a district by district id.

```
GET /api/v1/districts/:id
```

Output

```
[
    {
        "name": "Phường Phúc Xá",
        "code": "00001"
    },
    {
        "name": "Phường Trúc Bạch",
        "code": "00004"
    },
    {
        "name": "Phường Vĩnh Phúc",
        "code": "00006"
    },
    {
        "name": "Phường Cống Vị",
        "code": "00007"
    },
    ...
]
```
