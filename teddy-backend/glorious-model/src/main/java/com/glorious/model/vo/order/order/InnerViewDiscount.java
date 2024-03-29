package com.glorious.model.vo.order.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InnerViewDiscount {
    // 优惠类别 名称
    private String type;
    // 优惠已扣除价格
    private BigDecimal discount_deduction;
}
