package com.SportEvents.DTO;

public record UserDTO(Long id, String nome, String dataNascimento, String sexo, String email, String equipe, String cidade, boolean kit, String tamanhoCamiseta) {
}