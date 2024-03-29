package com.glorious.model.form.auth;

import com.glorious.model.define.enums.EnumBoolean;
import com.glorious.model.entity.sys.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SystemAuthRegisterForm {

    @NotNull(message = "用戶郵箱不為空")
    @Email(message = "用戶郵箱格式錯誤")
    @Length(min = 4, max = 250, message = "用戶郵箱应该处于 {min} 和 {max} 之间")
    private String identifier;

    @NotNull(message = "用戶密碼不為空")
    @Length(min = 4, max = 250, message = "用戶密碼应该处于 {min} 和 {max} 之间")
    private String password;

}
