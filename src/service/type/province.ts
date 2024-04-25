type Province = {
  name: string
  code: string
  districts?: District[]
}
type District = {
  name: string
  code: string
  wards?: Ward[]
}

type Ward = {
  name: string
  code: string
}
type ProvinceSchema = {
  divisions: Map<string, Province>
  provinces: Map<string, Map<string, District>>
  districts: Map<string, Map<string, Ward>>
}
export { Province, District, Ward, ProvinceSchema }
