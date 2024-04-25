import { NextFunction, Request, Response } from 'express'
import ProvinceService from '../service/province.service'

const ProvinceController = {
  getProvinces(req: Request, res: Response, next: NextFunction) {
    try {
      const provinces = ProvinceService.getProvinces()
      return res.status(200).json(provinces)
    } catch (error) {
      next(error)
    }
  },

  getDistricts(req: Request, res: Response, next: NextFunction) {
    try {
      const province = ProvinceService.getDistricts(req.params.id)
      return res.status(200).json(province)
    } catch (error) {
      next(error)
    }
  },

  getWard(req: Request, res: Response, next: NextFunction) {
    try {
      const districtId = req.params.id
      const wards = ProvinceService.getWards(districtId)
      return res.status(200).json(wards)
    } catch (error) {
      next(error)
    }
  },
}

export default ProvinceController
