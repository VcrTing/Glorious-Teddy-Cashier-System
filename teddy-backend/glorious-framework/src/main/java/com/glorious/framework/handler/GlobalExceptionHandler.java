package com.glorious.framework.handler;


import com.glorious.common.exception.QAuthException;
import com.glorious.common.exception.QLogicException;
import com.glorious.common.mvc.AjaxResult;
import com.glorious.common.utils.ExceptionTextUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.validation.BindException;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {


    /**
     * 自定义 异常
     */
    @ExceptionHandler(QAuthException.class)
    public AjaxResult handleAuthException(QAuthException e) {
        log.debug("自定义认证异常 = " + e.getMessage());
        return AjaxResult.error(e.getMessage());
    }
    @ExceptionHandler(QLogicException.class)
    public AjaxResult handleAuthException(QLogicException e) {
        log.debug("自定义代码逻辑异常 = " + e.getMessage());
        return AjaxResult.error(e.getMessage());
    }

    /**
     * 自定义验证异常
     */
    @ExceptionHandler(BindException.class)
    public AjaxResult handleBindException(BindException e) {
        log.debug("BindException 字段验证错误 = " + e.getLocalizedMessage());
        return AjaxResult.error(genValidErr(e.getBindingResult().getFieldErrors()).orElse("数据验证错误，请检查数据完整性"));
    }

    /**
     * spring 验证字段 异常
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public AjaxResult handleMethodArgument(MethodArgumentNotValidException e) {
        log.debug("MethodArgumentNotValidException 字段验证错误 = " + e.getLocalizedMessage());
        return AjaxResult.error(genValidErr(e.getBindingResult().getFieldErrors()).orElse("数据验证错误，请检查数据完整性"));
    }

    private Optional<String> genValidErr(List<FieldError> errors) {
        return errors.stream().map(DefaultMessageSourceResolvable::getDefaultMessage).filter(Objects::nonNull).findFirst();
    }

    /**
     * Servlet 相关异常
     */
    @ExceptionHandler(ServletException.class)
    public AjaxResult handierServletException(ServletException e, HttpServletRequest request) {
        log.error("请求地址'{}', 发生服务异常.", request.getRequestURI(), e);
        return AjaxResult.error(e.getMessage());
    }

    /**
     * 拦截未知的运行时异常
     */
    @ExceptionHandler(RuntimeException.class)
    public AjaxResult handleRuntimeException(RuntimeException e, HttpServletRequest request) {
        log.error("请求地址'{}',发生未知运行时异常.", request.getRequestURI(), e);
        return AjaxResult.error(ExceptionTextUtil.convertText(e.getMessage()));
    }

    /**
     * 系统异常
     */
    @ExceptionHandler(Exception.class)
    public AjaxResult handleException(Exception e, HttpServletRequest request) {
        log.error("请求地址'{}', 发生未知异常.", request.getRequestURI(), e);
        return AjaxResult.error(ExceptionTextUtil.convertText(e.getMessage()));
    }

    /**
     * 请求方式不支持
     */
    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public AjaxResult handleHttpRequestMethodNotSupported(HttpRequestMethodNotSupportedException e,
                                                          HttpServletRequest request) {
        log.error("请求地址'{}', 不支持'{}'请求", request.getRequestURI(), e.getMethod());
        return AjaxResult.error(e.getMessage());
    }
}
