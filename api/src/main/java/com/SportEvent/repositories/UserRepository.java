package com.SportEvent.repositories;

import com.SportEvent.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
	
	Optional<User> findById(Long id);
	UserDetails findByLogin(String login);
}
