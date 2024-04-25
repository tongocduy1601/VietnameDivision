import fs from 'fs'
import { Province, District, Ward, ProvinceSchema } from './type/province'
import csv from 'csv-parser'
class ProvinceService {
  private readonly dataFilePath = './src/assets/province.csv'
  private readonly provinceSchema: ProvinceSchema
  constructor() {
    this.provinceSchema = this.readCSV()
  }
  getProvinces() {
    const provinces = Array.from(this.provinceSchema.divisions.values())
    return provinces
  }

  getDistricts(provinceId: string) {
    const districts = this.provinceSchema.provinces.get(provinceId)
    return Array.from(districts?.values() || [])
  }

  getWards(districtId: string) {
    const wards = this.provinceSchema.districts.get(districtId)
    return Array.from(wards?.values() || [])
  }

  private readCSV(): ProvinceSchema {
    const divisions: Map<string, Province> = new Map()
    const provinces: Map<string, Map<string, District>> = new Map()
    const districts: Map<string, Map<string, Ward>> = new Map()
    fs.createReadStream(this.dataFilePath)
      .pipe(csv())
      .on('data', (row) => {
        const ward: Ward = {
          name: row['ward'],
          code: row['wardCode'],
        }
        const district: District = {
          name: row['district'],
          code: row['districtCode'],
        }
        const province: Province = {
          name: row['province'],
          code: row['provinceCode'],
        }
        divisions.set(province.code, province)
        if (provinces.has(province.code)) {
          const districtMap = provinces.get(province.code)
          if (districtMap) {
            districtMap.set(district.code, district)
          } else {
            provinces.set(province.code, new Map([[district.code, district]]))
          }
        } else {
          provinces.set(province.code, new Map([[district.code, district]]))
        }

        if (districts.has(district.code)) {
          const wardMap = districts.get(district.code)
          if (wardMap) {
            wardMap.set(ward.code, ward)
          } else {
            districts.set(district.code, new Map([[ward.code, ward]]))
          }
        } else {
          districts.set(district.code, new Map([[ward.code, ward]]))
        }
      })
      .on('end', () => {
        console.log('CSV file successfully processed')
      })
    return {
      divisions,
      provinces,
      districts,
    }
  }
}

export default new ProvinceService()
