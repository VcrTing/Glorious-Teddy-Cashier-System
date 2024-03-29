package com.glorious.model.form.custom;

import com.glorious.model.define.enums.EnumSex;
import com.glorious.model.entity.custom.Customer;
import com.glorious.utils.utils.basic.QTypeUtil;
import com.glorious.utils.utils.bean.QBeanUtil;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Optional;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerForm {

    private Long id;

    @Email
    @Length(min = 2, max = 250, message = "郵箱长度介于 {min} - {max} 之间")
    private String email;

    @NotNull(message = "姓名不为空")
    @Length(min = 2, max = 60, message = "姓名长度介于 {min} - {max} 之间")
    private String name;

    @NotNull(message = "电话号码不为空")
    @Length(min = 4, max = 11, message = "电话号码长度介于 {min} - {max} 之间")
    private String phone_no;

    @NotNull(message = "等级未选择")
    private Long member_level;

    private EnumSex sex;
    private Date birthdate;
    private Date create_date;

    @NotNull(message = "会员通讯地址不为空")
    @Length(min = 4, max = 250, message = "会员通讯地址长度介于 {min} - {max} 之间")
    private String address;

    private String remarks;

    public static Optional<Customer> toEntity(CustomerForm form) {
        Optional<Customer> ops = Optional.ofNullable(QBeanUtil.convert(form, Customer.class));
        ops.ifPresent(one -> {
            if (QTypeUtil.isLong(form.getId())) one.setId(form.getId());
            one.setCustomer_level_sql_id(form.getMember_level());
        });
        return ops;
    }
}
