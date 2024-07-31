/*
 * Copyright 2024-2033 WanSen AI Team, Inc. All Rights Reserved.
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
package com.wansenai.bo.purchase;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.wansenai.utils.excel.ExcelExport;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseStorageExportEnBO {

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Long id;

    @ExcelExport(value = "Supplier")
    private String supplierName;

    @ExcelExport(value = "Receipt Number")
    private String receiptNumber;

    @ExcelExport(value = "Receipt Date")
    private LocalDateTime receiptDate;

    @ExcelExport(value = "Product Info")
    private String productInfo;

    @ExcelExport(value = "Operator")
    private String operator;

    @ExcelExport(value = "Quantity")
    private Integer productNumber;

    @ExcelExport(value = "Total Amount")
    private BigDecimal totalAmount;

    @ExcelExport(value = "Tax Include Amount")
    private BigDecimal taxIncludedAmount;

    @ExcelExport(value = "Payment Total Amount")
    private BigDecimal totalPaymentAmount;

    @ExcelExport(value = "This Payment Amount")
    private BigDecimal thisPaymentAmount;

    @ExcelExport(value = "This Arrears Amount")
    private BigDecimal thisArrearsAmount;

    @ExcelExport(value = "Status", kv = "0-Unaudited;1-Audited;2-In Review;3-Partial Purchase;4-Complete Purchase;")
    private Integer status;
}
