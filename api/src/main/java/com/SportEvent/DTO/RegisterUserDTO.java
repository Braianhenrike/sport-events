package com.SportEvent.DTO;


import org.springframework.validation.annotation.Validated;

import com.SportEvent.enums.UserRole;

@Validated
public record RegisterUserDTO(String login, String password, String phone, UserRole role) {

}
