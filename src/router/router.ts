import express from 'express'
import ProvinceController from '../controller/province.controller'
const router = express.Router()
router.get('/province', ProvinceController.getProvinces)
router.get('/province/:id', ProvinceController.getDistricts)
router.get('/district/:id', ProvinceController.getWard)

export default router
