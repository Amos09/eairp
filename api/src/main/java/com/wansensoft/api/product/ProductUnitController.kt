/*
 * Copyright 2023-2033 WanSen AI Team, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance
 * with the License. A copy of the License is located at
 *
 * http://opensource.wansenai.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
package com.wansensoft.api.product

import com.baomidou.mybatisplus.extension.plugins.pagination.Page
import com.wansensoft.dto.product.AddOrUpdateProductUnitDTO
import com.wansensoft.dto.product.ProductUnitQueryDTO
import com.wansensoft.dto.product.ProductUnitStatusDTO
import com.wansensoft.service.product.ProductUnitService
import com.wansensoft.utils.response.Response
import com.wansensoft.vo.product.ProductUnitVO
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/product/unit")
class ProductUnitController(private val productUnitService: ProductUnitService) {

    @PostMapping("/list")
    fun productUnitList(@RequestBody productUnitQuery: ProductUnitQueryDTO): Response<Page<ProductUnitVO>> {
        return productUnitService.productUnitList(productUnitQuery)
    }

    @PostMapping("/addOrUpdate")
    fun addOrUpdateProductUnit(@RequestBody productUnit: AddOrUpdateProductUnitDTO): Response<String> {
        return productUnitService.addOrUpdateProductUnit(productUnit)
    }

    @DeleteMapping("/deleteBatch")
    fun deleteProductUnit(@RequestParam ids: List<Long>): Response<String> {
        return productUnitService.deleteProductUnit(ids)
    }

    @PostMapping("/updateUnitStatus")
    fun updateUnitStatus(@RequestBody productUnitStatus: ProductUnitStatusDTO): Response<String> {
        return productUnitService.updateUnitStatus(productUnitStatus)
    }
}