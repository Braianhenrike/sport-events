package com.SportEvent.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.SportEvent.repositories.UserRepository;

@Service
public class AuthorizationsService implements UserDetailsService {
	
	@Autowired
	UserRepository repository;

	@Override
	public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
		return repository.findByLogin(login);
	}

}